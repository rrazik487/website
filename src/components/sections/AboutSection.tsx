
import { User, Calendar, MapPin } from "lucide-react";
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
              A passionate <span className="text-gradient">web developer</span> based in Your Location
            </h3>
            
            <p className="text-muted-foreground">
              I am a dedicated web developer with a passion for creating beautiful, functional, 
              and user-friendly websites. With X years of experience in the field, I have developed 
              a strong skill set in front-end and back-end development.
            </p>
            
            <p className="text-muted-foreground">
              My journey in web development began when I discovered my fascination with 
              creating things that live on the internet. Fast-forward to today, I've had the 
              privilege of working at a tech company, a start-up, and a design studio.
            </p>
            
            <p className="text-muted-foreground">
              My focus is on building accessible, inclusive products and digital experiences 
              for a variety of clients. I'm always looking to learn new technologies and improve 
              my skills to stay at the cutting edge of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <User className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">Your Name</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Your City</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">X Years</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl">
              {/* Replace with your actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-2xl font-bold">Your Photo</span>
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
