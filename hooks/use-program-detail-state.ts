import { getPage, isValidProgramId } from '@/lib/utils/programs';
import { Page, ProgramDetailState } from '@/types/program';
import { useCallback, useState } from 'react';

interface UseProgramDetailStateParams {
  id: string;
  programs: Page[];
}

export function useProgramDetailState({
  id,
  programs,
}: UseProgramDetailStateParams): ProgramDetailState {
  const [program, setProgram] = useState<Page | null>(null);
  const [programPage, setProgramPage] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFoundState, setNotFoundState] = useState(false);

  const loadContent = useCallback(async () => {
    setIsLoading(true);
    setNotFoundState(false);

    try {
      if (isValidProgramId(id)) {
        const parsedId = Number.parseInt(id, 10);
        const foundProgram = getPage({ id: parsedId, programs: programs });
        if (foundProgram) {
          setProgram(foundProgram);
          setProgramPage(null);
          return;
        }
      }

      // Nothing found
      setNotFoundState(true);
    } catch (error) {
      console.error('Error loading content:', error);
      setNotFoundState(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return {
    program,
    programPage,
    isLoading,
    notFoundState,
    loadContent,
  };
}
