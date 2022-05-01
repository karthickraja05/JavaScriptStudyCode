function LinkedList() {
	let length = 0;
	let head = null;

	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	this.size = function(){
		return length;
	}

	this.head = function(){
		return head;
	}

	this.add = function(element){
		var node = new Node(element);
		if(head === null){
			head = node;
		}else{
			let currentNode = head;
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}

		length++;
	}

	this.remove = function(element){
		let currentNode = head;
		let previousNode;
		
		if(currentNode.element === element){
			head = currentNode.next;
		}else{
			while(currentNode && currentNode.element !== element){
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			if(!currentNode) return undefined;

			previousNode.next = currentNode.next;

		}

		length--;
		return true;
	}

	this.isEmpty = function(){
		return length === 0;
	}

	this.indexOf = function(element){
		let currentNode = head;
		let currentIndex = 0;
		while(currentNode && currentNode.element !== element){
			currentNode = currentNode.next;
			currentIndex++;
		}
		if(!currentNode) return undefined;
		if(currentNode.element === element) return currentIndex;
	}

	this.elementAt = function(index){
		let currentNode = head;
		let currentIndex = 0;
		if(currentIndex == index) return currentNode ? currentNode.element : undefined;
		while(currentNode && currentIndex !== index){
			currentNode = currentNode.next;
			currentIndex++;
		}
		if(!currentNode) return undefined;
		if(currentIndex === index) return currentNode.element;
	}

	this.addAt = function(index,element){
		if(index > length){
			return false;
		}
		let newNode = new Node(element);
		let currentNode = head;
		if(index === 0){
			newNode.next = currentNode;
			head = newNode;
		}else{
			currentIndex = 1;
			while(currentNode && currentIndex !== index){
				currentIndex++;
				if(!currentNode.next){
					currentNode.next = newNode;
					length++;
					return true;	
				}
				currentNode = currentNode.next;
			}

			if(currentNode && currentIndex === index){
				newNode.next = currentNode.next;
				currentNode.next = newNode;
			}else{
				return false;
			}
		}
		length++;
		return true;
	}

	this.removeAt = function(index){
		if(index < 0 || index > length){
			return false;
		}
		let currentNode = head;
		let previousNode;


		if(index === 0){
			head = currentNode.next;
		}else{
			currentIndex = 0
			while(currentNode && currentIndex !== index){
				previousNode = currentNode;
				currentNode = currentNode.next;
				currentIndex++;
			}

			if(currentNode && currentIndex === index){
				previousNode.next = currentNode.next
			}else{
				return false;
			}

		}
		length--;
		return true;
	}

	this.getAllElement = function(){
		let elementArr = new Array();
		let currentNode = head;
		while(currentNode){
			elementArr.push(currentNode.element);
			currentNode = currentNode.next;
		}
		return elementArr;
	}

}


let linklist1 = new LinkedList();
linklist1.add(6); // 0
linklist1.add(9); // 1
linklist1.add(10); // 2
linklist1.add(15); // 3
linklist1.add(18); // 4
linklist1.add(1); // 5
console.log(linklist1.getAllElement());

// console.log(linklist1.indexOf(90));
// console.log(linklist1.remove(10));
// console.log(linklist1.elementAt(0));
// console.log(linklist1.addAt(0,89));
// console.log(linklist1.elementAt(0));
console.log(linklist1.size());
console.log(linklist1.addAt(1,99));
console.log(linklist1.addAt(111,100));
console.log(linklist1.removeAt(1));
console.log(linklist1.size());
console.log(linklist1.getAllElement());

