import {
  AboutContent,
  Achievement,
  MissionVisionItem,
  Person,
  Team,
} from '@/types/admin/admin-about';

export const createNewMissionVisionItem = (
  existingItems: MissionVisionItem[]
): MissionVisionItem => ({
  id: Math.max(...existingItems.map(item => item.id), 0) + 1,
  title: '',
  description: '',
  icon: 'lightning',
  active: true,
  order: 2,
  gradient: '',
});

export const createNewAchievement = (existingAchievements: Achievement[]): Achievement => ({
  id: Math.max(...existingAchievements.map(item => item.id), 0) + 1,
  number: '',
  label: '',
  icon: 'BarChart3',
  active: true,
  order: 1,
});

export const createNewPerson = (existingPersons: Person[]): Person => ({
  id: Math.max(...existingPersons.map(item => item.id), 0) + 1,
  name: '',
  role: '',
  description: '',
  order: existingPersons.length + 1,
  active: true,
});

export const createNewTeam = (existingTeams: Team[]): Team => ({
  id: Math.max(...existingTeams.map(item => item.id), 0) + 1,
  name: '',
  description: '',
  icon: 'Building',
  order: existingTeams.length + 1,
  active: true,
});

export const validateAboutContent = (content: AboutContent): string[] => {
  const errors: string[] = [];

  if (!content.hero.title.trim()) {
    errors.push('Hero title is required');
  }

  if (!content.intro.title.trim()) {
    errors.push('Intro title is required');
  }

  if (content.managementBoard.some(person => !person.name.trim() || !person.role.trim())) {
    errors.push('All management board members must have name and role');
  }

  if (content.supervisoryBoard.some(person => !person.name.trim() || !person.role.trim())) {
    errors.push('All supervisory board members must have name and role');
  }

  if (content.teams.some(team => !team.name.trim() || !team.description.trim())) {
    errors.push('All teams must have name and description');
  }

  return errors;
};

export const sortByOrder = <T extends { order: number }>(items: T[]): T[] => {
  return [...items].sort((a, b) => a.order - b.order);
};

export const getActiveItems = <T extends { active: boolean }>(items: T[]): T[] => {
  return items.filter(item => item.active);
};
