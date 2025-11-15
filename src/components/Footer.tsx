import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">LexiconDigital</h3>
            <p className="text-sm">
              Professional Wikipedia pages built for your brand. Establishing
              credibility and global recognition.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Notability Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Page Creation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Page Upgrades
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Monitoring & Maintenance
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About LexiconDigital
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-sm hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm">
              <strong>Email:</strong> info@lexicondigital.com
            </p>
            <p className="text-sm mt-2">
              <strong>Office:</strong> Lahore, Pakistan
            </p>
            <p className="text-sm">Mon–Sat: 10 AM – 6 PM</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} LexiconDigital. All rights reserved. We accept
            only eligible clients — because your reputation matters.
          </p>
        </div>
      </div>
    </footer>
  );
}
