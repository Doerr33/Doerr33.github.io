---
sidebar: 'auto'
title: 02多任务
date: 2021-11-29
tags:
 - web
 - python
categories: 
 - 04python
 - 05web
---
# 多任务

## 线程

### 1.创建线程

![image-20210813135508891](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813135508891.png)

![image-20210813135913141](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813135913141.png)

![image-20210813140047588](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813140047588.png)

![image-20210813140206619](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813140206619.png)

![image-20210813140637756](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813140637756.png)

![image-20210813141814877](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813141814877.png)

### 2.查看正在执行线程数

![image-20210813141949331](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813141949331.png)

![image-20210813142208937](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813142208937.png)

![image-20210813144258807](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813144258807.png)

### 3.通过继承thread完成进程创建

![image-20210813144915617](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813144915617.png)

![image-20210813145244752](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813145244752.png)

![image-20210813145707723](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813145707723.png)

### 4.多线程共享全局变量

![image-20210813150900450](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813150900450.png)

![image-20210813151437282](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813151437282.png)

args参数

![image-20210813151824925](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813151824925.png)

共享变量时的问题

cpu执行三种操作，但是切换等时候不一定同一个从头到尾

![image-20210813153557533](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813153557533.png)

![image-20210813153615563](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813153615563.png)

### 5.同步互斥

