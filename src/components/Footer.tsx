import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:ameersuhel123@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ameer-suhel-mohammed-985687175",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/AmeersuhelMohd",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ameer Suhel Mohammed</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Health Informatics Specialist passionate about transforming healthcare through 
                data-driven insights and innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Let's Connect</h4>
              <p className="text-primary-foreground/80 mb-4">
                Ready to discuss healthcare informatics opportunities?
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Ameer Suhel Mohammed. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-primary-foreground/60 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-red-400 fill-current" />
                <span>for healthcare innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;