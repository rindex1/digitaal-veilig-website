import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VarangianZakelijkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Jouw digitale verdediging begint hier.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Varangian helpt bedrijven compliant en weerbaar te blijven met GDPR, 
                ISO27001 en ISO27701. Professionele auditing, consultancy, pentesting 
                en certificeringstrajecten voor complete digitale veiligheid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Plan een Adviesgesprek
                </Link>
                <Link href="#diensten" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                  Bekijk Diensten
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="diensten" className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Onze Diensten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wij bieden complete compliance-oplossingen voor bedrijven die serieus 
                omgaan met digitale veiligheid, privacybescherming en kwaliteitsmanagement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Auditing */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Auditing</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Onafhankelijke toetsing van je processen en systemen volgens de hoogste 
                  standaarden. We identificeren risico's en bieden concrete aanbevelingen 
                  voor verbetering.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">GDPR Compliance Audit</h3>
                      <p className="text-gray-600 text-sm">Volledige toetsing van privacyprocessen en -systemen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ISO27001 Gap Analysis</h3>
                      <p className="text-gray-600 text-sm">Inventarisatie van beveiligingsmaatregelen en -processen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ISO27701 Privacy Audit</h3>
                      <p className="text-gray-600 text-sm">Toetsing van privacy management systemen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Rapportage & Aanbevelingen</h3>
                      <p className="text-gray-600 text-sm">Gedetailleerde rapporten met concrete verbeterpunten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultancy */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Consultancy</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Begeleiding bij de implementatie van GDPR, ISO27001 en ISO27701 normen. 
                  We helpen je organisatie stap voor stap naar volledige compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Implementatie Begeleiding</h3>
                      <p className="text-gray-600 text-sm">Stap-voor-stap ondersteuning bij compliance implementatie</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Policy Development</h3>
                      <p className="text-gray-600 text-sm">Ontwikkeling van privacy- en beveiligingsbeleid</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Process Optimization</h3>
                      <p className="text-gray-600 text-sm">Optimalisatie van bestaande processen en workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Change Management</h3>
                      <p className="text-gray-600 text-sm">Ondersteuning bij organisatorische veranderingen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pentesting */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Pentesting</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Praktische security-tests om kwetsbaarheden te vinden voordat kwaadwillenden 
                  dat doen. We testen je systemen, netwerken en applicaties grondig.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Web Application Testing</h3>
                      <p className="text-gray-600 text-sm">Beveiligingstests van webapplicaties en API's</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Network Security Assessment</h3>
                      <p className="text-gray-600 text-sm">Toetsing van netwerkbeveiliging en -configuratie</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Engineering Tests</h3>
                      <p className="text-gray-600 text-sm">Testen van menselijke kwetsbaarheden</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Remediation Support</h3>
                      <p className="text-gray-600 text-sm">Ondersteuning bij het oplossen van gevonden kwetsbaarheden</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training & Awareness */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Training & Awareness</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Medewerkers bewust maken van digitale risico's en privacy. We bieden 
                  praktische trainingen die direct toepasbaar zijn in de dagelijkse werkzaamheden.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Privacy Awareness Training</h3>
                      <p className="text-gray-600 text-sm">Bewustwording over privacy en data protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Cybersecurity Workshops</h3>
                      <p className="text-gray-600 text-sm">Praktische workshops over cybersecurity best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phishing Simulation</h3>
                      <p className="text-gray-600 text-sm">Realistische phishing tests en training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Compliance Training</h3>
                      <p className="text-gray-600 text-sm">Training over GDPR, ISO27001 en ISO27701 vereisten</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* ISO27001 Certificeringstrajecten */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">ISO27001 Certificeringstrajecten</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete begeleiding bij het behalen van ISO27001 certificering. Van 
                  initiële assessment tot certificering en onderhoud van je informatiebeveiligingssysteem.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Pre-Assessment</h3>
                      <p className="text-gray-600 text-sm">Volledige analyse van huidige beveiligingsstatus</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Implementatie Begeleiding</h3>
                      <p className="text-gray-600 text-sm">Stap-voor-stap implementatie van ISO27001 vereisten</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Certificering Proces</h3>
                      <p className="text-gray-600 text-sm">Begeleiding bij het certificeringstraject</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Onderhoud & Verbetering</h3>
                      <p className="text-gray-600 text-sm">Continue ondersteuning na certificering</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ISO9001 Informatiesystemen */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">ISO9001 Informatiesystemen</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Vernieuwing en optimalisatie van informatiesystemen conform ISO9001 
                  kwaliteitsmanagement. We zorgen voor betrouwbare, efficiënte systemen 
                  die voldoen aan de hoogste kwaliteitsstandaarden.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Systeem Analyse</h3>
                      <p className="text-gray-600 text-sm">Volledige analyse van huidige informatiesystemen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Kwaliteitsverbetering</h3>
                      <p className="text-gray-600 text-sm">Implementatie van kwaliteitsverbeteringen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Proces Optimalisatie</h3>
                      <p className="text-gray-600 text-sm">Optimalisatie van bedrijfsprocessen</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Compliance Monitoring</h3>
                      <p className="text-gray-600 text-sm">Continue monitoring van ISO9001 compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retainer Model Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retainer Model
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Voorspelbare kosten en directe toegang tot onze expertise. 
                Kies voor een retainer en houd je compliance altijd up-to-date.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* How it works */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Hoe het Werkt</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Vast Maandbedrag</h4>
                      <p className="text-gray-600 text-sm">
                        Je betaalt een vast bedrag per maand of jaar voor toegang tot onze diensten.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Directe Toegang</h4>
                      <p className="text-gray-600 text-sm">
                        Onmiddellijke toegang tot onze experts voor vragen en ondersteuning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Proactieve Monitoring</h4>
                      <p className="text-gray-600 text-sm">
                        Continue monitoring van je compliance status en tijdige waarschuwingen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reguliere Updates</h4>
                      <p className="text-gray-600 text-sm">
                        Maandelijkse rapportages en updates over je compliance status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Voordelen</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Voorspelbare Kosten</h4>
                      <p className="text-gray-600 text-sm">Geen verrassingen in je budget, altijd transparante prijzen.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Directe Toegang</h4>
                      <p className="text-gray-600 text-sm">Geen wachttijden, direct contact met onze experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Proactieve Aanpak</h4>
                      <p className="text-gray-600 text-sm">We signaleren problemen voordat ze escaleren.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Schalbaar</h4>
                      <p className="text-gray-600 text-sm">Makkelijk uit te breiden naarmate je organisatie groeit.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Compliance Garantie</h4>
                      <p className="text-gray-600 text-sm">Altijd up-to-date met de laatste regelgeving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Retainer */}
              <div className="card text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Starter</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">€2.500</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Tot 50 medewerkers</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Basis GDPR compliance</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Maandelijkse rapportage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">E-mail ondersteuning</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-outline w-full text-center block">
                  Kies Starter
                </Link>
              </div>

              {/* Professional Retainer */}
              <div className="card text-center border-2 border-primary-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Meest Populair
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Professional</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">€5.000</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Tot 200 medewerkers</span>
                  </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">GDPR + ISO27001 + ISO9001 compliance</span>
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
                    <span className="text-sm text-gray-700">Maandelijkse pentesting</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Training & awareness</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Kies Professional
                </Link>
              </div>

              {/* Enterprise Retainer */}
              <div className="card text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">€10.000</span>
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
                      <span className="text-sm text-gray-700">Complete compliance suite + certificering</span>
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
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start vandaag met je digitale verdediging
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Plan een vrijblijvend adviesgesprek en ontdek hoe Varangian jouw bedrijf 
                kan helpen bij GDPR, ISO27001, ISO27701 en ISO9001 compliance en certificering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                  Plan Adviesgesprek
                </Link>
                <Link href="#diensten" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
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
