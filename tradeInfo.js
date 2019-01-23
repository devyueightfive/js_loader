var tradeInfo = document.getElementById("trade");

function fillTradeTable(table, numberOfRows) {
    let head = document.createElement('thead');
    let row = document.createElement('tr');
    let heads = ['date', 'price', 'quantity'];
    for (let element of heads) {
        let headColumn = document.createElement('th');
        headColumn.innerHTML = element;
        row.appendChild(headColumn);
    }
    head.appendChild(row);
    table.appendChild(head);
    let tableBody = document.createElement('tbody');
    //
    for (let i = 0; i < numberOfRows; i++) {
        row = document.createElement("tr");
        let date = document.createElement("td");
        date.classList.add("date");
        let price = document.createElement("td");
        price.classList.add("price");
        let quantity = document.createElement("td");
        quantity.classList.add("type");
        //
        //date.innerHTML = new Date().toDateString();
        //price.innerHTML = i;
        //type.innerHTML = "trade";
        //
        row.appendChild(date);
        row.appendChild(price);
        row.appendChild(quantity);
        tableBody.appendChild(row);
    }//for
    table.appendChild(tableBody);
}

fillTradeTable(tradeInfo, 30);
var tradeTable = tradeInfo.querySelector('tbody');

tradeTable.addEventListener('trade-message-received', (e) => {
    tradeTable.lastChild.remove();
    let row = document.createElement("tr");
    let date = document.createElement("td");
    let price = document.createElement("td");
    let quantity = document.createElement("td");
    //
    tradeMessage = JSON.parse(tradeMessage);
    //
    date.innerHTML = tradeMessage["T"];
    price.innerHTML = tradeMessage["p"];
    quantity.innerHTML = tradeMessage["q"];
    //
    row.appendChild(date);
    row.appendChild(price);
    row.appendChild(quantity);
    tradeTable.insertBefore(row, tradeTable.firstChild);
}, false);// addEventListener
