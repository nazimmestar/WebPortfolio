import React from "react";
import { Code2, Lightbulb, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building scalable and modern web applications with clean, maintainable code.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creating logos, visual identities, brand assets, and impactful social media designs.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing websites for speed, responsiveness, and seamless user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "Combining design thinking and technical skills to build memorable digital brands.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern solutions
              <span className="font-serif italic font-normal text-white">
                {" "}
                one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer, Full Stack Developer, and
                Graphic Designer with a background in Information Systems. I
                create modern digital products that combine functionality,
                performance, and strong visual impact.
              </p>
              <p>
                I specialize in React, TypeScript, Node.js, and modern web
                technologies, while also designing logos, brand identities, and
                social media visuals that help businesses stand out.
              </p>
              <p>
                My approach blends technical problem-solving with creative
                thinking to build websites, brands, and experiences that users
                remember.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build digital experiences that are powerful,
                modern, and visually unforgettable."
              </p>
            </div>
          </div>
         {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
