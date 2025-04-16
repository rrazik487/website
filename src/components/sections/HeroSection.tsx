
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>
      
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Your Name</span><br />
            Web Developer & Designer
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            I create beautiful, responsive, and user-friendly websites and applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              View My Work
              <ArrowDown size={16} />
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-5 animate-slide-in-right">
          <div className="relative">
            {/* Replace with your own image */}
            <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-90 flex items-center justify-center">
              <div className="w-[95%] h-[95%] rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold">Your Image Here</span>
              </div>
            </div>
            
            <div className="absolute top-8 -right-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="font-medium">3+ Years Experience</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
              <p className="font-medium">20+ Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll Down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
