<div align="center">

# openmp-admin-atelier

**Admin, atelier-graded.**

Clean React panel for open.mp - players, bans, economy, and logs. No template flavor.

</div>

---

## Screens

Players table, ban dialog, economy editor - all in cream, stone, and ink.

## Stack

- Vite + React + TypeScript
- Tailwind cream tokens
- open.mp REST (or RCON) as data source

## Humanized code

\\\	s
// src/api/players.ts - a human wrote this, you can tell by the comments

// Fetch players with a gentle retry, because UDP can be moody
export async function fetchPlayers(signal?: AbortSignal) {
  // We keep the URL in one place so vibe coders don't hunt
  const res = await fetch('/api/players', { signal });
  if (!res.ok) throw new Error(players: );
  return res.json() as Promise<Player[]>;
}
\\\

## Run

\\\ash
git clone https://github.com/knownasrazi/openmp-admin-atelier.git
cd openmp-admin-atelier
bun install
bun run dev
\\\

## License

MIT