import { Button } from '@/components/ui/button';
import { ContactOption } from '@/types/faq';

interface FAQContactCardProps {
  option: ContactOption;
}

export function FAQContactCard({ option }: FAQContactCardProps) {
  const IconComponent = option.icon;

  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors border border-gray-100">
      <div className="w-12 h-12 bg-primary-green rounded-xl flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-6 h-6 text-white" />
      </div>
      <h4 className="font-semibold mb-2 text-gray-900">{option.title}</h4>
      <p
        className="text-gray-600 text-sm mb-3"
        dangerouslySetInnerHTML={{ __html: option.description }}
      />

      {option.type === 'link' ? (
        <a
          href={option.href}
          className="text-primary-green hover:text-primary-navy transition-colors font-medium"
        >
          {option.linkText}
        </a>
      ) : (
        <Button asChild className="bg-primary-green hover:bg-primary-lime text-white border-0 mt-2">
          <a href={option.href}>{option.linkText}</a>
        </Button>
      )}
    </div>
  );
}
