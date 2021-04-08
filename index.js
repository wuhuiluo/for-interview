// JS数据类型
// 六种原始类型
// string number boolean null undefined symbol
// 对象类型存储的是地址，原始类型存储的是值
// typeof返回的是字符串
// console.log(typeof 1 === 'number');
// console.log(typeof '1' === 'string');
// console.log(typeof true === 'boolean');
// console.log(typeof undefined === 'undefined');
// console.log(typeof Symbol() === 'symbol');
// console.log(typeof [] === 'object');
// console.log(typeof {} === 'object');
// console.log(typeof console.log === 'function')
// function Person(name) {
//     this.name = name
// }

// var p1 = new Person()
// console.log(p1 instanceof Person);

// var p2 = new String()
// console.log(p2 instanceof String);
// JS类型转换只有三种 number string boolean

// 调用new的过程如下
// 1.创建一个新对象
// 2.原型绑定
// 3.绑定this到这个新对象上
// 4.返回新对象

// 1.独立函数调用this指向全局对象windowvar name = 'global name';
// var name = 'global name'
// var foo = function () {
//     console.log(this.name);
// }
// var Person = function (name) {
//     this.name = name;
// }
// Person.prototype.getName = function () {
//     console.log(this.name);
// }
// var obj = {
//     name: 'obj name',
//     foo: foo
// }
// var obj1 = {
//     name: 'obj1 name'
// }
// foo(); // global name 独立函数调用
// obj.foo();
// obj.foo.apply(obj1);
// var p1 = new Person('p1 name');
// p1.getName();

// 闭包:当一个函数能够记住并访问他所在的词法作用域的时候，就产生了闭包

// 1.返回一个函数
// 2.作为函数参数传递
// 3.回调函数 setTimeout定时器和事件监听
// 4.立即执行函数

// 立即执行函数

// 深浅拷贝


// 使用Object.assign() 方法
// 利用...扩展运算符
// var obj = {
//     name: '张三',
//     age: 23,
//     isStudent: false,
//     job: {
//         name: 'FE',
//         age: 12
//     }
// }

// var newObj = Object.assign({},obj)
// obj.job.money = 21
// console.log(newObj.name);
// console.log(newObj.age);
// console.log(newObj.job.money);
// call函数封装
// function call(Fn, obj, ...args) {
//     if(obj === null || obj === undefined) {
//         obj = globalThis // 全局对象
//     }
//     obj.temp = Fn // obj添加临时方法
//     let result = obj.temp(...args) // 添加temp方法
//     delete obj.temp // 删除temp方法
//     return result
// }
// apply函数封装
// function apply(Fn, obj, args) {
//     if(obj === null || obj === undefined) {
//         obj = globalThis
//     }
//     obj.temp = Fn
//     let result = obj.temp(...args)
//     delete obj.temp
//     return result
// }
// bind函数封装
// function bind(Fn, obj, ...args) {
//     return function (...args2) {
//         //执行 call函数
//         return call(Fn, obj, ...args, ...args2)
//     }
// }
// 节流
// function throttle(callback, wait) {
//     let start = 0
//     return function (e) {
//         let now = new Date()
//         if (now - start >= wait) {
//             callback.call(this, e)
//             start = now
//         }
//     }
// }

// window.addEventListener('scroll',throttle(function(e) {
//     console.log('abc');
// },500))
// 防抖
// function debounce(callback, time) {
//     let timeId = null
//     return function (e) {
//         if (timeId !== null) {
//             clearTimeout(timeId)
//         }
//         timeId = setTimeout(() => {
//             callback(this, e)
//             timeId = null
//         }, time)
//     }
// }

// let input1 = document.getElementById('input1')
// input1.onkeydown = debounce(function (e) {
//     console.log(e);
// }, 1000)
// 实现数组的map方法


// const result = map(arr,(item,index) => {
//     console.log(index);
//     return item * 10
// })
// console.log(result);
// function map(arr,callback) {
//     let result = []
//     for(let i = 0; i < arr.length ; i++) {
//         callback(arr[i],i)
//         result.push(arr[i])
//     }
//     return result
// }
// const arr = [1, 2, 3, 4, 5]
// const result = reduce(arr, (res, item) => {
//     return res + item
// }, 0)
// console.log(result);
// function reduce(arr, callback, initValue) {
//     let result = initValue
//     for (let i = 0; i < arr.length; i++) {
//         result = callback(result,arr[i])
//     }
//     return result
// }
// const arr = [1,2,3,4]
// let b = arr.splice(2,1)
// console.log(arr);
// const arr = [1, 2, 3, 4]
// const result = filter(arr, item => item % 2 === 0)
// console.log(result);
// function filter(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let res = callback(arr[i])
//         if (res) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// const arr = [1,2,3,4,199]
// const result = find(arr,item => {
//     return item > 100
// })
// console.log(result);
// function find(arr,callback) {
//     for(let i = 0; i < arr.length ; i++) {
//         let res = callback(arr[i])
//         if(res) {
//             return arr[i]
//         }
//     }
//     return undefined
// }
// const arr = [1,2,3,4,199]
// const result = findIndex(arr,item => {
//     return item > 100
// })
// console.log(result);
// function findIndex(arr,callback) {
//     for(let i = 0; i < arr.length ; i++) {
//         let res = callback(arr[i])
//         if(res) {
//             return i
//         }
//     }
//     return -1
// }
// const arr = [1, 2, 3, 4, 5]
// const result = every(arr, item => {
//     return item > 0
// })

