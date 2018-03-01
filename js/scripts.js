//BUSINESS LOGIC
function Account(name, initialDeposit, deposit, withdrawal) {
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal
}
Account.prototype.accountDetails = function() {
  return this.name + "," + this.initialDeposit;
}

//USER INTERFACE
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
        event.preventDefault();

    var name = $("input#new-name").val();
    var initialDeposit = parseInt($("input#initialdeposit").val());
    var deposit = parseInt($("input#depositamount").val());
    var withdrawal = parseInt($("input#withdrawamount").val());
    var newAccount = new Account(name, initialDeposit);

    $("h3#balance").after("Ksh." + "" + newAccount.initialDeposit);
    //  $("ul#details").append("<li><span class='display'>"+ newAccount.accountDetails() + "</span></li>");
    $("input#new-name").val("");
    $("input#initialdeposit").val("");
    $("input#depositamount").val("");
    $("input#withdrawamount").val("");
  });
});
