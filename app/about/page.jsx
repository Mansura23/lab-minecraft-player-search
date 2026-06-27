// app/about/page.js
export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
        This is a small Next.js application that lets you search for Minecraft players.
        It uses the free{' '}
        <a
          href="https://mc-api.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 underline hover:text-emerald-700"
        >
          mc-api.io
        </a>{' '}
        API to fetch player profiles and skins.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        Built as a lab exercise for learning Next.js App Router navigation,
        client vs server components, and data fetching.
      </p>
    </div>
  );
}