import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "EPIC – SAP S/4 HANA Developer & ETL Developer",
      company: "Eskenazi Health",
      duration: "April 2023 – Present",
      type: "Full-time",
      highlights: [
        "Configured and maintained Epic databases, SAP S/4 HANA databases, and SSIS servers, ensuring optimal performance and health monitoring",
        "Designed, modified, and monitored ETL/ELT processes, developing new workflows for Power BI implementation",
        "Developed SAP S/4 HANA data models tailored to operational requirements and collaborated with Analytics teams",
        "Ensured secure SQL database access and provided on-call support for troubleshooting database & SSIS package issues"
      ]
    },
    {
      title: "Research Assistant",
      company: "Herman B Wells Center (IU School of Medicine)",
      duration: "Oct 2021 – April 2024",
      type: "Research",
      highlights: [
        "Conducted preclinical studies and genotyping on over 300 mice disease samples of cancer",
        "Applied PCR and gel electrophoresis data for molecular differentiation, detecting 75% of cancer drug-induced DNA changes",
        "Improved data quality and integrated it into appropriate databases in compliance with standards and regulations",
        "Maintained regulatory documents and comprehensive laboratory records for multiple studies"
      ]
    },
    {
      title: "Data Analyst",
      company: "HANDS in Autism (IU School of Medicine)",
      duration: "Aug 2022 – Dec 2022",
      type: "Contract",
      highlights: [
        "Contributed to clinical research projects focused on autism spectrum disorder, improving accuracy rate by 20%",
        "Utilized research data management systems such as REDCap and CERNER for data collection and analysis",
        "Adhered to rigorous SOPs to maintain protocol compliance and ensure highest quality of research data",
        "Conducted retrospective chart reviews and performed medical chart reviews for Electronic Data Capture systems"
      ]
    },
    {
      title: "Research Assistant",
      company: "Indiana University & BHIRC",
      duration: "Oct 2021 – April 2024",
      type: "Research",
      highlights: [
        "Led a team of six for data collection from federal agencies, populating 80% of the database using Python and SQL",
        "Collaborated with clinical project manager, increasing data collection from 50% to 70%",
        "Demonstrated data collection proficiency by creating and updating 5 data extraction scripts",
        "Delivered customized reports aligning with stakeholder needs for program accreditation"
      ]
    },
    {
      title: "Clinical Informatics Pharmacist",
      company: "N.R.I General Hospital",
      duration: "June 2020 – May 2021",
      type: "Healthcare",
      highlights: [
        "Collaborated with medical teams to update electronic medical records ensuring accurate patient information",
        "Improved prescription accuracy and patient outcomes by offering drug information and reviewing medication charts",
        "Supported patients by cross-referencing medical records, safety standards, and insurance requirements",
        "Contributed to pharmacy operations through medication dispensing, prescription refills, and database management"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-success text-success-foreground";
      case "Research": return "bg-primary text-primary-foreground";
      case "Contract": return "bg-warning text-warning-foreground";
      case "Healthcare": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive journey through healthcare informatics, data analytics, and clinical research
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-none shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge className={`${getTypeColor(exp.type)} px-3 py-1`}>
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;