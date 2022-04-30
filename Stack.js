var Stack = function(){
	this.count = 0;
	this.storage = {};
	this.push = function(val){
		this.storage[this.count] = val;
		this.count++;
	}

	this.pop = function(){
		var result = this.storage[this.count-1];
		delete this.storage[this.count-1];
		this.count--;
		return result;
	}

	this.peek = function(){
		return this.storage[this.count-1];
	}
}

var stack1 = new Stack();


stack1.push(1);
stack1.push(5);
stack1.push(4);
stack1.push(6);
stack1.push(90);
stack1.peek();
stack1.pop();

console.log(stack1.count);