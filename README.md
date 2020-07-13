# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

学习小程序开发

Day1，工具新建云开发小程序自动生成代码。
功能：获取openid，上传图片，前端操作数据库，即时通讯demo（聊天室），快速新建云函数。

Day2，深刻反省，看代码，查文档。
不同page跳转，同page分step跳转，数据库内容通过js中的function在wxml中加入和获取，js的一小部分语法规范如<></>对齐等，js、wxml、wxss文件编辑。
准备进行用户名密码的简单输入与存储练习。

Day3, 学习提取文本框input，传参加入数据库，建立不同page通过按钮在js中用wx.redirectTo或者wx.navigateTo进行跳转，js、wxml、wxss文件编辑。
准备进行用户名密码的验证登录与个人中心搭建。

Day4，学习定位数据库条目进行验证，写入了登录和注册函数。
准备学习wxml和wxss，进行界面的布局，尝试上传图片。
此外今天老师布置了暑假任务，下午到晚上一直在研究ubuntu安装，然后由于hp的bios系统问题一直报ACPI错误，明天再看看是否尝试其他方法安装。

Day5, 学习了不少wxml和wxss知识，初步改造了一下入口界面，学会了不同page间和page下目录间的参数传递，搭建了个人中心。
准备进行初步汇报，进行其他界面的搭建。再请教一下老师阅读论文的相关问题。

Day6，没有涉及代码，复盘项目，按照老师指导将每个页面的具体功能和布局大体理清了，与腿交流了一个小时，整理了报告和未来几天要学习的技能点。
工程量还是不小的，必须再提高学习效率和开发效率。

Day7，学习了tabbar配置并应用，阅读了腿的飞行计时小程序，为项目大厅后续搭建理清脉络。
论文不急着往后看，先看一篇的标题摘要然后攻克术语和基础知识。
准备进行项目大厅和其配套数据库的搭建，尝试tabbar内跳转和搜索。

Day8, 学习了tabbar内跳转，获取数据库整个集合数据，但是在处理单独条目的时候遇到一些问题，初步学习了搜索功能，但是组件对于搜索关键字的匹配隐藏功能还是没有头绪。
真是失败的一天。

Day9，学习了获取数据库整个集合的数据并可以将其单独分条目处理，学习了将某条目内容从上而下展现在页面内，项目上传和配套数据库搭建完毕。
学习了李宏毅的机器学习课程中的CNN部分。
准备将项目内容放入button后从上而下展现在页面内，然后完成搜索关键字功能的实现。

Day10, 对于openid绑定权限页面有了思路，然后直接实现了这个功能，但是前端还很原始没有美化。
对于课题组的暑期学习做了大致规划。
准备将项目内容放入button后从上而下展现在页面内，尽可能实现搜索关键字功能。

Day11，实现了第一次用户和已有用户权限区分调换，项目内容放入button后从上而下展现在页面内且加入跳转具体信息界面功能。
考虑搜索和申请功能。

Day12，实现了项目大厅中点击单个项目进入项目界面呈现具体信息。
考虑搜索和申请功能。

Day13，导入iView Weapp库，进行具体项目信息面板的设置。
考虑搜索和申请功能。

Day14，完成用户个人简历上传面板及配套数据库搭建，使用iView的input组件+小程序原生picker+原生button。
准备进行账号绑定，数据库聚合验证和项目上传面板及配套数据库搭建。