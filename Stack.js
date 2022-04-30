var Stack = function(){
	this.count = 0;
	this.storage = {};
	this.push = function(val){
		this.storage[this.count] = val;
		this.count++;
	}

	this.pop = function(){
		var result = this.storage[this.count];
		delete this.storage[this.count];
		this.count--;
		return result;
	}

	this.pop = function(){
		return this.storage[this.count];
	}
}