// function every(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i])) {
//             return false

//         }
//         return true
//     }
// }
// console.log(result);
// const arr = [1, 2, 3, 4, 5,199]
// const result = some(arr, item => {
//     return item > 100
// })

// function some(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return true

//         }
//     }
//     return false
// }
// console.log(result);
// 深入浅出浏览器事件循环
// javascript本身就是单线程的非阻塞的角本语言
// start children4 children2 children3 children5 children7 children6
// console.log('script start'); // 1

// setTimeout(() => { // 宏任务
//     console.log('Gopal');
// }, 1 * 2000);

// Promise.resolve()
//     .then(function () { // 微任务
//         console.log('promise1');
//     }).then(function () {
//         console.log('promise2');
//     });


// async function foo() {
//     await bar()
//     console.log('async1 end') // await后面那几行全是: 回调微任务
// }
// foo()

// async function errorFunc() {
//     try {
//         // Tips:参考：https://zh.javascript.info/promise-error-handling：隐式 try…catch
//         // Promise.reject()方法返回一个带有拒绝原因的Promise对象
//         // Promise.reject('error!!!') === new Error('error!!!')
//         await Promise.reject('error!!!')
//     } catch (e) {
//         console.log(e)
//     }
//     console.log('async1');
//     return Promise.resolve('async1 success')
// }
// errorFunc().then(res => console.log(res))

// function bar() {
//     console.log('async2 end') // 2
// }

// console.log('script end');
// setTimeout(()=>{
//     console.log(1) 
//  },0)
//  let a=new Promise((resolve)=>{
//      console.log(2)
//      resolve()
//  }).then(()=>{
//     console.log(3) 
//  }).then(()=>{
//     console.log(4) 
//  })
//  console.log(5) 
// JS中如何实现继承
// 将函数的arguments转换为数组
// 1.Array.prototype.slice().call()


// function sum(a, b) {
//     let args = Array.prototype.slice.call(arguments)
//     console.log(args.reduce((sum, cur) => sum + cur));
// }
// sum(1, 2)
// let nums = [1, 2, 3]
// let obj = {
//     val: 5
// }
// let newArray = nums.map(function (item, index, array) {
//     console.log(this.val);
//     return item + index + array[index] + this.val;
// }, obj)

// console.log(newArray);
// 能不能模拟实现一个new的效果
// 1.让实例可以访问到私有属性
// 什么是拷贝
// 手写浅拷贝
// method 1: 
// const shallowClone = (target) => {
//     if (typeof target === 'object' && target !== null) {
//         const cloneTarget = Array.isArray(target) ? [] : {}
//         for (let prop in target) {
//             if (target.hasOwnProperty(prop)) {
//                 cloneTarget[prop] = target[prop]
//             }
//         }
//         return cloneTarget
//     } else {
//         return target
//     }
// }
// // method 2 : // Object.assign
// let obj = {
//     name: 'sy',
//     age: 19
// }
// const obj2 = Object.assign({}, obj, {
//     name: '123'
// })
// // method 3 : //
// let arr = [1, 2, 3]
// let newArr = [...arr]
// newArr[1] = 100
// console.log(newArr, arr);
// 完整的一个深拷贝
// 数据是如何存储的
// 基本数据类型栈中存储，引用数据类型堆中存储
// 闭包变量是存在于堆中的
// 以下数据类型存在于栈中
// 1.number string boolean null undefined symbol bigint
// 赋值操作时，原始数据类型直接完整的复制变量值，对象数据类型是复制引用地址
// 定时器回调
// 如何改变Promise对象的状态 
// var button = document.getElementById('debounce')

// function debounce(fn, wait) {
//     let timer = null
//     return function () {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn.apply(this, arguments)
//         }, wait)
//     }
// }

// function sayDebounce() {
//     console.log('防抖成功');
// }
// button.addEventListener('click', debounce(sayDebounce, 1000))

