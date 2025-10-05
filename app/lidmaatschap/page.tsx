import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LidmaatschapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kies je Bescherming
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Selecteer het lidmaatschap dat het beste bij jouw behoeften past. 
                Alle pakketten bieden complete bescherming tegen digitale risico's.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basis Pakket */}
              <div className="card relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Basis</h2>
                  <p className="text-gray-600 mb-4">Essentiële bescherming voor individuen</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">€9.99</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Datalek monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Identiteitsdiefstal detectie</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">E-mail en SMS meldingen</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Basis juridisch advies</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Consumentenrechten ondersteuning</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-outline w-full text-center block">
                  Kies Basis
                </Link>
              </div>

              {/* Premium Pakket */}
              <div className="card relative border-2 border-primary-600">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Meest Populair
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium</h2>
                  <p className="text-gray-600 mb-4">Complete bescherming met extra services</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">€19.99</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Alles uit Basis pakket</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Online misbruik takedown</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Prioriteit juridische ondersteuning</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">24/7 noodhulplijn</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Privacy training workshops</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Gezinsbescherming (tot 4 personen)</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary w-full text-center block">
                  Kies Premium
                </Link>
              </div>

              {/* Specialisten Lijn */}
              <div className="card relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Specialisten Lijn</h2>
                  <p className="text-gray-600 mb-4">Premium bescherming met specialistische ondersteuning</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">€39.99</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Alles uit Premium pakket</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Gespecialiseerde advocaten</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Prioriteit juridische ondersteuning</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Persoonlijke specialist</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complexe zaken afhandeling</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Onbeperkt juridisch advies</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-outline w-full text-center block">
                  Kies Specialisten Lijn
                </Link>
              </div>
            </div>

            {/* Features Comparison */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Vergelijk de Pakketten
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold text-gray-900">Functie</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Basis</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Premium</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Specialisten Lijn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Datalek monitoring</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Identiteitsdiefstal detectie</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Online misbruik takedown</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">24/7 noodhulplijn</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Privacy training</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Gespecialiseerde advocaten</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Persoonlijke specialist</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Complexe zaken afhandeling</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Veelgestelde Vragen
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Kan ik mijn pakket later upgraden?
                  </h3>
                  <p className="text-gray-600">
                    Ja, je kunt altijd upgraden naar een hoger pakket. De extra kosten worden 
                    pro-rata berekend voor de resterende periode van je huidige abonnement.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Is er een opzegtermijn?
                  </h3>
                  <p className="text-gray-600">
                    Nee, je kunt je abonnement op elk moment opzeggen zonder opzegtermijn. 
                    Je behoudt toegang tot de diensten tot het einde van de betaalde periode.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Wat gebeurt er bij detectie van een probleem?
                  </h3>
                  <p className="text-gray-600">
                    Je ontvangt direct een melding via e-mail en SMS. Onze experts nemen 
                    contact met je op om de situatie te bespreken en de volgende stappen te bepalen.
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Zijn de juridische diensten inbegrepen?
                  </h3>
                  <p className="text-gray-600">
                    Ja, alle pakketten bevatten juridisch advies en ondersteuning. Voor complexe 
                    zaken kunnen aanvullende kosten van toepassing zijn, maar dit wordt altijd 
                    vooraf besproken.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Start vandaag nog met je bescherming
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Kies het pakket dat het beste bij jouw situatie past en krijg direct 
                toegang tot onze beschermingsdiensten.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
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
