---
sidebar: 'auto'
title: 02js算法
date: 2021-11-29
tags:
 - 算法
categories: 
 - 01算法
---

# js算法

## 一、数组

### 一、数组

#### 1.为什么使用数组?

- 假如有这样一个需求：保存自己多个朋友的名字。可以这么做：

  ```javascript
  // 保存班级中所有学生的名字
  var name1 = "Tom"
  var name2 = "Lily"
  var name3 = "Lucy"
  var name4 = "Lilei"
  var name5 = "Coderwhy"
  ```

这不是一个好的解决方案

- 因为假如班级有100个学生, 那么我们就需要有100个变量.
- 100个变量的是非常不方便管理的, 而且当我们需要找到某一个学生时, 从100个变量中去搜索也是一个问题.

很明显, 这种情况下, 我们通常会使用数组来解决:

```javascript
// 使用数组来保存学生名字
var names = ["Tom", "Lily", "Lucy", "Lilei", "Coderwhy"]
```

#### 2.创建和初始化数组

用JavaScript声明、创建和初始化数组很简单，就像下面这样：

```javascript
// 创建和初始化数组
var daysOfWeek = new Array()
var daysOfWeek = new Array(7)
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday')
```

代码解析:

- 使用`new`关键字，就能简单地声明并初始化一个数组
- 用这种方式，还可以创建一个指定长度的数组.
- 另外，也可以直接将数组元素作为参数传递给它的构造器
- 用`new`创建数组并不是最好的方式。如果你想在JavaScript中创建一个数组，只用中括号（`[]`）的形式就行了



使用中括号（`[]`）创建数组

```javascript
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
```

#### 3.数组长度和遍历数组

- 如果我们希望获取数组的长度, 有一个length属性

  

  ```javascript
  // 获取数组的长度
  alert(daysOfWeek.length)
  ```

- 也可以通过下标值来遍历数组:

  

  ```javascript
  // 普通for方式遍历数组
  for (var i = 0; i < daysOfWeek.length; i++) {
      alert(daysOfWeek[i])
  }
  
  // 通过foreach遍历数组
  daysOfWeek.forEach(function (value) {
      alert(value)
  })
  ```

- 求菲波那切数列的前20个数字, 并且放在数组中.
- 菲波那切数列数列第一个数字是1, 第二个数字也是1, 第三项是前两项的和

```javascript
// 求菲波那切数列的前20个数字
var fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

for (var i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

alert(fibonacci
```

### 二. 数组的常见操作

> 数组中常见的操作有: 添加元素、删除元素、修改元素、获取元素.

#### 1.添加元素

- JavaScript中, 进行我们上述的操作都比较简单: 因为语言本身都已经封装好了这些特定.

- 假如我们有一个数组: numbers, 初始化0~9

  

  ```javascript
  // 初始化一个数组
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

##### 1.push()

添加一个元素到数组的**最后位置**:

```javascript
// 添加一个元素到数组的最后位置
// 方式一:
numbers[numbers.length] = 10

// 方式二:
numbers.push(11)
numbers.push(12, 13)

