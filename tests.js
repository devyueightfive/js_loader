function test() {
    var myBuffer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];
    console.log(myBuffer);
    var rBuffer = new RoundBuffer(5);
    for (let i of myBuffer) {
        rBuffer.push(i);
        console.log(i);
        console.log(rBuffer.show());
    }
}

//test();

QUnit.test("Round Buffer basics", function (assert) {
    var myBuffer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11];
    var rBuffer = new RoundBuffer(5);
    for (let i of myBuffer) {
        rBuffer.push(i);
    }
    let b = rBuffer.show();
    assert.equal(b[0], "11");
    assert.equal(b[1], "0");
    assert.equal(b[2], "9");
    assert.equal(b[3], "8");
    assert.equal(b[4], "7");
});