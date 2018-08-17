# testing-demo

主流的单元测试环境搭建和比较差异

## 目录介绍

examples目录下存放所有子项目，其中project-demo项目是用于测试的演示程序。

project-demo包括server和client两部，我尽量多的想象和还原项目中遇到的场景，并在单元测试中测试这类场景。

## 如何运行

* 你需要安装必要的软件
```shell
npm i yarn -g
npm i lerna -g
```
> * yarn作为项目的依赖包管理工具
> * lerna作为项目的子项目管理工具

* 在项目中运行以下命令
```shell
yarn && yarn bootstrap
```
自动安装依赖包

* 进入examples/project-demo项目，并运行命令
```shell
yarn start
```
在浏览器中访问`http://localhost:8080`

## 如何测试

* 进入examples/jest-demo项目，并运行命令
```shell
yarn test
```