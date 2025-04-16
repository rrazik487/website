
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Navigation, Cpu, Activity, Car } from "lucide-react";

const projects = [
  {
    title: "Penetration Testing on IoT Devices",
    description: "Performed comprehensive security assessments on embedded networks and IoT devices, identifying vulnerabilities and providing remediation strategies.",
    image: "bg-gradient-to-br from-blue-400 to-indigo-600",
    icon: <Shield className="text-white text-4xl" />,
    tags: ["Penetration Testing", "IoT Security", "Vulnerability Assessment"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  },
  {
    title: "NavIC Sentinel",
    description: "Built a secure NavIC GPS tracking system with alert-based features, enabling real-time location monitoring with enhanced security protocols.",
    image: "bg-gradient-to-br from-emerald-400 to-cyan-600",
    icon: <Navigation className="text-white text-4xl" />,
    tags: ["GPS Tracking", "NavIC", "Embedded Systems", "Security"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  },
  {
    title: "Smart Yoga Mat with AI & IoT",
    description: "Developed a real-time posture correction system using Raspberry Pi, ESP32, and machine learning models to analyze and provide feedback on yoga poses.",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    icon: <Cpu className="text-white text-4xl" />,
    tags: ["Raspberry Pi", "ESP32", "ML", "IoT", "Real-time"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  },
  {
    title: "Yoga Pose Detection Model",
    description: "Trained an EfficientNetB3 model to accurately classify 107+ yoga postures with over 90% accuracy, enabling real-time pose detection and correction.",
    image: "bg-gradient-to-br from-pink-400 to-rose-600",
    icon: <Activity className="text-white text-4xl" />,
    tags: ["TensorFlow", "Computer Vision", "ML", "EfficientNetB3"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  },
  {
    title: "Smart Parking System",
    description: "Built a PIC18F452-based embedded system for vehicle detection and parking management, creating an efficient solution for urban parking challenges.",
    image: "bg-gradient-to-br from-purple-400 to-indigo-600",
    icon: <Car className="text-white text-4xl" />,
    tags: ["PIC18F452", "Embedded Systems", "IoT", "Smart City"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  },
  {
    title: "Reverse Engineering & Exploit Development",
    description: "Used Ghidra to analyze software, identified and exploited RCE vulnerabilities, demonstrating advanced cybersecurity skills and understanding of system internals.",
    image: "bg-gradient-to-br from-teal-400 to-green-600",
    icon: <Shield className="text-white text-4xl" />,
    tags: ["Reverse Engineering", "Ghidra", "Exploit Development", "RCE"],
    demoLink: "#",
    repoLink: "https://github.com/rrazik487"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Card className="overflow-hidden hover-effect border border-border/50">
    <div className={`aspect-video ${project.image} flex items-center justify-center text-white font-bold text-xl relative`}>
      <div className="absolute inset-0 flex items-center justify-center">
        {project.icon}
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <span className="relative z-10">{project.title}</span>
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="px-6 pb-6 pt-0 flex justify-between gap-4">
      <Button 
        variant="outline" 
        size="sm" 
        className="flex-1" 
        asChild
      >
        <a href={project.repoLink} target="_blank" rel="noreferrer">
          <Github className="mr-2" size={16} /> Repository
        </a>
      </Button>
      <Button 
        size="sm" 
        className="flex-1" 
        asChild
      >
        <a href={project.demoLink} target="_blank" rel="noreferrer">
          <ExternalLink className="mr-2" size={16} /> Project Details
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Check out some of my recent work that showcases my skills in cybersecurity, embedded systems, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://github.com/rrazik487" target="_blank" rel="noreferrer">
              <Github className="mr-2" size={18} /> See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
