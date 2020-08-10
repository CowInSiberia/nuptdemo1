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

Day15，实现第一次用户和老用户修改个人简历页面区别实现（已有信息占位），规划申请功能实现方式，搭建了简易的项目上传面板。
学习了图像金字塔相关知识（高斯/拉普拉斯），准备学习FPN论文。
准备进行项目上传面板和配套数据库搭建，探索申请功能的具体实现。

Day16，项目上传面板和配套数据库搭建完毕。
理解图像金字塔原理，准备继续学习FPN论文进而学习池化论文。
准备进行申请功能的具体实现。

Day17, 修改了我的项目板块，现在用户可以查看并修改自己上传的项目且可以另外上传新项目。申请功能实现一半。进行了版本发布的尝试，了解了发布相关问题。
学习了FPN的基本原理，有待加深理解。
准备进行例会报告。

Day18，开会，计划，打了一天的labelImg，下周准备进行权限设定，完善申请功能，优化UI，完成上传附件功能。转移时间精力到论文上。

Day19，完成上传附件，图片功能试验和下载附件，图片功能的试验，初步移植到上传项目界面，遇到了疑似异步问题。
准备学习完FPN，尽快进入池化论文。
准备完善上传附件和下载查看在项目中的应用。

Day20，完成上传附件，下载附件查看功能的实装。
FPN结构和原理大致理清楚了，准备完成后续实验结果部分的阅读，进入池化论文。
准备完成权限设定，尝试优化UI。

Day21，基本完成样式优化，进行部分权限设定。
FPN论文阅读完毕，笔记完毕。正式进入池化论文。准备完成池化论文的阅读和笔记。
准备完成样式优化和权限设定，完成申请功能。

Day22, 申请功能基本完成，权限设定基本完成。
池化论文阅读完毕。
明天小汇报，进行下一阶段工作安排。

Day23，在腿男帮助下验证了消息推送功能，确定了申请功能最终思路，学习了colorui库的基本使用方式。
准备推送和申请二选一先做，有时间继续研究colorui。
继续论文的阅读，虚拟机带着看。

Day24，继续研究colorui，修改了上传项目、个人简历、修改项目界面，逐步去除iView。
找了一篇U型结构论文，准备开始阅读研究。
准备先写好审核界面，然后实现加入新的权限“管理”来进行审核，希望最好同时将推送移植进去。

Day25，完成用户身份审核界面及相应审核功能，完成实时推送功能，继续研究colorui。
阅读attention论文。
修改剩余原始界面，研究多人申请功能。

Day26，基本去除iView改为colorui，将未完成的单人申请功能完善，思考多人申请功能如何实现。
初步阅读attention论文，准备做好笔记，然后动手去做一些池化或者其他论文的实现。
准备完善权限，加入项目审核和推送界面，研究授权问题，研究多人申请问题。

Day27，完善权限设定，加入项目审核和推送洁面，授权问题大体解决。
注意力论文阅读完毕，没有开源代码。
准备汇报。

Day28，接下来这周有暑期学习中期报告，先做ppt，然后尽量装好vmware和ubuntu，装环境和预训练模型。
小程序看看有没有合适的UI，没有的话就把具体信息几个界面改回原来的。做完申请功能，限制名额，通过if区分申请占位。加入可视词缀供管理员和老师开放关闭项目。

Day29，申请功能的申请部分完成。
完成报告ppt，准备进行虚拟机的实践操作。
准备完成申请功能的收尾，更改UI。

Day30，做完了申请功能，下午开组会，自我感觉还行，和腿捣鼓了一晚上win10子系统，最后一步失败告终，明日再战，先吃饭。
准备搞好子系统，熟悉linux系统，为跑池化论文或者FPN做准备。
准备优化UI。

Day31，完善了申请功能的拒绝模块，至此申请功能结束。为display界面更换了新的UI，list+card呈现。
在腿的帮助下解决了子系统和docker的问题。准备开始学习docker和ubuntu操作。
准备进行审核功能的拒绝模块，为审核功能的界面更换UI，研究按钮动作和grid布局。

Day32，重做了我的项目模块，scroll-view+menucard+switch，弄清楚并在翻新过程中实操了style和class相关内容。
并没有学习docker和ubuntu，看了学长发的无人机项目文档，简单了解了相关需求。
准备进行汇报。

Day33，周末两天一直在弄YOLO，今天在弄python和qt，很忙。
最近找个时间小修一下小程序，准备迁移主体然后上线，进入优化阶段。