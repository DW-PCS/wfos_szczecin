import { Breadcrumbs } from '@/components/features/breadcrumbs';
import { programDocuments } from '@/constants/docmunets';
import { notFound } from 'next/navigation';
import { DocumentsHeader } from './documents-header';
import { DocumentsList } from './documents-list';
import { DownloadAllSection } from './download-all-section';
import { HelpSection } from './help-section';

interface DocumentsPageProps {
  id: string;
}

export default function DocumentsPage({ id }: DocumentsPageProps) {
  const programData = programDocuments[Number(id)];

  if (!programData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Breadcrumbs
          parentPage={{ title: ' Programy', href: 'programy' }}
          currentPageTitle="Dokumenty"
          grandparentPage={{ title: programData.name, href: id }}
        />

        <DocumentsHeader programId={id} programName={programData.name} />

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <DocumentsList documents={programData.documents} />
              <DownloadAllSection />
              <HelpSection />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
