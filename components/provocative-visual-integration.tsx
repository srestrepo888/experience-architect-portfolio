export default function ProvocativeVisualIntegration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Hero Section - Conceptual Visual Elements */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Invisible Systems Visualization */}
          <div className="absolute inset-0 opacity-15">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              {/* Connection nodes representing invisible systems */}
              <circle cx="200" cy="150" r="3" fill="#FB7185" className="animate-pulse" />
              <circle
                cx="600"
                cy="200"
                r="2"
                fill="#FCD34D"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <circle
                cx="400"
                cy="350"
                r="2.5"
                fill="#FB7185"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <circle
                cx="150"
                cy="400"
                r="2"
                fill="#FED7AA"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <circle
                cx="650"
                cy="450"
                r="3"
                fill="#FCD34D"
                className="animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Flowing connections */}
              <path d="M200,150 Q400,100 600,200" stroke="#FED7AA" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M600,200 Q500,300 400,350" stroke="#FECACA" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M400,350 Q250,380 150,400" stroke="#FED7AA" strokeWidth="1" fill="none" opacity="0.4" />
              <path d="M150,400 Q400,420 650,450" stroke="#FECACA" strokeWidth="1" fill="none" opacity="0.4" />
            </svg>
          </div>

          <h1 className="text-6xl font-light tracking-wide text-gray-900 mb-8 relative z-10">Experience Architect</h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            I believe the most compelling stories begin with curiosity—a spark that has carried me across continents
            blending diverse perspectives from anthropology to business, from innovation to experience design, and from
            emerging technologies to business transformation.
          </p>

          <blockquote className="text-lg italic text-gray-600 max-w-2xl mx-auto border-l-2 border-rose-200 pl-6 mb-12">
            "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible
            essence of human desire."
          </blockquote>

          <button className="px-8 py-4 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-all duration-300">
            Download CV
          </button>
        </div>
      </section>

      {/* Philosophy Visualization */}
      <section className="py-20 bg-white/95">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">The Invisible Made Visible</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming abstract business challenges into tangible human experiences
            </p>
          </div>

          {/* Design Philosophy Icons */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Seeing the Invisible</h3>
              <p className="text-sm text-gray-600">Revealing hidden patterns in human behavior</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Illuminating Ideas</h3>
              <p className="text-sm text-gray-600">Transforming complexity into clarity</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Connecting Systems</h3>
              <p className="text-sm text-gray-600">Building bridges between strategy and soul</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Touching Souls</h3>
              <p className="text-sm text-gray-600">Creating experiences that resonate deeply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Provocative Icons */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Craft Mastery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Where strategic thinking meets human intuition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transformation Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes
                with the collective heartbeat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Converting ecosystem complexity into structured implementation roadmaps with measurable impact on human
                experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience Orchestration</h3>
              <p className="text-gray-600 leading-relaxed">
                Composing service symphonies where every interaction contributes to an emotional arc that resonates long
                after.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
