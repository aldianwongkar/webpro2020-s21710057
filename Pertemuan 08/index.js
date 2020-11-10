  
let account = {
    name: "Aldi",
    expenses: []
  //   ,  addExpenses: function(description, amount){
  //      totalExp = 0;
  //      amount = totalExp + amount;
  //      this.expenses.push(description);
  //      this.expenses.push(amount);
  //   },
  };
  let totalExpenses = 0;
  let addExpenses = function(description, amount){
      account.expenses.push({description: description, amount: amount})
  }

  let getAccountSummary = function(){ 
      account.expenses.forEach(function(){
       totalExpenses = totalExpenses + account.expenses.amount;
    });
    console.log("Total pengeluaran " + account.name + " adalah Rp. " + totalExpenses);
 }