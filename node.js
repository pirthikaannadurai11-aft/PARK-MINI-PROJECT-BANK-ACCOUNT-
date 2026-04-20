// ✅ Class
class BankAccount {
  balance = 0

  deposite(amount) {
    if (amount > 0) {
      this.balance += amount
      history.push("Deposited ₹" + amount)
      return 'Deposited: ' + amount
    }
    return 'Invalid amount'
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return 'Insufficient balance'
    }
    if (amount <= 0) {
      return 'Invalid amount'
    }
    this.balance -= amount
    history.push("Withdrawn ₹" + amount)
    return 'Withdrawn: ' + amount
  }

  checkBalance() {
    return 'Current Balance: ' + this.balance
  }
}

// ✅ Object
const acc = new BankAccount()

let correctPin = "1104"

let attempts = 0;
let maxAttempts = 3;

// ✅ History
let history = [];

// ✅ Functions
function deposite() {
  let amt = document.getElementById('amount').value
  display(acc.deposite(Number(amt)))
}

function withdraw() {
  let amt = document.getElementById('amount').value
  display(acc.withdraw(Number(amt)))
}

function checkBal() {
  display(acc.checkBalance())
}

function display(msg) {
  document.getElementById('output').innerText = msg
}

function checkLogin() {
  while (attempts < maxAttempts) {
    let userPin = prompt("Enter your PIN")

    if (userPin === correctPin) {
      alert("Login Successful ✅")
      return; // stop loop
    } else {
      attempts++;
      alert("Wrong PIN ❌ Attempt: " + attempts)
    }
  }

  // ❌ 3 attempts over
  document.body.innerHTML = "<h2>Account Locked 🔒</h2>"
}

function setAmount(value) {
  document.getElementById('amount').value = value
}

function showHistory() {
  let box = document.getElementById("historyBox")

  if (history.length === 0) {
    box.innerText = "No transactions yet"
  } else {
    box.innerText = history.join("\n")
  }
}

function toggleMode() {
  document.body.classList.toggle("light")
}

checkLogin()

function checkMinimumBalance() {
  let minBalance = 500;

  if (acc.balance < minBalance) {
    display("Warning: Your balance is below minimum (₹" + minBalance + ")");
  } else {
    display("Your balance is safe (Above ₹" + minBalance + ")");
  }
}