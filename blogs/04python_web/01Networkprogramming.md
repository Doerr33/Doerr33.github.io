---
sidebar: 'auto'
title: 01网络编程
date: 2021-11-29
tags:
 - web
 - python
categories: 
 - 04python
 - 05web
---
# 网络编程

## 一、基本概念

### 1.网络通信概述

![image-20210801145700497](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801145700497.png)

### 2.ip地址

### 3.查看ip

![image-20210801150054336](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150054336.png)

### 4.ipv4/6

### 5.端口

### 6.知名端口、动态端口

![image-20210801150214809](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150214809.png)

![image-20210801150225069](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150225069.png)

### 7.socket

![image-20210801150359419](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150359419.png)

![image-20210801150440138](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150440138.png)

![image-20210801150737031](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150737031.png)

![image-20210801150657297](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801150657297.png)

## 二、udp

### 1.记录错误

![image-20210801185929654](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801185929654.png)

![image-20210801190022072](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801190022072.png)

```
1.发送的数据不能是str，加一个b
```

![image-20210801190149878](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801190149878.png)

![image-20210801190232602](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801190232602.png)

```
设置为桥接，f
```

![image-20210801192555821](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801192555821.png)

![image-20210801192651901](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801192651901.png)

### 2.发送任意数据

![image-20210801193237848](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801193237848.png)

```
循环发送
```

![image-20210801193358505](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801193358505.png)

```
可退出
```

![image-20210801193556430](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801193556430.png)

### 3.接收数据

![image-20210801194003343](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194003343.png)

![image-20210801194220754](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194220754.png)

![image-20210801194318356](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194318356.png)

![image-20210801194529950](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194529950.png)

![image-20210801194555184](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194555184.png)

```
接收问题
```



![image-20210801194635958](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194635958.png)

![image-20210801194727497](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194727497.png)

![image-20210801194746567](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801194746567.png)

```
bind注意事项
```

![image-20210801195027348](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801195027348.png)

![image-20210801195057123](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801195057123.png)

```
循环接收
```

![image-20210801195150349](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801195150349.png)

![image-20210801205920262](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801205920262.png)

```
发送端绑定端口
```

![image-20210801210658282](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801210658282.png)

![image-20210801210717349](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801210717349.png)

### 4.udp聊天室

![image-20210801211857564](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801211857564.png)

