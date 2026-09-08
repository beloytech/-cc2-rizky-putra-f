import { Link } from "react-router-dom";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Certification", "certification"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-sm font-black tracking-tight"><span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.9)]" />Rizky Putra</Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([label,id]) => <a key={id} href={`/#${id}`} className="text-xs font-semibold text-slate-400 transition hover:text-white">{label}</a>)}
          <Link to="/company" className="rounded-xl border border-slate-500 px-4 py-2 text-xs font-bold text-white transition hover:border-blue-400 hover:text-blue-300">RAV & CO. ↗</Link>
        </div>
        <Link to="/company" className="rounded-xl border border-slate-500 px-3 py-2 text-xs font-bold text-white lg:hidden">RAV & CO.</Link>
      </nav>
    </header>
  );
}
