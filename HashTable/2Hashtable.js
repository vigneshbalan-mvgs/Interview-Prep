class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) { // _hash => private property
    let hash = 0; // create a new varial that is 0
    for (let i = 0; i < key.length; i++) { // key is grep the length of input
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;// charCodeAt(); => UTF-16
      
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      console.log(this.data);
    }
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable._hash("grapes", 10000);