alert(numbers)
```

##### 2.首位插入原生js

在数组**首位**插入一个元素:

```javascript
// 在数组首位插入一个元素
for (var i = numbers.length; i > 0; i--) {
    numbers[i] = numbers[i-1]
}
numbers[0] = -1
alert(numbers) // -1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
```

上面代码实现的原理是怎样的呢?

![img](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/1102036-8fb6621c6dca7e05)

- 考虑上面代码实现的性能怎么呢?
  - 性能并不算非常高
  - 这也是数组和链表(后面我们会学习到)相对比的一个劣势: 在中间位置插入元素的效率比链表低.



##### 3.unshift()

当然, 我们在数组首位插入数据可以直接使用`unshift`方法

```javascript
// 通过unshift在首位插入数据
numbers.unshift(-2)
numbers.unshift(-4, -3)
alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13
```

#### 2.删除元素

##### 1. pop()

- 如果希望删除数组最后的元素, 可以使用pop()方法

```javascript
// 删除最后的元素
numbers.pop()
alert(numbers) // -4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12
```

##### 2.删除首位原生js

如果我们希望移除的**首位元素**, 自己实现代码:

```javascript
// 删除首位的元素
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1]
}
numbers.pop()//移除最后一个underfinded
alert(numbers)
```

##### 3. shift

- 当然, 我们可以直接使用shift方法来实现:

```javascript
numbers.shift()
alert(numbers)
```

#### 3.任意位置splice添加/删除/替换

`表达式 arr.splice(index, num, item1, item2, ...);`

 **参数说明**

> 第一个参数为 一个整数，用来指定添加/删除元素的位置，可以用负数来从尾部开始数 **必填参数**
> 第二个参数为删除元素的数量，若不想删除可以设置为0 **可选参数**
> 再后面的参数为 向数组添加的元素 可选参数
> 如果是删除操作,那么会把删除的元素放在一个新数组中返回。
>
> 1.操作的元素会包括开始的元素
>
> 2.如果数组的元素不够，会一直删除到数组的最后一位



- 任意位置?
  - 前面我们学习的主要是在数组的开头和结尾处添加和删除数据.
  - 那如果我们希望在数组的中间位置进行一些操作应该怎么办呢?
- 一方面, 我们可以自己封装这样的函数, 但JS已经给我们提供了一个splice方法
- 通过splice删除数据

```javascript
// 删除指定位置的几个元素
numbers.splice(5, 3)
alert(numbers) // -4,-3,-2,-1,0,4,5,6,7,8,9,10,11,12,13
```

- 代码解析:

  - 上面的代码会删除索引为5, 6, 7位置的元素.
  - 第一个参数表示索引起始的位置为5(其实是第6个元素, 因为索引从0开始的), 删除3个元素.

  

如果我们希望使用splice来插入数据呢?

```javascript
// 插入指定位置元素
numbers.splice(5, 0, 3, 2, 1)
alert(numbers) // -4,-3,-2,-1,0,3,2,1,4,5,6,7,8,9,10,11,12,13
```

代码解析:

- 上面的代码会从索引为5的位置开始插入数据. 其他数据依次向后位移.
- 第一个参数依然是索引值为5(第六个位置)
- **第二个参数为0**时表示不是删除数据, 而是插入数据.
- 后面紧跟的是在这个位置要插入的数据, 可以是其他类型, 比如"a", "b", "c".



如果我们希望使用splice来修改数据呢?

```javascript
// 修改指定位置的元素
numbers.splice(5, 3, "a", "b", "c")
alert(numbers) // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
```

代码解析:

- 上面的代码会从索引5的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
- 第一个参数依然是索引的位置为5(第六个位置)
- 第二个参数是要将数组中多少个元素给替换掉, 我们这里是3个(也可以使用3个元素来替换2个, 可以自己尝试一下)
- 后面跟着的就是要替换的元素.

#### 4. sort() 排序

数组排序 (改变原数组) 参数为规定排序的比较函数(非必填)

```javascript
 // 默认情况下，不传参数的话，默认按字母升序，若为非字符串,则先调用toString()将元素转化为字符串的 Unicode ,再进行字符串比较
  let arr = ["A", "C", "B", "E", "D"];
  arr.sort();
  console.log(arr); //["A","B","C","D","E"]
```

```javascript
//升序
let arr = [1, 0, 5, 4, 9, 45, 78, 6, 14, 2];
arr.sort((a, b) => a - b)
console.log(arr)//[0, 1, 2, 4, 5, 6, 9, 14, 45, 78]
```

```javascript
let arr = [
            { age: 18, sex: 0 }, 
            { age: 19, sex: 0 }, 
            { age: 20, sex: 0 },
            { age: 18, sex: 1 }, 
            { age: 19, sex: 1 }
        ];
        arr.sort((a, b) => {
            if (a.age === b.age) { //若年龄相同就按性别排，女士优先
                return a.sex - b.sex;
            } else { //年龄不相同就默认按年龄排升序
                return a.age - b.age;
            }
        })
        console.log(arr)
