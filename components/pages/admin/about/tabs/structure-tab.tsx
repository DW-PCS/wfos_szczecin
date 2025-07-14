import { TabsContent } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin/admin-about';
import { ManagementBoardCard, SupervisoryBoardCard } from '../cards';

interface StructureTabProps {
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function StructureTab({ aboutContent, setAboutContent, isEditing }: StructureTabProps) {
  return (
    <TabsContent value="structure" className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ManagementBoardCard
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <SupervisoryBoardCard
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />
      </div>
    </TabsContent>
  );
}