// const promise = new Promise((resolve, reject) => {
//   console.log(1); // 1
//   console.log(2); // 2
// });
// promise.then(() => {
//   console.log(3); // 3 需要promise内部的状态发生变化，这里没有变化所以不会输出3
// });
// console.log(4); // 4
// 深拷贝浅拷贝针对的是对象和数组
// let a = [1, 2, 3, 4, {
//   age: 1
// }]
// let b = Object.assign([],a)
// a[0] = 100
// a[4].age = 200
// console.log(a,b);
// function DeepClone(obj) {
//   let objClone = Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === 'object') {
//     for (key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         // 判断是否为对象，如果是则递归复制
//         if (obj[key] && typeof obj[key] === 'object') {
//           objClone[key] = DeepClone(obj[key])
//         } else {
//           objClone[key] = obj[key]
//         }
//       }
//     }
//   }
//   return objClone
// }

// let a = [1, 2, 3, 4, {
//   age: 1
// }]

// let b = DeepClone(a)
// b[0] = 1000
// b[4].age = 100
// console.log(a, b);
// let a = [1, 2, 3, 4, {
//   age: 100
// }]
// let b = JSON.parse(JSON.stringify(a))
// b[0] = 1000
// b[4].age = 20
// console.log(a,b);
// 手写深拷贝
// function DeepClone(obj = {}) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj
//   }
//   let result
//   if (obj instanceof Array) {
//     result = []
//   } else {
//     result = {}
//   }
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = DeepClone(obj[key])
//     }
//   }
//   return result
// }

// let a = {
//   a: 1,
//   b: 2,
//   age: {
//     name: 'abc'
//   }
// }
// let b = DeepClone(a)
// b.age.name = 100
// console.log(a, b);
// const deepClone = (target) => {
//     if (typeof target === 'object' || object !== null) {
//         const cloneTarget = Array.isArray(target) ? [] : {}
//         for (let prop in target) {
//             if (target.hasOwnProperty(prop)) {
//                 cloneTarget[prop] = deepClone(prop)
//             }
//         }
//         return cloneTarget
//     }
//     return target
// }

// const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

// const deepClone = (target, map = new Map()) => { 
//   if(map.get(target))  
//     return target; 


//   if (isObject(target)) { 
//     map.set(target, true); 
//     const cloneTarget = Array.isArray(target) ? []: {}; 
//     for (let prop in target) { 
//       if (target.hasOwnProperty(prop)) { 
//           cloneTarget[prop] = deepClone(target[prop],map); 
//       } 
//     } 
//     return cloneTarget; 
//   } else { 
//     return target; 
//   } 
// }
// function DeepClone(obj, hash = new WeakMap()) {
//     if (obj === null || typeof obj !== 'object') return obj
//     if (obj instanceof Date) return new Date(obj)
//     if (obj instanceof RegExp) return new RegExp(obj)
//     if (hash.get(obj)) return hash.get(obj)
//     let cloneObj = new obj.constructor()
//     hash.set(obj, cloneObj)
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             cloneObj[key] = DeepClone(obj[key], hash)
//         }
//     }
//     return cloneObj
// }
// let obj = {
//     name: 1,
//     address: {
//         x: 100
//     }
// }
// obj.o = obj
// let d = DeepClone(obj)
// obj.address.x = 200
// console.log(d);
// function deepClone(obj, hash = new WeakMap()) {
//     if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof RegExp) return new RegExp(obj);
//     // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
//     if (typeof obj !== "object") return obj;
//     // 是对象的话就要进行深拷贝
//     if (hash.get(obj)) return hash.get(obj);
//     let cloneObj = new obj.constructor();
//     // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
//     hash.set(obj, cloneObj);
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         // 实现一个递归拷贝
//         cloneObj[key] = deepClone(obj[key], hash);
//       }
//     }
//     return cloneObj;
//   }
//   let obj = { name: 1, address: { x: 100 } };
//   obj.o = obj; // 对象存在循环引用的情况
//   let d = deepClone(obj);
//   obj.address.x = 200;
//   console.log(d);

// 原型链继承
// function Father() {
//     this.isShow = true
//     this.info = {
//         name: 'whl',
//         age: 18
//     }
// }
// Father.prototype.getInfo = function () {
//     console.log(this.info);
//     console.log(this.isShow);
// }

// function Son() {}
// Son.prototype = new Father()
// let Son1 = new Son()
// Son1.info.name = 'qwe'
// Son1.isShow = false
// console.log(Son1);
// let Son2 = new Son()
// console.log(Son2); //原型链继承
// 构造函数继承
// function Father(name) {
//     this.info = {
//         name: name
//     }
// }

