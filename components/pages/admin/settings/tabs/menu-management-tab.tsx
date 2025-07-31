'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MenuItem, MenuItemFormData } from '@/types/admin/admin-settings';
import { Edit, Globe, Home, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const initialMenuItems: MenuItem[] = [
  {
    id: 1,
    label: 'Strona główna',
    url: '/',
    position: 'header',
    order: 1,
    active: true,
    parent: null,
    target: '_self',
  },
  {
    id: 2,
    label: 'O nas',
    url: '/o-nas',
    position: 'header',
    order: 2,
    active: true,
    parent: null,
    target: '_self',
  },
  {
    id: 8,
    label: 'BIP',
    url: '/bip',
    position: 'footer',
    order: 1,
    active: true,
    parent: null,
    target: '_blank',
  },
];
const initialMenuItemFormData: MenuItemFormData = {
  label: '',
  url: '',
  position: 'header',
  order: 1,
  active: true,
  parent: null,
  target: '_self',
};

export default function MenuManagementTab() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [isAddMenuItemOpen, setIsAddMenuItemOpen] = useState(false);
  const [isEditMenuMode, setIsEditMenuMode] = useState(false);
  const [editingMenuId, setEditingMenuId] = useState<number | null>(null);
  const [selectedMenuPositionFilter, setSelectedMenuPositionFilter] = useState('all');
  const [menuItemFormData, setMenuItemFormData] =
    useState<MenuItemFormData>(initialMenuItemFormData);

  const resetMenuForm = () => {
    setMenuItemFormData(initialMenuItemFormData);
    setIsEditMenuMode(false);
    setEditingMenuId(null);
  };
  const isMenuFormValid = () =>
    menuItemFormData.label.trim() !== '' && menuItemFormData.url.trim() !== '';

  const handleAddMenuItem = () => {
    if (!isMenuFormValid()) return;
    if (isEditMenuMode && editingMenuId) {
      setMenuItems(
        menuItems.map(item =>
          item.id === editingMenuId ? { ...menuItemFormData, id: editingMenuId } : item
        )
      );
    } else {
      setMenuItems([...menuItems, { ...menuItemFormData, id: Date.now() }]);
    }
    setIsAddMenuItemOpen(false);
    resetMenuForm();
  };
  const handleEditMenuItem = (item: MenuItem) => {
    setMenuItemFormData({
      label: item.label,
      url: item.url,
      position: item.position,
      order: item.order,
      active: item.active,
      parent: item.parent,
      target: item.target,
    });
    setIsEditMenuMode(true);
    setEditingMenuId(item.id);
    setIsAddMenuItemOpen(true);
  };
  const handleDeleteMenuItem = (itemId: number) =>
    setMenuItems(menuItems.filter(item => item.id !== itemId));
  const handleToggleMenuItemStatus = (itemId: number) =>
    setMenuItems(
      menuItems.map(item => (item.id === itemId ? { ...item, active: !item.active } : item))
    );
  const handleMoveMenuItem = (itemId: number, direction: 'up' | 'down') => {
    /* ... move logic ... */ console.log('Move', itemId, direction);
  };

  const getParentMenuItems = () =>
    menuItems.filter(item => item.parent === null && item.position === menuItemFormData.position);
  const filteredMenuItems = menuItems.filter(
    item => selectedMenuPositionFilter === 'all' || item.position === selectedMenuPositionFilter
  );

  const renderMenuList = (position: 'header' | 'footer') => (
    <div className="space-y-3">
      {filteredMenuItems
        .filter(item => item.position === position)
        .sort((a, b) => a.order - b.order)
        .map(item => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-3 border rounded-lg ${
              item.parent ? 'ml-6 border-dashed' : ''
            } ${!item.active ? 'opacity-50' : ''}`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex flex-col gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMoveMenuItem(item.id, 'up')}
                  className="h-4 w-4 p-0 text-gray-400 hover:text-gray-600"
                >
                  ↑
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMoveMenuItem(item.id, 'down')}
                  className="h-4 w-4 p-0 text-gray-400 hover:text-gray-600"
                >
                  ↓
                </Button>
              </div>
              <div>
                <h4 className="font-medium">
                  {item.label}{' '}
                  <Badge variant={item.active ? 'default' : 'secondary'}>
                    {item.active ? 'Aktywna' : 'Nieaktywna'}
                  </Badge>
                </h4>
                <p className="text-sm text-gray-500">
                  URL: {item.url} | Kolejność: {item.order}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleToggleMenuItemStatus(item.id)}
              >
                {item.active ? 'Dezaktywuj' : 'Aktywuj'}
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleEditMenuItem(item)}>
                <Edit className="h-4 w-4" />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Usunąć pozycję menu?</AlertDialogTitle>
                    <AlertDialogDescription>
                      "{item.label}" zostanie usunięta.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Anuluj</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => handleDeleteMenuItem(item.id)}
                    >
                      Usuń
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      {filteredMenuItems.filter(item => item.position === position).length === 0 && (
        <p className="text-center text-gray-500 py-4">Brak pozycji menu.</p>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Zarządzanie menu</h2>
          <p className="text-gray-600">Zarządzaj pozycjami w nagłówku i stopce</p>
        </div>
        <AlertDialog
          open={isAddMenuItemOpen}
          onOpenChange={(open: boolean) => {
            setIsAddMenuItemOpen(open);
            if (!open) resetMenuForm();
          }}
        >
          <AlertDialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Dodaj pozycję
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[500px]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {isEditMenuMode ? 'Edytuj pozycję' : 'Dodaj pozycję'}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="grid gap-4 py-4">
              {/* Menu Item Form Fields (condensed) */}
              <div className="grid gap-2">
                <Label htmlFor="menu-label">Etykieta *</Label>
                <Input
                  id="menu-label"
                  value={menuItemFormData.label}
                  onChange={e =>
                    setMenuItemFormData({ ...menuItemFormData, label: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="menu-url">URL *</Label>
                <Input
                  id="menu-url"
                  value={menuItemFormData.url}
                  onChange={e => setMenuItemFormData({ ...menuItemFormData, url: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="menu-position">Pozycja *</Label>
                  <Select
                    value={menuItemFormData.position}
                    onValueChange={value =>
                      setMenuItemFormData({
                        ...menuItemFormData,
                        position: value as 'header' | 'footer',
                        parent: null,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="header">Nagłówek</SelectItem>
                      <SelectItem value="footer">Stopka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="menu-target">Cel</Label>
                  <Select
                    value={menuItemFormData.target}
                    onValueChange={value =>
                      setMenuItemFormData({
                        ...menuItemFormData,
                        target: value as '_self' | '_blank',
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="_self">Ta sama karta</SelectItem>
                      <SelectItem value="_blank">Nowa karta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="menu-parent">Nadrzędny</Label>
                <Select
                  value={menuItemFormData.parent?.toString() || 'none'}
                  onValueChange={value =>
                    setMenuItemFormData({
                      ...menuItemFormData,
                      parent: value === 'none' ? null : Number(value),
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Brak</SelectItem>
                    {getParentMenuItems().map(item => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="menu-order">Kolejność</Label>
                <Input
                  id="menu-order"
                  type="number"
                  min="1"
                  value={menuItemFormData.order}
                  onChange={e =>
                    setMenuItemFormData({ ...menuItemFormData, order: Number(e.target.value) || 1 })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="menu-active"
                  checked={menuItemFormData.active}
                  onCheckedChange={checked =>
                    setMenuItemFormData({ ...menuItemFormData, active: !!checked })
                  }
                />
                <Label htmlFor="menu-active">Aktywna</Label>
              </div>
            </div>
            <AlertDialogFooter>
              <Button type="submit" onClick={handleAddMenuItem} disabled={!isMenuFormValid()}>
                {isEditMenuMode ? 'Zapisz' : 'Dodaj'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Card>
        <CardContent className="pt-6">
          <Label htmlFor="position-filter">Filtruj:</Label>
          <Select value={selectedMenuPositionFilter} onValueChange={setSelectedMenuPositionFilter}>
            <SelectTrigger className="w-full sm:w-[200px] mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Wszystkie</SelectItem>
              <SelectItem value="header">Nagłówek</SelectItem>
              <SelectItem value="footer">Stopka</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-blue-600" />
              Menu nagłówka
            </CardTitle>
          </CardHeader>
          <CardContent>{renderMenuList('header')}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-600" />
              Menu stopki
            </CardTitle>
          </CardHeader>
          <CardContent>{renderMenuList('footer')}</CardContent>
        </Card>
      </div>
    </div>
  );
}
