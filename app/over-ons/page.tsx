import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function OverOnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Over DigitaalVeilig Bond
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Wij zijn een team van cybersecurity experts, privacy advocaten en 
                consumentenbeschermers die zich inzetten voor jouw digitale veiligheid.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Onze Missie</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Wij geloven dat iedereen het recht heeft op digitale veiligheid en privacy. 
                  Onze missie is om consumenten te beschermen tegen de groeiende digitale risico's 
                  door middel van proactieve monitoring, snelle respons en juridische ondersteuning.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We streven ernaar om digitale veiligheid toegankelijk te maken voor iedereen, 
                  ongeacht technische kennis of financiële middelen.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Onze Visie</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We streven naar een wereld waarin digitale veiligheid de norm is, niet de uitzondering. 
                  Een wereld waarin consumenten zich veilig kunnen bewegen in de digitale ruimte zonder 
                  angst voor datalekken, identiteitsdiefstal of online misbruik.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Door innovatieve technologie te combineren met menselijke expertise, willen we 
                  de standaard zetten voor consumentenbescherming in het digitale tijdperk.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Onze Waarden
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Transparantie</h3>
                  <p className="text-gray-600 text-sm">
                    We zijn volledig transparant over onze diensten, kosten en de manier waarop we je gegevens beschermen.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Empathie</h3>
                  <p className="text-gray-600 text-sm">
                    We begrijpen de stress en angst die digitale problemen kunnen veroorzaken en bieden menselijke ondersteuning.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Actie</h3>
                  <p className="text-gray-600 text-sm">
                    We nemen direct actie bij detectie van problemen en werken snel aan oplossingen voor onze leden.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Ons Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">JS</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Jan Smits</h3>
                  <p className="text-primary-600 font-medium mb-3">CEO & Oprichter</p>
                  <p className="text-gray-600 text-sm">
                    Voormalig cybersecurity consultant met 15 jaar ervaring in datalekpreventie 
                    en privacybescherming. Expert in GDPR en Nederlandse privacywetgeving.
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-600">MV</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Maria van der Berg</h3>
                  <p className="text-secondary-600 font-medium mb-3">Hoofd Juridische Zaken</p>
                  <p className="text-gray-600 text-sm">
                    Gespecialiseerd advocaat in privacyrecht en consumentenbescherming. 
                    Expert in online misbruik en identiteitsdiefstal zaken.
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">TD</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tom de Vries</h3>
                  <p className="text-green-600 font-medium mb-3">Hoofd Technologie</p>
                  <p className="text-gray-600 text-sm">
                    Software engineer en cybersecurity expert. Verantwoordelijk voor onze 
                    monitoring systemen en technische infrastructuur.
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Ons Verhaal
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 leading-relaxed mb-6">
                  DigitaalVeilig is ontstaan uit persoonlijke ervaring. Onze oprichter Jan Smits 
                  werd slachtoffer van een grote datalek waarbij zijn persoonlijke gegevens werden gestolen. 
                  Het duurde maanden voordat hij erachter kwam, en nog langer om de schade te herstellen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Deze ervaring maakte duidelijk dat er een gat was in de markt voor toegankelijke, 
                  proactieve digitale bescherming voor consumenten. De meeste oplossingen waren gericht 
                  op bedrijven, terwijl individuen vaak achterbleven met complexe juridische processen 
                  en technische uitdagingen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Daarom richtten we DigitaalVeilig op: een service die 24/7 monitort op digitale 
                  risico's, direct actie onderneemt bij detectie van problemen, en toegang biedt tot 
                  gespecialiseerde juridische hulp. We geloven dat iedereen het recht heeft op digitale 
                  veiligheid, ongeacht technische kennis of financiële middelen.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10.000+</div>
                <div className="text-gray-600">Tevreden leden</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-gray-600">Datalekken gedetecteerd</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Succesvolle takedowns</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring actief</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Word onderdeel van onze missie
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij duizenden Nederlanders die al beschermd worden door 
                DigitaalVeilig en ervaar zelf het verschil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lidmaatschap" className="btn-primary text-lg px-8 py-4">
                  Word Lid
                </Link>
                <Link href="/contact" className="btn-outline text-lg px-8 py-4">
                  Neem Contact Op
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
