---
sidebar: auto
title: 02HTML学习笔记
date: 2021-11-29
tags:
 - 
categories: 
 - 03HTML
---

# HTML学习

## 一、简介

### 1.什么是HTML?

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种**标记**语言
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用标记标签来**描述**网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

### 2.HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由*尖括号*包围的关键词，比如 `<html>`
- HTML 标签通常是*成对出现*的，比如 `<b>` 和 `</b>`
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为*开放标签*和*闭合标签*

### 3.HTML 元素

 "HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.

 但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:

 HTML 元素:

```
<p>这是一个段落。</p>
```

### 4.Web浏览器

 Web浏览器（如谷歌浏览器，Internet Explorer，Firefox，Safari）是用于读取HTML文件，并将其作为网页显示。

 浏览器并不是直接显示的HTML标签，但可以使用标签来决定如何展现HTML页面的内容给用户：

![img](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/html-first.png)

### 5.HTML 网页结构

下面是一个可视化的HTML页面结构：

![image-20211106093353069](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106093353069.png)



| ![Note](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/lamp.jpg) | 只有 body 区域 (白色部分) 才会在浏览器中显示。 |
| ------------------------------------------------------------ | ------------------------------------------------ |


### 6.HTML版本

![image-20211106093333899](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106093333899.png)

### 8.`<!DOCTYPE>` 声明

!DOCTYPE声明有助于浏览器中正确显示网页。

网络上有很多不同的文件，如果能够正确声明HTML的版本，浏览器就能正确显示网页内容。

doctype 声明是不区分大小写的，以下方式均可：

![image-20211106093511210](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106093511210.png)

`<!Doctype Html>`

### 9.通用声明

![image-20211106093736521](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106093736521.png)

