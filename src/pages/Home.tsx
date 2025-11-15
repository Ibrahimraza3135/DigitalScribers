import { useState, useEffect } from 'react';
import {
  CheckCircle,
  Users,
  FileCheck,
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
  Star,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const steps = [
    'Notability',
    'Research',
    'Draft',
    'Review',
    'Submit',
    'Monitor',
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Credibility That Lasts',
      description:
        'Establish permanent digital presence that enhances your reputation',
    },
    {
      icon: Users,
      title: 'Expert Wikipedia Editors',
      description:
        'Our team understands Wikipedia guidelines and compliance standards',
    },
    {
      icon: FileCheck,
      title: 'Reliable Source Research',
      description:
        'We identify and cite only the most credible secondary sources',
    },
    {
      icon: Shield,
      title: 'Compliance Guaranteed',
      description:
        'Every article meets strict Wikipedia neutrality and notability rules',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Process',
      description:
        'Full visibility into every stage of research, writing, and submission',
    },
    {
      icon: Clock,
      title: 'Fast Delivery Options',
      description: 'Expedited services available for urgent publishing needs',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVentures Inc.',
      content:
        'LexiconDigital helped us establish credibility in our industry. Their expertise with Wikipedia guidelines was invaluable.',
      rating: 5,
    },
    {
      name: 'Dr. James Richardson',
      role: 'Author & Speaker',
      content:
        'Professional, thorough, and transparent throughout the entire process. My Wikipedia page has significantly boosted my visibility.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Founder, GreenTech Solutions',
      content:
        'They conducted a thorough notability assessment and delivered a perfectly compliant Wikipedia article. Highly recommended!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Professional Wikipedia Pages,{' '}
              <span className="text-blue-600">Built For Your Brand</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Establish credibility and global recognition with a
              professionally-crafted Wikipedia article that meets official
              guidelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Notability Assessment
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book a Free Consultation
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">
                Our Process
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 ${
                        index === currentStep
                          ? 'bg-blue-600 text-white scale-110 shadow-lg'
                          : index < currentStep
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {step}
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight
                        className={`w-6 h-6 mx-2 transition-colors duration-500 ${
                          index < currentStep
                            ? 'text-blue-600'
                            : 'text-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose LexiconDigital?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine expert knowledge of Wikipedia guidelines with
                professional research and writing services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-2">
                    <benefit.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Step-by-Step Process
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                From initial assessment to ongoing monitoring, we handle
                everything.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Notability Check',
                    description:
                      'Expert review of eligibility based on Wikipedia criteria',
                  },
                  {
                    step: '2',
                    title: 'Research',
                    description:
                      'Comprehensive collection of reliable secondary sources',
                  },
                  {
                    step: '3',
                    title: 'Draft Creation',
                    description:
                      'Professional writing in neutral, encyclopedic tone',
                  },
                  {
                    step: '4',
                    title: 'Submission',
                    description:
                      'Strategic publishing following Wikipedia best practices',
                  },
                  {
                    step: '5',
                    title: 'Monitoring',
                    description:
                      'Ongoing updates and protection against deletion risks',
                  },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 150}>
                    <div className="flex items-start gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-blue-100 text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by professionals and brands worldwide
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <p className="text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Published on Wikipedia?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's establish your credibility with a professionally crafted
              Wikipedia presence.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-12 py-5 bg-white text-blue-600 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              Start Now
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
