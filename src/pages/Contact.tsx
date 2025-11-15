import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    coverage: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        coverage: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Talk About Your{' '}
              <span className="text-blue-600">Wikipedia Page</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to establish your credibility on Wikipedia? Contact us for a
              free consultation and notability assessment.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">info@lexicondigital.com</p>
              <p className="text-sm text-gray-500">
                We typically respond within 24 hours
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Office
              </h3>
              <p className="text-gray-600 mb-2">Lahore, Pakistan</p>
              <p className="text-sm text-gray-500">
                Serving clients worldwide remotely
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">Monday – Saturday</p>
              <p className="text-sm text-gray-500">10:00 AM – 6:00 PM PKT</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={400}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Wikipedia Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="e.g., Your name, company, or brand"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="coverage"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Links to Existing Coverage (Optional)
                      </label>
                      <input
                        type="text"
                        id="coverage"
                        name="coverage"
                        value={formData.coverage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Provide any news articles, press coverage, etc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your Wikipedia goals and any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-blue-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-xl text-gray-600 mb-2">
                    Your message has been received.
                  </p>
                  <p className="text-gray-500">
                    Our team will connect with you shortly to discuss your
                    Wikipedia eligibility and next steps.
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              What Happens Next?
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We review your inquiry and existing coverage within 24 hours</li>
              <li>
                Our team conducts a preliminary notability assessment
              </li>
              <li>
                We schedule a consultation call to discuss your eligibility
              </li>
              <li>
                If qualified, we provide a detailed proposal and timeline
              </li>
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
