let nomis = {id:"nomisDisplay", count:0};

function increment(currency){
  currency.count += 1;
  document.getElementById(currency.id).innerHTML = currency.count;
}
