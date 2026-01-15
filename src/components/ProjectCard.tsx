import { ExternalLink, Github, Clock } from "lucide-react";
import type { Project } from "@/data/portfolio";
import n8nWorkflow from "@/assets/n8n-workflow.png";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isPlaceholder = project.isPlaceholder;

  return (
    <article
      className={`card-tech flex flex-col h-full ${
        isPlaceholder ? "opacity-60" : ""
      }`}
    >
      {/* Image for n8n project */}
      {project.image === "n8n-workflow" && (
        <div className="mb-4 rounded-lg overflow-hidden border border-border">
          <img
            src={n8nWorkflow}
            alt="Workflow n8n - Automatización de reuniones"
            className="w-full h-40 object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
        {project.title}
      </h3>

      {/* Problem & Solution */}
      {!isPlaceholder ? (
        <div className="space-y-3 mb-4 flex-grow">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Problema
            </span>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Solución
            </span>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
              {project.solution}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Mi aporte
            </span>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {project.contribution}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-muted-foreground mb-4 flex-grow">
          <Clock className="w-4 h-4" />
          <span className="text-sm">En carga / Próximamente</span>
        </div>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="badge-tech text-xs">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {!isPlaceholder && (project.liveUrl || project.repoUrl) && (
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Repo
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
