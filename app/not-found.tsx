import { Button } from '@/components/ui/button';
import { ArrowLeft, FileQuestion, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex items-center justify-center px-4 py-8 xl:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-green/10 to-primary-blue/10 rounded-full flex items-center justify-center mb-6">
              <FileQuestion className="w-16 h-16 text-primary-green" />
            </div>
            <div className="text-8xl font-bold text-primary-navy mb-4">404</div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Strona nie została znaleziona
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona. Sprawdź
              adres URL lub skorzystaj z poniższych opcji.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              className="bg-primary-green hover:bg-primary-lime text-white rounded-xl px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Strona główna
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
            className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white rounded-xl px-8 py-3 font-semibold transition-all duration-300"
            >
              <Link href="/oferta">
                <Search className="w-5 h-5 mr-2" />
                Przeglądaj ofertę
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white rounded-xl px-8 py-3 font-semibold transition-all duration-300"
            >
              <Link href="/kontakt">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Skontaktuj się z nami
              </Link>
            </Button>
          </div>


          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-primary-navy mb-6">Popularne strony</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/oferta"
                className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors">
                  <span className="text-primary-green font-semibold">💰</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-green transition-colors">
                    Programy dofinansowania
                  </div>
                  <div className="text-sm text-gray-600">Sprawdź dostępne programy</div>
                </div>
              </Link>

              <Link
                href="/pliki"
                className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-blue/20 transition-colors">
                  <span className="text-primary-blue font-semibold">📄</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-blue transition-colors">
                    Pliki do pobrania
                  </div>
                  <div className="text-sm text-gray-600">Dokumenty i formularze</div>
                </div>
              </Link>

              <Link
                href="/aktualnosci"
                className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-green/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-green/20 transition-colors">
                  <span className="text-primary-green font-semibold">📰</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-green transition-colors">
                    Aktualności
                  </div>
                  <div className="text-sm text-gray-600">Najnowsze informacje</div>
                </div>
              </Link>

              <Link
                href="/o-nas"
                className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-blue/20 transition-colors">
                  <span className="text-primary-blue font-semibold">🏢</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-blue transition-colors">
                    O nas
                  </div>
                  <div className="text-sm text-gray-600">Poznaj WFOŚiGW</div>
                </div>
              </Link>
            </div>
          </div>


          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Potrzebujesz pomocy?
              <Link
                href="/kontakt"
                className="text-primary-green hover:text-primary-lime font-semibold underline decoration-2 underline-offset-2 transition-colors"
              >
                Skontaktuj się z nami
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
