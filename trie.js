let Node = function(){
	this.keys = new Map();
	this.end = false;
	this.setEnd = function(){
		this.end = true;
	}
	this.isEnd = function(){
		return this.end;
	}
}

let Trie = function(){
	this.root = new Node();
	let words = [];
	this.add = function(input,node=this.root){
		if(input.length === 0){
			node.setEnd();
			return;
		}else if(!node.keys.has(input[0])){
			node.keys.set(input[0],new Node);
			return this.add(input.substr(1),node.keys.get(input[0]));
		}else{
			return this.add(input.substr(1),node.keys.get(input[0]));
		}
	}

	this.isWord = function(word){
		currentNode = this.root;
		for (var i = 0; i < word.length; i++) {
			if(currentNode.keys.has(word[i])){
				currentNode = currentNode.keys.get(word[i]);
				if(word.length - 1 == i){
					return currentNode.isEnd();
				}
			}else{
				return false;
			}
		}
		return false;
	}

	this.print = function(){
		let node = this.root;
		words = [];
		let result = new Array();
		for (const [key, value] of node.keys) {
			let temp = `${key}`;
			getWord(value,key);
		}
		console.log(words);
	}

	function getWord(node,root_key){
		if(node.isEnd()){
			words.push(root_key);
		}
		for (const [key, value] of node.keys) {
			let newTempKey = root_key+key;
			if(value.keys.size > 0){
				getWord(value,newTempKey);	
			}else if(value.isEnd()){
				words.push(newTempKey);
			}
		}
	}
}

let trie = new Trie();
trie.add('ball');
trie.add('b');
trie.add('boobs');
trie.add('bat');
trie.add('do');
trie.add('dorm');
trie.add('dork');
trie.add('doll');
trie.add('send');
trie.add('sense');
trie.print();
// console.log(trie.isWord('do'))
// console.log(trie.isWord('bat'))
// console.log(trie.isWord('dor'))
// console.log();


