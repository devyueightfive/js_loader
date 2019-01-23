function RoundBuffer(limit) {
    this._limit = limit;
    this._buffer = [];
    this._index = 0;

    this.push = (data) => {
        this._buffer[this._index] = data;
        this._index += 1;
        this._index %= this._limit;
    };

    this.show = () => {
        var result = [];
        for (let i = 0; i < this._limit; i++) {
            index = (this._index - i - 1) > 0 ? (this._index - i - 1) : (this._index - i - 1 + this._limit);
            result[i] = this._buffer[index % this._limit];
        }
        return result;
    };
}


