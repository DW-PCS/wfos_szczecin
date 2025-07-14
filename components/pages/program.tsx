import { getStatusDisplay } from '@/lib/utils/offer';
import { getCategoryDisplayName, getStatusColor } from '@/lib/utils/programs';

import { ProgramPageType } from '@/types/program';
import { ArrowLeft, Download, ExternalLink, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '../features/breadcrumbs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ProgramPage = ({ program }: { program: ProgramPageType }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Breadcrumbs
          parentPage={{ title: 'Programy', href: 'programy' }}
          currentPageTitle={program.name}
        />

        {/* Program Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/programy">
                <Button variant="outline" className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Powrót do programów
                </Button>
              </Link>

              <div className="mb-6">
                <Badge className={`mb-4 ${getStatusColor(program.status)}`}>
                  {getStatusDisplay(program.status)}
                </Badge>
                <Badge className="ml-2 bg-primary-navy text-white">
                  {getCategoryDisplayName(program.beneficiaryCategories)}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{program.name}</h1>

              <p className="text-xl text-gray-600 mb-8">{program.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-green">{program.maxSupport}</div>
                  <div className="text-sm text-gray-600">Maksymalne dofinansowanie</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-navy">{program.funding}</div>
                  <div className="text-sm text-gray-600">Poziom dofinansowania</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{program.deadline}</div>
                  <div className="text-sm text-gray-600">Termin naboru</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Image */}
        <section className="mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-4xl md:text-6xl font-bold text-primary-navy mb-4">
                  {program.name}
                </h2>
                <p className="text-xl text-gray-700">
                  {getCategoryDisplayName(program.beneficiaryCategories)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Program Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Informacje o programie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500">Status programu</div>
                        <div className="text-lg text-gray-900">
                          {getStatusDisplay(program.status)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Budżet programu</div>
                        <div className="text-lg text-gray-900">{program.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Grupa docelowa</div>
                        <div className="text-lg text-gray-900">
                          {program.beneficiaryCategories.join(', ')}
                        </div>
                      </div>
                      {program.startDate && (
                        <div>
                          <div className="text-sm font-medium text-gray-500">Data rozpoczęcia</div>
                          <div className="text-lg text-gray-900">
                            {new Date(program.startDate).toLocaleDateString('pl-PL')}
                          </div>
                        </div>
                      )}
                      {program.endDate && (
                        <div>
                          <div className="text-sm font-medium text-gray-500">Data zakończenia</div>
                          <div className="text-lg text-gray-900">
                            {new Date(program.endDate).toLocaleDateString('pl-PL')}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Informacje kontaktowe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-gray-500">Instytucja</div>
                        <div className="text-lg text-gray-900">
                          Wojewódzki Fundusz Ochrony Środowiska
                          <br />i Gospodarki Wodnej w Szczecinie
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Adres</div>
                        <div className="text-lg text-gray-900">
                          ul. Wały Chrobrego 4<br />
                          70-500 Szczecin
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Telefon</div>
                        <div className="text-lg text-gray-900">+48 91 484 67 00</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Email</div>
                        <div className="text-lg text-gray-900">wfos@wfos.szczecin.pl</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href={`/dokumenty/${program.id}`} className="flex-1">
                  <Button size="lg" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Pobierz dokumenty
                  </Button>
                </Link>
                {program.programLink && (
                  <a
                    href={program.programLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="lg" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Strona programu
                    </Button>
                  </a>
                )}
                <Link href="/kontakt" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Skontaktuj się z doradcą
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramPage;
