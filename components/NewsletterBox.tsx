export function NewsletterBox() {
  return (
    <section className="rounded-lg bg-[#17211d] p-6 text-white md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h2 className="text-2xl font-bold">Get practical automation ideas</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#c8d6d0]">
            A lightweight newsletter area is reserved for future updates. No signup backend is connected yet.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-[360px] sm:flex-row" aria-label="Newsletter status">
          <input
            type="email"
            placeholder="you@example.com"
            className="min-h-11 flex-1 rounded-md border border-white/20 bg-white px-3 text-[#17211d]"
            aria-label="Email address"
            disabled
          />
          <button
            type="button"
            className="min-h-11 rounded-md bg-[#d2852f] px-5 font-bold text-[#17211d] opacity-80"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
}