```

![image-20211218102424559](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211218102424559.png)

#### 5. copyWithin() 

 数组实例的`copyWithin()`方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

> 语法：arr. copyWithin(target, start, end)
>
>  它接受三个参数。
>
> -  target（必需）：从该位置开始替换数据。
> -  start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
> -  end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
>
>  这三个参数都应该是数值，如果不是，会自动转为数值。

```javascript
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
```

上面代码表示将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2。	

```javascript
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]
```

#### 6. fill()

数组的填充 [改变原数组、ES6]

>语法：arr.fill(value, start, end)
>
>value  必需。填充的值。
>
>start  可选。开始填充位置。
>
>end 可选。停止填充位置 (默认为 array.length)

```javascript
{
        let arr = new Array(3)
        arr.fill('填充')
        console.log(arr)//["填充", "填充", "填充"]
        arr.fill('位置', 0, 1)
        console.log(arr)// ["位置", "填充", "填充"]
}
```

#### 7. slice() 

拷贝数组元素 [不改变原数组]

```javascript
{
        let a = [1, 2, 3, 4]
        let b = a.slice(0, 2)
        console.log(b)//1,2
}
```

#### 8. join()

将数组转换为字符串[不改变原数组]

> 可选参数为指定分隔符

```javascript
{
        let arr = [1, 2, 3, 4]
        let b = arr.join('-')
        console.log(b)//1-2-3-4
        console.log(typeof b)//string
}
```

#### 9. concat() 

连接合并多个数组，返回新数组。[不改变原数组]

```javascript
{
        let a1 = [1, 2]
        let a2 = [4, 5]
        let a3 = [6, 7]
        let a4 = a1.concat(a2, a3)
        console.log(a4)// [1, 2, 4, 5, 6, 7]
}
```

#### 10. toString() 

方法可把数组转换为字符串，并返回结果。[不改变原数组]

```javascript
  {
        let arr = ['xiao', 'hao', 'wen', 24]
        let b = arr.toString()
        console.log(b)//xiao,hao,wen,24
  }
```

#### 11. indexOf() 

查找数组中某元素的第一个索引值。[不改变原数组] 如果没有就返回-1

> 第一个参数为查找的值 第二个参数为查找的起始位

```javascript
 {
        let arr = [1, 2, 3, 4, 5, 6]
        console.log(arr.indexOf(3))//2 
        console.log(arr.indexOf(3, 3))//-1
        console.log(arr.indexOf(8))//-1
 }
```

#### 12. lastIndexOf() 

逆向查找指定元素在数组中的第一个位置。[不改变原数组]

> 第一个参数为查找的值 第二个参数为逆向查找的起始位

```javascript
 {
        let arr = [1, 1, 3, 4, 5, 1];
        console.log(arr.lastIndexOf(1))//5
        console.log(arr.lastIndexOf(1, -2))//1
 }
```

#### 13. includes() 

查找数组是否包含某个元素。[不改变原数组,]

> 第一个参数为要查找的值 必填
>
> 第二个为查找的起始位置
>
> 返回值 true或false

```javascript
{
        let arr = [1, NaN, 100, '42'];
        console.log(arr.includes(1)); //true
        console.log(arr.includes(NaN)); //true
        console.log(arr.includes(1, 3)); //false
 
}
```









### 三. 数组的其他操作

#### 1.常见方法

![image-20211217174029822](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211217174029822.png)

![image-20211217174054709](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211217174054709.png)

##### 1.Array.isArray

```
Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false
```

##### 2.Array.of() 

返回一个由参数组成的数组

```
 let arr4 = Array.of(1, 2, 3)//123
