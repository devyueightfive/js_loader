var url = "wss://stream.binance.com:9443";
var symbol = "btcusdt";
var eventTrade = "trade";
var nameOfTrade = symbol + "@" + eventTrade;
var toStreamName = url + "/ws/" + nameOfTrade;

var socket = new WebSocket(toStreamName);

var tradeMessage;
var tradeMessageEvent = new Event('trade-message-received');


var log = console.log;

socket.onopen = function () {
    log("Соединение установлено.");
};

socket.onmessage = function (event) {
    tradeMessage = event.data;
    tradeTable.dispatchEvent(tradeMessageEvent);
    log("Получены данные " + event.data);
};

socket.onerror = function (error) {
    log("Ошибка " + error.message);
};