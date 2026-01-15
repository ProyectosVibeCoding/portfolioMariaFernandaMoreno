import { ArrowDown, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center stagger-children">
          {/* Monogram */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 border border-primary/30 mb-8 glow-effect">
            <span className="text-3xl font-bold text-primary">
              {personalInfo.initials}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-foreground mb-4">
            {personalInfo.name}
          </h1>

          {/* Role */}
          <p className="text-lg md:text-xl text-primary font-medium mb-6">
            {personalInfo.role}
          </p>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Ver proyectos
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Contactar
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