// function Son() {
//     Father.call(this, name)
// }
// let Son1 = new Father('whl')
// let Son2 = new Father('qwe')
// console.log(Son1);
// console.log(Son2);
// function Parent(name) {
//     this.name = name
//     this.colors = ["red", "blue", "yellow"]
// }
// Parent.prototype.sayName = function () {
//     console.log(this.name);
// }

// function Child(name, age) {
//     // 继承父类属性
//     Parent.call(this, name)
//     this.age = age;
// }
// // 继承父类方法
// Child.prototype = new Parent();

// Child.prototype.sayAge = function () {
//     console.log(this.age);
// }

// let child1 = new Child("yhd", 19);
// child1.colors.push("pink");
// console.log(child1.colors); // ["red", "blue", "yellow", "pink"]
// child1.sayAge(); // 19
// child1.sayName(); // "yhd"

// let child2 = new Child();
// console.log(child2);
// //  console.log(child2.colors);  // ["red", "blue", "yellow"]
// //  child2.sayAge(); // 30
// //  child2.sayName(); // "wxb"
// function objectCopy(obj) {
//     function Fun() { };
//     Fun.prototype = obj;
//     return new Fun();
//   }

//   function createAnother(original) {
//     let clone = objectCopy(original);
//     clone.getName = function () {
//       console.log(this.name);
//     };
//     return clone;
//   }

//   let person = {
//        name: "yhd",
//        friends: ["rose", "tom", "jack"]
//   }

//   let person1 = createAnother(person);
//   person1.friends.push("lily");
//   console.log(person1.friends);
//   person1.getName(); // yhd

//   let person2 = createAnother(person);
//   console.log(person2.friends); // ["rose", "tom", "jack", "lily"]
// function Father() {
//     this.qwe = 'abc'
//     this.info = {
//         name: 'whl',
//         age: 22
//     }
// }

// Father.prototype.getInfo = function () {
//     console.log(this.info);
// }

// function Son(a, b) {
//     this.a = a
//     this.b = b
// }
// // 继承Father
// // Son的原型对象prototype是Father的实例，其内部__proto__指向的是Father的原型对象
// Son.prototype = new Father()
// // 将这个对象的 constructor 手动改成 Son,否则还是Father
// Son.prototype.constructor = Son
// // 不使用对象字面量方式创建原型方法，会重写原型链
// Son.prototype.showInfo = function () {
//     return this.a + this.b
// }
// let Son1 = new Son(2, 4)
// Son1.getInfo() // { name: 'whl,age: 22 }
// console.log(Son1.showInfo()); // 6
// // 通过hasOwnProperty() 方法来确定自身属性和其原型的属性
// console.log(Son1.hasOwnProperty('qwe')); // false
// console.log(Son1.hasOwnProperty('a')); // true
// console.log(Son1.hasOwnProperty('b')); // true
// // 通过isPrototypeOf() 方法来确定原型和实例的关系
// console.log(Father.prototype.isPrototypeOf(Son1)); // true
// console.log(Son.prototype.isPrototypeOf(Son1)); // true
// console.log(Object.prototype.isPrototypeOf(Son1)); // true\
// 原型链法
// 构造函数法
// function staff() {
//     this.test = [1, 2, 3];
// }
// staff.prototype.companyName = function () {
//     return this.test;
// }

// function Father() {
//     this.test = [1, 2, 3]
// }
// Father.prototype.getTest = function () {
//     console.log(this.test);
// }

// function Son(a, b) {
//     Father.call(this)
//     this.a = a
//     this.b = b
// }
// // 不使用对象字面量方式创建原型方法，会重写原型链
// Son.prototype.showTest = function () {
//     console.log(this.a + this.b);
// }
// let Son1 = new Son(1, 2)
// let Son2 = new Son(2, 3)
// Son1.test.push(4)
// console.log(Son1.test); // [1,2,3,4]
// console.log(Son2.test); // [1,2,3]
// // console.log(Son1.getTest()); // 报错
// // // 通过 hasOwnProperty() 方法来确定自身属性与其原型属性
// console.log(Son1.hasOwnProperty('test')); // true
// // 通过 isPrototypeOf() 方法来确定原型和实例的关系
// console.log(Father.prototype.isPrototypeOf(Son1)); // false
// function Father(num) {
//     this.numOne = num;
//     this.numList = [1, 2];
// }
// Father.prototype.getNumOne = function () {
//     return this.numOne;
// };

