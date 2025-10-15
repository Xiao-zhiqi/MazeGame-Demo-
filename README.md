# MazeGame-Demo-
迷宫游戏（寻找最优路径）鸿蒙

(可直接转至csdn查看）

在鸿蒙应用开发中，游戏类应用能很好地锻炼 UI 布局、状态管理与逻辑交互能力。本文将以一个随机迷宫游戏为例，详细拆解从首页设计到迷宫生成、角色控制、通关判定的完整开发流程，带你掌握 ArkUI 框架的核心应用技巧。

一、项目整体架构
本次开发的随机迷宫游戏包含两个核心页面，页面间通过router路由实现跳转，整体结构清晰，便于后续扩展维护：

页面名称	页面功能	核心组件 / 逻辑
UI_test1（首页）	游戏入口，展示标题与开始按钮	Column、Stack、Button、router.pushUrl
migong（迷宫页）	随机迷宫生成、角色控制、通关判定	Grid、@State 状态管理、BFS 路径检测、AlertDialog
二、首页开发：打造简洁的游戏入口
首页作为用户的第一个交互界面，需兼顾视觉吸引力与操作便捷性。我们采用背景图 + 居中布局的设计，突出 “迷宫游戏” 主题与 “开始游戏” 按钮。

界面演示：
<img width="450" height="849" alt="image" src="https://github.com/user-attachments/assets/874d80d4-2221-4c44-bea3-ea1a5cde0f14" />

https://i-blog.csdnimg.cn/direct/4b22f4adbc624a4a8c73a1b7d784e867.png


1. 核心代码解析
typescript

import router from '@ohos.router'; // 导入路由模块，实现页面跳转
@Entry
@Component
struct UI_test1{
  build() {
    // 外层Column确保页面占满屏幕
    Column(){
      // Stack实现背景图与前景内容的层叠
      Stack(){
        // 背景图：宽度100%、高度100%，铺满整个页面
        Image($r("app.media.bg")).width('100%').height('100%')
        // 内层Column：居中展示标题与按钮
        Column(){
          // 游戏标题：白色、斜体、加粗，调整margin优化位置
          Text('迷宫游戏 ').fontColor(Color.White)
            .fontSize(58).width(250).height(100)
            .fontStyle(FontStyle.Italic).fontWeight(FontWeight.Bold)
            .margin({ left: '12.00vp' })
          
          // 开始游戏按钮：淡蓝色背景、白色文字，点击跳转迷宫页
          Button('开始游戏').fontColor(Color.White).fontSize(30)
            .width(200).height(50).backgroundColor('#9964f0fd')
            .margin({ top: '400.00vp' }) // 向下偏移，与标题形成层次感
            .onClick(()=>{
              // 路由跳转：跳转到test_pages目录下的migong页面
              router.pushUrl({ url: "test_pages/migong" });
            });
        }
        .width('100%').height('100%')
        .justifyContent(FlexAlign.Center) // 子组件垂直居中
      }
    }.width('100%').height('100%')
  }
}
AI写代码

2. 关键设计思路
层叠布局（Stack）：通过 Stack 将背景图与前景内容（标题、按钮）叠加，避免背景图被其他组件遮挡；
路由跳转（router）：使用router.pushUrl实现首页到迷宫页的跳转，url需与页面实际路径一致（此处为test_pages/migong）；
视觉优化：标题采用 “斜体 + 加粗” 组合提升辨识度，按钮使用半透明背景色（#9964f0fd，前两位99为透明度），避免与背景图产生强烈冲突。
三、迷宫页开发：核心逻辑与交互实现
迷宫页是整个游戏的核心，需实现随机迷宫生成、角色移动、路径检测、通关弹窗四大功能。下面分模块拆解实现细节。

1. 随机迷宫生成：确保有有效路径
迷宫本质是一个 20x20 的网格（1 表示墙壁，0 表示可通行区域），为避免生成 “死胡同” 迷宫，我们通过固定边界 + 随机填充 + 路径检测的逻辑，确保从 “入口（1,1）” 到 “出口（18,18）” 有有效路径。

界面演示：
<img width="476" height="844" alt="image" src="https://github.com/user-attachments/assets/02b90ba0-54de-468e-9e3d-9326ea812162" />

https://i-blog.csdnimg.cn/direct/5925895c58aa4de396403f900507fc79.png

（1）核心函数：generateRandomWall
typescript

// 生成随机迷宫数组
generateRandomWall() {
  const originalWall = [/* 初始迷宫数组，略 */]; // 基础迷宫模板
  const rows = 20; // 迷宫行数
  const cols = 20; // 迷宫列数
  let newWall: number[] = [];
 
  // 1. 固定边界：第一列、最后一列、第一行、最后一行保持为墙壁（1）
  // 固定第一行
  for (let i = 0; i < cols; i++) {
    newWall.push(originalWall[i]);
  }
  // 固定中间行的第一列和最后一列
  for (let r = 1; r < rows - 1; r++) {
    newWall.push(originalWall[r * cols]); // 第一列（墙壁）
    // 中间列随机填充：50%概率为可通行区域（0），50%为墙壁（1）
    for (let c = 1; c < cols - 1; c++) {
      let randomValue = Math.random() > 0.5 ? 1 : 0;
      // 固定入口（1,1）和出口（18,18）为可通行区域
      if (r === 1 && c === 1) randomValue = 0;
      if (r === rows - 2 && c === cols - 2) randomValue = 0;
      newWall.push(randomValue);
    }
    newWall.push(originalWall[r * cols + cols - 1]); // 最后一列（墙壁）
  }
  // 固定最后一行
  for (let i = cols * (rows - 1); i < cols * rows; i++) {
    newWall.push(originalWall[i]);
  }
 
  // 2. 路径检测：若当前迷宫无有效路径，重新生成
  while (!this.checkPathExists(newWall)) {
    let tempWall = this.generateRandomWall();
    newWall = tempWall.slice(); // 深拷贝新迷宫数组
  }
  return newWall;
}
AI写代码

（2）路径检测：BFS 算法确保连通性
使用广度优先搜索（BFS） 检测从入口到出口是否存在可通行路径，避免生成 “无法通关” 的迷宫：

界面演示：
<img width="419" height="870" alt="image" src="https://github.com/user-attachments/assets/b118efe5-344d-4950-a74d-33fb3b5bcb14" />

https://i-blog.csdnimg.cn/direct/27741eacaed645448f2ea48d891b2ad8.png


typescript

// 检查迷宫是否存在有效路径（BFS算法）
checkPathExists(wall: number[]) {
  const rows = 20;
  const cols = 20;
  const startX = 1, startY = 1; // 入口坐标
  const endX = cols - 2, endY = rows - 2; // 出口坐标
  // visited数组：记录已访问的格子，避免重复检测
  let visited: boolean[][] = [];
  for (let i = 0; i < rows; i++) {
    visited[i] = new Array(cols).fill(false);
  }
  // 队列：存储待访问的格子坐标（BFS核心）
  let queue: [number, number][] = [];
  queue.push([startX, startY]);
  visited[startY][startX] = true;
 
  // 四个移动方向：上、下、左、右
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
 
  while (queue.length > 0) {
    let item = queue.shift(); // 取出队列头部格子
    if (item) {
      const [x, y] = item;
      // 若到达出口，返回true（存在有效路径）
      if (x === endX && y === endY) return true;
      // 遍历四个方向，检测相邻格子是否可通行
      for (let direction of directions) {
        const newX = x + direction[0];
        const newY = y + direction[1];
        // 条件判断：1. 格子在迷宫范围内；2. 未被访问；3. 可通行（值为0）
        if (newX >= 0 && newX < cols && newY >= 0 && newY < rows 
            && !visited[newY][newX] && wall[newY * cols + newX] === 0) {
          queue.push([newX, newY]);
          visited[newY][newX] = true;
        }
      }
    }
  }
  // 遍历完所有格子仍未到达出口，返回false（无有效路径）
  return false;
}
AI写代码

2. 迷宫渲染：使用 Grid 组件构建网格
通过Grid组件将wall数组（20x20）渲染为可视化迷宫，其中：

值为 0 的格子：白色背景（可通行区域）；
值为 1 的格子：灰色背景（墙壁）。
核心代码：

typescript

// 迷宫网格渲染
Grid() {
  // ForEach：遍历wall数组，生成每个格子
  ForEach(this.wall, (item: number) => {
    GridItem() {
      if (item === 0) { // 可通行区域
        Text('').fontSize(32)
          .backgroundColor(Color.White)
          .width(18).height(21)
          .textAlign(TextAlign.Center)
      } else if (item === 1) { // 墙壁
        Text('').fontSize(32)
          .backgroundColor('#8a5e929b')
          .width(18).height(21)
          .textAlign(TextAlign.Center)
      }
    }
  })
}
// 网格配置：20列、20行，列间距与行间距为1（避免格子粘连）
.columnsTemplate('1fr 1fr ... 1fr') // 重复20次1fr，省略部分代码
.rowsTemplate('1fr 1fr ... 1fr')   // 重复20次1fr，省略部分代码
.columnsGap(1).rowsGap(1)
.width('90%').height(400) // 控制网格大小，适配屏幕
.backgroundColor(Color.White)
AI写代码

3. 角色控制：状态管理实现移动逻辑
通过@State装饰器管理角色的坐标（peoplex、peopley）与当前格子索引（positionnumber），点击方向按钮（←↑↓→）时更新角色位置，并判断是否撞墙（撞墙则回退位置）。

（1）状态定义
typescript

@State wall: number[] = this.generateRandomWall(); // 迷宫数组（初始生成）
@State peoplex: number = 34; // 角色初始X坐标
@State peopley: number = 100; // 角色初始Y坐标
@State positionnumber: number = 1; // 角色初始格子索引（对应入口）
@State over: boolean = false; // 通关状态标记
AI写代码
（2）方向按钮逻辑（以 “→” 和 “↓” 为例）
typescript

// 向右移动按钮
Button('→').backgroundColor('#20101010').height(60).width(60)
  .onClick(() => {
    this.positionnumber += 1; // 索引+1（向右移动一格）
    // 若目标格子可通行（值为0），更新X坐标；否则回退索引
    if (this.wall[this.positionnumber] === 0) {
      this.peoplex += 16.4; // 每次移动的像素值（根据格子宽度计算）
    } else {
      this.positionnumber -= 1; // 撞墙，回退到原位置
    }
  })
 
// 向下移动按钮（含通关判定）
Button('↓').backgroundColor('#20101010').height(60).width(60)
  .onClick(() => {
    // 若当前位置是出口前一格，触发通关弹窗
    if (this.positionnumber === this.wall.length - 2) {
      AlertDialog.show({
        title: '游戏成功',
        message: '恭喜通关',
        autoCancel: true,
        alignment: DialogAlignment.Bottom,
        primaryButton: {
          value: '确定',
          action: () => console.info('通关弹窗-确定按钮点击')
        },
        secondaryButton: {
          value: '最优路径',
          action: () => router.pushUrl({ url: "test_pages/migong1" }) // 跳转最优路径页
        },
        cancel: () => console.info('弹窗关闭')
      });
    } else {
      // 普通向下移动逻辑（与向右类似）
      this.positionnumber += 20; // 索引+20（向下移动一行，共20列）
      if (this.wall[this.positionnumber] === 0) {
        this.peopley += 20;
      } else {
        this.positionnumber -= 20;
      }
    }
  })
AI写代码

4. 角色渲染与额外功能
角色显示：使用Image组件加载角色图片，通过position属性绑定peoplex和peopley，实现角色随坐标更新而移动；
返回首页：左上角添加 “返回” 图标，点击通过router跳转回首页；
最优路径：底部添加 “解锁最优路径” 按钮，跳转至migong1页面（可扩展 Dijkstra 算法实现最优路径绘制）。
四、开发总结与优化方向
1. 核心技术点回顾
ArkUI 布局：灵活使用 Column、Stack、Grid 组件实现复杂 UI 结构；
状态管理：@State装饰器实现角色位置、迷宫数组的响应式更新；
路由跳转：router模块实现页面间的无缝切换；
算法应用：BFS 算法确保迷宫连通性，为后续扩展最优路径（如 Dijkstra、A*）奠定基础。
2. 可优化方向
角色移动优化：当前通过固定像素值移动，可改为根据格子宽高动态计算，适配不同屏幕；
触摸控制：新增滑动手势控制角色移动（如左滑→向左移动），提升操作体验；
难度分级：增加 “简单（10x10）”“中等（20x20）”“困难（30x30）” 选项，动态调整迷宫大小；
路径可视化：在migong1页面中，通过改变格子背景色（如绿色）绘制最优路径，帮助用户理解迷宫逻辑。
                        
原文链接：https://blog.csdn.net/2301_79847249/article/details/151725534
