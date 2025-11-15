import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Can anyone have a Wikipedia page?',
      answer:
        'No. Only subjects with significant independent media coverage from reliable sources can be approved. Wikipedia has strict notability guidelines that require substantial third-party coverage in reputable publications. Our notability assessment service can determine if you qualify.',
    },
    {
      question: 'Is this service legal and approved by Wikipedia?',
      answer:
        'Yes, our service is legal. We follow all Wikipedia rules and guidelines. However, it\'s important to note that Wikipedia does not officially endorse paid page creation services. We operate with full transparency and disclosure, ensuring all content meets Wikipedia\'s standards for neutrality and verifiability.',
    },
    {
      question: 'How long does it take to create a Wikipedia page?',
      answer:
        'Typically 2–6 weeks depending on research availability and review times. The timeline includes comprehensive research (1-2 weeks), professional writing and citation (1-2 weeks), and submission/review process (1-2 weeks). Complex subjects with extensive coverage may take longer to ensure thoroughness.',
    },
    {
      question: 'What if my page gets rejected or deleted?',
      answer:
        'We provide revision support and strategies to improve your notability. If a page is rejected, we analyze the feedback, identify issues, and work on improvements. Our monitoring service also alerts you to deletion risks, allowing us to take preventive action. While we can\'t guarantee approval, we maximize your chances through expert preparation.',
    },
    {
      question: 'Can you update an existing Wikipedia page?',
      answer:
        'Yes — we offer rewrite and maintenance plans for existing Wikipedia pages. Whether your page needs better citations, content updates, neutrality improvements, or structure optimization, our team can enhance it to meet current Wikipedia standards. We also offer ongoing monitoring to keep your page current.',
    },
    {
      question: 'Do you guarantee a published page?',
      answer:
        'The final decision is made by Wikipedia\'s volunteer editors, so we cannot guarantee publication. What we do guarantee is a professionally researched, expertly written, and fully compliant article that maximizes approval chances. We only accept clients who meet notability criteria and provide honest assessments.',
    },
    {
      question: 'How much does it cost to create a Wikipedia page?',
      answer:
        'Pricing varies based on the complexity of the subject, amount of research required, and turnaround time needed. We offer different service tiers from basic notability assessment to full-service creation and ongoing monitoring. Contact us for a personalized quote based on your specific needs.',
    },
    {
      question: 'What makes your sources "reliable" for Wikipedia?',
      answer:
        'Wikipedia requires secondary sources from independent, reputable publications with editorial oversight. This includes major newspapers, magazines, academic journals, books from established publishers, and recognized industry publications. We avoid blogs, press releases, social media, and other sources that Wikipedia considers unreliable.',
    },
    {
      question: 'Can I write my own Wikipedia page?',
      answer:
        'Wikipedia strongly discourages subjects from writing their own pages due to conflict of interest. Articles written by subjects often contain promotional language, lack neutrality, and violate guidelines. Even if technically allowed, self-written pages face much higher scrutiny and deletion rates. Professional editing ensures compliance and objectivity.',
    },
    {
      question: 'What happens after my page is published?',
      answer:
        'After publication, your page becomes part of Wikipedia and can be edited by anyone. We offer monitoring services to watch for vandalism, deletion proposals, or problematic edits. Our team can respond to issues, make necessary updates, and ensure your page remains accurate and compliant with evolving Wikipedia standards.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about creating and maintaining your
              Wikipedia presence.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index
                        ? 'max-h-96 opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is here to provide personalized answers and guidance for
              your specific situation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get in Touch
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Important Reminder
            </h3>
            <p className="text-gray-700">
              Wikipedia is an independent encyclopedia run by volunteer editors.
              While we provide professional services to create compliant
              articles, we do not control Wikipedia's editorial decisions. Our
              role is to maximize your chances of success through expert
              preparation and compliance.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
