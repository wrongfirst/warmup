def tally(input: list[str]) -> list[str]:
    header = "Team                           | MP |  W |  D |  L |  P"
    teams = {}

    def get_team(name):
        if name not in teams:
            teams[name] = {"w": 0, "d": 0, "l": 0}
        return teams[name]

    for line in input:
        parts = line.split(";")
        if len(parts) != 3:
            continue
        team_a, team_b, result = parts

        a = get_team(team_a)
        b = get_team(team_b)

        if result == "win":
            a["w"] += 1
            b["l"] += 1
        elif result == "loss":
            a["l"] += 1
            b["w"] += 1
        elif result == "draw":
            a["d"] += 1
            b["d"] += 1

    sorted_teams = sorted(
        teams.items(),
        key=lambda item: (-(item[1]["w"] * 3 + item[1]["d"]), item[0])
    )

    rows = []
    for name, stats in sorted_teams:
        w, d, l = stats["w"], stats["d"], stats["l"]
        mp = w + d + l
        p = w * 3 + d
        rows.append(f"{name:<31}| {mp:>2} | {w:>2} | {d:>2} | {l:>2} | {p:>2}")

    return [header] + rows
