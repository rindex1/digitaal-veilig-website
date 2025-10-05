import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ZakelijkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Zakelijke Bescherming
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Complete digitale veiligheid voor bedrijven en organisaties. 
                Bescherm je bedrijf tegen datalekken, cyberaanvallen en compliance risico's.
              </p>
            </div>
          </div>
        </section>

        {/* Business Solutions */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zakelijke Oplossingen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij bieden complete digitale bescherming voor bedrijven van alle groottes, 
                van startups tot multinationals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Bedrijfsdatalek Monitoring */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Bedrijfsdatalek Monitoring</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Continue monitoring van datalekken die jouw bedrijf kunnen treffen. 
                  We detecteren wanneer jouw bedrijfsgegevens, klantgegevens of medewerkersgegevens 
                  zijn gelekt en helpen bij de afhandeling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Real-time Monitoring</h3>
                      <p className="text-gray-600 text-sm">24/7 monitoring van datalekken wereldwijd</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Klantgegevens Bescherming</h3>
                      <p className="text-gray-600 text-sm">Monitoring van klant- en medewerkersgegevens</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Compliance Ondersteuning</h3>
                      <p className="text-gray-600 text-sm">Hulp bij GDPR en andere compliance vereisten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cybersecurity Bescherming */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cybersecurity Bescherming</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Bescherming tegen cyberaanvallen, phishing, ransomware en andere 
                  digitale bedreigingen die jouw bedrijf kunnen treffen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Threat Detection</h3>
                      <p className="text-gray-600 text-sm">Vroege detectie van cyberbedreigingen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Incident Response</h3>
                      <p className="text-gray-600 text-sm">Snelle respons bij cybersecurity incidenten</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Recovery Ondersteuning</h3>
                      <p className="text-gray-600 text-sm">Hulp bij herstel na cyberaanvallen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GDPR Compliance */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">GDPR Compliance</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Volledige ondersteuning bij GDPR compliance, privacy impact assessments 
                  en het afhandelen van datalekken volgens de wet.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Privacy Impact Assessments</h3>
                      <p className="text-gray-600 text-sm">Uitgebreide privacy evaluaties</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Datalek Afhandeling</h3>
                      <p className="text-gray-600 text-sm">Professionele afhandeling van datalekken</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Autoriteit Persoonsgegevens</h3>
                      <p className="text-gray-600 text-sm">Communicatie met de AP bij incidenten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medewerker Training */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Medewerker Training</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Uitgebreide training voor jouw medewerkers over digitale veiligheid, 
                  privacybescherming en het herkennen van cyberbedreigingen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Security Awareness</h3>
                      <p className="text-gray-600 text-sm">Training in cybersecurity bewustzijn</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phishing Detectie</h3>
                      <p className="text-gray-600 text-sm">Herkennen van phishing pogingen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Privacy Best Practices</h3>
                      <p className="text-gray-600 text-sm">Privacy bescherming in de praktijk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Zakelijke Pakketten
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Starter */}
                <div className="card text-center">
                  <h3 className="text-xl font-bold mb-4">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">€99</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Tot 25 medewerkers</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Basis datalek monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">E-mail ondersteuning</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Basis training</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-outline w-full text-center block">
                    Kies Starter
                  </Link>
                </div>

                {/* Professional */}
                <div className="card text-center border-2 border-primary-600 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Meest Populair
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Professional</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">€249</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Tot 100 medewerkers</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Geavanceerde monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">GDPR compliance ondersteuning</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Uitgebreide training</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Kies Professional
                  </Link>
                </div>

                {/* Enterprise */}
                <div className="card text-center">
                  <h3 className="text-xl font-bold mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">€499</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Onbeperkt medewerkers</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Complete bescherming</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">24/7 prioriteit ondersteuning</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Custom oplossingen</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">White-label opties</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-outline w-full text-center block">
                    Kies Enterprise
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Bescherm je bedrijf vandaag nog
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Neem contact op voor een persoonlijke offerte en ontdek hoe DigitaalVeilig 
                jouw bedrijf kan beschermen tegen digitale risico's.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Vraag Offerte Aan
                </Link>
                <Link href="/diensten" className="btn-outline text-lg px-8 py-4">
                  Bekijk Diensten
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
