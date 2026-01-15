import { GraduationCap, Bot, BookOpen, Award } from "lucide-react";
import { education } from "@/data/portfolio";

const categoryConfig = {
  degree: { icon: GraduationCap, label: "Formación Académica" },
  ia: { icon: Bot, label: "IA & Automatización" },
  diploma: { icon: Award, label: "Diplomaturas" },
  course: { icon: BookOpen, label: "Cursos & Programas" },
};

const EducationSection = () => {
  const groupedEducation = education.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof education>);

  const orderedCategories: Array<keyof typeof categoryConfig> = ['degree', 'ia', 'diploma', 'course'];

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">Estudios</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {orderedCategories.map((category) => {
            const items = groupedEducation[category];
            if (!items || items.length === 0) return null;

            const config = categoryConfig[category];
            const Icon = config.icon;

            return (
              <div key={category} className="card-tech">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {config.label}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="border-l-2 border-border pl-4 hover:border-primary transition-colors"
                    >
                      <p className="font-medium text-foreground text-sm">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.institution}
                      </p>
                      <span className="text-xs text-primary font-medium">
                        {item.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
