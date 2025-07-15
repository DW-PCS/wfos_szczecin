import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { STATUS_OPTIONS } from '@/constants/admin/admin-program-creator';
import { cn } from '@/lib/cn';
import { ProgramPageType } from '@/types/program';

interface ProgramPreviewProps {
  formData: Partial<ProgramPageType>;
}

export const ProgramPreview = ({ formData }: ProgramPreviewProps) => {
  const currentStatus = STATUS_OPTIONS.find(s => s.value === formData.status);

  return (
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
                  currentStatus?.color || 'bg-gray-100 text-gray-800'
                )}
              >
                {currentStatus?.label}
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
              {formData.beneficiaryCategories.map(category => (
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
                        /programy/szczegoly/{formData.linkedPageSlug}
                      </span>
                    </div>
                  )}
                </div>
              )}
              {formData.showOnHomepage && (
                <div className="flex items-center gap-1 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Strona główna</span>
                  <span className="text-gray-600">Wyświetlany na stronie głównej</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
