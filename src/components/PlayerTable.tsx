import { useEffect, useState } from "react";
import { fetchPlayers, banPlayer } from "../api";

export default function PlayerTable() {
    const [players, setPlayers] = useState<any[]>([]);
    useEffect(() => { fetchPlayers().then(setPlayers).catch(()=>{}); }, []);
    return (
        <table className="w-full text-sm">
            <thead><tr><th>ID</th><th>Name</th><th>Action</th></tr></thead>
            <tbody>
                {players.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td><td>{p.name}</td>
                        <td><button onClick={() => banPlayer(p.id, "griefing")} className="text-red-500">Ban</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