![image-20210801212135193](https://raw.githubusercontent.com/Doerr33/images/master/img/image-20210801212135193.png)

```
import socket
def send_msg(udp_socket):
    """发送消息"""
    # 获取要发送的内容
    dest_ip = input("输入对方的ip：")
    # 端口用int
    dest_port = int(input("port: "))
    send_data = input("messages: ")
    # encode编码
    udp_socket.sendto(send_data.encode("utf-8"),(dest_ip,dest_port))

def recv_msg(udp_socket):
    """接收消息"""
    recv_data = udp_socket.recvfrom(1024)
    # decode解码
    print("%s:%s" % ( str(recv_data[1]), recv_data[0].decode("utf-8")) )

def main():
    # 创建udp套接字
    udp_socket = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    # 绑定端口
    udp_socket.bind(("",7788))

    while True:
        print("---xxx聊天室----")
        print("1.发送数据")
        print("2.接收数据")
        print("0.退出")
        op = input("请选择：")
        if op == "1":
            send_msg(udp_socket)
        elif op == "0":
            break
        elif op == "2":
            recv_msg(udp_socket)
        else:
            print("ERROR")
if __name__ == '__main__':
    main()
```

## 三、TCP

### 1.TCP客户端

![image-20210810210335337](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810210335337.png)

![image-20210810211055844](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810211055844.png)

![image-20210810211337539](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810211337539.png)

![image-20210810212206308](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810212206308.png)

```
import socket

def main():
    # 创建套接字
    TcpSocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    # 连接服务器
    ServerIp = input("请输入服务器的ip：")
    ServerPort = int(input("请输入要连接的服务器的端口："))
    ServerAddr = (ServerIp,ServerPort)
    TcpSocket.connect(ServerAddr)
    # 发送接收数据
    SendData = input("请输入要发送的数据：")
    TcpSocket.send(SendData.encode("utf-8"))
    # 关闭套接字
    TcpSocket.close()

if __name__ == '__main__':
    main()
```

### 2.TCP服务端

![image-20210810212805291](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810212805291.png)

![image-20210810214323766](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810214323766.png)

![image-20210810213736827](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810213736827.png)

![image-20210810214253879](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810214253879.png)

![image-20210810214412363](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810214412363.png)

![image-20210810214901421](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810214901421.png)

![image-20210810215207423](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810215207423.png)

![image-20210810215520109](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810215520109.png)

![image-20210810215708032](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810215708032.png)

![image-20210810215949105](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810215949105.png)

![image-20210810220223156](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810220223156.png)

```
可同时多客户端连接
```

```
import socket
def main():
    # 创建套接字
    Tcp_Server_Socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    # 绑定本地信息
    Tcp_Server_Socket.bind(("",7890))
    # 设置套接字由主动变为被动，128个同时访问
    Tcp_Server_Socket.listen(128)
    while True:
        print("等待一个新的客户端的到来。。。")
        # 等待客户端的连接accept
        New_Client_Socket,Client_Addr_Port = Tcp_Server_Socket.accept()
        print("一个新的客户端已经到来%s" % str(Client_Addr_Port))
        while True:
            # 接收客户端发来的请求
            Recv_Data = New_Client_Socket.recv(1024)
            if Recv_Data:
                Recv_Text = Recv_Data.decode("GBK")
                print("接收到[%s]的信息:%s" % (str(Client_Addr_Port), Recv_Text))
            else:
                print("客户端已经断开连接!")
                break
        # 关闭套接字
        New_Client_Socket.close()
        print("服务器服务完毕")
    Tcp_Server_Socket.close()

if __name__ == '__main__':
    main()

```

## 四、文件下载器

![image-20210810224411156](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810224411156.png)

![image-20210810224927639](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810224927639.png)

![image-20210810225147982](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810225147982.png)

![image-20210810225646207](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810225646207.png)

```
文件下载器客户端
"""
目标：
/home/demo/Document/python_projects/day04/1.txt
下载到
/home/demo/Desktop/1.txt

1、导入模块
2、创建套接字
3、建立连接
4、接收用户输入的文件名
5、发送文件名到服务端
6、创建文件，并且准备保存
7、接收服务端发送的数据，保存到本地（循环）
8、关闭套接字

"""

# 1、导入模块
import socket
# 2、创建套接字
tcp_client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 3、建立连接
tcp_client_socket.connect(("192.168.150.111", 8081))
# 4、接收用户输入的文件名
file_name = input("请输入要下载的文件名:\n")
# 5、发送文件名到服务端
tcp_client_socket.send(file_name.encode())
# 6、创建文件，并且准备保存
with open("/home/demo/Desktop/"+file_name, "wb") as file:
    # 7、接收服务端发送的数据，保存到本地（循环）
    while True:
        file_data = tcp_client_socket.recv(1024)
        # 判断数据是否传送完毕
        if file_data:
            file.write(file_data)
        else:
            break
# 8、关闭套接字
tcp_client_socket.close()
```

```
文件下载器服务端
"""
1、导入模块
2、创建套接字
3、绑定端口
4、设置监听，设置套接字由主动为被动
5、接受客户端连接
6、接收客户端发送的文件名
7、根据文件名读取文件内容
8、把读取的内容发送给客户端（循环）
9、关闭和当前客户端的连接
10、关闭服务器

"""

# 1、导入模块
import socket
# 2、创建套接字
tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 设置套接字地址可以重用
# tcp_server_socket.setsockopt(当前套接字, 属性名, 属性值)
# socket.SO_REUSEADDR  地址是否可以重用   True可以重用  False 不可以重用
tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True)
# 3、绑定端口
tcp_server_socket.bind(("", 8081))
# 4、设置监听，设置套接字由主动为被动
tcp_server_socket.listen(128)
# 5、接受客户端连接
while True:
    new_client_socket, ip_port = tcp_server_socket.accept()
    print("欢迎新客户端:", ip_port)
    # 6、接收客户端发送的文件名
    recv_data = new_client_socket.recv(1024)
    file_name = recv_data.decode()
    print(file_name)

    try:
        # 7、根据文件名读取文件内容
        with open(file_name, "rb") as file:
            # 8、把读取的内容发送给客户端（循环）
            while True:
                file_data = file.read(1024)
                # 判断是否读取到了文件的末尾
                if file_data:
                    # 发送文件
                    new_client_socket.send(file_data)
                else:
                    break
    except Exception as e:
        print("文件%s下载失败!" % file_name)
    else:
        print("文件%s下载成功" % file_name)
    # 9、关闭和当前客户端的连接
    new_client_socket.close()
# 10、关闭服务器
# tcp_server_socket.close()
```

## 五、TCP、UDP

![image-20210810231953746](https://raw.githubusercontent.com/Doerr33/images/master/img2/image-20210810231953746.png)



![image-20210810233347407](https://raw.githubusercontent.com/Doerr33/images/master/img3/image-20210810233347407.png)
