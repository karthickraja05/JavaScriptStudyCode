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
	this.words = [];
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

	this.getWords2 = function(node,root_key){
		if(node.isEnd()){
			this.words.push(root_key);
		}
		for (const [key, value] of node.keys) {
			let newTempKey = root_key+key;
			if(value.keys.size > 0){
				this.getWords2(value,newTempKey);	
			}else if(value.isEnd()){
				this.words.push(newTempKey);
			}
		}
	}

	this.getWords = function(key){
		let node = this.root;
		this.words = [];
		let all = false;
		for (var i = 0; i < key.length; i++) {
			if(node.keys.get(key[i])){
				node = node.keys.get(key[i]);
			}else{
				all = true;
				break;
			}
		}
		
		if(!all){
			this.getWords2(node,key);
		}
		return this.words;
	}

}

let trie = new Trie();
trie.add('ball');
trie.add('bacc');
trie.add('bat');
trie.add('b');
trie.add('karthickraj');
// trie.add('do');
// trie.add('dorm');
// trie.add('dork');
// trie.add('doll');
// trie.add('send');
// trie.add('sense');
// console.log(trie.isWord('do'))
// console.log(trie.isWord('bat'))
// console.log(trie.isWord('dor'))
// console.log(trie);
// trie.print();

$('#search').on('change',function(e){
	let search_word = $(this).val();
	if(search_word == ''){
		$('#list').html('<li>No Data Found</li>');
	}else{
		let appendData = trie.getWords(search_word);
		if(appendData.length == 0){
			$('#list').html('<li>No Data Found</li>');	
		}else{
			updateLi(appendData);
		}
		
	}
});



function updateLi(data){
	html = '';
	for (var i = 0; i < data.length; i++) {
		html += `<li>${data[i]}</li>`;
	}
	$('#list').html(html);
}
