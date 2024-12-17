def tally(rows):
    table = {}
    output = ['Team' + ' ' * 27 + '| MP |  W |  D |  L |  P']
    for game in rows:
        data = game.split(';')
        team_1 = table.setdefault(data[0], {})
        team_2 = table.setdefault(data[1], {})
        team_1['mp'] = team_1.setdefault('mp', 0) + 1
        team_2['mp'] = team_2.setdefault('mp', 0) + 1
        if data[2] == 'draw':            
            team_1['d'] = team_1.setdefault('d', 0) + 1
            team_2['d'] = team_2.setdefault('d', 0) + 1
        elif data[2] == 'win':
            team_1['w'] = team_1.setdefault('w', 0) + 1
        else:
            team_2['w'] = team_2.setdefault('w', 0) + 1
            
    return output + [f"{team}{' ' * (31 - len(team))}|  {table[team]['mp']} |  {table[team].get('w', 0)} |  {table[team].get('d', 0)} |  {table[team]['mp'] - table[team].get('w', 0) - table[team].get('d', 0)} |{str(table[team].get('w', 0) * 3 + table[team].get('d', 0)).rjust(3)}" for team in sorted(table,  key = lambda x : (-(table[x].get('w', 0) * 3 + table[x].get('d', 0)), x))]