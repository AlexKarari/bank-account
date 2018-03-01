//BUSINESS LOGIC
function Account(name,initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;
}
Account.prototype.accountDetails = function(){
  return this.name+","+this.initialDeposit;
}

//USER INTERFACE
$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();

    var name = $("input#new-name").val();
    var initialDeposit = $("input#initialdeposit").val();
    var newAccount = new Account(name, initialDeposit);

    $("ul#details").append("<li><span class='display'>"+ newAccount.accountDetails() + "</span></li>");
  });
});
