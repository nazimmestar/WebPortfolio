
import React from 'react'

const socialLinks = [
  { icon: "/github.svg", href: "https://github.com/nazimmestar",label:"Github" },
  {
    icon: "/linkedin.svg",
    href: "https://www.linkedin.com/in/nazim-mestar-21021229b/",label:"LinkedIn"
  },
  {
    icon: "/instagram.svg",
    href: "https://www.instagram.com/nazimmestar/",label:"Instagram"
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#Journey", label: "Journey" },
  { href: "#contacts", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              NM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Nazim Mestar. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <img src={social.icon} alt="" className="w-5 h-5" />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer