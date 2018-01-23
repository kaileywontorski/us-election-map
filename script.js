//adding politician
var politician = function(name, color) {
  var politic = {};
  politic.name = name;
  politic.results = null;
  politic.totalVotes = 0;
  politic.color = color;

  politic.announcePolitic = function() {
    console.log(this.name + " is running for the U.S. Election!");
  };
  politic.announcePolitic();
  //tallying up votes
  politic.tallyVotes = function() {
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  return politic;
};

//listing total results
var candidateOne = politician("Jessica Day", [132, 17, 11]);
var candidateTwo = politician("Nick Miller", [245, 141, 136]);
console.log("Jessica Day's color is" + candidateOne.color);
console.log("Nick Miller's color is" + candidateTwo.color);

candidateOne.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidateTwo.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//results changed, time to update
candidateOne.electionResults[9] = 1;
candidateTwo.electionResults[9] = 28;

candidateOne.electionResults[4] = 17;
candidateTwo.electionResults[4] = 38;

candidateOne.electionResults[43] = 11;
candidateTwo.electionResults[43] = 27;

console.log(candidateOne.electionResults);
console.log(candidateTwo.electionResults);

//creating setStateResults, state is parameter
var setStateResults = function(state) {
  theStates[state].winner = null;
  if (candidateOne.electionResults[state] > candidateTwo.electionResults[state]) {
    theStates[state].winner = candidateOne;
  } else if (candidateTwo.electionResults[state] > candidateOne.electionResults[state]) {
    theStates[state].winner = candidateTwo;
  }

//setting color of candidates
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

//setting up table
  var stateInfoTable = document.getElementById('stateResults');
  var stateHeader = stateInfoTable.children[0];
  var stateBody = stateInfoTable.children[1];
  var stateName = stateHeader.children[0].children[0];
  var stateAbbrev = stateHeader.children[0].children[1];
  var candidateOneName = stateBody.children[0].children[0];
  var candidateOneResults = stateBody.children[0].children[1];
  var candidateTwoName = stateBody.children[1].children[0];
  var candidateTwoResults = stateBody.children[1].children[1];
  var resultsRow = stateBody.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  candidateOneName.innerText = candidateOne.name;
  candidateOneResults.innerText = candidateOne.electionResults[state];
  candidateTwoName.innerText = candidateTwo.name;
  candidateTwoResults.innerText = candidateTwo.electionResults[state];
  if (theStates[state].winner === null) {
    resultsRow.innerText = "TIED!";
  } else {
    resultsRow.innerText = theStates[state].winner.name;
  }
};

//tallying up votes
candidateOne.tallyVotes();
candidateTwo.tallyVotes();
console.log("Jessica Day's results come out to " + candidateOne.totalVotes + " votes!");
console.log("Nick Miller's results come out to " + candidateTwo.totalVotes + " votes!");

//labeling the winner
var winner;
if (candidateOne.totalVotes > candidateTwo.totalVotes) {
  winner = "Jessica Day";
} else if (candidateOne.totalVotes == candidateTwo.totalVotes) {
  winner = "TIED!";
} else {
  winner = "Nick Miller";
}
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = candidateOne.name;
row.children[1].innerText = candidateOne.totalVotes;
row.children[2].innerText = candidateTwo.name;
row.children[3].innerText = candidateTwo.totalVotes;
row.children[5].innerText = winner;

console.log(this.winner + " just won the election!");
