import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Brain, Activity, FileText, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Stroke Management System",
      description: "Developed a comprehensive stroke management system integrating wearable devices and algorithms for real-time patient monitoring and emergency notifications.",
      icon: Activity,
      technologies: ["Excel/VBA", "Agile", "Six Sigma"],
      highlights: [
        "Real-time patient monitoring capabilities",
        "Emergency notification system",
        "Wearable device integration",
        "Quality-focused development using Six Sigma"
      ],
      category: "Healthcare Technology"
    },
    {
      title: "Road Accidents Classification & Predictive Analysis",
      description: "Conducted comprehensive analysis of road accident data in France using machine learning techniques and statistical analysis to uncover patterns and relationships.",
      icon: BarChart3,
      technologies: ["Python", "Machine Learning", "Tableau", "PhpMyAdmin"],
      highlights: [
        "Machine learning classification models",
        "Statistical analysis and pattern recognition",
        "Interactive visualizations with bar graphs, heatmaps, histograms",
        "Comprehensive data analysis pipeline"
      ],
      category: "Data Analytics"
    },
    {
      title: "Diabetes Prediction Model",
      description: "Implemented advanced statistical analysis to identify key factors affecting diabetes, utilizing multiple testing methods and machine learning algorithms.",
      icon: Brain,
      technologies: ["R", "SPSS", "XG Boost", "Statistical Analysis"],
      highlights: [
        "Chi-square, Kruskal-Wallis, and ANOVA statistical tests",
        "Logistic regression and XG Boost implementation",
        "Feature importance analysis",
        "Normality testing and data visualization"
      ],
      category: "Predictive Analytics"
    },
    {
      title: "Stroke Analysis & Database Management",
      description: "Implemented a comprehensive stroke data management system with over 100,000 records, utilizing relational database design and advanced visualization techniques.",
      icon: Database,
      technologies: ["SQL", "MySQL", "Power BI", "PhpMyAdmin"],
      highlights: [
        "Managed 100,000+ stroke-related records",
        "Relational database design with UNIQUE KEYS",
        "Advanced SQL queries with JOIN functions",
        "Interactive Power BI visualizations"
      ],
      category: "Database Management"
    },
    {
      title: "Electronic Health Records (EHR) System",
      description: "Developed comprehensive EHR system with XML/JSON data transformation capabilities and integration with OpenMRS electronic medical record system.",
      icon: FileText,
      technologies: ["XML", "JSON", "Oxygen XML Editor", "POSTMAN", "OpenMRS"],
      highlights: [
        "XSL transform for data extraction",
        "XML to JSON conversion workflows",
        "OpenMRS integration via POSTMAN",
        "Comprehensive data formatting pipeline"
      ],
      category: "Health Informatics"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Healthcare Technology": return "bg-success text-success-foreground";
      case "Data Analytics": return "bg-primary text-primary-foreground";
      case "Predictive Analytics": return "bg-warning text-warning-foreground";
      case "Database Management": return "bg-secondary text-secondary-foreground";
      case "Health Informatics": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative healthcare and data analytics projects demonstrating expertise in 
              technology integration and clinical research
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-none shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300 hover:scale-[1.02] group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground mb-1">
                          {project.title}
                        </CardTitle>
                        <Badge className={`${getCategoryColor(project.category)} text-xs`}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ExternalLink size={14} className="mr-2" />
                      View Details
                    </Button>
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

export default Projects;