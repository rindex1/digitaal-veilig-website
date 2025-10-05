import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Jouw digitale schild tegen datalekken en online misbruik
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Bescherm jezelf tegen digitale risico's zoals hacks, identiteitsdiefstal, 
                schending van consumentenrechten en online misbruik. Word lid van DigitaalVeilig 
                en krijg professionele monitoring en juridische bescherming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lidmaatschap" className="btn-secondary text-lg px-8 py-4">
                  Word Lid Nu
                </Link>
                <Link href="/diensten" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  Meer Informatie
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom DigitaalVeilig Bond?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij bieden complete bescherming tegen digitale risico's met onze 
                professionele monitoring, juridische ondersteuning en snelle respons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-gray-600">
                  Continue monitoring van je digitale voetafdruk, datalekken en mogelijke 
                  inbreuken op je privacy en identiteit.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Juridische Bescherming</h3>
                <p className="text-gray-600">
                  Toegang tot gespecialiseerde advocaten voor het afhandelen van 
                  datalekken, identiteitsdiefstal en online misbruik.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Snelle Respons</h3>
                <p className="text-gray-600">
                  Directe actie bij detectie van problemen: takedown-verzoeken, 
                  juridische stappen en herstel van je digitale identiteit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Diensten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van preventieve monitoring tot juridische actie - wij dekken alle aspecten 
                van digitale veiligheid en consumentenbescherming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Datalek Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  We monitoren continu of jouw persoonsgegevens zijn gelekt in datalekken. 
                  Bij detectie krijg je direct een melding en ondersteuning bij de volgende stappen.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Monitoring van duizenden datalekken wereldwijd</li>
                  <li>• Directe melding bij detectie</li>
                  <li>• Hulp bij het afhandelen van datalekken</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Identiteitsdiefstal Bescherming</h3>
                <p className="text-gray-600 mb-4">
                  Bescherming tegen identiteitsdiefstal met monitoring van je persoonlijke 
                  gegevens en snelle actie bij misbruik.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Monitoring van persoonlijke gegevens</li>
                  <li>• Detectie van misbruik</li>
                  <li>• Juridische ondersteuning bij herstel</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Online Misbruik Takedown</h3>
                <p className="text-gray-600 mb-4">
                  Snelle verwijdering van ongewenste content zoals wraakporno, 
                  lasterlijke berichten en andere vormen van online misbruik.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Takedown-verzoeken naar platforms</li>
                  <li>• Juridische druk bij weigering</li>
                  <li>• Monitoring van herplaatsing</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Consumentenrechten Bescherming</h3>
                <p className="text-gray-600 mb-4">
                  Bescherming van je consumentenrechten bij online aankopen, 
                  abonnementen en digitale diensten.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hulp bij terugbetalingen</li>
                  <li>• Opzegging van abonnementen</li>
                  <li>• Juridische stappen bij wanprestatie</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/diensten" className="btn-primary text-lg px-8 py-4">
                Bekijk Alle Diensten
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bescherm jezelf vandaag nog
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Word lid van DigitaalVeilig en krijg direct toegang tot onze 
                professionele monitoring en beschermingsdiensten.
              </p>
              <Link href="/lidmaatschap" className="btn-secondary text-lg px-8 py-4">
                Word Nu Lid
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
