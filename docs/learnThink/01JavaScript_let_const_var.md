---
sidebar: 'auto'
sticky: 1
title: 01JavaScript变量总结
date: 2021-11-29
tags:
 - 学习总结
categories: 
 - 06JavaScript
---

# JavaScript变量总结

有 3 个关键字可以声明变量： var 、 const 和 let 。其中， var 在ECMAScript 的所有版本中都可以使用，而 const 和 let 只能在 ECMAScript 6 及更晚的版本中使用。

## 一、var

### 1.var属于函数作用域

```javascript
function test() {
	var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错！
```

### 2.var变量提升

使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：

```javascript
function foo() {
	console.log(age);
	var age = 26;
}
	foo(); // undefined
	
之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码： 
function foo() {
	var age;
	console.log(age);
	age = 26;
}
foo(); // undefined
```

### 3.var重复声明变量

这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。此外，反复多次使用 var 声明同一个变量也没有问题：

在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。

```javascript
function foo() {
	var age = 16;
	var age = 26;
	var age = 36;
	console.log(age);
}
foo(); // 36
```

## 二、let

let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是， let 声明的范围是块作用域，而 var 声明的范围是函数作用域。

### 1.let属于块级作用域（{}）

```
if (true) {
var name = 'Matt';
	console.log(name); // Matt
}
console.log(name);
// Matt


if (true) {
	let age = 26;
	console.log(age);
}
console.log(age);
// ReferenceError: age 没有定义
```

在这里， age 变量之所以不能在 if 块外部被引用，是因为它的作用域仅限于该块内部。块作用域是函数作用域的子集，因此适用于 var 的作用域限制同样也适用于 let 。

### 2.let重复变量声明

let 也不允许同一个块作用域中出现冗余声明

```
let age;
let age;
// SyntaxError；标识符 age 已经声明过了
```

JavaScript 引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明：

```
var name = 'Nicholas';
console.log(name);
// 'Nicholas'
if (true) {
	var name = 'Matt';
	console.log(name); // 'Matt'
}
let age = 30;
console.log(age);
if (true) {
	let age = 26;
	console.log(age);
}
```

对声明冗余报错不会因混用 let 和 var 而受影响。这两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在。

```
var name;
let name; // SyntaxError
let age;
var age; // SyntaxError
```

### 3.let没有变量提升

因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。

```
// name 会被提升
console.log(name); // undefined
var name = 'Matt';

// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;
```

```
<script>
	// 假设脚本不确定页面中是否已经声明了同名变量
	// 那它可以假设还没有声明过 
	
	var name = 'Matt';
	// 这里没问题，因为可以被作为一个提升声明来处理
	// 不需要检查之前是否声明过同名变量
	
	let age = 36;
	// 如果 age 之前声明过，这里会报错
</script>
```

## 三、const

const 的行为与 let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改 const 声明的变量会导致运行时错误

### 1.const属于块级作用域

```
const age = 26;
age = 36; // TypeError: 给常量赋值
```

```
const 声明的限制只适用于它指向的变量的引用。换句话说，如果 const 变量引用的是一个对象，
那么修改这个对象内部的属性并不违反 const 的限制。
const person = {};
person.name = 'Matt';
```

### 2.const重复声明

```
// const 也不允许重复声明
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError
// const 声明的作用域也是块
const name = 'Matt';
if (true) {
	const name = 'Nicholas';
}
console.log(name); // Matt
```

### 3.const没有变量提升

## 四、注意事项

```
for (var i = 0; i < 5; ++i) {
// 循环逻辑
}
console.log(i); // 5
```

```
for (let i = 0; i < 5; ++i) {
// 循环逻辑
}
console.log(i); // ReferenceError: i 没有定义
```

改成使用 let 之后，因为迭代变量的作用域仅限于 for 循环块内部：

```
在使用 var 的时候，最常见的问题就是对迭代变量的奇特声明和修改：
for (var i = 0; i < 5; ++i) {
	setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出 0、1、2、3、4
// 实际上会输出 5、5、5、5、5
```

之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值, 在之后执行超时逻辑时，所有的 i 都是同一个变量，因而输出的都是同一个最终值。

而在使用 let 声明迭代变量时，JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。

```
for (let i = 0; i < 5; ++i) {
	setTimeout(() => console.log(i), 0)
}
// 会输出 0、1、2、3、4
```

JavaScript 引擎会为 for 循环中的 let 声明分别创建独立的变量实例，虽然 const 变量跟 let 变，量很相似，但是不能用 const 来声明迭代变量（因为迭代变量会自增）

```
for (const i = 0; i < 10; ++i) {} // TypeError：给常量赋值
```

不过，如果你只想用 const 声明一个不会被修改的 for 循环变量，那也是可以的。也就是说，每次迭代只是创建一个新变量。这对 for-of 和 for-in 循环特别有意义：

```
let i = 0;
for (const j = 7; i < 5; ++i) {
	console.log(j);
}
// 7, 7, 7, 7, 7
for (const key in {a: 1, b: 2}) {
	console.log(key);
}
// a, b
for (const value of [1,2,3,4,5]) {
	console.log(value);
}
// 1, 2, 3, 4, 5
```

