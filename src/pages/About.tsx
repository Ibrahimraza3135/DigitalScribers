import { Shield, Lightbulb, Target, Users, Award, Lock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description:
        'We maintain complete honesty about the Wikipedia process, including limitations and realistic expectations for every client.',
    },
    {
      icon: Award,
      title: 'Credibility',
      description:
        'Our reputation is built on creating compliant, high-quality Wikipedia content that stands the test of time and editorial scrutiny.',
    },
    {
      icon: Lightbulb,
      title: 'Knowledge',
      description:
        'Deep expertise in Wikipedia policies, editorial standards, and the evolving landscape of online encyclopedic content.',
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description:
        'Your information and our collaboration remain strictly confidential, handled with the utmost professional discretion.',
    },
    {
      icon: Target,
      title: 'Client Success',
      description:
        'Your goals drive our work. We succeed only when your Wikipedia presence achieves lasting recognition and credibility.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Articles Created' },
    { number: '95%', label: 'Approval Rate' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Industries Served' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              We Build Your Reputation {' '}
              <span className="text-blue-600">The Right Way</span>
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="animate-slide-in-1">
                  <strong className="text-gray-900">LexiconDigital</strong> is a
                  dedicated team of professional writers, editors, and research
                  analysts specializing in Wikipedia compliance.
                </p>
                <p className="animate-slide-in-2">
                  We ensure every article meets the highest standards of{' '}
                  <strong className="text-blue-600">neutrality</strong>,{' '}
                  <strong className="text-blue-600">accuracy</strong>, and{' '}
                  <strong className="text-blue-600">credibility</strong>.
                </p>
                <p className="animate-slide-in-3">
                  Our team brings together expertise in journalism, academic
                  research, and digital content strategy to navigate Wikipedia's
                  complex editorial environment with precision and professionalism.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center mb-20 shadow-2xl">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic">
              "To help notable brands and individuals gain global recognition
              through reliable digital presence."
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Why We're Different
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Selective Client Acceptance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don't accept every inquiry. We conduct thorough notability
                    assessments and only work with clients who genuinely qualify
                    for Wikipedia inclusion.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Realistic Expectations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're honest about what we can and cannot guarantee. Wikipedia
                    editors make final decisions, and we focus on maximizing your
                    chances through expert preparation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Long-Term Partnership
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our relationship doesn't end at publication. We offer ongoing
                    monitoring and maintenance to protect and enhance your
                    Wikipedia presence over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

              {/* 
        <AnimatedSection delay={500}>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 text-center text-lg">
              <strong>Important Note:</strong> We accept only eligible clients —
              because your reputation matters. If you don't meet Wikipedia's
              notability criteria, we'll tell you honestly and suggest alternative
              strategies.
            </p>
          </div>
        </AnimatedSection>
        */}

        <AnimatedSection delay={600}>
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your Wikipedia goals and determine if we're the right
              fit for your needs.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Start the Conversation
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
