import { Document } from '@/types/document';

export interface ProgramDocuments {
  name: string;
  documents: Document[];
}

export const programDocuments: Record<number, ProgramDocuments> = {
  1: {
    name: 'Czyste Powietrze 2024',
    documents: [
      {
        id: 1,
        name: 'Wniosek o dofinansowanie',
        description: 'Formularz wniosku do wypełnienia',
        type: 'PDF',
        size: '2.5 MB',
        url: '/files/wniosek-czyste-powietrze.pdf',
      },
      {
        id: 2,
        name: 'Regulamin programu',
        description: 'Pełny regulamin programu Czyste Powietrze',
        type: 'PDF',
        size: '1.8 MB',
        url: '/files/regulamin-czyste-powietrze.pdf',
      },
      {
        id: 3,
        name: 'Lista kwalifikowanych urządzeń',
        description: 'Wykaz urządzeń uprawnionych do dofinansowania',
        type: 'XLSX',
        size: '850 KB',
        url: '/files/lista-urzadzen.xlsx',
      },
      {
        id: 4,
        name: 'Instrukcja wypełnienia wniosku',
        description: 'Szczegółowa instrukcja krok po kroku',
        type: 'PDF',
        size: '3.2 MB',
        url: '/files/instrukcja-wniosek.pdf',
      },
    ],
  },
  2: {
    name: 'Moja Woda',
    documents: [
      {
        id: 5,
        name: 'Wniosek o dofinansowanie - Moja Woda',
        description: 'Formularz wniosku dla programu Moja Woda',
        type: 'PDF',
        size: '2.1 MB',
        url: '/files/wniosek-moja-woda.pdf',
      },
      {
        id: 6,
        name: 'Wymagania techniczne',
        description: 'Specyfikacja techniczna oczyszczalni',
        type: 'PDF',
        size: '1.5 MB',
        url: '/files/wymagania-techniczne.pdf',
      },
      {
        id: 7,
        name: 'Wzór umowy',
        description: 'Wzór umowy o dofinansowanie',
        type: 'DOC',
        size: '120 KB',
        url: '/files/wzor-umowy.doc',
      },
    ],
  },
  3: {
    name: 'Zielona Energia',
    documents: [
      {
        id: 8,
        name: 'Wniosek o dofinansowanie OZE',
        description: 'Formularz dla instalacji OZE',
        type: 'PDF',
        size: '2.8 MB',
        url: '/files/wniosek-oze.pdf',
      },
      {
        id: 9,
        name: 'Biznesplan - wzór',
        description: 'Wzór biznesplanu do wypełnienia',
        type: 'DOCX',
        size: '450 KB',
        url: '/files/biznesplan-wzor.docx',
      },
      {
        id: 10,
        name: 'Kalkulator oszczędności',
        description: 'Arkusz do obliczania oszczędności energii',
        type: 'XLSX',
        size: '650 KB',
        url: '/files/kalkulator-oszczednosci.xlsx',
      },
    ],
  },
};
