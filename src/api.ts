export type Player = { id: number; name: string; ping: number; level: number };

export async function fetchPlayers(): Promise<Player[]> {
    // Hand-crafted: simple fetch, no abstraction bloat
    const res = await fetch("/api/players");
    if (!res.ok) throw new Error("players failed");
    return res.json();
}

export async function banPlayer(id: number, reason: string) {
    // A person would confirm before banning
    if (!confirm("Ban player " + id + "?")) return;
    await fetch("/api/bans", { method: "POST", body: JSON.stringify({ id, reason }) });
}

export async function setLevel(id: number, level: number) {
    await fetch("/api/players/" + id + "/level", { method: "PUT", body: JSON.stringify({ level }) });
}
