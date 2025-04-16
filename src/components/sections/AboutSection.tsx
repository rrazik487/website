
import { User, Calendar, MapPin, Phone, Mail, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold">
              A passionate <span className="text-gradient">Cybersecurity Enthusiast</span> based in Bengaluru
            </h3>
            
            <p className="text-muted-foreground">
              I am an aspiring Information Security Engineer with a passion for cybersecurity, 
              penetration testing, and secure system development. With a strong foundation in 
              Electronics & Communication Engineering, I specialize in identifying vulnerabilities 
              and providing risk mitigation strategies.
            </p>
            
            <p className="text-muted-foreground">
              My journey in cybersecurity began when I discovered my fascination with 
              ethical hacking and digital forensics. Fast-forward to today, I've had the 
              privilege of working as the Technical Committee Head at Evalanche Club and as a 
              Cybersecurity Intern at The Red Users.
            </p>
            
            <p className="text-muted-foreground">
              My focus is on building secure systems and conducting thorough penetration tests 
              to identify vulnerabilities before they can be exploited. I'm always looking to 
              learn new technologies and improve my skills to stay at the cutting edge of 
              cybersecurity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <User className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">S. Razikur Rahman</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bengaluru</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">6382308661</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">rrazik487@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <FileCode className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">B.Tech, Jain University</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Student</p>
                    <p className="font-medium">2023 - 2027</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white">
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold mb-4">Professional Summary</h3>
                <p className="text-lg">
                  Aspiring Information Security Engineer seeking an internship at Apple to contribute to threat analysis, penetration testing, and secure system development.
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
