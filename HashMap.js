import { LinkedList } from "./LinkedList/LinkedList.js";


export class HashMap {

    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;

        this._currSize = 0;

        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
            
    }

    get currSize() {
        return this._currSize;
    }

    set currSize(value) {
        this._currSize = value;
        if (this._currSize > this.capacity * this.loadFactor) {
            const oldBuckets = this.buckets;
            this.capacity *= 2;

            this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
            this._currSize = 0;

            for (const bucket of oldBuckets) {
                let pair = bucket.listHead;

                while(pair !== null) {
                    this.set(pair.value.key, pair.value.value);
                    pair = pair.nextNode;

                }
            }
        }
    }


    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }
        
        return hashCode;
    }

    set(key, value) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.size; i++) {
            const pair = bucket.at(i);

            if(pair.value.key === key) {

                pair.value.value = value;
                return;

            }
        }

        bucket.append({ key, value });
        this.currSize = this.currSize + 1;
    }

    get(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];
          

        for (let i = 0; i < bucket.size; i++) {
            const pair = bucket.at(i);

            if(pair.value.key === key) {
                return pair.value.value;

            }
        }

        return null;
    }

    has(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.size; i++) {
            const pair = bucket.at(i);

            if(pair.value.key === key) {
                return true;

            }
        }

        return false;
    }

    remove(key) {
        const bucketIndex = this.hash(key);
        const bucket = this.buckets[bucketIndex];

        for (let i = 0; i < bucket.size; i++) {
            const pair = bucket.at(i);

            if(pair.value.key === key) {
                bucket.removeAt(i);
                this.currSize = this.currSize - 1;
                return true;

            }
        }

        return false;
    }

    get length() {
        return this.currSize;
    }

    clear() {
        this.capacity = 16;
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
        this.currSize = 0;
    }

    keys() {
        let returnArr = [];

        this.buckets.forEach((bucket) => {
            for (let i = 0; i < bucket.size; i++) {
                returnArr.push(bucket.at(i).value.key);

            }

        });

        return returnArr;
    }

    values() {
        let returnArr = [];

        this.buckets.forEach((bucket) => {
            for (let i = 0; i < bucket.size; i++) {
                returnArr.push(bucket.at(i).value.value);

            }

        });

        return returnArr;
    }

    entries() {
        let returnArr = [];

        this.buckets.forEach((bucket) => {
            for (let i = 0; i < bucket.size; i++) {
                const pair = bucket.at(i);

                returnArr.push([pair.value.key, pair.value.value]);

            }

        });

        return returnArr;
    }
}