let userBalance = 1000;
const betHistory = [];

function placeBet() {
  const betAmount = parseInt(document.getElementById('betAmount').value);
  const selectedTeam = document.getElementById('team').value;

  if (betAmount > 0 && betAmount <= userBalance) {
    const randomResult = Math.random() < 0.5 ? 'teamA' : 'teamB';
    const matchResult = randomResult === selectedTeam ? 'You won!' : 'You lost!';
    
    updateBetHistory(selectedTeam, betAmount, matchResult);
    updateUserBalance(matchResult, betAmount);
    updateMatchResult(matchResult);
  } else {
    alert('Please enter a valid bet amount.');
  }
}

function updateBetHistory(team, amount, result) {
  const betHistoryList = document.getElementById('betHistory');
  const listItem = document.createElement('li');
  listItem.textContent = `Bet: ${amount} - Team: ${team} - Result: ${result}`;
  betHistory.unshift(listItem.textContent);
  betHistoryList.innerHTML = '';
  betHistory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    betHistoryList.appendChild(li);
  });
}

function updateUserBalance(result, amount) {
  userBalance += result === 'You won!' ? amount : -amount;
  document.getElementById('user-balance').innerText = userBalance;
}

function updateMatchResult(result) {
  document.getElementById('matchResult').innerText = `Result: ${result}`;
}
