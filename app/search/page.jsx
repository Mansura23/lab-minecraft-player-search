'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SearchPage() {
  const [username, setUsername] = useState('');
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setPlayer(null);

    try {
      const res = await fetch(
        `https://mc-api.io/profile/${encodeURIComponent(username)}/java`
      );

      if (!res.ok) {
        if (res.status === 404) throw new Error('Player not found');
        throw new Error('Something went wrong');
      }

      const data = await res.json();
      setPlayer(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-zinc-200 dark:border-zinc-700">
        {/* Başlıq */}
        <h1 className="text-3xl font-bold text-center mb-2">Player Profile Lookup</h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
          Get complete player profile including UUID, XUID (Bedrock), and skin data
        </p>

       
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username, e.g. Notch"
            className="flex-1 px-4 py-3 border border-zinc-300 rounded-xl dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-emerald-500 outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        
        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded-xl dark:bg-red-900/30 dark:text-red-300">
            ⚠️ {error}
          </div>
        )}

       
        {player && (
          <div className="mt-6 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <div className="flex items-start gap-6">
            
              {player.decodedTexture?.textures?.SKIN?.url && (
                <div className="flex-shrink-0">
                  <img
                    src={player.decodedTexture.textures.SKIN.url}
                    alt={`${player.name} skin`}
                    className="w-24 h-24 rounded-lg border-2 border-zinc-300 dark:border-zinc-600"
                  />
                </div>
              )}

              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Name</p>
                    <p className="text-xl font-semibold">{player.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">UUID</p>
                    <p className="text-sm font-mono break-all">{player.uuid}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-xs font-medium px-3 py-1 rounded-full">
                    Java Edition
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}