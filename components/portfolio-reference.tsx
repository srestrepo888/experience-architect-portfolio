"use client"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Background Definitions */}
      <style jsx>{`
        .full-background {
          background: linear-gradient(135deg, #fed7aa 0%, #fecaca 50%, #fef3c7 100%);
        }
        .subtle-background {
          background: linear-gradient(135deg, rgba(254, 215, 170, 0.1) 0%, rgba(254, 202, 202, 0.1) 50%, rgba(254, 243, 199, 0.1) 100%);
        }
      `}</style>

      {/* Hero Section - Full Background */}
      <section className="relative min-h-screen full-background overflow-hidden">
        {/* Decorative SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FECACA" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="mesh" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB7185" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <g opacity="0.6">
            <path d="M0,0 L240,120 L120,280 Z" fill="none" stroke="url(#mesh)" strokeWidth="1" />
            <path d="M240,120 L480,80 L360,240 Z" fill="none" stroke="url(#mesh)" strokeWidth="1" />
            <path d="M120,280 L360,240 L240,400 Z" fill="none" stroke="url(#mesh)" strokeWidth="1" />
            <line x1="240" y1="120" x2="360" y2="240" stroke="url(#mesh)" strokeWidth="0.8" />
          </g>

          <path
            d="M-100,500 Q400,300 800,450 Q1200,600 1600,400 Q1800,350 2000,500"
            fill="none"
            stroke="url(#flow1)"
            strokeWidth="6"
            opacity="0.7"
          />
          <path
            d="M-200,700 Q300,600 700,750 Q1100,900 1500,700 Q1700,650 1900,800 L1900,1080 L-200,1080 Z"
            fill="url(#flow1)"
            opacity="0.2"
          />
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-light tracking-wide text-gray-900 mb-8">Experience Architect</h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              I believe the most compelling stories begin with curiosity—a spark that has carried me across continents
              blending diverse perspectives from anthropology to business, from innovation to experience design, and
              from emerging technologies to business transformation.
            </p>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              At my core, I am an architect of invisible systems, adept at listening to unspoken and designing
              experiences that touch the human soul.
            </p>

            <blockquote className="text-lg italic text-gray-600 max-w-2xl mx-auto border-l-2 border-rose-300 pl-6 mb-12">
              "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible
              essence of human desire."
            </blockquote>

            <button className="px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section - Clean White */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 bg-white opacity-95"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-4 text-center">Projects</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore a curated collection of transformative projects that showcase innovation, strategic thinking, and
            exceptional execution across diverse industries and challenges.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Kayanee</h3>
              <p className="text-gray-600 mb-4">The First-of-Its-Kind Collective Saudi Wellness Experience Platform</p>
              <div className="text-sm text-gray-500">
                <p>Client: Kayanee, a PIF Company</p>
                <p>Year: 2022</p>
                <p>Industry: Health & Wellness</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Augoor</h3>
              <p className="text-gray-600 mb-4">Transforming static code into dynamic knowledge</p>
              <div className="text-sm text-gray-500">
                <p>Client: Globant X</p>
                <p>Year: 2020</p>
                <p>Industry: AI Software Development</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CHiME Care J&J</h3>
              <p className="text-gray-600 mb-4">Elevating Ophthalmic Practices with Experience-Driven Innovation</p>
              <div className="text-sm text-gray-500">
                <p>Client: Johnson & Johnson</p>
                <p>Year: 2022</p>
                <p>Industry: Health & Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Light Gray */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Professional Experience</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Partner</h3>
                  <p className="text-lg text-gray-700">Globant</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">2023—Present</span>
              </div>
              <p className="text-gray-600">
                I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into
                practical roadmaps that support business goals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Experience Designer</h3>
                  <p className="text-lg text-gray-700">Globant</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">2020—2023</span>
              </div>
              <p className="text-gray-600">
                I contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail,
                Finance and wellness teams, supporting faster value delivery.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Partners Engagement</h3>
                  <p className="text-lg text-gray-700">Centre for Fourth Industrial Revolution-WEF</p>
                </div>
                <span className="text-gray-600 mt-2 md:mt-0">2019—2020</span>
              </div>
              <p className="text-gray-600">
                I helped develop frameworks connecting technologies with governance approaches, supporting sustainable
                bridges between public policy and industry innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Subtle Background */}
      <section className="relative py-20 subtle-background">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transformation Leadership</h3>
              <p className="text-gray-600">
                I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes
                with the collective heartbeat of teams and communities.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Design</h3>
              <p className="text-gray-600">
                My approach to Strategic Design architectures converts ecosystems complexity into structured
                implementation roadmaps with measurable ROI.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience Orchestration</h3>
              <p className="text-gray-600">
                I compose service symphonies where every interaction contributes to the emotional arc. Thousands of
                moments, one cohesive feeling that stays with people long after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Return to Decorative */}
      <section className="relative py-20 full-background opacity-30">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Let's Create Together</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have a project in mind? I'd love to hear about it. Let's connect and build something exceptional.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-200 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-200 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-200 focus:border-transparent"
              ></textarea>
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
