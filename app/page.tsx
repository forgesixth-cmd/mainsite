export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f6e8c3] to-[#e8eef7] text-gray-900">

      {/* NAV */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-lg font-semibold">SixthForge</h1>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 mt-20">
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          MICRO SAAS STUDIO
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          We build small software<br />
          that solves big problems.
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          A collection of simple, powerful tools designed for freelancers
          and modern teams.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Explore Products
        </button>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 mt-20 max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">Products</h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-xs text-gray-500">LIVE</p>
            <h4 className="font-semibold mt-2">ForgeInvoice</h4>
            <p className="text-sm text-gray-600 mt-2">
              Create international invoices in seconds.
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-6">
            <p className="text-xs text-gray-500">COMING</p>
            <h4 className="font-semibold mt-2">ForgeFlow</h4>
            <p className="text-sm text-gray-600 mt-2">
              Workflow automation for solo founders.
            </p>
          </div>

          <div className="bg-white/70 rounded-2xl p-6">
            <p className="text-xs text-gray-500">COMING</p>
            <h4 className="font-semibold mt-2">ForgeTrack</h4>
            <p className="text-sm text-gray-600 mt-2">
              Lightweight analytics for SaaS teams.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-24 px-6">
        <h3 className="text-2xl font-semibold mb-4">
          Build faster. Launch sooner.
        </h3>
        <p className="text-gray-600 mb-6">
          Follow our journey and get early access to new tools.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Join Waitlist
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 mt-20 pb-10">
        © 2026 SixthForge
      </footer>

    </main>
  )
}