```

![image-20211218095715719](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211218095715719.png)

##### 3. Array.from() 

将数组对象转换为数组 不改变原对象 返回新数组

```js
let a = { 0: '1', 1: '2', 2: '3', 'length': 3 };//对象
    let arr5 = Array.from(a)
    console.log(arr5)
 
    let b = Array.from('hello')//字符串
    console.log(b)
 
    let arrset = Array.from(new Set('func'))
    console.log(arrset)
 
    let arrMap = Array.from(new Map().set([1, 2], [3, 4], [5, 6]))
    console.log(arrMap)
    //类似map方法
    let thearr = Array.from([1, 2, 3], x => x * 2)
    console.log(thearr)
```

![image-20211218100350918](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211218100350918.png)

##### 4. reverse() 

反转数组 改变原数组

```
let a = { 
            0: '1', 
            1: '2', 
            2: '3', 
            'length': 3 
};//对象
let arr5 = Array.from(a)
console.log(arr5)
console.log(arr5.reverse());
```

![image-20211218100535067](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211218100535067.png)









#### 2.数组合并

- 数组的合并非常简单, 使用concat即可(也可以直接+进行合并)

  

  ```javascript
  // 数组的合并
  var nums1 = [1, 2, 3]
  var nums2 = [100, 200, 300]
  var newNums = nums1.concat(nums2)
  alert(newNums) // 1,2,3,100,200,300
  
  newNums = nums1 + nums2
  alert(newNums) // 1,2,3,100,200,300
  ```

#### 3.迭代方法

为了方便操作数组, JS提供了很多迭代器方法, 我们来回顾一下

##### 1. **every()方法**

检测数组中的元素是否全部满足条件

- every()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false.
- 如果函数中每一个元素都返回true, 那么结果为true, 有一个为false, 那么结果为false

- every()练习:
  - 判断一组元素中是否都包含某一个字符

```javascript
// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// 判断数组的元素是否都包含a字符
var flag = names.every(function (t) {
    return t.indexOf('a') != -1
})
alert(flag)
```



##### 2. **some()方法**

some()检测数组中是否存在满足条件的元素



> 语法 arr.some(function(value, index, arr), this);
>
> 参数值同forEach一样
>
> 返回值：布尔类型 ture / false



+ some()方法是将数组中每一个元素传入到一个函数中, 该函数返回true/false

+ 但是和every不同的是, 一旦有一次函数返回了true, 那么迭代就会结束. 并且结果为true

+ some()练习

```javascript
// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// 判断数组中是否包含有a字符的字符
var flag = names.some(function (t) {
    alert(t)
    return t.indexOf("a") != -1
})
alert(flag)
```

##### 3. **forEach()方法**

​	forEach()方法仅仅是一种快速迭代数组的方式而已.**该方法不需要返回值**,按升序遍历数组

**语法:**

`arr.forEach(function(value, index, arr), this);`

> value(必须): 当前遍历时的数组值。
>
> index(可选): 当前遍历时的索引值。
>
> arr(可选): 数组对象本身。
>
> this(可选): 执行回调函数时的。

forEach的使用

```javascript
// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// forEach的使用
names.forEach(function (t) {
    alert(t)
})

let arr = [1, 2, 3, 4, 5, 6]
arr.forEach((value, index) => {
    console.log(`${index}:${value}\n`)//值
})
```

![image-20211218111037532](https://cdn.jsdelivr.net/gh/Doerr33/image5/img5/image-20211218111037532.png)

##### 4. **filter()方法**

过滤原数组，返回新数组 

- filter()方法是一种过滤的函数
- 首先会遍历数组中每一个元素传入到函数中
- 函数的结果返回true, 那么这个元素会被添加到最新的数组中, 返回false, 则忽略该元素.
- 最终会形成一个新的数组, 该数组就是filter()方法的返回值

```javascript
// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// 获取names中所有包含'a'字符的元素
var newNames = names.filter(function (t) {
    return t.indexOf("a") != -1
})
console.log(newNames)//abc,mba,dna
```

##### 5. **map()方法**

对数组中的每一个元素都进行处理，返回新的数组

- map()方法提供的是一种映射函数.
- 首先会遍历数组中每一个元素传入到函数中.
- 元素会经过函数中的指令进行各种变换, 生成新的元素, 并且将新的元素返回.
- 最终会将返回的所有元素形成一个**新的数组**, 该数组就是map()方法的返回值

+ map()练习:

```javascript
// 定义数组
var names = ["abc", "cb", "mba", "dna"]

