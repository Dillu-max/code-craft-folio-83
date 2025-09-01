import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ameersuhel123@gmail.com",
      href: "mailto:ameersuhel123@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (317) 737-5890",
      href: "tel:+13177375890"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ameer-suhel-mohammed-985687175"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/AmeersuhelMohd"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on healthcare informatics projects or discuss data analytics opportunities? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a healthcare informatics specialist, need assistance with 
                  data analytics projects, or want to discuss research opportunities, I'm always open 
                  to meaningful conversations and collaborations.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors duration-300 shadow-portfolio-sm hover:shadow-portfolio-md group"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{contact.label}</div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Indianapolis, IN</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Open to remote and hybrid opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-portfolio-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project collaboration opportunity" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="I'd love to discuss..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;