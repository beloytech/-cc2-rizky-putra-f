import RavHeader from "../components/RavHeader";
import Footer from "../components/Footer";
import { company, products } from "../data/company";

export default function Company() {
  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#292323]">
      <RavHeader />

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9c7f7d]">Established {company.established} · Bekasi</p>
            <h1 className="mt-5 font-serif text-6xl leading-[.95] tracking-[-0.04em] sm:text-7xl">Your Scent,<br /><i>Your Signature.</i></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6d5e5c]">
              Discover a fragrance that becomes part of your identity.
              Explore the RAV & CO. collection and find the scent that feels like you.
            </p>
            <a href="#collection" className="mt-8 inline-block rounded-full bg-[#292323] px-6 py-3 text-sm font-bold text-white">Explore Collection</a>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#f7dfdc] p-5">
            <img src="/products/scarlet-obsession.webp" alt="RAV & CO. Scarlet Obsession" className="h-[480px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </section>

        <section id="story" className="border-y border-[#eadbd8] bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f7d]">01 / Our Story</p><h2 className="mt-4 font-serif text-4xl">The story behind RAV & CO.</h2></div>
            <p className="whitespace-pre-line text-lg leading-8 text-[#6d5e5c]">{company.story}</p>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f7d]">02 / Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-serif text-5xl">Find your signature.</h2>
            <p className="max-w-sm text-sm leading-6 text-[#806f6c]">Three fragrances. Three different personalities. One RAV & CO. experience.</p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-[1.5rem] border border-[#eadbd8] bg-white">
                <div className="aspect-[4/5] overflow-hidden bg-[#f5ecea]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div><h3 className="font-serif text-2xl">{product.name}</h3><p className="mt-1 text-xs uppercase tracking-wider text-[#927d79]">{product.size} · {product.gender}</p></div>
                    <p className="font-bold">{product.price}</p>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-[#6d5e5c]">{product.description}</p>
                  <div className="mt-6 border-t border-[#eee2df] pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#927d79]">Fragrance Notes</p>
                    <p className="mt-2 text-sm"><strong>Top:</strong> {product.topNotes.join(", ")}</p>
                    <p className="mt-1 text-sm"><strong>Middle:</strong> {product.middleNotes.join(", ")}</p>
                    <p className="mt-1 text-sm"><strong>Base:</strong> {product.baseNotes.join(", ")}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#292323] text-[#fff8f6]">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#cdb8b4]">03 / Discover RAV & CO.</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight">A fragrance for every version of you.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#cdb8b4]">Pilih aroma favoritmu dan temukan koleksi RAV & CO. di Shopee.</p>
            <a href={company.shopee} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-[#fff8f6] px-7 py-3 text-sm font-bold text-[#292323]">Shop on Shopee →</a>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] bg-[#f7dfdc] p-8 sm:p-12 md:grid-cols-2">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9c7f7d]">04 / Contact</p><h2 className="mt-4 font-serif text-4xl">Find us online.</h2><p className="mt-4 leading-7 text-[#6d5e5c]">Ikuti RAV & CO. dan lihat koleksi terbaru melalui platform resmi kami.</p></div>
            <div className="flex flex-col justify-center gap-3">
              <a href={company.instagram} target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-5 font-bold transition hover:-translate-y-0.5">Instagram <span className="float-right font-normal text-[#927d79]">{company.instagramLabel} ↗</span></a>
              <a href={company.shopee} target="_blank" rel="noreferrer" className="rounded-2xl bg-white p-5 font-bold transition hover:-translate-y-0.5">Shopee <span className="float-right font-normal text-[#927d79]">{company.shopeeLabel} ↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadbd8] bg-[#fff8f6]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#806f6c] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 RAV & CO. · Established 2024</p>
          <a href="/" className="font-semibold hover:text-[#292323]">← Back to Rizky's Portfolio</a>
        </div>
      </footer>
    </div>
  );
}