// 在names中所有的元素后面拼接-abc
var newNames = names.map(function (t) {
    return t + "-abc"
})
alert(newNames)
```

##### 6. **reduce方法**

> 语法 arr.reduce((total, value, index, arr), init)
>
> 参数 total(必须)：初始值，之后为上一次回调的返回值。
>
>  value(必须): 数组元素的值。
>
>  index(可选): 索引值。
>
>  arr(可选): 数组对象。
>
>  init(可选): 初始值。
>
> 返回值 ：累加后的值

数组的累加器，合并成为一个值。

- 我们单独拿出reduce方法, 因为这个方法相对来说难理解一点

- 首先, 我们来看这个方法需要的参数:

  ```javascript
  arr.reduce(callback[, initialValue])
  ```

**参数**

- callback（一个在数组中每一项上调用的函数，接受四个参数：）
  - previousValue（上一次调用回调函数时的返回值，或者初始值）
  - currentValue（当前正在处理的数组元素）
  - currentIndex（当前正在处理的数组元素下标）
  - array（调用reduce()方法的数组）
- initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）

- 有些晦涩难懂, 我们直接看例子
  - 求一个数字中数字的累加和

**使用for实现:**

```javascript
// 1.定义数组
var numbers = [1, 2, 3, 4]

// 2.for实现累加
var total = 0
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
alert(total) // 10
```

**使用forEach简化for循环**

- 相对于for循环, forEach更符合我们的思维(遍历数组中的元素)

```javascript
// 3.使用forEach
var total = 0
numbers.forEach(function (t) {
    total += t
})
alert(total)
```



**使用reduce方法实现**

```javascript
// 4.使用reduce方法
var total = numbers.reduce(function (pre, cur) {
    return pre + cur
})
alert(total)
```

代码解析:

- pre中每次传入的参数是不固定的, 而是上次执行函数时的结果保存在了pre中
- 第一次执行时, pre为0, cur为1
- 第二次执行时, pre为1 (0+1, 上次函数执行的结果), cur为2
- 第三次执行时, pre为3 (1+2, 上次函数执行的结果), cur为3
- 第四次执行时, pre为6 (3+3, 上次函数执行的结果), cur为4
- 当cur为4时, 数组中的元素遍历完了, 就直接将第四次的结果, 作为reduce函数的返回值进行返回.



**似乎和forEach比较没有太大的优势呢?**

- 通过这个代码你会发现, 你不需要在调用函数前先定义一个变量, 只需要一个变量来接收方法最终的参数即可.
- 但是这就是优势吗? 不是, 优势在于reduce方法有返回值, 而forEach没有.
- 这算什么优势? 如果reduce方法有返回值, 那么reduce方法本身就可以作为参数直接传递给另外一个需要reduce返回值的作为参数的函数. 而forEach中你只能先将每次函数的结果保存在一个变量, 最后再将变量传入到参数中.
- 没错, 这就是最近非常流行的函数式编程. 也是为了几乎每个可以使用**函数式编程**的语言都有reduce这个方法的原因.
- 关于函数式编程, 不再本次课程的讨论之中, 只是看到了这个函数, 给大家延伸了一下而已.(后面有机会和大家分享函数式编程)

- initialValue
  - 其实就是第一次执行reduce中的函数时, pre的值.
  - 因为默认pre第一次执行时为0.

##### 7. keys() 遍历键名 / values() 遍历键值/ entries() 遍历键值对

```
   {
        for(let i of ['a','b','c'].keys()){
            console.log(i)//keys()遍历下标 0 1 2
        }
        for(let item of ['a','b','c'].values()){
            console.log(item)//values()遍历值 a b c
        }
        for (let [i,item] of ['a','b','c'].entries()){
            console.log(i,item)//entries()遍历下标以及内容 
        }
    }
