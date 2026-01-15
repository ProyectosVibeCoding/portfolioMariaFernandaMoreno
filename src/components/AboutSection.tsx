import { aboutText, softSkills } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Sobre mí</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* About Text */}
          <div className="card-tech mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {aboutText}
            </p>
          </div>

          {/* Soft Skills */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Habilidades blandas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="badge-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
