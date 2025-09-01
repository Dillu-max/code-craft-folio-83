import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Advanced Education",
      description: "MS in Health Informatics from Indiana University",
    },
    {
      icon: Award,
      title: "Epic Certified",
      description: "Multiple Epic certifications including Cogito & Clarity",
    },
    {
      icon: Users,
      title: "Research Leadership",
      description: "Led teams of 6+ in data collection from federal agencies",
    },
    {
      icon: TrendingUp,
      title: "Data Impact",
      description: "Improved data accuracy by 20% in clinical research",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate healthcare informatics professional with expertise in data analytics, 
              clinical research, and healthcare technology systems.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                With a Master's in Health Informatics from Indiana University and extensive experience 
                in clinical data management, I specialize in bridging the gap between healthcare and technology. 
                My work focuses on transforming complex healthcare data into actionable insights that improve 
                patient outcomes and operational efficiency.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Currently serving as an Epic SAP S/4 HANA Developer & ETL Developer at Eskenazi Health, 
                I've successfully configured and maintained critical healthcare databases, designed ETL processes, 
                and collaborated with analytics teams to optimize data workflows for Power BI implementation.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My research background includes conducting preclinical studies on over 300 cancer samples, 
                managing clinical trial data, and ensuring compliance with healthcare standards and regulations. 
                I'm passionate about using data-driven approaches to advance healthcare research and improve 
                patient care delivery.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-none shadow-portfolio-md hover:shadow-portfolio-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;