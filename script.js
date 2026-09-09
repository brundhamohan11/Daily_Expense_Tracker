const API_URL = "/expenses";

async function addExpense() {

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (!title || !amount || !date) {
        alert("Please fill all fields");
        return;
    }

    const expense = {
        title: title,
        amount: parseFloat(amount),
        category: category,
        date: date
    };

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    });

    if (response.ok) {

        alert("Expense added successfully");

        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("date").value = "";

        loadExpenses();
    }
}

async function loadExpenses() {

    const response = await fetch(API_URL);

    const expenses = await response.json();

    const table = document.getElementById("expenseTable");

    table.innerHTML = "";

    let total = 0;

    expenses.forEach(expense => {

        total += expense.amount;

        const row = `
            <tr>
                <td>${expense.title}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button onclick="deleteExpense(${expense.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        table.innerHTML += row;
    });

    document.getElementById("total").innerText = total;
}

async function deleteExpense(id) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert("Expense deleted");
        loadExpenses();
    }
}

loadExpenses();