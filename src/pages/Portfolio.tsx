import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

const experiences = [
  ["May 2025 — July 2026", "Botax Consulting Indonesia", "Internal Tax Staff & Content Creator", "Handled internal taxation work while also contributing to content creation and teaching activities."],
  ["2023", "Interia Studio", "Assistant Operational Manager Intern", "Supported daily operations, coordination, and administrative activities during the internship."],
  ["2022 — 2023", "Universitas Darma Persada", "Management Student Association", "Graduated in Management and served as Head of the Management Student Association."],
];

const skills: [string, string, string][] = [
  ["HTML", "Web", "/skills/html.svg"],
  ["CSS", "Web", "/skills/css.svg"],
  ["React", "Web", "/skills/react.svg"],
  ["TypeScript", "Web", "/skills/typescript.svg"],
  ["Tailwind CSS", "Web", "/skills/tailwind.svg"],
  ["Tax", "Brevet A & B", "/skills/tax.svg"],
];

const contacts: [string, string, boolean][] = [
  ["Email", "mailto:rezpublic25@gmail.com", false],
  ["LinkedIn", "https://www.linkedin.com/in/rizky-putra-firmansyah-68b431164", true],
  ["GitHub", "https://github.com/beloytech", true],
  ["YouTube", "https://www.youtube.com/@BangBeloy", true],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300/70">{children}</p>;
}

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-slate-100">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,.25),transparent_28%),radial-gradient(circle_at_15%_20%,rgba(30,64,175,.18),transparent_30%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-10 px-6 pb-16 pt-20 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-24">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,.9)]" />
                Hi, My Name Is
              </div>
              <h1 className="mt-5 max-w-3xl text-[clamp(3.8rem,8vw,7rem)] font-black leading-[.88] tracking-[-.065em]">
                Rizky Putra<br /><span className="text-blue-400">Firmansyah</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-blue-300 sm:text-2xl">A Management graduate building skills across tax, operations, creative work, and web development.</p>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">I enjoy learning technology, solving problems, and turning ideas into useful things. Currently developing my frontend skills with React, TypeScript, and Tailwind CSS.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">Get in Touch →</a>
                <a href="#projects" className="rounded-xl border border-slate-600 bg-white/5 px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-blue-400">View My Work</a>
              </div>

              <div className="mt-7 flex gap-3">
                {[
                  ["GH", "https://github.com/beloytech"],
                  ["in", "https://www.linkedin.com/in/rizky-putra-firmansyah-68b431164/"],
                  ["▶", "https://www.youtube.com/@BangBeloy"],
                  ["@", "mailto:rezpublic25@gmail.com"],
                ].map(([label, href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-black transition hover:-translate-y-1 hover:border-blue-400 ${label === "▶" ? "text-red-400" : "text-white"}`}>{label}</a>)}
              </div>
            </div>

            <div className="relative flex min-h-[520px] items-end justify-center lg:min-h-[600px]">
              <div className="absolute bottom-20 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-2xl" />
              <div className="absolute bottom-14 h-[430px] w-[430px] rounded-full border border-blue-400/10 bg-blue-950/30" />
              <img src="/portrait.png" alt="Rizky Putra" className="relative z-10 h-[560px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,.55)]" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-white/10 bg-[#0b1728]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-24">
            <div><SectionLabel>01 / About</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">More than a job title.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Saya adalah lulusan S1 Manajemen Universitas Darma Persada tahun 2024 dengan IPK <strong className="text-white">3,74 (Cumlaude)</strong>. Pengalaman saya mencakup <strong className="text-white">Perpajakan, Operasional, dan Content Creation</strong>.</p><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Sekarang saya terus mengembangkan kemampuan <strong className="text-white">web development</strong> dan membangun project sebagai bagian dari proses belajar saya.</p></div>
            <div className="grid grid-cols-2 gap-3 self-center sm:grid-cols-4 lg:grid-cols-2">
              {[["3.74", "GPA"], ["2024", "Graduate"], ["A & B", "Brevet"], ["3+", "Experience"]].map(([v,l]) => <div key={l} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-2xl font-black">{v}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{l}</p></div>)}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionLabel>02 / Skills</SectionLabel>
          <div className="mt-4 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div><h2 className="text-4xl font-black tracking-tight sm:text-5xl">Skills & Tools.</h2><p className="mt-5 max-w-md leading-7 text-slate-400">A mix of professional experience and technical skills I'm continuously developing.</p></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map(([name,type,src]) => <div key={name} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[.05]"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[.07] p-2"><img src={src} alt={name} className="h-9 w-9 object-contain" /></div><p className="font-bold">{name}</p><p className="mt-1 text-xs text-slate-500">{type}</p></div>)}
            </div>
          </div>
        </section>

        {/* CERTIFICATION */}
        <section id="certification" className="border-y border-white/10 bg-[#0b1728]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <SectionLabel>03 / Certification</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Brevet Pajak.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-400">Sertifikasi perpajakan yang melengkapi pengalaman profesional saya di bidang taxation.</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[["Brevet Pajak A", "Perpajakan Dasar"], ["Brevet Pajak B", "Perpajakan Lanjutan"]].map(([title,subtitle]) => <div key={title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.03] p-6"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">▣</div><div><p className="font-black">{title}</p><p className="mt-1 text-sm text-slate-500">{subtitle}</p></div></div><span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300">Completed</span></div>)}
            </div>
            {/* <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-7 text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Certificate Image Slot</p><p className="mt-2 text-sm text-slate-500">Kalau nanti kamu punya foto sertifikat Brevet A & B, tinggal taruh di sini.</p></div> */}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <SectionLabel>04 / Experience</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Where I've been.</h2>
          <div className="mt-10">{experiences.map(([period,company,role,desc]) => <article key={company} className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[.28fr_.72fr]"><p className="text-sm font-bold text-slate-500">{period}</p><div><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-300/70">{company}</p><h3 className="mt-2 text-2xl font-black tracking-tight">{role}</h3><p className="mt-3 max-w-2xl leading-7 text-slate-400">{desc}</p></div></article>)}</div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-y border-white/10 bg-[#0b1728]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <SectionLabel>05 / Projects</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Featured projects.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">&lt;/&gt;</div><span className="text-slate-500">↗</span></div><h3 className="mt-7 text-2xl font-black">Personal Portfolio</h3><p className="mt-3 leading-7 text-slate-400">This portfolio website built while developing frontend skills with React, TypeScript, Tailwind CSS, and React Router DOM.</p><div className="mt-5 flex flex-wrap gap-2">{["React","TypeScript","Tailwind CSS","Router DOM"].map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">{t}</span>)}</div></div>
              <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7"><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8dedb] text-[#292323]">RAV</div><span className="text-slate-500">↗</span></div><h3 className="mt-7 text-2xl font-black">RAV & CO. Company Profile</h3><p className="mt-3 leading-7 text-slate-400">A dedicated company profile for RAV & CO., a fragrance brand from Bekasi, Indonesia.</p><Link to="/company" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07111f] transition hover:-translate-y-0.5">View Company Profile →</Link></div>
            </div>
          </div>
        </section>

        {/* RAV */}
        <section id="company" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-[#d9b7b2]/30 bg-gradient-to-br from-[#fff1ee] to-[#f5dcda] p-8 text-[#292323] sm:p-10 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#92716d]">Company Profile Project</p><h2 className="mt-3 font-serif text-5xl">RAV & CO.</h2><p className="mt-3 text-[#6d5e5c]">Your Scent, Your Signature.</p></div><Link to="/company" className="rounded-xl bg-[#292323] px-6 py-3.5 text-center text-sm font-bold text-white">Open Company Profile ↗</Link></div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111f34] to-[#0c1727] p-8 sm:p-12"><SectionLabel>06 / Contact</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Let's work together.</h2><p className="mt-4 max-w-xl leading-7 text-slate-400">Open to conversations, collaborations, and opportunities.</p><div className="mt-8 flex flex-wrap gap-3">{contacts.map(([label,href,external]) => <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`rounded-xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${label === "YouTube" ? "bg-red-500 text-white hover:bg-red-400" : "bg-white/10 text-white hover:bg-white/15"}`}>{label} ↗</a>)}</div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
