var url = "wss://stream.binance.com:9443";
var symbol = "btcusdt";
var eventTrade = "trade";
var nameOfTrade = symbol + "@" + eventTrade;
var toStreamName = url + "/ws/" + nameOfTrade;

var socket = io(toStreamName,{
    transports: ['websocket']
});
console.log(io.protocol);
console.log(typeof io);
console.log(toStreamName);

socket.on('connect', () => {
    console.log("Socket " + socket.id + " connected to" + toStreamName);
});

socket.on(eventTrade, (data) => {
    console.log(data);
    var result = document.getElementById("result");
    result.innerText = data.toString();
});

socket.on('disconnect', () => {
    console.log("Socket " + socket.id + " disconnected.");
});