```

##### 8. find() / findIndex() 

根据条件找到数组成员 [ES6]

> 语法arr.find(function(value, index, arr), this);
>
> 参数值同froEach一样
>
> 返回值： find()返回第一个符合条件的数组成员，若不存在返回undefined。 findIndex()返回符合条件的数组成员的索引。

```
{
        let arr= [1,2,3,4,5]
        let result = arr.find(item=>item>3)
        console.log(result)//4 第一个值
        let result1 = arr.findIndex(item=>item>3)
        console.log(result1)//3 第一个值的下标
}
```

##### 9. flat()

**深度遍历展开数组**

> 参数: depth(可选): 提取嵌套数组的结构深度，默认为1。
>
> 返回值：展开后的新数组。
>
> flat方法会移除数组中的空白项
>
> 若不清楚有多少层嵌套，可以直接用 Infinity 设置，就可全部展开
>
> Infinity 正无穷大的数值。

```
{
        let arr = [1,2,[3,[4,[5]]],6]
        let one = arr.flat()
        console.log(one)//[1, 2, 3, Array(2), 6]
 
        let inf = arr.flat(Infinity)
        console.log(inf)//[1, 2, 3, 4, 5, 6]
}
```







### 四、总结

#### 1. map 和 forEach 的区别

相同点：

1. 都是循环遍历数组中的每一项
2. 每次执行匿名函数都支持三个参数，参数分别为item（当前每一项），index（索引值），arr（原数组）
3. 匿名函数中的this都是指向window
4. 只能遍历数组

不同点：

1. map()会分配内存空间存储新数组并返回，forEach()不会返回数据。
2. forEach()允许callback更改原始数组的元素,遍历一次返回一次。map()返回新的数组。

#### 2.for of 可以遍历哪些对象

**参考答案：**

for..of..: 它是es6新增的一个遍历方法，但**只限于迭代器(iterator)**, 所以普通的对象用for..of遍历
是会报错的。

可迭代的对象：包括Array, Map, Set, String, TypedArray, arguments对象等等

#### 3. HashMap 和 Array 有什么区别？

**参考答案：**

1. 查找效率
   HashMap因为其根据hashcode的值直接算出index,所以其查找效率是随着数组长度增大而增加的。
   ArrayMap使用的是二分法查找，所以当数组长度每增加一倍时，就需要多进行一次判断，效率下降
2. 扩容数量
   HashMap初始值16个长度，每次扩容的时候，直接申请双倍的数组空间。
   ArrayMap每次扩容的时候，如果size长度大于8时申请size*1.5个长度，大于4小于8时申请8个，小于4时申 请4个。这样比较ArrayMap其实是申请了更少的内存空间，但是扩容的频率会更高。因此，如果数据量比较大的时候，还是使用HashMap更合适，因为其扩容的次数要比ArrayMap少很多。
3. 扩容效率
   HashMap每次扩容的时候重新计算每个数组成员的位置，然后放到新的位置。
   ArrayMap则是直接使用System.arraycopy，所以效率上肯定是ArrayMap更占优势。
4. 内存消耗
   以ArrayMap采用了一种独特的方式，能够重复的利用因为数据扩容而遗留下来的数组空间，方便下一个ArrayMap的使用。而HashMap没有这种设计。 由于ArrayMap之缓存了长度是4和8的时候，所以如果频繁的使用到Map，而且数据量都比较小的时候，ArrayMap无疑是相当的是节省内存的。

总结
综上所述，数据量比较小，并且需要频繁的使用Map存储数据的时候，推荐使用ArrayMap。 而数据量比较大的 时候，则推荐使用HashMap。

### 五、应用

#### 1.数组去重

##### 1. set去重复

不考虑兼容性，这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方***添加去掉重复“{}”的方法。

> 了解为什么无法去除{}

```js
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```

+ 简化

```javascript
function unique(arr) {
	return new Set([...arr])
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]


