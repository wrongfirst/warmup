interface TeamStats {
  name: string;
  w: number;
  d: number;
  l: number;
}

export function tally(input: string[]): string[] {
  const header = "Team                           | MP |  W |  D |  L |  P";
  const teams = new Map<string, TeamStats>();

  const getTeam = (name: string): TeamStats => {
    if (!teams.has(name)) {
      teams.set(name, { name, w: 0, d: 0, l: 0 });
    }
    return teams.get(name)!;
  };

  for (const line of input) {
    const parts = line.split(";");
    if (parts.length !== 3) continue;
    const [teamA, teamB, result] = parts;

    const a = getTeam(teamA);
    const b = getTeam(teamB);

    if (result === "win") {
      a.w++;
      b.l++;
    } else if (result === "loss") {
      a.l++;
      b.w++;
    } else if (result === "draw") {
      a.d++;
      b.d++;
    }
  }

  const sortedTeams = Array.from(teams.values()).sort((t1, t2) => {
    const p1 = t1.w * 3 + t1.d;
    const p2 = t2.w * 3 + t2.d;
    if (p1 !== p2) return p2 - p1;
    return t1.name.localeCompare(t2.name);
  });

  const rows = sortedTeams.map((t) => {
    const mp = t.w + t.d + t.l;
    const p = t.w * 3 + t.d;
    const padName = t.name.padEnd(31, " ");
    const padMp = String(mp).padStart(2, " ");
    const padW = String(t.w).padStart(2, " ");
    const padD = String(t.d).padStart(2, " ");
    const padL = String(t.l).padStart(2, " ");
    const padP = String(p).padStart(2, " ");
    return `${padName}| ${padMp} | ${padW} | ${padD} | ${padL} | ${padP}`;
  });

  return [header, ...rows];
}
