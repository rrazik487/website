
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A description of your first project. Explain what it does, the technologies used, and any challenges you overcame.",
    image: "bg-gradient-to-br from-blue-400 to-indigo-600",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Project 2",
    description: "A description of your second project. Make it concise but informative to give viewers a clear idea of your work.",
    image: "bg-gradient-to-br from-emerald-400 to-cyan-600",
    tags: ["Node.js", "Express", "MongoDB"],
    demoLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Project 3",
    description: "A description of your third project. Highlight the most impressive aspects of the project that showcase your skills.",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
    tags: ["React Native", "Firebase", "Redux"],
    demoLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Project 4",
    description: "A description of your fourth project. Focus on your role in the project if it was a collaborative effort.",
    image: "bg-gradient-to-br from-pink-400 to-rose-600",
    tags: ["Vue.js", "Vuex", "SCSS"],
    demoLink: "https://example.com",
    repoLink: "https://github.com"
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Card className="overflow-hidden hover-effect border border-border/50">
    <div className={`aspect-video ${project.image} flex items-center justify-center text-white font-bold text-xl`}>
      Project Screenshot
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
          <ExternalLink className="mr-2" size={16} /> Live Demo
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
            Check out some of my recent work that showcases my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="mr-2" size={18} /> See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
