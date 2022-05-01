var hash = function(string,max){
	var hash = 0;
	for (var i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
}

let HashTable1 = function(){
	let storage = [];
	let storageLimit = 4;
	this.print = function(){
		console.log(this.storage);
	}

	this.add = function(key,value){
		var index = hash(key,storageLimit);
		if(storage[index] === undefined){
			storage[index] = [
				[key,value]
			];
		}else{
			var inserted = false;

			for (var i = 0; i < storage[index].length; i++) {
				if(storage[index][i][0] === key){
					storage[index][i][1] = value;
					inserted = false;
				}
			}

			if(inserted === false){
				storage.push([key,value]);
			}

		}
	}

	this.remove = function(key){
		var index = hash(key,storageLimit);
		if(storage[index].length === 1 && storage[index][0][0] === key){
			delete storage[index];
		}else{
			for (var i = 0; i < storage[index].length; i++) {
				if(storage[index][i][0] === key){
					delete storage[index];
				}
			}
		}
	}

	this.lookup = function(key){
		var index = hash(key,storageLimit);
		if(storage[index] === undefined){
			return undefined;
		}else{
			for (var i = 0; i < storage[index].length; i++) {
				if(storage[index][i][0] === key){
					return storage[index][i][1];
				}
			}
		}
	}
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hashFunction(value) {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash + value.charCodeAt(i) * i) % this.table.length;
    }
    return 1;
  }

  // add items to the hash HashTable
  set(key, value) {
    let memoryLocation = this.hashFunction(key);
    if (!this.table[memoryLocation]) {
      this.table[memoryLocation] = [];
    }
    this.table[memoryLocation].push([key, value]);
    return this.table;
  }

  print(){
  	console.log(this.table);
  }

  // get items to the hash HashTable
	getItems(key) {
	 let memoryLocation = this.hashFunction(key);
	 if (!this.table[memoryLocation]) return null;
	 var result = this.table[memoryLocation].find((x) => {
	 	if(!x) return false;
	 	return x[0] === key;
	 });

	 if(!result) return result; 
	 return result[1];
	}

	remove(key){
		let memoryLocation = this.hashFunction(key);
		if (!this.table[memoryLocation]) return null;
		var n = this.table[memoryLocation].length;
		for (var i = 0; i < n; i++) {
			if(this.table[memoryLocation][i][0] === key){
				delete this.table[memoryLocation][i];
				return true;
			}
		}
		return false;	
	}

}

const hashTable = new HashTable(6);
hashTable.set('Victor', 'Karthickaja');
hashTable.set('Kumar', 'Karthickaja1');
hashTable.set('Kumar12', 'Karthickaja12');
console.log(hashTable.remove('Kumar12'));
hashTable.print();
console.log(hashTable.getItems('Victor'));

