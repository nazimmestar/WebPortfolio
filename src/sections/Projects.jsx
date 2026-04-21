import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "ResumeIQ",
    description:
      "An AI-powered resume analyzer that scans uploaded CVs and generates structured feedback. Uses Puter.js as a serverless backend for LLM inference, file storage, and auth — no custom backend needed.",
    image: "/projects/ResumeIq.png",
    tags: ["React", "TypeScript", "Puter.js", "AI / LLM"],
    link: "https://resumeiq17.netlify.app/",
    github: "https://github.com/nazimmestar",
  },
  {
    title: "Cloud VM Migration Optimizer",
    description:
      "Master's research simulating 5 threshold-based VM overload detection policies across 16 hosts, 64 VMs, and 200 cloudlets using CloudSim Plus. Evaluated energy consumption, migration cost, and consolidation strategies.",
    image: "/projects/cloud.jpg",
    tags: ["CloudSim Plus", "Java", "Cloud Computing", "Research"],
    link: "#",
    github: "https://github.com/nazimmestar",
  },
  {
    title: "Clinic Manager",
    description:
      "A full-featured desktop application for clinic administration — appointment scheduling, patient records, doctor schedules, and billing. Designed with full UML architecture.",
    image: "/projects/med.png",
    tags: ["Java", "JavaFX", "MySQL", "UML"],
    link: "#",
    github: "https://github.com/nazimmestar",
  },
  {
    title: "MovieSearch",
    description:
      "A movie discovery app with browsing, search, and real-time trending data powered by the TMDB API. Built with React and Appwrite for backend services.",
    image: "/projects/movie.png",
    tags: ["React", "Appwrite", "TMDB API", "JavaScript"],
    link: "https://movie-app-lovat-eta.vercel.app/",
    github: "https://github.com/nazimmestar",
  },
  {
    title: "Design Portfolio",
    description:
      "A collection of UI/UX and graphic design work — brand identities, visual compositions, and interface mockups showcasing end-to-end design thinking.",
    image: "/projects/behance.jpg",
    tags: ["Figma", "UI/UX", "Graphic Design", "Branding"],
    link: "https://www.behance.net/ce676344",
    github: "#",
    behance: "/behance.svg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        Live
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <img
                          src="/github.svg"
                          alt="GitHub"
                          className="w-4 h-4"
                        />
                      </a>
                    )}
                    {project.github == "#" && project.behance && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <img
                          src={project.behance}
                          alt="Behance"
                          className="w-7 h-7"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/nazimmestar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