// function Son(num1, num2) {
//     // 第二次调用了Father()，实例对象继承了Father的两个属性，会屏蔽掉原型Son.prototype中的两个同名属性
//     Father.call(this, num1);
//     this.numTwo = num2;
// }
// // 第一次调用了Father()，继承了Father的原型方法, Son.prototype会得到Father的两个属性
// Son.prototype = new Father();
// Son.prototype.constructor = Son;
// Son.prototype.getNumTwo = function () {
//     return this.numTwo;
// }
// var Son1 = new Son(3, 5);
// Son1.numList.push(6);
// console.log(Son1.numList); // [1, 2, 6]
// console.log(Son1.getNumOne()); // 3
// console.log(Son1.getNumTwo());; // 5

// var Son2 = new Son(4, 6);
// Son2.numList.push(7);
// console.log(Son2.numList); // [1, 2, 7]
// console.log(Son2.getNumOne()); // 4
// console.log(Son2.getNumTwo()); // 6
// console.log(Son1.hasOwnProperty('numOne')); // true
// console.log(Father.prototype.isPrototypeOf(Son1)); // true
// function object(obj) {
//     function F() {}
//     F.prototype = obj
//     return new F()
// }
// var person = {
//     name: 'whl',
//     array: [1, 2, 3]
// }
// var person1 = Object.create(person)
// person1.array.push(4)
// console.log(person1.name); // whl
// console.log(person1.array); // [1,2,3,4]

// var person2 = Object.create(person, {
//     name: {
//         value: 'qwe'
//     }
// })
// person2.array.push(5)
// console.log(person2.name); // qwe
// // 对于引用类型的值的属性会共享
// console.log(person1.array); // [1,2,3,4,5]
// console.log(person2.array); // [1,2,3,4,5]
// var person = {
//     name: 'whl',
//     array: [1, 2, 3]
// }

// function createObj(origin) {
//     const clone = Object.create(origin)
//     clone.sayName = function () {
//         console.log(this.name); // whl
//     }
//     return clone
// }

// const person1 = createObj(person)
// person1.sayName()
// function Father(name) {
//     this.name = name
//     this.array = [1, 2, 3]
// }
// Father.prototype.getArray = function () {
//     console.log(this.name);
// }

// function Son(name, age) {
//     Father.call(this, name)
//     this.age = age
// }
// Son.prototype = new Father()

// let Son1 = new Son('whl', 24)
// console.log(Son1);
// inheritPrototype接收两个参数：子类型的构造函数和父类型的构造函数
// function inheritPrototype(Son, Father) {
//     const prototype = Object.create(Father.prototype) // 创建对象:父类型原型的副本
//     prototype.constuctor = Son // 增强对象:为创建的副本添加constructor属性，从而弥补因重写原型而失去的默认的constructor属性
//     Son.prototype = prototype
// }

// function Father(name) {
//     this.name = name
//     this.test = [1, 2, 3]
// }

// Father.prototype.sayName = function () {
//     console.log(this.name);
// }

// function Son(name, age) {
//     Father.call(this, name)
//     this.age = age
// }

// // 将父类原型指向字类
// inheritPrototype(Son, Father)
// const Son1 = new Son('qwe', 22)
// const Son2 = new Son('aaa', 23)
// Son1.test.push(4)
// console.log(Son1.test); // [1,2,3,4]
// console.log(Son2.test); // [1,2,3]
// Son1.sayName() // qwe
// Son2.sayName() // aaa
// console.log(Son1.hasOwnProperty('test')); // true
// console.log(Father.prototype.isPrototypeOf(Son1)); // true

// class One {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.jn = 'shuijiao'
//     }
//     getInfo() {
//         return `我叫:${this.name},今年${this.age}岁了,我喜欢${this.jn}`
//     }
// }

// // // Two这个类通过extends关键字，继承了One这个类的所有属性和方法。
// class Two extends One {
//     constructor(x, y, gender) {
//         // 调用父类的constructor
//         super(x, y)
//         this.gender = gender
//     }
//     getTwoInfo() {
//         // 调用父类原型上的方法 getInfo()，父类的属性会被子类继承
//         return `${super.getInfo()},喜欢${this.jn},我是${this.gender}`
//     }
// }
// const two = new Two('whl', 22, 'boy')
// console.log(two.getTwoInfo());

// 写了一个业务代码，扩展当前的业务代码
// function person(sex) {
//     console.log(sex);
// }
// // 给某个方法 添加一个方法并在他执行之前调用
// // Function.prototype.before = function (callback) {
// //     return (...args) => { // 剩余运算符， 箭头函数没有this（向上找） 也没有arguments (return一个函数)
// //         callback(); //执行传过来的匿名函数
// //         this(...args); // 执行this。可以暂时理解谁调用的this就指向谁：person.before  say调用的所以say指向say-
// //     }
// // }
// // let personBornRace = person.before(function () { //出生之前就已经知道肤色
// //     console.log('yellow')
// // }) //将返回的函数赋值给beforeSay (参数函数)
// // console.log(personBornRace);
// // personBornRace('男'); //出生时才知道男女
// // personBornRace('女');
// let address = "[广东省]深圳市福田区福田街道华强南路五邑大厦";
// console.log(address);

