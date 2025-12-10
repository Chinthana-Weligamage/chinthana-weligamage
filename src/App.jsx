import { useState } from "react";
import { designItems, devProjects } from "./data";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  const navItems = [
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => handleScroll("home")}
          className="text-xl font-semibold tracking-tight"
        >
          <span className="text-slate-900">Chinthana </span>
          <span className="text-slate-500"> Weligamage</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-4 pb-3 pt-2 text-sm font-medium text-slate-600 shadow-sm md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left transition hover:text-slate-900"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const LandingSection = () => (
  <section
    id="home"
    className="flex min-h-screen items-center bg-slate-50/60 px-4 pb-16 pt-24 sm:px-6 scroll-mt-24"
  >
    <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.5fr,1fr] md:items-center lg:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Software Developer • Graphic Designer
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I&apos;m{" "}
          <span className="underline decoration-slate-300">Chinthana</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          I build clean, modern digital products and visual identities. I work
          full-time as a developer and take on selected freelance projects in
          web development and graphic design.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm sm:text-base">
          <a
            href="#development"
            className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            View development work
          </a>
          <a
            href="#design"
            className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            View design work
          </a>
        </div>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500">Focus</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "Full Stack Development",
              "UI & UX Design",
              "Brand-aligned Visual Design",
              "Social Media Content Design",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-md font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">Tech</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Java",
                "​Flutter",
                "Node.js",
                "PHP",
                "​WordPress",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-md font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">Design</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "Figma",
                "Adobe Suite",
                "Affinity Studio",
                "Logo Design",
                "Brand Visuals",
                "Product Visuals",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-md font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DesignSection = () => (
  <section
    id="design"
    className="scroll-mt-20 bg-slate-200 px-4 py-16 sm:px-6 sm:py-20 md:scroll-mt-24 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Design work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            A selection of Social Media Posts, branding, UI, and visual design
            work. Masonry layout to highlight composition and hierarchy.
          </p>
        </div>
        <p className="text-xs text-slate-500 sm:text-right">
          Vector & Raster designs with clean layout
        </p>
      </div>

      {/* Masonry gallery using CSS columns via Tailwind */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
        {designItems.map((item) => (
          <figure
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
          >
            <img src={item.img} alt={item.title} className="h-auto w-full" />
            <figcaption className="p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {item.type}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {item.title}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const DevelopmentSection = () => (
  <section
    id="development"
    className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:scroll-mt-24 md:py-24"
  >
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Development projects
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Selected frontend and full-stack projects, focused on clean UI,
            performance, and maintainable code.
          </p>
        </div>
        <p className="text-xs text-slate-500 sm:text-right">
          Stack: React, Vite, Tailwind, Node.js
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {devProjects.map((project) => (
          <article
            key={project.id}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  className="text-[11px] font-semibold text-slate-900 underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section
    id="about"
    className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 md:scroll-mt-24 md:py-24"
  >
    <div className="mx-auto w-full max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        About
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <p>
          I&apos;m a software developer and graphic designer based in Colombo. I
          enjoy working at the intersection of clean engineering and thoughtful
          visual design.
        </p>
        <p>
          During the day, I work as a full-time developer. Outside work, I
          collaborate with clients on web apps, landing pages, and visual
          identities that feel modern, minimal, and easy to use.
        </p>
        <p>I can help with:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Frontend development with React, Vite, and Tailwind CSS</li>
          <li>Designing and building marketing sites and portfolios</li>
          <li>Social Medida Posts, Logo & Branding</li>
        </ul>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contact"
    className="scroll-mt-20 bg-slate-900 px-4 py-16 text-slate-50 sm:px-6 sm:py-20 md:scroll-mt-24 md:py-24"
  >
    <div className="mx-auto w-full max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Contact
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
        For freelance work, collaborations, or questions, feel free to reach
        out. Share a short description, timeline, and any references you have,
        and I&apos;ll get back to you.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="name"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 ring-offset-0 focus:border-slate-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 ring-offset-0 focus:border-slate-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Project details
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 ring-offset-0 focus:border-slate-400"
              placeholder="Briefly describe your project, goals, and timeline."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center min-w-lg w-full rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-300"
          >
            Send
          </button>
        </form>

        <div className="space-y-3 text-sm text-slate-300">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Direct contact
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:chinthanaweligamage1+p@gmail.com"
              className="font-medium text-slate-50 underline underline-offset-2"
            >
              chinthanaweligamage1@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="http://wa.me/+94713640632"
              className="font-medium text-slate-50 underline underline-offset-2"
            >
              Chinthana Weligamage
            </a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Chinthana Weligamage. All rights
          reserved.
        </p>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Nav />
      <main>
        <LandingSection />
        <DesignSection />
        <DevelopmentSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
