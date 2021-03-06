class Node{
	constructor(data,left = null,right= null){
		this.data = data; 
		this.left = left; 
		this.right = right; 
	}
}


class BST{
	constructor(){
		this.root = null;
	}

	add (data){
		const node = this.root;
		if(node === null){
			this.root = new Node(data);
			return;
		}else{
			const searchTree = function(node){
				if(data < node.data){
					if(node.left === null){
						node.left = new Node(data);
						return;
					}else if(node.left !== null){
						return searchTree(node.left);
					}
				}else if(data > node.data){
					if(node.right === null){
						node.right = new Node(data);
					}else if(node.right !== null){
						return searchTree(node.right);
					}
				}else{
					return null;
				}
			}

			return searchTree(node);
		}
	}

	findMin(){
		let current = this.root;
		while(current.left !== null){
			current = current.left;
		}
		return current.data;
	}

	findMax(){
		let current = this.root;
		while(current.right !== null){
			current = current.right;
		}
		return current.data;
	}

	find(data){
		let current = this.root;
		while(current.data !== data){
			if(data < current.data){
				current = current.left;
			}else if(data > current.data){
				current = current.right;
			}
			if(current === null){
				return null;
			}
		}

		return current;
	}

	remove(data){
		const removeNode = function(node,data){
			if(node === null){
				return null;
			}

			if(data == node.data){

				// no child
				if(node.left === null && node.right === null){
					return null;
				}

				// no left child
				if(node.left === null){
					return node.right;
				}

				// no left child
				if(node.right === null){
					return node.left;	
				}

				var tempNode = node.right;
				while(tempNode.left !== null){
					tempNode = tempNode.left;
				}
				node.data = tempNode.data;
				node.right = removeNode(node.right,tempNode.data);
				return node;
			}else if(data < node.data){
				node.left = removeNode(node.left,data);
				return node;
			}else if (data > node.data){
				node.right = removeNode(node.right,data);
				return node;
			}

		}

		this.root = removeNode(this.root,data);
	}

	findMinHeight(node = this.root){
		if(node === null){
			return -1;
		}

		let left = this.findMinHeight(node.left);
		let right = this.findMinHeight(node.right);
		if(left < right){
			return left + 1;
		}else{
			return right + 1;
		}
	}

	findMaxHeight(node = this.root){
		if(node === null){
			return -1;
		}

		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);

		if(left > right){
			return left + 1;
		}else{
			return right + 1;
		}
	}

	isBalanced(){
		return (this.findMinHeight() >= this.findMaxHeight() -1);
	}

	inOrder(){
		if(this.root === null){
			return null;
		}else{
			var result = new Array();
			function traverseInOrder(node){
				node.left && traverseInOrder(node.left);
				result.push(node.data);
				node.right && traverseInOrder(node.right);
			}
			traverseInOrder(this.root);
			return result;
		}
	}

	preOrder(){
		if(this.root === null){
			return null;
		}else{
			var result = new Array();
			function traversePreOrder(node){
				result.push(node.data);
				node.left && traversePreOrder(node.left);
				node.right && traversePreOrder(node.right);
			}
			traversePreOrder(this.root);
			return result;
		}
	}

	postOrder(){
		if(this.root === null){
			return null;
		}else{
			var result = new Array();
			function traversePostOrder(node){
				node.left && traversePostOrder(node.left);
				node.right && traversePostOrder(node.right);
				result.push(node.data);
			}
			traversePostOrder(this.root);
			return result;
		}
	}

	levelOrder(){
		if(this.root === null){
			return null;
		}else{
			let result = new Array();
			var queue = [this.root];
			while(queue.length > 0){
				var current = queue.shift();
				result.push(current.data);
				current.left && queue.push(current.left);
				current.right && queue.push(current.right);
			}

			return result;
		}
	}


}

const bst = new BST;

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);

console.log("InOrder "+bst.inOrder());
console.log("preOrder "+bst.preOrder());
console.log("postOrder "+bst.postOrder());
console.log("LevelOrder "+bst.levelOrder());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());


// bst.add(8);
// bst.add(3);
// bst.add(14);
// bst.add(1);
// bst.add(6);
// bst.add(4);
// bst.add(7);

// console.log(bst.findMin());

// setTimeout(()=>{
// 	bst.remove(1);
// 	console.log(bst);	
// 	console.log(bst.findMin());
// 	console.log(bst.find(1));
// },2000)

// console.log(bst);

