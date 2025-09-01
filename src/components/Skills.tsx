import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, Code, TrendingUp, Stethoscope, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Healthcare Systems",
      icon: Stethoscope,
      color: "bg-success",
      skills: [
        "EPIC Health Systems",
        "SAP S/4 HANA", 
        "REDCap",
        "CERNER",
        "OpenMRS",
        "Clinical Data Management"
      ]
    },
    {
      title: "Data Analytics & Visualization",
      icon: TrendingUp,
      color: "bg-primary",
      skills: [
        "Power BI",
        "Tableau",
        "Python",
        "R-Studio",
        "SPSS",
        "SAS",
        "Machine Learning"
      ]
    },
    {
      title: "Database & ETL",
      icon: Database,
      color: "bg-warning",
      skills: [
        "SQL Server Integration Services",
        "SQL",
        "MySQL",
        "PhpMyAdmin",
        "ETL/ELT Processes",
        "Database Management"
      ]
    },
    {
      title: "Programming & Development",
      icon: Code,
      color: "bg-secondary",
      skills: [
        "Python",
        "R",
        "SQL",
        "XML/JSON",
        "VBA",
        "GitHub",
        "POSTMAN"
      ]
    },
    {
      title: "Healthcare Compliance",
      icon: Shield,
      color: "bg-accent",
      skills: [
        "HIPAA",
        "HL7",
        "ICH",
        "GCP",
        "IRB",
        "Clinical Research Standards"
      ]
    },
    {
      title: "Research Tools",
      icon: Award,
      color: "bg-muted",
      skills: [
        "Qualtrics",
        "PCR & Gel Electrophoresis",
        "Statistical Analysis",
        "Clinical Trial Management",
        "Regulatory Documentation"
      ]
    }
  ];

  const certifications = [
    "EPIC – Cogito Fundamentals (COG170)",
    "EPIC – Clarity data model (CLR110)", 
    "EPIC – Caboodle data model (CDW110)",
    "EPIC – Clinical Data model (COG240)",
    "Good Clinical Practice (GCP) and Biomedical Researcher"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set spanning healthcare informatics, data analytics, 
              and clinical research technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <Card className="border-none shadow-portfolio-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Professional Certifications
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;