// address = address.substring(address.indexOf("[") + 1, address.indexOf("]"));
// console.log(address);
// beforeCreate
// created
// beforeMount() {

// },
// mounted() {

// },
// beforeUpdate() {


// },
// updated() {


// },
// beforeDestroy() {

// },
// destroyed() {

// },


// class MVVM {
//     constructor(el, data) {
//         // console.log(el, data);
//         this.el = document.querySelector(el)
//         this._data = data
//         this.doomPool = {}
//         // console.log(this.el, this._data);
//         this.init()
//     }
//     init() {
//         this.initData()
//         this.initDom()
//         console.log(this.doomPool);
//     }
//     initDom() {
//         this.bindDom(this.el)
//         this.bindInput(this.el)
//     }
//     bindInput(el) {
//         const _allInputs = el.querySelectorAll('input')
//         _allInputs.forEach(item => {
//             // console.log(item);
//             const _vModel = item.getAttribute('v-model')
//             if (_vModel) {
//                 item.addEventListener('keyup', this.handleInput.bind(this, _vModel, item), false)
//             }
//         })
//     }
//     handleInput(key, input) {
//         const _value = input.value
//         this.data[key] = _value
//         console.log(this.data);
//     }
//     bindDom(el) {
//         const childNodes = el.childNodes
//         childNodes.forEach(item => {
//             if (item.nodeType === 3) {
//                 const _value = item.nodeValue
//                 if (_value.trim().length) {
//                     let _isValid = /\{\{(.+?)\}/.test(_value)
//                     if (_isValid) {
//                         const _key = _value.match(/\{\{(.+?)\}/)[1].trim()
//                         this.doomPool[_key] = item.parentNode
//                         item.parentNode.innerText = this.data[_key] || undefined
//                         //    item.parentNode.innerText = this.data[_key]
//                         //    console.log(item.parentNode.innerText);
//                     }
//                 }
//             }
//             item.childNodes && this.bindDom(item)
//         })
//     }
//     initData() {
//         const _this = this
//         this.data = {}
//         for (let key in this._data) {
//             Object.defineProperty(this.data, key, {
//                 get() {
//                     console.log('获取数据:', key, _this._data[key]);
//                     return _this._data[key]
//                 },
//                 set(newValue) {
//                     console.log('得到数据:', key, newValue);
//                     _this.doomPool[key].innerText = newValue
//                     _this._data[key] = newValue
//                 }
//             })
//         }
//     }
// }

// var obj = {
//     func: function () {
//         console.log(this === obj);
//         setTimeout(() => {
//             console.log(this);
//         }, 0)
//     }
// }

// obj.func()
// var a = 100
// var obj = {
//     a: 3,
//     fn: () => {
//         console.log(this.a);
//     }
// }

// obj.fn()
// arrowFoo1() // （1）此处是调用位置，使用【默认的绑定规则】，this = window
// function arrowFoo1() {
//     var obj1 = {
//         vv: 'svv1',
//         fn: () => {
//             console.log(this.vv, 'vv的值是')
//         }
//     }
//     // （2）调用位置是此处，若fn不是箭头函数，那么这里也会有自己的this（即【隐式调用规则】，this绑定为obj1），而fn是箭头函数，则它没有this，那么fn内部调用的this是谁？
//     // 这时候需要根据作用域的规则，往外层查找，找到哪里？找到调用obj1.fn的调用栈，即arrowFoo1函数的this，那么从（1）中可知，那个this指向的是window
//     obj1.fn()
//     var obj2 = {
//         vv: 'svv2',
//     }
//     obj2.fn = obj1.fn
//     obj2.fn()
// }
// function foo() {
//     return function () {
//         return () => {
//             console.log('id:' + this.id)
//         }
//     }
// }

// foo().call({id: 1})() // 问题1：结果是什么？
// foo.call({id: 1})()() // 问题2：结果是什么？

// var obj = {
//     a: 10,
//     b: function () {
//         console.log(this.a); //10
//     },
//     c: function () {
//         console.log(this === obj);
//         return () => {
//             console.log(this.a); //10
//         }
//     }
// }
// obj.b();
// obj.c()();

