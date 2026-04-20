import React, { useState } from "react";
import Button from "@/components/Button";
import { Menu,  X} from "lucide-react";

const Navlinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contacts", href: "#contacts" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fiexed top-0 left-0 right-0 bg-transparent py-5 ">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          NM<span className="text-primary">.</span>
        </a>
        {/* desktop navbar */}
        <div className="max-sm:hidden flex items-center gap-2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* CTA Button */}
        <div className="max-sm:hidden block">
          <Button size="sm">Contact me</Button>
        </div>

        {/* mobile menu button */}
        <button className="max-sm:block hidden p-2 text-foreground cursor-pointer" size="sm">
          {isMobileMenuOpen ? (
            <Menu size={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          ) : (
            <X size={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          )}
        </button>
      </nav>

      {/* mobile menu */}

      {isMobileMenuOpen && (
        <div className="max-sm:block hidden glass-strong animate-fade-in ">
          <div className=" container mx-auto px-6 py-6 flex flex-col gap-4">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.name}
              </a>
            ))}
            <Button>Contact me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
