import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <span className="rounded-full border border-emerald-600/30 bg-emerald-600/10 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
          ⛏️ Powered by mc-api.io
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Minecraft Player Search
        </h1>

        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Look up any Minecraft player by their username and see their profile,
          UUID, and skin. Type a name, hit search, and meet the player.
        </p>

        <Link
          href="/search"
          className="flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-base font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Search for a player
        </Link>
      </main>
    </div>
  );
}