查看完整网页声明类型 [DOCTYPE 参考手册](https://www.runoob.com/tags/tag-doctype.html)。

### 10.中文编码

目前在大部分浏览器中，直接输出中文会出现中文乱码的情况，这时候我们就需要在头部将字符声明为 UTF-8 或 GBK。

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```



## 二、基础

### 1.HTML 标题

HTML 标题（Heading）是通过h1 - h6标签来定义的。

![image-20211106094111037](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106094111037.png)

### 2.HTML 段落

HTML 段落是通过标签 p来定义的。

![image-20211106094238512](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106094238512.png)

### 3.HTML 链接

HTML 链接是通过标签 a来定义的。

![image-20211106094328890](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106094328890.png)

### 4.HTML 图像

HTML 图像是通过标签 img来定义的.

![image-20211106094416912](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106094416912.png)

## 三、元素

### 1.HTML 元素

| 开始标签 *             | 元素内容     | 结束标签 * |
| :--------------------- | :----------- | :--------- |
| `<p>`                    | 这是一个段落 | `</p>`       |
| `<a href="default.htm">` | 这是一个链接 | `</a>`       |
| `<br>`                   | 换行         |            |

 开始标签常被称为**起始标签（opening tag）**，结束标签常称为**闭合标签（closing tag）**。

### 2.HTML 元素语法

- HTML 元素以**开始标签**起始
- HTML 元素以**结束标签**终止
- **元素的内容**是开始标签与结束标签之间的内容
- 某些 HTML 元素具有**空内容（empty content）**
- 空元素**在开始标签中进行关闭**（以开始标签的结束而结束）
- 大多数 HTML 元素可拥有**属性**

### 3.嵌套的 HTML 元素

大多数 HTML 元素可以嵌套（HTML 元素可以包含其他 HTML 元素）。

HTML 文档由相互嵌套的 HTML 元素构成。

```
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>
        <p></p>
    </h1>
</body>
</html>
```

以上实例包含了三个 HTML 元素。

### 4.HTML 实例解析

![image-20211106095230671](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106095230671.png)

### 5.不要忘记结束标签

![image-20211106095353225](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106095353225.png)

## 四、属性

### 1.属性

![image-20211106095521377](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106095521377.png)

### 2.HTML 属性常用引用属性值

属性值应该始终被包括在引号内。

双引号是最常用的，不过使用单引号也没有问题。

![Remark](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/lamp.gif)**提示:** 在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号，例如：name='John "ShotGun" Nelson'

### 3.HTML 提示：使用小写属性

属性和属性值对大小写不敏感。

不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值。

而新版本的 (X)HTML 要求使用小写属性。

### 4.HTML 属性参考手册

查看完整的HTML属性列表: [HTML 标签参考手册](https://www.runoob.com/tags/html-reference.html)。

下面列出了适用于大多数 HTML 元素的属性：

![image-20211106095726411](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106095726411.png)

## 五、标题

### 1.标题很重要

请确保将 HTML 标题 标签只用于标题。不要仅仅是为了生成**粗体**或**大号**的文本而使用标题。

搜索引擎使用标题为您的网页的结构和内容编制索引。

因为用户可以通过标题来快速浏览您的网页，所以用标题来呈现文档结构是很重要的。

应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。

### 2.HTML 水平线

![image-20211106100123643](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106100123643.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hr定义水平线</h1>
    <hr>
    <p>这是一个段落</p>
    <hr>
    <p>这是一个段落</p>
    <hr>
    <p>这是一个段落</p>
</body>
</html>
```

### 3.HTML 注释

可以将注释插入 HTML 代码中，这样可以提高其可读性，使代码更易被人理解。浏览器会忽略注释，也不会显示它们。

注释写法如下:

![image-20211106100307040](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106100307040.png)

![image-20211106100359808](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106100359808.png)

## 六、段落

### 1.HTML 段落

------

HTML 可以将文档分割为若干段落。

![image-20211106100525141](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106100525141.png)

>注意:浏览器会自动地在段落的前后添加空行。（`</p>`是块级元素）

### 2.HTML 换行

如果您希望在不产生一个新段落的情况下进行换行（新行），请使用 br标签：

![image-20211106100840068](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106100840068.png)

### 3.HTML 输出- 使用提醒

我们无法确定 HTML 被显示的确切效果。屏幕的大小，以及对窗口的调整都可能导致不同的结果。

对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。

当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

![image-20211106103537723](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103537723.png)

![image-20211106103605760](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103605760.png)

## 七、文本格式化

![image-20211106103650338](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103650338.png)

![image-20211106103728987](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103728987.png)

### 1.HTML 格式化标签

HTML 使用标签 b("bold") 与 i("italic") 对输出的文本进行格式, 如：**粗体** or *斜体*

这些HTML标签被称为格式化标签

![image-20211106103847598](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103847598.png)

+ 文本格式化

![image-20211106103917093](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106103917093.png)

+ 预格式文本

![image-20211106104006081](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104006081.png)

+ 计算机输出标签

![image-20211106104056945](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104056945.png)

+ 地址效果

![image-20211106104223960](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104223960.png)

+ 缩写和首字母缩写

![image-20211106104321163](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104321163.png)

+ 文字方向

![image-20211106104423787](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104423787.png)

+ 块引用

![image-20211106104516284](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104516284.png)

+ 删除字效果和添加字效果

![image-20211106104600436](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104600436.png)

### 2.汇总

![image-20211106104643918](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104643918.png)

![image-20211106104702266](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104702266.png)

![image-20211106104733152](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106104733152.png)

## 八、链接

![image-20211106105547012](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106105547012.png)

![image-20211106105725468](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106105725468.png)

+ 图片链接

![image-20211106105943717](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106105943717.png)

+ 查看指定章节

![image-20211106110052761](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106110052761.png)

+ 跳出框架

![image-20211106110201711](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106110201711.png)

+ 发送邮件

![image-20211106110251155](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106110251155.png)

+ 发送邮件2

![image-20211106110423830](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106110423830.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>这是另一个电子邮件的链接<a href="mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!">发送邮件</a></p>
    <p><b>注意：</b>单词之间的空格使用 %20 代替，以确保浏览器可以正常显示文本。</p>
</body>
</html>
```

## 九、头部

### 1.标签

+ title：使用 title 标签定义HTML文档的标题

![image-20211106111003982](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106111003982.png)

![image-20211106110950953](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106110950953.png)

+ base：使用 base 定义页面中所有链接默认的链接目标地址。

![image-20211106111125363](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106111125363.png)

+ meta: 使用 meta 元素来描述HTML文档的描述，关键词，作者，字符集等。

![image-20211106111230083](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106111230083.png)

### 2.HTML head元素

head 元素包含了所有的头部标签元素。在 head元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种meta信息。

可以添加在头部区域的元素标签为: title, style, meta, link, script, noscript 和 base。

### 3.HTML title元素

title 标签定义了不同文档的标题。

title 在 HTML/XHTML 文档中是必须的。

title 元素:

- 定义了浏览器工具栏的标题
- 当网页添加到收藏夹时，显示在收藏夹中的标题
- 显示在搜索引擎结果页面的标题

一个简单的 HTML 文档:

### 4.HTML base元素

base 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:

### 5.HTML link元素

link 标签定义了文档与外部资源之间的关系。

link 标签通常用于链接到样式表:

```
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### 6.HTML style元素

style 标签定义了HTML文档的样式文件引用地址.

在style 元素中你也可以直接添加样式来渲染 HTML 文档:

```
<style>
    body{
        background-color: aqua;
    }
</style>
```

### 7.HTML meta元素

meta标签描述了一些基本的元数据。

meta 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。

META 元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。

元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。

meta 一般放置于 head 区域

+ meta标签- 使用实例

为搜索引擎定义关键词:

```
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"\>
```

为网页定义描述内容:

```
<meta name="description" content="免费 Web & 编程 教程"\>
```

定义网页作者:

```
<meta name="author" content="Runoob"/>
```

每30秒钟刷新当前页面:

```
<meta http-equiv="refresh" content="30"/>
```

### 8.HTML script元素

script标签用于加载脚本文件，如： JavaScript。

![image-20211106111730995](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106111730995.png)

## 十、HTML 样式CSS

### 1.如何使用CSS

CSS 是在 HTML 4 开始使用的,是为了更好的渲染HTML元素而引入的.

CSS 可以通过以下方式添加到HTML中:

- 内联样式- 在HTML元素中使用"style" **属性**
- 内部样式表 -在HTML文档头部 head 区域使用style **元素** 来包含CSS
- 外部引用 - 使用外部 CSS **文件**

最好的方式是通过外部引用CSS文件.

### 2.内联样式

当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。

```
<p style="color:blue;margin-left:20px;">这是一个段落。/p>
```

### 3.HTML样式实例 - 背景颜色

背景色属性（background-color）定义一个元素的背景颜色：

+ 实例

```
<style>
    body{
        background-color:red;
    }
</style>
```

### 4.HTML 样式实例 - 字体, 字体颜色 ，字体大小

我们可以使用font-family（字体），color（颜色），和font-size（字体大小）属性来定义字体的样式:

```
<h1 style="font-family:verdana;">一个标题/h1>
<p style="font-family:arial;color:red;font-size:20px;">一个段落。/p>
```

### 5.HTML 样式实例 - 文本对齐方式

使用 text-align（文字对齐）属性指定文本的水平与垂直对齐方式：

```
<h1 style="text-align:center;">居中对齐的标题</h1>
<p>这是一个段落。</p>
```

文本对齐属性 text-align取代了旧标签 center 。

### 6.内部样式表

当单个文件需要特别样式时，就可以使用内部样式表。你可以在head 部分通过 style标签定义内部样式表:

![image-20211106124530997](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124530997.png)

### 7.外部样式表

当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。

![image-20211106124622941](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124622941.png)

![image-20211106124650474](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124650474.png)

## 十一、HTML图像

![image-20211106124816185](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124816185.png)

![image-20211106124909270](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124909270.png)

![image-20211106124942637](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106124942637.png)

### 1.HTML 图像- 图像标签（ img）和源属性（Src）

![image-20211106125057285](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125057285.png)

![image-20211106125113929](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125113929.png)

![image-20211106125211993](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125211993.png)





+ 图片排列align

![image-20211106125521163](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125521163.png)

+ 浮动

![image-20211106125635009](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125635009.png)

+ 图像映射

![image-20211106125750568](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125750568.png)

![image-20211106125810248](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106125810248.png)

## 十二、HTML 表格

## HTML 表格

表格由 table 标签来定义。每个表格均有若干行（由 tr 标签定义），每行被分割为若干单元格（由 td 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

![image-20211106130327685](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130327685.png)

![image-20211106130405572](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130405572.png)

![image-20211106130422332](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130422332.png)

+ 水平和垂直标题

![image-20211106130624174](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130624174.png)

+ 标题

![image-20211106130734655](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130734655.png)

+ 跨行和列

![image-20211106130941089](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106130941089.png)

+ 单元格包含其他内容

![image-20211106131101955](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131101955.png)

+ 单元格边距

![image-20211106131141935](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131141935.png)

+ 单元格间距

![image-20211106131229774](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131229774.png)

![image-20211106131358324](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131358324.png)

## 十二、HTML 列表

![image-20211106131441179](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131441179.png)

![image-20211106131510164](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131510164.png)

![image-20211106131524190](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131524190.png)

![image-20211106131624364](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106131624364.png)

+ 不同类型的有序列表

![image-20211106132029307](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132029307.png)

+ 不同类型的无序列表

![image-20211106132129461](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132129461.png)

+ 嵌套

![image-20211106132153611](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132153611.png)

+ 嵌套2

![image-20211106132217882](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132217882.png)

+ 定义列表

![image-20211106132246554](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132246554.png)

![image-20211106132328553](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106132328553.png)

## 十三、HTML 区块

+ HTML div 和span

大多数 HTML 元素被定义为**块级元素**或**内联元素**。

+ 块元素

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

实例: h1, p, ul, table

+ 内联元素

内联元素在显示时通常不会以新行开始。

实例: b, td, a, img

### 1.HTML div元素

HTML div 元素是块级元素，它可用于组合其他 HTML 元素的容器。

div 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，div 元素可用于对大的内容块设置样式属性。

div 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 table 元素进行文档布局不是表格的正确用法。table 元素的作用是显示表格化的数据。

### 2.HTML span元素

HTML span 元素是内联元素，可用作文本的容器

span 元素也没有特定的含义。

当与 CSS 一同使用时，span 元素可用于为部分文本设置样式属性。

## 十四、HTML布局

![image-20211106161605004](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106161605004.png)

+ div

![image-20211106161951074](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106161951074.png)

![image-20211106162006917](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162006917.png)

+ table

![image-20211106162132841](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162132841.png)

![image-20211106162148348](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162148348.png)

![image-20211106162218187](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162218187.png)

## 十五、表单

### 1.表单的输入和输出

![image-20211106162541548](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162541548.png)

![image-20211106162655842](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162655842.png)

![image-20211106162723977](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162723977.png)

+ 输入元素

![image-20211106162848108](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162848108.png)

![image-20211106162830487](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162830487.png)

![image-20211106162914320](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106162914320.png)

+ 下拉选择

![image-20211106163109818](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163109818.png)

+ 预选下拉选择

![image-20211106163142683](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163142683.png)

+ 文本域

![image-20211106163205332](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163205332.png)

### 2.表单实例

+ 带边框的表单

![image-20211106163401567](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163401567.png)

+ 带提交按钮的表单

![image-20211106163436936](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163436936.png)

+ 带复选框

![image-20211106163509677](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163509677.png)

+ 带单选框

![image-20211106163532703](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163532703.png)

+ 发送邮件

![image-20211106163648879](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163648879.png)



![image-20211106163717795](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163717795.png)

### 3.总结

![image-20211106163824254](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163824254.png)

## 十六、框架

![image-20211106163950949](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106163950949.png)

![image-20211106164025375](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106164025375.png)

![image-20211106164212426](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106164212426.png)

[尝试一下](https://www.runoob.com/try/try.php?filename=tryhtml_iframe_target)

## 十七、颜色

三种颜色 红，绿，蓝的组合从0到255，一共有1600万种不同颜色(256 x 256 x 256)。

![image-20211106164422283](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106164422283.png)



+ Web安全色?

数年以前，当大多数计算机仅支持 256 种颜色的时候，一系列 216 种 Web 安全色作为 Web 标准被建议使用。其中的原因是，微软和 Mac 操作系统使用了 40 种不同的保留的固定系统颜色（双方大约各使用 20 种）。

我们不确定如今这么做的意义有多大，因为越来越多的计算机有能力处理数百万种颜色，不过做选择还是你自己。

最初，216 跨平台 web 安全色被用来确保：当计算机使用 256 色调色板时，所有的计算机能够正确地显示所有的颜色。





+ 目前所有浏览器都支持以下颜色名。

141个颜色名称是在HTML和CSS颜色规范定义的（17标准颜色，再加124）。下表列出了所有颜色的值，包括十六进制值。

![Remark](https://www.runoob.com/images/lamp.gif) **提示:** 17标准颜色：黑色，蓝色，水，紫红色，灰色，绿色，石灰，栗色，海军，橄榄，橙，紫，红，白，银，蓝绿色，黄色。点击其中一个颜色名称（或一个十六进制值)就可以查看与不同文字颜色搭配的背景颜色。



+ 颜色值

颜色值由十六进制来表示红、绿、蓝（RGB）。

每个颜色的最低值为 0(十六进制为 00)，最高值为 255(十六进制为FF)。

十六进制值的写法为 # 号后跟三个或六个十六进制字符。

三位数表示法为：#RGB，转换为6位数表示为：#RRGGBB。



## 十八、脚本

![image-20211106165129470](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165129470.png)

![image-20211106165146637](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165146637.png)

![image-20211106165305687](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165305687.png)

![image-20211106165456351](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165456351.png)

![image-20211106165540923](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165540923.png)

![image-20211106165553074](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165553074.png)

![image-20211106165605745](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106165605745.png)

## 十九、HTML字符实体

![image-20211106170047980](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106170047980.png)

![image-20211106170304532](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106170304532.png)

[实体参考手册](https://www.runoob.com/tags/ref-entities.html)

## 二十、统一资源定位器

![image-20211106184435096](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106184435096.png)

![image-20211106185147124](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106185147124.png)

![image-20211106185327987](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106185327987.png)

![image-20211106185457343](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106185457343.png)

![image-20211106185649697](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106185649697.png)

## 二十二、XHTML

![image-20211106191200190](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191200190.png)

![image-20211106191212580](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191212580.png)

![image-20211106191224141](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191224141.png)

![image-20211106191234502](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191234502.png)

![image-20211106191246653](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191246653.png)

![image-20211106191256806](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191256806.png)

![image-20211106191307727](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191307727.png)

![image-20211106191328240](https://cdn.jsdelivr.net/gh/Doerr33/images1//imagesubuntu1/image-20211106191328240.png)



