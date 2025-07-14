import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";

const hashMap = new HashMap();

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown'); ///////11
hashMap.set('elephant', 'gray');

hashMap.set('frog', 'green');
hashMap.set('grape', 'purple'); //////12
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');

hashMap.set('kite', 'pink');
hashMap.set('lion', 'golden');



hashMap.set('moon', 'silver');



const hashSet = new HashSet();

hashSet.add('apple');
hashSet.add('banana');
hashSet.add('banana');
hashSet.add('dog');
hashSet.add('elephant');


console.log(hashSet.values());