// let obj2 = {
//     a: 10,
//     b: function (n) {
//         let f = (n) => n + this.a;
//         return f(n);
//     },
//     c: function (n) {
//         console.log(this === obj2);
//         let f = (n) => {
//             console.log(this === obj2);
//             n + this.a
//         }; //此this指向obj2.value
//         let m = {
//             a: 20
//         };
//         return f.call(m, n); //f函数并非指向m,只是传入了n参数而已
//     }
// };
// console.log(obj2.b(1)); // 11
// console.log(obj2.c(1)); // 11

// const obj = {
//     value: 2,
//     callback: function (arr) {
//         console.log(this);

//         function showThis() {
//             console.log(this);
//             console.log(this.value)
//         }
//     }
// }

// console.log(obj.callback);

// function create() {
//     let obj = new Object()
//     let Con = [].shift.call(arguments) //   // 将arguments转换成数组，再调用shift方法返回第一个参数，也就是构造函数
//     console.log(Con);
//     obj.__proto__ = Con.prototype
//     let result = Con.apply(obj, arguments)
//     console.log(result);
//     return typeof result === 'object' ? result : obj
// }

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// let a = create(Person, 'whl', 23)
// console.log(a);

// function _new() {
//     // 创建新对象
//     let obj = {}
//     // 获取构造函数
//     let Con = [].shift.call(arguments)
//     // 原型链继承
//     obj.__proto__ = Con.prototype
//     // 执行构造函数，并将构造函数中的属性都挂载到新对象上,this指向新对象
//     let result = Con.apply(obj, arguments)
//     // 返回新对象
//     return typeof result === 'object' ? result : obj
// }
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// let a = _new(Person,'whl',23)
// console.log(a);

// function myInstanceof(L, R) {
//     // 基本数据类型直接返回false
//     if (typeof L !== 'object' || L === null) return false
//     //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
//     let proto = Object.getPrototypeOf(L)
//     while (true) {
//         // 查找到尽头还没找到
//         if (proto === null) return false
//         // 找到相同的原型对象
//         if (proto === R.prototype) return true
//         proto = Object.getPrototypeOf(proto)
//     }
// }

// console.log(myInstanceof("111", String)); //false
// console.log(myInstanceof(new String("111"), String));//true
// let arr = [1, 2]
// console.log(Object.prototype.toString.call(arr) === '[object Array]') // true
// console.log(arr instanceof Array) // true
// console.log(arr instanceof Object) // true

// 实现一个promise
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('FULFILLED')
//     }, 1000)
// })

// pending 进行中
// fulfilled 已成功
// rejected 已失效


// 冒泡排序

// let arr = [66, 23, 4, 55, 661, 65]

// function bubble(arr) {
//     // 外层循环控制循环的轮数
//     let temp;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
//     // 内层循环控制比较的次数
// }

// console.log(bubble(arr));


// const insertSort = function (arr) {
//     const len = arr.length
//     let curr, prev
//     for (let i = 1; i < len; i++) {
//         curr = arr[i] // cur = arr[2]
//         prev = i - 1 // prev = 1
//         arr[1] > arr[2]
//         arr[2] = arr[1]
//         while (prev >= 0 && arr[prev] > curr) {
//             arr[prev + 1] = arr[prev]
//             prev--
//         }
//         arr[prev + 1] = curr
//     }
//     return arr
// }


// 选择排序

// let arr = [1, 23, 5, 267, 77, 54, 14]

// function selectSort(arr) {
//     let temp;
//     let minIndex
//     for (let i = 0; i < arr.length - 1; i++) {
//         minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// console.log(selectSort(arr));
// const arr = [4,6,3,5,2]
// const insertSort = function (arr) {
//     const len = arr.length
//     let curr, prev
//     for (let i = 1; i < len; i++) {
//         curr = arr[i] //  3
//         prev = i - 1 // 1    // 4 > 6
//         while (prev >= 0 && arr[prev] > curr) {
//             arr[prev + 1] = arr[prev]
//             prev--
//         }
//         console.log(prev);
//         arr[prev + 1] = curr
//     }
//     return arr
// }

// console.log(insertSort(arr));
// function partition(arr, p, q) {
//     var i = p;
//     var x = arr[p];
//     var j;
//     for (j = p + 1; j <= q; j++) {
//         if (arr[j] <= x) {
//             ++i;
//             swap(arr, i, j);
//         }
//     }
//     swap(arr, i, p);
//     return i; //返回划分中间位置
// }

// function quickSort(arr, p, q) {
//     if (p < q) {
//         var k = partition(arr, p, q); //确定划分中间位置
//         quickSort(arr, p, k - 1); //对左边部分进行递归
//         quickSort(arr, k + 1, q); //对右边部分进行递归
//     }
// }
// //交换函数
// function swap(arr, i, j) {
//     var tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }
// var arr = [1, 12, 6, 3, 5];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// function sum(n) {
//     if(n > 10) {
//         return 0
//     }
//     return n + sum(n + 1)
// }

