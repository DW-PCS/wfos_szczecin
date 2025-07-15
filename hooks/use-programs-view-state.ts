import { useEffect, useState } from 'react';

interface ProgramsViewState {
  activeTabsValue: string;
  setActiveTabsValue: (value: string) => void;
  handleDeleteProgram: (programId: number) => void;
  handleEditProgram: (programId: number) => void;
}
export const DEFAULT_TAB = 'programsList';

export function useProgramsViewState(

  onRequestEditProgram: (programId: number) => void,
  deleteProgram: (programId: number) => void,
  initialActiveSubTab?: string
): ProgramsViewState {
  const [activeTabsValue, setActiveTabsValue] = useState(initialActiveSubTab || DEFAULT_TAB);

  useEffect(() => {
    if (initialActiveSubTab) {
      if (initialActiveSubTab !== activeTabsValue) {
        setActiveTabsValue(initialActiveSubTab);
      }

    }
  }, [initialActiveSubTab, activeTabsValue, ]);

  const handleDeleteProgram = (programId: number) => {
    deleteProgram(programId);
  };

  const handleEditProgram = (programId: number) => {
    onRequestEditProgram(programId);
  };

  return {
    activeTabsValue,
    setActiveTabsValue,
    handleDeleteProgram,
    handleEditProgram,
  };
}
