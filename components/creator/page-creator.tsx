'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { initialProgramPages } from '@/constants/program';
import { cn } from '@/lib/cn';
import { Program } from '@/types/admin/admin-programs';

import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { ArrowLeft, CalendarIcon, Save, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const beneficiaryCategoriesList = [
  'Osoba fizyczna',
  'Przedsiębiorca',
  'Jednostka samorządu terytorialnego',
  'Państwowe jednostki budżetowe',
  'Pozostałe podmioty i organizacje',
];

const statusOptions = [
  { value: 'otwarty', label: 'Otwarty', color: 'bg-green-100 text-green-800' },
  { value: 'planowany', label: 'Planowany', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'zakończony', label: 'Zakończony', color: 'bg-gray-100 text-gray-800' },
  { value: 'realizacja', label: 'W realizacji', color: 'bg-blue-100 text-blue-800' },
  { value: 'zamknięty', label: 'Nabór zamknięty', color: 'bg-orange-100 text-orange-800' },
];

interface ProgramCreatorProps {
  initialProgramData?: Partial<Program>;
}

export default function ProgramCreator({ initialProgramData }: ProgramCreatorProps) {
  const router = useRouter();
  const addProgram = (data: any) => {
    console.log('add program');
  };
  const updateProgram = (id: any, data: any) => {
    console.log('update program');
  };

  const getProgramPages = () => {
    return initialProgramPages.filter(page => page.type === 'program');
  };

  const [formData, setFormData] = useState<Partial<Program>>({
    name: initialProgramData?.name || '',
    description: initialProgramData?.description || '',
    status: initialProgramData?.status || 'planowany',
    budget: initialProgramData?.budget || '',
    deadline: initialProgramData?.deadline || '',
    beneficiaryCategories: initialProgramData?.beneficiaryCategories || [],
    startDate: initialProgramData?.startDate || undefined,
    endDate: initialProgramData?.endDate || undefined,
    maxSupport: initialProgramData?.maxSupport || '',
    funding: initialProgramData?.funding || '',
    programLink: initialProgramData?.programLink || '',
    linkedPageSlug: initialProgramData?.linkedPageSlug || '',
    showOnHomepage: initialProgramData?.showOnHomepage || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableProgramPages = getProgramPages().map(page => ({
    id: page.id,
    title: page.name,
    slug: page.slug || page.name.toLowerCase().replace(/\s+/g, '-'),
  }));

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name?.trim()) {
      newErrors.name = 'Nazwa programu jest wymagana';
    }

    if (!formData.description?.trim()) {
      newErrors.description = 'Opis programu jest wymagany';
    }

    if (!formData.status) {
      newErrors.status = 'Status programu jest wymagany';
    }

    if (!formData.beneficiaryCategories?.length) {
      newErrors.beneficiaryCategories = 'Wybierz przynajmniej jedną kategorię beneficjentów';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const programData: Program = {
      id: initialProgramData?.id || Date.now(),
      name: formData.name!,
      description: formData.description!,
      status: formData.status as Program['status'],
      budget: formData.budget,
      deadline: formData.deadline,
      beneficiaryCategories: formData.beneficiaryCategories!,
      startDate: formData.startDate,
      endDate: formData.endDate,
      maxSupport: formData.maxSupport,
      funding: formData.funding,
      programLink: formData.programLink,
      linkedPageSlug: formData.linkedPageSlug,
      showOnHomepage: formData.showOnHomepage,
    };

    if (initialProgramData?.id) {
      updateProgram(initialProgramData.id, programData);
    } else {
      addProgram(programData);
    }

    router.push('/admin/programy');
  };

  const handleClose = () => {
    router.push('/admin/programy');
  };

  const handleBeneficiaryCategoryChange = (category: string, checked: boolean) => {
    setFormData((prev: any) => ({
      ...prev,
      beneficiaryCategories: checked
        ? [...(prev.beneficiaryCategories || []), category]
        : (prev.beneficiaryCategories || []).filter((c: any) => c !== category),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={handleClose}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {initialProgramData?.id ? 'Edytuj program' : 'Nowy program'}
            </h1>
            <p className="text-gray-600">
              {initialProgramData?.id
                ? 'Modyfikuj dane programu dofinansowania'
                : 'Utwórz nowy program dofinansowania'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleClose}>
            <X className="h-4 w-4 mr-2" />
            Anuluj
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Zapisz program
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Podstawowe informacje</CardTitle>
              <CardDescription>Główne dane programu dofinansowania</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nazwa programu *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData((prev: any) => ({ ...prev, name: e.target.value }))}
                  placeholder="np. Czyste Powietrze"
                  className={cn(errors.name && 'border-red-500')}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Opis programu *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={e =>
                    setFormData((prev: any) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Szczegółowy opis programu dofinansowania..."
                  rows={4}
                  className={cn(errors.description && 'border-red-500')}
                />
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status programu *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={value =>
                      setFormData((prev: any) => ({ ...prev, status: value as Program['status'] }))
                    }
                  >
                    <SelectTrigger className={cn(errors.status && 'border-red-500')}>
                      <SelectValue placeholder="Wybierz status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center space-x-2">
                            <div
                              className={cn('w-2 h-2 rounded-full', option.color.split(' ')[0])}
                            />
                            <span>{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.status && <p className="text-sm text-red-500">{errors.status}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budżet programu</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={e =>
                      setFormData((prev: any) => ({ ...prev, budget: e.target.value }))
                    }
                    placeholder="np. 500 000 000 zł"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Details */}
          <Card>
            <CardHeader>
              <CardTitle>Szczegóły finansowe</CardTitle>
              <CardDescription>Informacje o dofinansowaniu i wsparciu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxSupport">Maksymalne wsparcie</Label>
                  <Input
                    id="maxSupport"
                    value={formData.maxSupport}
                    onChange={e =>
                      setFormData((prev: any) => ({ ...prev, maxSupport: e.target.value }))
                    }
                    placeholder="np. do 135 000 zł"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="funding">Poziom dofinansowania</Label>
                  <Input
                    id="funding"
                    value={formData.funding}
                    onChange={e =>
                      setFormData((prev: any) => ({ ...prev, funding: e.target.value }))
                    }
                    placeholder="np. do 100%"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Termin naboru</Label>
                <Input
                  id="deadline"
                  value={formData.deadline}
                  onChange={e =>
                    setFormData((prev: any) => ({ ...prev, deadline: e.target.value }))
                  }
                  placeholder="np. 31.12.2024"
                />
              </div>
            </CardContent>
          </Card>

          {/* Dates */}
          <Card>
            <CardHeader>
              <CardTitle>Daty programu</CardTitle>
              <CardDescription>Okres trwania programu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Data rozpoczęcia</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'justify-start text-left font-normal',
                          !formData.startDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startDate ? (
                          format(formData.startDate, 'PPP', { locale: pl })
                        ) : (
                          <span>Wybierz datę</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={date =>
                          setFormData((prev: any) => ({ ...prev, startDate: date }))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Data zakończenia</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'justify-start text-left font-normal',
                          !formData.endDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.endDate ? (
                          format(formData.endDate, 'PPP', { locale: pl })
                        ) : (
                          <span>Wybierz datę</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.endDate}
                        onSelect={date => setFormData((prev: any) => ({ ...prev, endDate: date }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardHeader>
              <CardTitle>Linki i strony</CardTitle>
              <CardDescription>
                Powiązania z zewnętrznymi stronami i wewnętrznymi podstronami
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="programLink">Link do strony zewnętrznej</Label>
                  <Input
                    id="programLink"
                    value={formData.programLink}
                    onChange={e => {
                      setFormData((prev: any) => ({ ...prev, programLink: e.target.value }));
                      if (e.target.value.trim()) {
                        setFormData((prev: any) => ({ ...prev, linkedPageSlug: '' }));
                      }
                    }}
                    placeholder="https://czystepowietrze.gov.pl"
                    disabled={!!formData.linkedPageSlug}
                  />
                  {formData.linkedPageSlug && (
                    <p className="text-xs text-gray-500">Wyłączone - wybrano stronę wewnętrzną</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedPageSlug">Podlinkowana strona wewnętrzna</Label>
                  <Select
                    value={formData.linkedPageSlug || '__none__'}
                    onValueChange={value => {
                      const actualValue = value === '__none__' ? '' : value;
                      setFormData((prev: any) => ({ ...prev, linkedPageSlug: actualValue }));
                      if (actualValue) {
                        setFormData((prev: any) => ({ ...prev, programLink: '' }));
                      }
                    }}
                    disabled={!!formData.programLink}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz stronę programu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__none__">Brak (usuń powiązanie)</SelectItem>
                      {availableProgramPages.map(page => (
                        <SelectItem key={page.id} value={page.slug}>
                          {page.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.programLink && (
                    <p className="text-xs text-gray-500">Wyłączone - wpisano link zewnętrzny</p>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Uwaga:</strong> Można wybrać tylko jeden rodzaj linku - albo zewnętrzny,
                  albo wewnętrzną stronę programu. Wybór jednego automatycznie wyczyści drugie pole.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Beneficiary Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Kategorie beneficjentów *</CardTitle>
              <CardDescription>Wybierz grupy docelowe programu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {beneficiaryCategoriesList.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={formData.beneficiaryCategories?.includes(category) || false}
                    onCheckedChange={checked =>
                      handleBeneficiaryCategoryChange(category, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-normal leading-relaxed"
                  >
                    {category}
                  </Label>
                </div>
              ))}
              {errors.beneficiaryCategories && (
                <p className="text-sm text-red-500">{errors.beneficiaryCategories}</p>
              )}
            </CardContent>
          </Card>

          {/* Homepage Display */}
          <Card>
            <CardHeader>
              <CardTitle>Wyświetlanie</CardTitle>
              <CardDescription>Opcje wyświetlania programu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showOnHomepage"
                  checked={formData.showOnHomepage || false}
                  onCheckedChange={checked =>
                    setFormData((prev: any) => ({ ...prev, showOnHomepage: checked as boolean }))
                  }
                />
                <Label htmlFor="showOnHomepage" className="text-sm font-normal leading-relaxed">
                  Pokaż na stronie głównej
                </Label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Program będzie wyświetlany w wyróżnionej sekcji na stronie głównej
              </p>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Podgląd</CardTitle>
              <CardDescription>Tak będzie wyglądał program na stronie</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{formData.name || 'Nazwa programu'}</h3>
                  {formData.status && (
                    <span
                      className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
                        statusOptions.find(s => s.value === formData.status)?.color ||
                          'bg-gray-100 text-gray-800'
                      )}
                    >
                      {statusOptions.find(s => s.value === formData.status)?.label}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {formData.description || 'Opis programu dofinansowania...'}
                </p>
                {(formData.maxSupport || formData.deadline) && (
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 pt-2 border-t">
                    {formData.maxSupport && (
                      <div>
                        <span className="font-medium">Wsparcie:</span> {formData.maxSupport}
                      </div>
                    )}
                    {formData.deadline && (
                      <div>
                        <span className="font-medium">Termin:</span> {formData.deadline}
                      </div>
                    )}
                  </div>
                )}
                {formData.beneficiaryCategories && formData.beneficiaryCategories.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                    {formData.beneficiaryCategories.map((category: any) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                {(formData.programLink || formData.linkedPageSlug || formData.showOnHomepage) && (
                  <div className="pt-2 border-t space-y-2">
                    {(formData.programLink || formData.linkedPageSlug) && (
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Link:</div>
                        {formData.programLink && (
                          <div className="flex items-center gap-1 text-xs">
                            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">
                              Zewnętrzny
                            </span>
                            <span className="text-gray-600 truncate">{formData.programLink}</span>
                          </div>
                        )}
                        {formData.linkedPageSlug && (
                          <div className="flex items-center gap-1 text-xs">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                              Wewnętrzny
                            </span>
                            <span className="text-gray-600">
                              /programy/{formData.linkedPageSlug}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    {formData.showOnHomepage && (
                      <div className="flex items-center gap-1 text-xs">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                          Strona główna
                        </span>
                        <span className="text-gray-600">Wyświetlany na stronie głównej</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
