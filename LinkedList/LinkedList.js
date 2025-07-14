import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead === null) { this.prepend(value); }
        else {
            let temp = this.listHead;
            while(temp.nextNode !== null) { temp = temp.nextNode; }
            temp.nextNode = new Node(value);
        }

    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }

    get size() {
        let counter = 0;
        let temp = this.listHead;
        while(temp !== null) { temp = temp.nextNode; counter++; }
        return counter;
    }

    get head() {
        return this.listHead;
    }

    get tail() {
        let temp = this.listHead;
        while (temp.nextNode != null) temp = temp.nextNode;
        return temp;
    }

    at(index) {
        if (index < 0) { return this.listHead; }

        let temp = this.listHead;
        for (let count = 0; count < index; count++) {
            temp = temp.nextNode;
            if (temp === null) { return null; }
        }
        return temp;
    }

    pop() {
        if (this.listHead === null) { return null; }
        if (this.listHead.nextNode === null) { 
            const curr = this.listHead;
            this.listHead = null;
            return curr;
        }

        let prev = this.listHead;
        let curr = this.listHead.nextNode;
        while(curr.nextNode !== null) { 
            prev = curr;
            curr = curr.nextNode; 
        }

        prev.nextNode = null;
        return curr;

    }

    contains(value) {
        let temp = this.listHead;
        while (temp !== null) {
            if (temp.value === value) { return true; }
            temp = temp.nextNode;

        }
        return false;
    }

    find(value) {
        let temp = this.listHead;
        let count = 0;
        while(temp !== null) {
            if (temp.value === value) { return count; }
            count++;
            temp = temp.nextNode;
        }
        return -1;
    }

    toString() {
        let temp = this.listHead;
        let str = "";
        while(temp !== null) {
            str += `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }
        return (str += "null");

    }

    insertAt(value, index) {
        if(this.listHead === null || index <= 0) { this.prepend(value); return; }
        
        let curr = this.listHead;
        let prev = null;

        for (let count = 0; count < index; count++) {
            prev = curr;
            curr = curr.nextNode;
            if (curr === null) { break; }
        }
        const temp = new Node(value);
        prev.nextNode = temp;
        temp.nextNode = curr;
    }

    removeAt(index) {
        if(this.listHead === null) { return null; }

        if (index <= 0) {
            const removedNode = this.listHead;
            this.listHead = this.listHead.nextNode;
            return removedNode;
        }
        
        let curr = this.listHead;
        let prev = null;

        for (let count = 0; count < index; count++) {
            prev = curr;
            curr = curr.nextNode;
            if (curr === null) { return null; }
        }
        const removedNode = curr;
        prev.nextNode = curr.nextNode;
        return removedNode;
    }

}