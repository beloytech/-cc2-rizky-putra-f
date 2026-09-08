import { Link } from "react-router-dom";
import { company } from "../data/company";

export default function RavHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8d8d5] bg-[#fff8f6]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/company" className="flex items-center gap-3">
          <img src="/brand/logo.jpg" alt="RAV & CO. logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="hidden font-serif text-xl tracking-[0.12em] text-[#35302f] sm:block">RAV & CO.</span>
        </Link>
        <div className="flex items-center gap-5 text-sm font-semibold text-[#5d5150] sm:gap-7">
          <a href="#story" className="hover:text-[#292323]">Our Story</a>
          <a href="#collection" className="hover:text-[#292323]">Collection</a>
          <a href="#contact" className="hover:text-[#292323]">Contact</a>
          <a href={company.shopee} target="_blank" rel="noreferrer" className="rounded-full bg-[#292323] px-4 py-2 text-white">
            Shop
          </a>
        </div>
      </nav>
    </header>
  );
}