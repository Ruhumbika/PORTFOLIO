import { ArrowUpRight, Code2, Gift, Layers3 } from 'lucide-react'

/** Editorial visitor thank-you with a clearly credited external UI resource. */
export function VisitorThanks() {
  return (
    <section aria-labelledby="visitor-thanks-heading" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-[#F8A706]/30 bg-[#10151b] p-6 text-white sm:p-10 lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#F8A706]/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F8A706]/30 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#F8A706]"><Gift className="h-3.5 w-3.5"/> For visitors & developers</span>
              <h2 id="visitor-thanks-heading" className="mt-5 text-balance text-2xl font-semibold sm:text-3xl lg:text-4xl">Thanks for exploring my work.</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-gray-300">I appreciate your visit. If you enjoy exploring developer tools and interface design, here is a Studio Vue file-manager demo from SeanTheme to discover.</p>
              <a href="https://seantheme.com/studio-vue/page/file-manager" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F8A706] px-5 py-3 text-sm font-semibold text-[#141414] transition hover:bg-[#ffbe38] focus-visible:outline-[#F8A706]">Explore Studio Vue file manager <ArrowUpRight className="h-4 w-4"/></a>
              <p className="mt-3 text-xs text-gray-400">External demo by SeanTheme. Availability and licensing are governed by its publisher.</p>
            </div>
            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4"><Layers3 className="h-5 w-5 text-[#F8A706]"/><span className="text-sm font-semibold">Developer inspiration</span></div>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"><Code2 className="h-6 w-6 shrink-0 text-[#F8A706]"/><div className="min-w-0"><p className="text-sm font-medium">Studio Vue · File Manager</p><p className="text-xs leading-relaxed text-gray-400">Explore a modern resource management UI</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
