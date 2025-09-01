import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Health Informatics",
      institution: "Indiana University",
      duration: "Aug 2021 – May 2023",
      location: "Indianapolis, IN",
      type: "Graduate",
      description: "Advanced study in healthcare informatics, focusing on the intersection of healthcare, information technology, and data analytics. Specialized in clinical data management, healthcare systems integration, and evidence-based healthcare decision making.",
      highlights: [
        "Clinical Data Management Systems",
        "Healthcare Analytics & Visualization",
        "Electronic Health Records Systems",
        "Healthcare Information Standards (HL7, FHIR)",
        "Research Methodology & Biostatistics"
      ]
    },
    {
      degree: "Bachelor of Pharmacy",
      institution: "Acharya Nagarjuna University",
      duration: "Aug 2016 – May 2020",
      location: "Andhra Pradesh, India",
      type: "Undergraduate",
      description: "Comprehensive pharmaceutical education covering drug development, clinical pharmacy, pharmacology, and pharmaceutical care. Strong foundation in healthcare sciences and patient care management.",
      highlights: [
        "Clinical Pharmacy Practice",
        "Pharmacology & Therapeutics",
        "Pharmaceutical Care Management",
        "Drug Information Services",
        "Healthcare Quality Assurance"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Graduate": return "bg-primary text-primary-foreground";
      case "Undergraduate": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Academic foundation in healthcare informatics and pharmaceutical sciences
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-none shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300 hover:scale-[1.01] group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <GraduationCap className="w-7 h-7 text-white" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-foreground leading-tight">
                          {edu.degree}
                        </CardTitle>
                        <div className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getTypeColor(edu.type)} px-3 py-1 whitespace-nowrap`}>
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Areas of Study:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;