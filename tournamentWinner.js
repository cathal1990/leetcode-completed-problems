//AlgoExpert - Tournament Winner

function tournamentWinner(competitions, results) {
    // Write your code here.
    let teams = {};
    let leader = '';
    let leaderPoints = 0;

    for (let i=0; i < competitions.length; i++) {
      if (!teams[competitions[i][0]]) {
        teams[competitions[i][0]] = 0
      }
      if (!teams[competitions[i][1]]) {
        teams[competitions[i][1]] = 0
      }
      results[i] === 0 ? teams[competitions[i][1]] += 3 : teams[competitions[i][0]] += 3;

      if (teams[competitions[i][0]] > leaderPoints) {
        leader = competitions[i][0];
        leaderPoints = teams[competitions[i][0]]
      }
      if (teams[competitions[i][1]] > leaderPoints) {
        leader = competitions[i][1];
        leaderPoints = teams[competitions[i][1]]
      }
    }

    // for (let key in teams) {
    //   if (teams[key] > leaderPoints) leader = key;
    //   leaderPoints = teams[key]
    // }

    return leader

  }