import React from "react";
import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const Hero = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React-router",
    "Npm",
    "Vite",
    "Appwrite",
    "Puter",
    "Python",
    "Java",
    "Cloudsim plus",
    "JavaFX",
    "Rest APIs",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Vercel",
    "Tailwind CSS",
    "Figma",
    "Git",
    "GitHub Actions",
    "Cloud AI",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background  " />
      </div>

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${10 + Math.random() * 20}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column text  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Web Developer
              </span>
            </div>
            {/* hedline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building intelligent{" "}
                <span className="text-primary glow-text">digital</span>
                <br /> experiences with <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I am Nazim Mestar, a Full Stack Developer building modern
                and scalable web applications. I turn ideas into seamless
                digital experiences using clean code and modern technologies.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="gap-4 flex flex-wrap animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <AnimatedBorderButton href="/cv.pdf" download="Nazim-Mestar-CV.pdf">
                <Download className="w-5 h-5" />
                
                  Download CV
                
              </AnimatedBorderButton>
            </div>
            {/* links */}
            <div className="flex items-center gap-4  animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me :</span>
              {[
                { icon: "/github.svg", href: "https://github.com/nazimmestar" },
                {
                  icon: "/linkedin.svg",
                  href: "https://www.linkedin.com/in/nazim-mestar-21021229b/",
                },
                {
                  icon: "/instagram.svg",
                  href: "https://www.instagram.com/nazimmestar/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                >
                  {
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />
                  }
                </a>
              ))}
            </div>
          </div>

          {/* right column image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 animate-pulse blur-2xl" />
              <div className="relative glass p-2 rounded-3xl glow-border">
                <img
                  src="me.jpeg"
                  alt="profile"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 flex items-center glass py-3 px-4 rounded-2xl gap-4 animate-float">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-16 animate-fade-in animation-delay-600">
          <p className="text-sm text-center text-muted-foreground mb-6">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="relative overflow-hidden w-full">
              <div className="flex w-max animate-marquee">
                {[...skills].map((skill, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 px-8 py-4"
                  >
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}

                {[...skills].map((skill, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 px-8 py-4"
                  >
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2  text-muted-foreground hover:text-primary"
        >
          <span>Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
