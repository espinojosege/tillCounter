class tItem {
  constructor(name, value, type) {
    this.name = name;
    this.value = value;
    this.type = type;
    this.inputAmount = 0;
    this.total = 0;
    tItem.all.push(this);
  }

  static all = [];

  getTotal() {
    return (this.value * Number(this.inputAmount)).toFixed(2);
  }

  static sumAllValues() {
    let sum = 0;
    tItem.all.forEach((item) => {
      sum += Number(item.total);
    });
    return sum.toFixed(2);
  }
  static sumAllVAmounts() {
    let sum = 0;
    tItem.all.forEach((item) => {
      sum += Number(item.inputAmount);
    });
    return sum;
  }
}

let Penny = new tItem("Penny", 0.01, "coin");
let Nickle = new tItem("Nickle", 0.05, "coin");
let Dime = new tItem("Dime", 0.1, "coin");
let Quarter = new tItem("Quarter", 0.25, "coin");
let halfDollar = new tItem("Half-Dollar", 0.5, "coin");
let dollarCoin = new tItem("Dollar-Coin", 1, "coin");
let One = new tItem("One", 1, "bill");
let Two = new tItem("Two", 2, "bill");
let Five = new tItem("Five", 5, "bill");
let Ten = new tItem("Ten", 10, "bill");
let Twenty = new tItem("Twenty", 20, "bill");
let Fifty = new tItem("Fifty", 50, "bill");
let Hundred = new tItem("Hundred", 100, "bill");
let pennyRoll = new tItem("Penny-Roll", 0.5, "roll");
let nickleRoll = new tItem("Nickle-Roll", 2, "roll");
let dimeRoll = new tItem("Dime-Roll", 5, "roll");
let quarterRoll = new tItem("Quarter-Roll", 10, "roll");

let tbody = document.getElementById("tbody");
let inputs = document.getElementById("inputs");
let form = document.createElement("form");
inputs.appendChild(form);
let tfoot = document.getElementById("tfoot");
let tfootrow = tfoot.insertRow();
let tfootNameCell = tfootrow.insertCell(0);
let tfootAmountCell = tfootrow.insertCell(1);
let tfootTotalAmount = tfootrow.insertCell(2);
tfootNameCell.innerHTML = "Total";
let depositRow = tfoot.insertRow();
let depositNameCell = depositRow.insertCell(0);
let depositAmountCell = depositRow.insertCell(1);
let depositTotalAmount = depositRow.insertCell(2);
depositNameCell.innerHTML = "Deposit";

tItem.all.forEach((item, index) => {
  let row = tbody.insertRow();
  let nameCell = row.insertCell(0);
  let amountCell = row.insertCell(1);
  let totalAmount = row.insertCell(2);
  let nameCellText = document.createTextNode(item.name);
  let amountCellText = document.createTextNode(item.inputAmount);
  nameCell.appendChild(nameCellText);
  amountCell.appendChild(amountCellText);
  totalAmount.innerHTML = `$${item.getTotal()}`;

  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("value", item.name);
  input.setAttribute("placeholder", item.name);
  input.addEventListener("input", function (event) {
    console.log(event);
    item.inputAmount = input.value * 1;
    console.log(typeof item.inputAmount);
    item.total = item.value * item.inputAmount;
    totalAmount.innerHTML = `$${item.total.toFixed(2)}`;
    amountCell.innerHTML = item.inputAmount;
    console.log(tItem.sumAllValues());
    tfootAmountCell.innerHTML = `${tItem.sumAllVAmounts()}`;
    tfootTotalAmount.innerHTML = `$${tItem.sumAllValues()}`;
    depositAmountCell.innerHTML = `Total - $500`;
    depositTotalAmount.innerHTML = `$${(tItem.sumAllValues() - 500).toFixed(
      2
    )}`;
  });

  form.appendChild(input);

  console.log(item, index);
});
