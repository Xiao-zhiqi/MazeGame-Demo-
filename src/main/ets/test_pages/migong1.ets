import prompt from '@ohos.prompt';
import { router } from '@kit.ArkUI';

@Entry
@Component
struct UI_test1 {
  // 生成随机迷宫数组并确保有路径
  generateRandomWall(): number[] {
    const originalWall = [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
      1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
      1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
      1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
    ];
    const rows = 20;
    const cols = 20;
    let newWall: number[] = [];
    // 固定第一行
    for (let i = 0; i < cols; i++) {
      newWall.push(originalWall[i]);
    }
    for (let r = 1; r < rows - 1; r++) {
      newWall.push(originalWall[r * cols]); // 固定第一列
      for (let c = 1; c < cols - 1; c++) {
        let randomValue = Math.random() > 0.5? 1 : 0;
        if (r === 1 && c === 1) {
          randomValue = 0;
        }
        if (r === rows - 2 && c === cols - 2) {
          randomValue = 0;
        }
        newWall.push(randomValue);
      }
      newWall.push(originalWall[r * cols + cols - 1]); // 固定最后一列
    }
    // 固定最后一行
    for (let i = cols * (rows - 1); i < cols * rows; i++) {
      newWall.push(originalWall[i]);
    }
    // 确保有路径从第二格到倒数第二格
    while (!this.checkPathExists(newWall)) {
      let tempWall = this.generateRandomWall();
      newWall = tempWall.slice();
    }
    return newWall;
  }

  // 使用 BFS 检查路径是否存在并记录最短路径，明确返回类型为 number[][] | null
  checkPathExists(wall: number[]): number[][] | null {
    const rows = 20;
    const cols = 20;
    let startX = 1, startY = 1;
    let endX = cols - 2, endY = rows - 2;
    let visited: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
      visited[i] = new Array(cols).fill(false);
    }
    let queue: Array<[number, number, number[][]]> = [];
    queue.push([startX, startY, []]);
    visited[startY][startX] = true;
    while (queue.length > 0) {
      let tempArray = queue.shift();
      if (tempArray) {
        let x = tempArray[0];
        let y = tempArray[1];
        let pathSoFar = tempArray[2];
        if (x === endX && y === endY) {
          return pathSoFar.concat([[x, y]]);
        }
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let direction of directions) {
          let newX = x + direction[0];
          let newY = y + direction[1];
          if (newX >= 0 && newX < cols && newY >= 0 && newY < rows &&!visited[newY][newX] && wall[newY * cols + newX] === 0) {
            queue.push([newX, newY, pathSoFar.concat([[x, y]])]);
            visited[newY][newX] = true;
          }
        }
      }
    }
    return null;
  }

  @State wall: number[] = this.generateRandomWall();
  @State peoplex: number = 34;
  @State peopley: number = 130;
  @State positionnumber: number = 1;

  // 现在 findPath 函数可以直接调用 checkPathExists
  findPath(wall: number[], startX: number, startY: number, endX: number, endY: number): number[][] | null {
    return this.checkPathExists(wall);
  }

  onButtonClick() {
    const cols = 20;
    const rows = 20;
    let startX = 1, startY = 1;
    let endX = cols - 2, endY = rows - 2;
    let path = this.findPath(this.wall, startX, startY, endX, endY);
    if (path!== null) {
      let step = 0;
      let interval = setInterval(() => {
        if (path && step < path.length) {
          // 不使用解构赋值，通过索引获取坐标
          this.wall[1]=2;
          let currentPosition = path[step];
          let currentX = currentPosition[0];
          let currentY = currentPosition[1];
          // 将当前位置在 wall 中标记为 2
          this.wall[currentY * cols + currentX] = 2;
          this.peoplex = currentX * 16.4 + 17.6;
          this.peopley = currentY * 20 + 130;
          prompt.showToast({
            message: `Step ${step + 1}: Move to (${currentX}, ${currentY})`,
            duration: 500
          });
          step++;
        } else {
          clearInterval(interval);
          this.peopley += 20;
          prompt.showToast({
            message: 'Path found!',
            duration: 500
          });
        }
      }, 500);
    } else {
      prompt.showToast({
        message: 'No path found!',
        duration: 500
      });
    }
  }

  build() {
    Column() {
      Stack() {
        Image($r("app.media.bg")).width('100%').height('100%')
        Column() {
          Row() {
            Image($r('app.media.return')).width(35).fillColor('#FFFFFF')
              .margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '18.00vp'
              })
              .onClick(() => {
                router.pushUrl({
                  url: "test_pages/migong",
                });
              })
            Text('     随机迷宫游戏').fontColor(Color.White).fontSize(28)
          }.width('100%').height('10%').justifyContent(FlexAlign.Start)

          Row() {
            Text("最优路径演示 ").fontSize(28).fontColor(Color.White)
          }.height(30)
          .margin({
            top: '0.00vp',
            right: '0.00vp',
            bottom: '20.00vp',
            left: '0.00vp'
          })

          Row() {
            Column() {
              Text('入口').fontSize(20).width('100%').fontColor(Color.White)
                .margin({
                  top: '0.00vp',
                  right: '0.00vp',
                  bottom: '0.00vp',
                  left: '40.00vp'
                })
              Text('').fontSize(10).width('100%').height(10)
            }
          }

          Grid() {
            ForEach(this.wall, (item: number) => {
              GridItem() {
                if (item === 0) {
                  Text('')
                    .fontSize(32)
                    .backgroundColor(Color.White)
                    .width(18)
                    .height(21)
                    .textAlign(TextAlign.Center)
                } else if (item === 1) {
                  Text('')
                    .fontSize(32)
                    .backgroundColor('#8a5e929b')
                    .width(18)
                    .height(21)
                    .textAlign(TextAlign.Center)
                } else if (item === 2) {
                  Text('')
                    .fontSize(32)
                    .backgroundColor('#8aece3d1')
                    .width(18)
                    .height(21)
                    .textAlign(TextAlign.Center)
                }
              }
            })
          }
          .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')
          .rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')
          .columnsGap(1)
          .rowsGap(1)
          .width('90%')
          .backgroundColor(Color.White)
          .height(400)

          Row() {
            Text('                                     ').fontSize(30)
              .margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '0.00vp'
              })
            Column() {
              Text('').fontSize(10).width('100%').height(10)
              Text('出口').fontSize(20).width('100%').fontColor(Color.White)
                .margin({
                  top: '0.00vp',
                  right: '0.00vp',
                  bottom: '0.00vp',
                  left: '0.00vp'
                })
            }
          }
          .width('100%')
          .justifyContent(FlexAlign.End)
          .alignItems(VerticalAlign.Top)
          .height(40)
          .margin({
            top: '0.00vp',
            right: '0.00vp',
            bottom: '40.00vp',
            left: '0.00vp'
          })

          Image($r('app.media.people'))
            .height(30)
            .width(30)
            .fillColor(Color.Red)
            .position({
              x: this.peoplex,
              y: this.peopley
            })
            .margin({
              top: '20.00vp',
              right: '0.00vp',
              bottom: '0.00vp',
              left: '0.00vp'
            })
          Button('通关路径演示').backgroundColor('#cccdbc8d').fontSize(20)
            .onClick(() => {
              this.onButtonClick();
            });
        }.width('100%').height('100%')
      }
    }.width('100%').height('100%')
  }
}