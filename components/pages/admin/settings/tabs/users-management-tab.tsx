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

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, UserFormData, UserRoleDefinition } from '@/types/user';

import { format } from 'date-fns';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const initialUsers: User[] = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Kowalski',
    email: 'jan.kowalski@wfos.szczecin.pl',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-15 14:30',
    createdAt: '2023-06-15',
  },
  {
    id: 2,
    firstName: 'Anna',
    lastName: 'Nowak',
    email: 'anna.nowak@wfos.szczecin.pl',
    role: 'editor',
    status: 'active',
    lastLogin: '2024-01-14 09:15',
    createdAt: '2023-08-20',
  },
];

const userRoles: UserRoleDefinition[] = [
  { value: 'admin', label: 'Administrator', description: 'Pełny dostęp do systemu' },
  { value: 'editor', label: 'Redaktor', description: 'Może zarządzać treścią i programami' },
  { value: 'user', label: 'Użytkownik', description: 'Podstawowy dostęp do systemu' },
];

const initialUserFormData: UserFormData = {
  firstName: '',
  lastName: '',
  email: '',
  role: 'user',
  status: 'active',
  password: '',
  confirmPassword: '',
};

export default function UsersManagementTab() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isEditUserMode, setIsEditUserMode] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all');
  const [userFormData, setUserFormData] = useState<UserFormData>(initialUserFormData);

  const resetUserForm = () => {
    setUserFormData(initialUserFormData);
    setIsEditUserMode(false);
    setEditingUserId(null);
  };
  const isUserFormValid = () => {
    /* ... validation logic ... */ return true;
  }; // Simplified

  const handleAddUser = () => {
    if (!isUserFormValid()) return;
    if (isEditUserMode && editingUserId) {
      setUsers(
        users.map(u =>
          u.id === editingUserId
            ? {
                ...u,
                ...userFormData,
                id: editingUserId,
                lastLogin: u.lastLogin,
                createdAt: u.createdAt,
              }
            : u
        )
      );
    } else {
      setUsers([
        ...users,
        {
          ...userFormData,
          id: Date.now(),
          lastLogin: 'Nigdy',
          createdAt: format(new Date(), 'yyyy-MM-dd'),
        },
      ]);
    }
    setIsAddUserOpen(false);
    resetUserForm();
  };
  const handleEditUser = (user: User) => {
    setUserFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      status: user.status,
      password: '',
      confirmPassword: '',
    });
    setIsEditUserMode(true);
    setEditingUserId(user.id);
    setIsAddUserOpen(true);
  };
  const handleDeleteUser = (userId: number) => setUsers(users.filter(u => u.id !== userId));
  const handleToggleUserStatus = (userId: number) =>
    setUsers(
      users.map(u =>
        u.id === userId ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u
      )
    );

  const getRoleVariant = (role: string) =>
    (({ admin: 'destructive', editor: 'default', user: 'secondary' }[role] || 'secondary') as any);
  const getStatusVariant = (status: string) => (status === 'active' ? 'default' : 'outline') as any;

  const filteredUsers = users.filter(
    user =>
      (user.firstName.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(userSearchTerm.toLowerCase())) &&
      (selectedRoleFilter === 'all' || user.role === selectedRoleFilter) &&
      (selectedStatusFilter === 'all' || user.status === selectedStatusFilter)
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Użytkownicy</h2>
          <p className="text-gray-600">Zarządzaj kontami i uprawnieniami</p>
        </div>
        <AlertDialog
          open={isAddUserOpen}
          onOpenChange={(open: boolean) => {
            setIsAddUserOpen(open);
            if (!open) resetUserForm();
          }}
        >
          <AlertDialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Dodaj użytkownika
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[500px]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {isEditUserMode ? 'Edytuj użytkownika' : 'Dodaj użytkownika'}
              </AlertDialogTitle>
              <AlertDialogDescription>Wypełnij formularz.</AlertDialogDescription>
            </AlertDialogHeader>
            <div className="grid gap-4 py-4">
              {/* User Form Fields (condensed for brevity) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">Imię *</Label>
                  <Input
                    id="firstName"
                    value={userFormData.firstName}
                    onChange={e => setUserFormData({ ...userFormData, firstName: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Nazwisko *</Label>
                  <Input
                    id="lastName"
                    value={userFormData.lastName}
                    onChange={e => setUserFormData({ ...userFormData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={userFormData.email}
                  onChange={e => setUserFormData({ ...userFormData, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Rola *</Label>
                <Select
                  value={userFormData.role}
                  onValueChange={value =>
                    setUserFormData({ ...userFormData, role: value as User['role'] })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz rolę" />
                  </SelectTrigger>
                  <SelectContent>
                    {userRoles.map(r => (
                      <SelectItem key={r.value} value={r.value}>
                        <div className="flex flex-col">
                          <span>{r.label}</span>
                          <span className="text-xs text-gray-500">{r.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {!isEditUserMode && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Hasło *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={userFormData.password}
                      onChange={e => setUserFormData({ ...userFormData, password: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Potwierdź hasło *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={userFormData.confirmPassword}
                      onChange={e =>
                        setUserFormData({ ...userFormData, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                </>
              )}
            </div>
            <AlertDialogFooter>
              <Button type="submit" onClick={handleAddUser} disabled={!isUserFormValid()}>
                {isEditUserMode ? 'Zapisz' : 'Dodaj'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Szukaj użytkowników..."
                value={userSearchTerm}
                onChange={e => setUserSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedRoleFilter} onValueChange={setSelectedRoleFilter}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie role</SelectItem>
                  {userRoles.map(r => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatusFilter} onValueChange={setSelectedStatusFilter}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Wszystkie statusy</SelectItem>
                  <SelectItem value="active">Aktywny</SelectItem>
                  <SelectItem value="inactive">Nieaktywny</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lista użytkowników ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {filteredUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  {user.firstName.charAt(0)}
                  {user.lastName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">
                    {user.firstName} {user.lastName}
                  </h4>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getRoleVariant(user.role)}>
                  {userRoles.find(r => r.value === user.role)?.label}
                </Badge>
                <Badge variant={getStatusVariant(user.status)}>
                  {user.status === 'active' ? 'Aktywny' : 'Nieaktywny'}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => handleToggleUserStatus(user.id)}>
                  {user.status === 'active' ? 'Dezaktywuj' : 'Aktywuj'}
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleEditUser(user)}>
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
                      <AlertDialogTitle>Usunąć użytkownika?</AlertDialogTitle>
                      <AlertDialogDescription>
                        "{user.firstName} {user.lastName}" zostanie usunięty.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Anuluj</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Usuń
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 py-4">Brak użytkowników.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
