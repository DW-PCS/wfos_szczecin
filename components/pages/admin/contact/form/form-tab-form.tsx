import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ContactPageForm } from '@/types/admin/admin-contact';


interface FormTabFormProps {
  form: ContactPageForm;
  onUpdate: (form: ContactPageForm) => void;
  isEditing: boolean;
}

export function FormTabForm({ form, onUpdate, isEditing }: FormTabFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="form-title">Tytuł formularza</Label>
          <Input
            id="form-title"
            value={form.title}
            onChange={e => onUpdate({ ...form, title: e.target.value })}
            disabled={!isEditing}
            placeholder="Tytuł formularza"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="submit-button">Tekst przycisku wysyłania</Label>
          <Input
            id="submit-button"
            value={form.submitButtonText}
            onChange={e => onUpdate({ ...form, submitButtonText: e.target.value })}
            disabled={!isEditing}
            placeholder="Tekst przycisku"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name-label">Etykieta pola imię</Label>
          <Input
            id="name-label"
            value={form.nameLabel}
            onChange={e => onUpdate({ ...form, nameLabel: e.target.value })}
            disabled={!isEditing}
            placeholder="Etykieta pola imię"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name-placeholder">Placeholder pola imię</Label>
          <Input
            id="name-placeholder"
            value={form.namePlaceholder}
            onChange={e => onUpdate({ ...form, namePlaceholder: e.target.value })}
            disabled={!isEditing}
            placeholder="Placeholder pola imię"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email-label">Etykieta pola email</Label>
          <Input
            id="email-label"
            value={form.emailLabel}
            onChange={e => onUpdate({ ...form, emailLabel: e.target.value })}
            disabled={!isEditing}
            placeholder="Etykieta pola email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email-placeholder">Placeholder pola email</Label>
          <Input
            id="email-placeholder"
            value={form.emailPlaceholder}
            onChange={e => onUpdate({ ...form, emailPlaceholder: e.target.value })}
            disabled={!isEditing}
            placeholder="Placeholder pola email"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="subject-label">Etykieta pola temat</Label>
          <Input
            id="subject-label"
            value={form.subjectLabel}
            onChange={e => onUpdate({ ...form, subjectLabel: e.target.value })}
            disabled={!isEditing}
            placeholder="Etykieta pola temat"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject-placeholder">Placeholder pola temat</Label>
          <Input
            id="subject-placeholder"
            value={form.subjectPlaceholder}
            onChange={e => onUpdate({ ...form, subjectPlaceholder: e.target.value })}
            disabled={!isEditing}
            placeholder="Placeholder pola temat"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="message-label">Etykieta pola wiadomość</Label>
          <Input
            id="message-label"
            value={form.messageLabel}
            onChange={e => onUpdate({ ...form, messageLabel: e.target.value })}
            disabled={!isEditing}
            placeholder="Etykieta pola wiadomość"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message-placeholder">Placeholder pola wiadomość</Label>
          <Input
            id="message-placeholder"
            value={form.messagePlaceholder}
            onChange={e => onUpdate({ ...form, messagePlaceholder: e.target.value })}
            disabled={!isEditing}
            placeholder="Placeholder pola wiadomość"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="privacy-text">Tekst zgody na przetwarzanie danych</Label>
          <Input
            id="privacy-text"
            value={form.privacyText}
            onChange={e => onUpdate({ ...form, privacyText: e.target.value })}
            disabled={!isEditing}
            placeholder="Tekst zgody"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="privacy-link">Link do polityki prywatności</Label>
          <Input
            id="privacy-link"
            value={form.privacyLink}
            onChange={e => onUpdate({ ...form, privacyLink: e.target.value })}
            disabled={!isEditing}
            placeholder="/polityka-prywatnosci"
          />
        </div>
      </div>
    </div>
  );
}
