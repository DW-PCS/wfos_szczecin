import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AboutContent } from '@/types/admin/admin-about';
import { BarChart3, Building, Image, MessageSquare, Plus, Target, Users } from 'lucide-react';
import {
  CtaTab,
  HeroTab,
  IntroTab,
  MissionTab,
  StatsTab,
  StatusCard,
  StructureTab,
  TeamsTab,
} from './tabs';

interface AdminAboutTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  aboutContent: AboutContent;
  setAboutContent: (content: AboutContent) => void;
  isEditing: boolean;
}

export function AdminAboutTabs({
  activeTab,
  onTabChange,
  aboutContent,
  setAboutContent,
  isEditing,
}: AdminAboutTabsProps) {
  return (
    <>
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="hero" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            Hero
          </TabsTrigger>
          <TabsTrigger value="intro" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Intro
          </TabsTrigger>
          <TabsTrigger value="mission" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Misja/Wizja
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Osiągnięcia
          </TabsTrigger>
          <TabsTrigger value="structure" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Struktura
          </TabsTrigger>
          <TabsTrigger value="teams" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Zespoły
          </TabsTrigger>
          <TabsTrigger value="cta" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            CTA
          </TabsTrigger>
        </TabsList>

        <HeroTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <IntroTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <MissionTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <StatsTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <StructureTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <TeamsTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />

        <CtaTab
          aboutContent={aboutContent}
          setAboutContent={setAboutContent}
          isEditing={isEditing}
        />
      </Tabs>

      <StatusCard aboutContent={aboutContent} />
    </>
  );
}