// let total = sum(1)
// console.log(total);

// function quick(ary) {
//     if (ary.length <= 1) return ary
//     let middleIndex = Math.floor(ary.length / 2)
//     let middleValue = ary.splice(middleIndex, 1)[0]
//     let aryLeft = []
//     let aryRight = []
//     for (let i = 0; i < ary.length; i++) {
//         let item = ary[i]
//         item < middleValue ? aryLeft.push(item) : aryRight.push(item)
//     }
//     return quick(aryLeft).concat(middleValue, quick(aryRight))
// }

// var arr = [1, 12, 6, 3, 5];

// console.log(quick(arr));
// var arr = [1, 12, 6, 3, 5];
// const bubbleSort = function (arr) {
//     const len = arr.length
//     if (len < 2) return arr
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = 0; j < len - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr));
// function BubbleSort(arr) {
//     let temp
//     for(let i = 0 ; i < arr.length - 1 ; i++) {
//         for(let j = 0 ; j < arr.length - 1 - i; j++) {
//             if(arr[j] > arr[j+1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(BubbleSort(arr));
// var arr = [1, 12, 6, 3, 5];
// function selectSort(arr) {
//     let minIndex, temp
//     for (let i = 0; i < arr.length - 1; i++) {
//         minIndex = i 
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }


// console.log(selectSort(arr));
// var arr = [1, 12, 6, 3, 5];
// function insertSort(arr) {
//     let cur, prev
//     for (let i = 1; i < arr.length; i++) {
//         cur = arr[i]
//         prev = i - 1
//         while (prev >= 0 && arr[prev] > cur) {
//             arr[prev + 1] = arr[prev]
//             prev--
//         }
//         arr[prev + 1] = cur
//     }
//     return arr
// }

// console.log(insertSort(arr));
// var arr = [1, 12, 6, 3, 5];

// function quickSort(arr) {
//     if (arr.length <= 1) return arr
//     let middleIndex = Math.floor(arr.length / 2)
//     let middleValue = arr.splice(middleIndex, 1)[0]
//     let arrayLeft = [],
//         arrayRight = []
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         item < middleValue ? arrayLeft.push(item) : arrayRight.push(item)
//     }
//     return quickSort(arrayLeft).concat(middleValue, quickSort(arrayRight))
// }

// console.log(quickSort(arr));

// 实现一个promise

// new Promise((resolve, reject) => {
//     resolve('success')
//     reject('err')
// })

// Promise.then(value => {
//     console.log('resolve', value);
// }, reason => {
//     console.log('reject', reason);
// })


// 新建 MyPromise.js

// 先定义三个常量表示状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
// 新建 MyPromise类

class MyPromise {
    constructor(executor) {
        // executor是一个执行器，进入会立即执行
        // 传入resolve和reject方法
        executor(this.resolve, this.reject)
    }

    // 存储成功的回调函数
    onFulfilledCallback = null
    // 存储失败的回调函数
    onRejectedCallback = null

    // 存储状态的变量，初始值是PENDING
    status = PENDING

    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数的this指向的是window或者undefined(严格模式下)
    // 用箭头函数可以让this指向当前的实例对象

    // 成功后的值
    value = null
    // 失败之后的原因
    reason = null

    // 更改成功后的状态
    resolve = (value) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
            // 状态修改为成功
            this.status = FULFILLED
            // 保存成功后的值
            this.value = value
            // ===== 新增 =====
            // 判断成功回调是否存在，如果存在则调用
            this.onFulfilledCallback && this.onFulfilledCallback(value)
        }
    }

    // 更改失败后的状态
    reject = (reason) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
            // 状态修改为失败
            this.status = REJECTED
            // 保存失败后的原因
            this.reason = reason
            // ===== 新增 =====
            // 判断失败回调是否存在，如果存在就调用
            this.onRejectedCallback && this.onRejectedCallback(reason)
        }
    }

    then(onFulfilled, onRejected) {
        // 判断状态
        if (this.status === FULFILLED) {
            // 调用成功回调，并把值返回
            onFulfilled(this.value)
        } else if (this.status === REJECTED) {
            // 调用失败回调，并且把原因返回
            onRejected(this.reason)
        } else if (this.status === PENDING) {
            // ====== 新增 ======
            // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
            this.onFulfilledCallback = onFulfilled
            this.onRejectedCallback = onRejected
        }
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
})

promise.then(value => {
    console.log('resolve', value);
}, reason => {
    console.log('reject', reason);
})