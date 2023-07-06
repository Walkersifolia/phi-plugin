# phi-plugin

版本：v0.9.1

---

#### 介绍：
适用于 Yunzai-Bot V3 的 phigros 辅助插件

本项目云存档由 [7aGiven/PhigrosLibrary](https://github.com/7aGiven/PhigrosLibrary/tree/v3.1.0) 改写而来，感谢文酱的帮助！

交流群：282781491

项目仍未完善，目前绑定时有概率出现存档解析失败现象，并且由于实验材料较少，如果可以的话希望可以向我描述一下情况或者提供个sessionToken，非常感谢！

由于作者学业原因，只有周末可以写代码，所以速度会很慢。非常感谢大家的理解（

---

#### 安装：
在云崽目录下运行

使用github

```
git clone --depth=1 https://github.com/Catrong/phi-plugin.git ./plugins/phi-plugin/
pnpm install -P
```

使用gitee

```
git clone --depth=1 https://gitee.com/catrong/phi-plugin.git ./plugins/phi-plugin/
pnpm install -P
```

---

#### 功能
以下#均可用/代替
| 功能名称  |  功能说明  |
|-------| ----- |
| #phi帮助|帮助|
| #phi (bind\|绑定)xxx|绑定sessionToken|
| #phi (unbind\|解绑)|删除sessionToken和存档记录|
| #phi (update\|更新存档)|更新存档|
| #phi (rks\|b19)|查询rks，会提供得出的b21结果|
| #phi best[1-99]|查询文字版rks，未指定数字默认19|
| #phi (score\|单曲成绩)xxx|获取单曲成绩及这首歌的推分建议|
| #phi (suggest\|推分)|获取可以让RKS+0.01的曲目及其所需ACC|
| #phi (曲\|song) xxx|查询phigros中某一曲目的图鉴，支持设定别名|
| #phi (曲绘\|ill\|Ill) xxx|查询phigros中某一曲目的曲绘|
| #phi(设置别名\|setnick) xxx ---> xxx|设置某一歌曲的别名，格式为 原名(或已有别名) ---> 别名（会自动过滤--->两边的空格）|
| #phi(删除别名\|delnick) xxx|删除某一歌曲的别名|
| #phi(强制)?更新|更新phi-plugin|
<!-- | #phi随机(定数-定数)(AT IN HD EZ)|在指定范围内随机一首曲目，目前支持指定定数及难度，难度可多选| -->

---

#### Todo

·小功能（单曲成绩，推分建议等等）

·写菜单

·完善云存档

·加入收集品、头像等的图鉴

·点phi的歌

·...

---

#### B19效果图

![image](https://github.com/Catrong/phi-plugin/blob/main/resources/readmeimg/b19.jpg)

#### 单曲成绩效果图
![image](https://github.com/Catrong/phi-plugin/blob/main/resources/readmeimg/score.jpg)

#### 图鉴效果图

![image](https://github.com/Catrong/phi-plugin/blob/main/resources/readmeimg/atlas.jpg)

---

## 免责声明

1. 功能仅限内部交流与小范围使用，请勿将Yunzai-Bot及phi-Plugin用于任何以盈利为目的的场景.
2. 图片与其他素材均来自于网络，仅供交流学习使用，如有侵权请联系，会立即删除.
3. 云存档由[7aGiven/PhigrosLibrary](https://github.com/7aGiven/PhigrosLibrary/tree/v3.1.0) 改写而来

---

#### 写的不好，轻喷……


