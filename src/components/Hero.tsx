import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Ameer Suhel Mohammed
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              Health Informatics Specialist & Data Analytics Professional
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming healthcare through data-driven insights and innovative technology solutions. 
              Specialized in Epic systems, SAP S/4 HANA, and clinical research data management.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <a 
              href="mailto:ameersuhel123@gmail.com" 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
              <span>ameersuhel123@gmail.com</span>
            </a>
            <a 
              href="tel:+13177375890" 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-300"
            >
              <Phone size={20} />
              <span>+1 (317) 737-5890</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://www.linkedin.com/in/ameer-suhel-mohammed-985687175" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/AmeersuhelMohd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;