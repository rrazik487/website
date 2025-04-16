
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Layout, Shield, Terminal, Server, Monitor, Cpu 
} from "lucide-react";

const skills = [
  {
    category: "Security Tools & Frameworks",
    icon: <Shield className="text-primary" size={32} />,
    items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Ghidra", "OWASP ZAP"]
  },
  {
    category: "Languages & Development",
    icon: <Code className="text-primary" size={32} />,
    items: ["Python", "C", "Bash", "Verilog", "HTML/CSS/JS"]
  },
  {
    category: "Cybersecurity Domains",
    icon: <Terminal className="text-primary" size={32} />,
    items: ["Penetration Testing", "Digital Forensics", "Threat Modeling", "Vulnerability Assessment", "Incident Response"]
  },
  {
    category: "OS & Platforms",
    icon: <Monitor className="text-primary" size={32} />,
    items: ["Linux", "Windows", "Kali Linux", "macOS", "iOS"]
  },
  {
    category: "ML & Data Frameworks",
    icon: <Cpu className="text-primary" size={32} />,
    items: ["TensorFlow", "OpenCV", "NumPy"]
  },
  {
    category: "Certifications",
    icon: <Server className="text-primary" size={32} />,
    items: ["Cybersecurity Analyst Simulation", "Ethical Hacking Series", "LinkedIn (Jan 2024)", "Foundations of Cybersecurity", "Cyber Security & Applied Ethical Hacking", "VLSI SoC Design using Verilog HDL"]
  },
];

const SkillCard = ({ category, icon, items }: {
  category: string;
  icon: React.ReactNode;
  items: string[];
}) => (
  <Card className="hover-effect overflow-hidden border border-border/50">
    <CardContent className="p-6">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="inline-block px-3 py-1 bg-muted text-sm rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            I've worked with a range of technologies in the cybersecurity and electronics engineering world.
            From penetration testing to digital forensics, embedded systems to machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              category={skill.category} 
              icon={skill.icon} 
              items={skill.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
