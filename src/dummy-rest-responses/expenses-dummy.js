const expenses_dummy = {
    "groupId": 1,
    "groupName": "G2",
    "totalBalance": -300,
    "debts": [
        {
            "personId": 2,
            "personName": "Nikhil R",
            "amount": 100
        },
        {
            "personId": 3,
            "personName": "Fahad S",
            "amount": "100"
        }
    ],
    "currency": "$",
    "expenses": [
        {
            "expenseId": "1",
            "expenseName": "Groceries",
            "paidBy": "Anandu B",
            "paidById": "12",
            "amountPaid": 350,
            "expenseDate": "June 30 2024",
            "shares": [
                {
                    "personId": 1,
                    "personName": "You",
                    "amount": 50
                },
                {
                    "personId": 2,
                    "personName": "Nikhil R",
                    "amount": 100
                },
                {
                    "personId": 3,
                    "name": "Fahad S",
                    "amount": "100"
                }
            ]
        }
    ]
}

export default expenses_dummy;