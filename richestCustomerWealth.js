// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// eg Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10

const maximumWealth = (accounts) => {
    let wealthiest = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentTotal = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentTotal += accounts[i][j];
        }
        if (currentTotal > wealthiest) wealthiest = currentTotal;
    }

    return wealthiest
};