```

![image-20211218121025531](https://cdn.jsdelivr.net/gh/Doerr33/image5/img3/image-20211218121025531.png)



##### 2.**利用for嵌套for，然后splice去重（ES5中最常用）**

双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。

> 全等和非全等的差异是为什么，NaN和{}无法去重又是为什么，null直接消失又是为什么？

```javascript
function unique(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j]) {//第一个等同于第二个，splice方法删除第二个
                        arr.splice(j, 1);//删除j位置的元素
                        j--;
                    }
                }
            }
            return arr;
        }
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

+ 非全等

![image-20211219222132057](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219222132057.png)

+ 全等

![image-20211219222327214](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219222327214.png)



##### 3.利用indexOf去重

新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

![image-20211219223148712](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219223148712.png)



##### 4. 利用sort()

利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }

    arr = arr.sort()
    var arrry = [arr[0]];//第一个不用判断

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }

    return arrry;
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

![image-20211219224956411](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219224956411.png)





##### 5.*利用对象的属性不能相同的特点进行去重

（这种数组去重的方法有问题，不建议用，有待改进）

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }

    var arrry = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            arrry.push(arr[i])
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    console.log(obj);
    return arrry;
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

console.log(unique(arr))
    //[1, "true", 15, false, undefined, null, NaN, 0, "a", {…}]    //两个true直接去掉了，NaN和{}去重
```

##### 6. **利用includes**

includes查找数组是否包含某个元素。[不改变原数组,]

> 第一个参数为要查找的值 必填
>
> 第二个为查找的起始位置
>
> 返回值 true或false

```javascript
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```

![image-20211219231256342](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219231256342.png)

##### 7.***利用hasOwnProperty**

利用hasOwnProperty 判断是否存在对象属性

```javascript
function unique(arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了
```

##### 8.利用filter

```javascript
function unique(arr) {
    return arr.filter(function (item, index, arr) {
        console.log(`item:${item}:  index:${index}  itemindexOf:${arr.indexOf(item,0)}\n\n`);
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        // console.log(`${arr.indexOf(item, 0)}:${index}`);
        return arr.indexOf(item, 0) === index;
    });
}

var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

console.log(arr.length);
console.log(unique(arr));
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]

```

![image-20211219233512059](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211219233512059.png)



##### 9. ***利用递归去重**

> 过程不太理解

```javascript
let arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
function unique(arr){
    let len = arr.length;
    // 先从小到大排序
    arr.sort((a,b)=>{
        return a - b;
    })

    function loop(len){
        // 递归终止条件
        if(len >= 1){
            if(arr[len] === arr[len - 1]){
                // 删除len位置的元素
                arr.splice(len,1);
            }
            // 递归调用
            loop(len - 1);
        }

    }
    // 调用函数，len-1，因为是数组判断,length也没事，undefined也会去重复
    loop(len - 1);
    return arr;
}
console.log(unique(arr));
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

![image-20211220101954824](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211220101954824.png)



##### 10.**利用Map数据结构去重**

创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。

![image-20211218134735771](https://cdn.jsdelivr.net/gh/Doerr33/image5/img3/image-20211218134735771.png)

![image-20211218135025924](https://cdn.jsdelivr.net/gh/Doerr33/image5/img3/image-20211218135025924.png)

```javascript
function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array = new Array();  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {  // 如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false);   // 如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

console.log(arrayNonRepeatfy(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

![image-20211220104253584](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211220104253584.png)



##### 11.**利用reduce+includes**

```js
function unique(arr) {
    return arr.reduce((prev, cur) => {
        console.log(`[${prev}] : ${cur}\n`);
        // 扩展运算符，合并数组
        return prev.includes(cur) ? prev : [...prev, cur]
    }, []);
    // 【】：为reduce中pre的初始值
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr));
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]
```

![image-20211220105432968](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211220105432968.png)

#### 2.数组扁平化





#### 3.扁平化数组转换为json树形结构



