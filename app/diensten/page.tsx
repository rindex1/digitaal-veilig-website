import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DienstenPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Onze Diensten
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Van preventieve monitoring tot juridische actie - wij bieden complete 
                bescherming tegen alle digitale risico's en online misbruik.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Datalek Monitoring */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Datalek Monitoring</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  We monitoren continu duizenden datalekken wereldwijd om te detecteren of jouw 
                  persoonsgegevens zijn gelekt. Bij detectie krijg je direct een melding en 
                  ondersteuning bij de volgende stappen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">24/7 Monitoring</h3>
                      <p className="text-gray-600 text-sm">Continue monitoring van datalekken in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Directe Melding</h3>
                      <p className="text-gray-600 text-sm">SMS, e-mail en app-notificaties bij detectie</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Herstel Ondersteuning</h3>
                      <p className="text-gray-600 text-sm">Hulp bij het afhandelen van datalekken en schadebeperking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Identiteitsdiefstal Bescherming */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Identiteitsdiefstal Bescherming</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Bescherming tegen identiteitsdiefstal met monitoring van je persoonlijke 
                  gegevens en snelle actie bij detectie van misbruik.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Persoonlijke Monitoring</h3>
                      <p className="text-gray-600 text-sm">Monitoring van je naam, BSN, e-mail en telefoonnummer</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Misbruik Detectie</h3>
                      <p className="text-gray-600 text-sm">Detectie van ongeautoriseerd gebruik van je identiteit</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Juridische Ondersteuning</h3>
                      <p className="text-gray-600 text-sm">Gespecialiseerde advocaten voor herstel van je identiteit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online Misbruik Takedown */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Online Misbruik Takedown</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Snelle verwijdering van ongewenste content zoals wraakporno, 
                  lasterlijke berichten en andere vormen van online misbruik.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Takedown Verzoeken</h3>
                      <p className="text-gray-600 text-sm">Professionele takedown-verzoeken naar alle grote platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Juridische Druk</h3>
                      <p className="text-gray-600 text-sm">Juridische stappen bij weigering van platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Herplaatsing Monitoring</h3>
                      <p className="text-gray-600 text-sm">Continue monitoring om herplaatsing te voorkomen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consumentenrechten Bescherming */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Consumentenrechten Bescherming</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Bescherming van je consumentenrechten bij online aankopen, 
                  abonnementen en digitale diensten.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Terugbetalingen</h3>
                      <p className="text-gray-600 text-sm">Hulp bij het terugkrijgen van onterecht afgeschreven bedragen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Abonnement Opzegging</h3>
                      <p className="text-gray-600 text-sm">Hulp bij het opzeggen van moeilijk opzegbare abonnementen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Wanprestatie</h3>
                      <p className="text-gray-600 text-sm">Juridische stappen bij wanprestatie van bedrijven</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Aanvullende Diensten
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Juridisch Advies</h3>
                  <p className="text-gray-600 text-sm">
                    Toegang tot gespecialiseerde advocaten voor alle digitale en privacy gerelateerde vragen.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Privacy Training</h3>
                  <p className="text-gray-600 text-sm">
                    Workshops en trainingen om je digitale veiligheid te verbeteren.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Noodhulp</h3>
                  <p className="text-gray-600 text-sm">
                    24/7 noodhulplijn voor acute digitale veiligheidsproblemen.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Klaar om jezelf te beschermen?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Word lid van DigitaalVeilig Bond en krijg direct toegang tot al onze 
                beschermingsdiensten en juridische ondersteuning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lidmaatschap" className="btn-primary text-lg px-8 py-4">
                  Bekijk Lidmaatschappen
                </Link>
                <Link href="/contact" className="btn-outline text-lg px-8 py-4">
                  Vraag Advies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
