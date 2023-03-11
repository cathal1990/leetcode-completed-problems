function stableInternships(interns, teams) {
    let matchings = {};
    let available_interns = new Array(interns.length).fill(true)
  
    while (available_interns.includes(true)) {
      let intern;
      for (let i=0; i<available_interns.length; i++) {
        if (available_interns[i]) {
          intern = i;
          break
        }
      }
      let team = interns[intern][0];
      interns[intern].shift();
  
      if (!matchings.hasOwnProperty(team)) {
        matchings[team] = intern;
        available_interns[intern] = false;
      } 
      else {
        let current_intern = matchings[team];
        if (teams[team].indexOf(intern) < teams[team].indexOf(current_intern)) {
          matchings[team] = intern;
          available_interns[intern] = false;
          available_interns[current_intern] = true;
        }
      }
    }
    return Object.entries(matchings).map(([key, val]) => [val, Number(key)])
  }