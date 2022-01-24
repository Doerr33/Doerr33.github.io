---
sidebar: 'auto'
title: 03多任务
date: 2021-11-29
tags:
 - web
 - python
categories: 
 - 04python
 - 05web
---
# 多任务

### 6.1. 内容回顾

![image-20210813135508891](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210813135508891.png)

### 6.2. 多任务的介绍

* 多任务： 同一时间有多个任务在执行，这就是多任务
* python程序默认是单任务

### 6.3. [重点]线程-基本使用

* 线程是CPU调度的基本单元

* 主线程：程序启动后有一个默认的主线，通常称为主线

  > 作用：1）创建子线程   2）等其他子线程执行结束后，做关闭操作

* 子线程：程序的一个分支

* 子线程创建

  * 导入模块   threading
  * 创建线程对象 threading.Thread(target=执行的分支函数名)
  * 启动子线程 线程对象.start()


### 6.4. [重点]线程-线程名称、总数量

* 获取线程的数量：正在活跃的线程数量

  > threading.enumerate()  --- 当前活跃的线程对象列表
  >
  > 长度:  len（threading.enumerate()）

* 获取线程的名称

  > threading.current_thread()     获取当前的线程对象，对象中含有名称

### 6.5. [重点]线程-参数及顺序

* 线程参数

  * 元组 args

    > threading.Tread(target=xxx, args=(参数1,参数2,....))
    >
    > 元组中元素的顺序和函数的参数顺序一致

  * 字典 kwargs

    > ```
    > 
    > # 2、 使用字典传递  threading.Thread(target=xxx, kwargs={"参数名": 参数值,...})
    >     
    > ```

  * 混合元组和字典

    > ```
    > # 3、 混合使用元组和字典 threading.Thread(target=xxx, args=(参数1,参数2,...), kwargs={"参数名": 参数值,...})
    >     thread_sing = threading.Thread(target=sing, args=(10, ), kwargs={"c": 1000, "b": 10})
    > ```

* 线程顺序: 线程的执行顺序是无序的（线程有CPU调度执行，CPU会根据系统运行状态按照自己的调度算法去调度执行）

### 6.6. [重点]线程-守护线程

* 线程守护：子线程和主线的一种约定（当主线程结束后，子线程也结束）

  > 子线程.setDaemon(True)

### 6.7. 并行和并发

* 并发： 任务数 大于 CPU的核心数，这就是并发执行
* 并行： 任务数 小于 或 等于 CPU的核心数，这就是并行

### 6.8. [重、难点]自定义线程类

* 自定义线程类的步骤

  * 导入模块

  * 创建类并且继承 threading.Thread

    > class MyThread(threading.Thread):

  * 重写父类的run方法

    > def run(self):
    >
    >    ....

  * 创建对象并且调用.start() 

    > mythread  = MyThread()
    >
    > mythread.start()

* 底层原理

  Thread类

  * run方法
  * start()
  * start()中调用了run方法

* 自定义线程类的init方法问题

  > 子类先通过super调用父类的初始化方法，子类再初始化
  >
  > ```
  > def __init__(self,num):
  >         # 先去调用父类的init方法
  >         super().__init__()
  >         self.num = num
  > ```

### 6.9. [重点]多线程-共享全局变量

* 多线程之间可以共享全局变量

### 6.10. [难点]多线程-共享全局变量-问题

* 存在的问题：多个线程同时访问同一个资源，出现资源竞争的问题

* 解决方法：优先让某个线程先执行

  > 线程对象.join() 

  缺点：把多线程变成了单线程，影响整体性能

### 6.11. 同步

* 同步：在多任务中 多个任务执行有先后顺序，一个执行完毕后，另外一个再执行

* 异步：在多任务中多个任务执行没有先后顺序，多个任务同时执行

* 线程的锁机制：当线程获取资源后，立刻进行锁定，资源使用完毕后再解锁，有效的保证同一时间只有

  线程在使用资源

### 6.12. [重点]互斥锁(重点)

* 互斥锁使用分三步：

  * 创建一把锁  

    > lock1 = threading.Lock()

  * 上锁

    > lock1.acquire()

  * 解锁

    > lock1.release()

* 互斥锁的使用原则：尽可能少的锁定竞争资源

### 6.13. 死锁

* 死锁：在多线程中，两个线程都占用一些资源 ，而且同一时间都在等待对方释放资源，这种状态就是死锁状态
* 避免：锁使用完毕后，要及时释放

### 6.14. 案例:多任务版udp聊天器(一)

* 创建一个子线程，单独用来接收信息

  > ```
  >     # 创建子线程，单独接收用户发送的信息
  >     thread_recvmsg = threading.Thread(target=recv_msg, args=(udp_socket, ))
  >     # 启动子线程
  >     thread_recvmsg.start()
  > ```

* 删除 接收信息的菜单和判断

* 可以接收多条信息

  > ```
  > def recv_msg(udp_socket):
  >     """接收信息的函数"""
  > 
  >     while True:
  >         # 1) 使用socket接收数据
  >         # (b'\xe4\xbc\x91\xe6\x81\xaf\xe4\xbc\x91\xe6\x81\xaf\xe6\x89\x80', ('192.168.150.93', 8080))
  >         recv_data, ip_port = udp_socket.recvfrom(1024)
  >         # 2）解码数据
  >         recv_text = recv_data.decode()
  >         # 3）输出显示
  >         print("接收到[%s]的消息：%s" % (str(ip_port), recv_text))
  > ```

### 6.15. 案例:多任务版udp聊天器(二)

* 让子线程守护主线程

  >     # 设置子线程守护主线程
  >     thread_recvmsg.setDaemon(True)

### 6.16. [重点]TCP服务端框架

* tcp的服务器

  > 1、导入模块
  > 2、创建套接字
  > 3、设置地址可以重用
  > 4、绑定端口
  > 5、设置监听，套接字有主动设置为被动
  > 6、接受客户端连接
  > 7、接收客户端发送的信息
  > 8、解码数据并且进行输出
  > 9、关闭和当前客户端的连接

* 支持多线程，思想：每来一个新的客户端，我创建一个新的线程

  > ```
  > 
  > while True:
  >     # 6、接受客户端连接
  >     new_client_socket, ip_port = tcp_server_socket.accept()
  >     print("新用户上线:",ip_port)
  >     # recv_msg(new_client_socket,ip_port)
  > 
  >     # 创建线程
  >     thread_recvmsg = threading.Thread(target=recv_msg, args=(new_client_socket, ip_port))
  >     # 设置线程守护
  >     thread_recvmsg.setDaemon(True)
  > 
  >     # 启动线程
  >     thread_recvmsg.start()
  > ```



### 6.17. 知识点总结