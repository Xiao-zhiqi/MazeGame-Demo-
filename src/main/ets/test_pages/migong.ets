import { router } from '@kit.ArkUI';
import prompt from '@ohos.prompt';

@Entry
@Component
struct UI_test1 {
  // 生成随机迷宫数组并确保有路径
  generateRandomWall() {
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

  // 检查路径是否存在
  checkPathExists(wall: number[]) {
    const rows = 20;
    const cols = 20;
    let startX = 1, startY = 1;
    let endX = cols - 2, endY = rows - 2;
    let visited: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
      visited[i] = new Array(cols).fill(false);
    }
    let queue: [number, number][] = [];
    queue.push([startX, startY]);
    visited[startY][startX] = true;
    while (queue.length > 0) {
      let item = queue.shift();
      if (item) {
        let x = item[0];
        let y = item[1];
        if (x === endX && y === endY) {
          return true;
        }
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let direction of directions) {
          let newX = x + direction[0];
          let newY = y + direction[1];
          if (newX >= 0 && newX < cols && newY >= 0 && newY < rows &&!visited[newY][newX] && wall[newY * cols + newX] === 0) {
            queue.push([newX, newY]);
            visited[newY][newX] = true;
          }
        }
      }
    }
    return false;
  }

  @State wall: number[] = this.generateRandomWall();
  @State peoplex: number = 34;
  @State peopley: number = 100;
  @State positionnumber: number = 1;
  @State over: boolean = false;

  build() {
    Column() {
      Stack() {
        Image($r("app.media.bg")).width('100%').height('100%')
        Column() {
          Row() {
            Image($r('app.media.return')).width(35).fillColor('#FFFFFF')
              .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '18.00vp' })
              .onClick(() => {
                router.pushUrl({
                  url: "test_pages/test1",
                });
              })
            Text('      随机迷宫游戏').fontColor(Color.White).fontSize(28)
          }.width('100%').height('10%').justifyContent(FlexAlign.Start)
          Row() {
            Column() {
              Text('入口').fontSize(20).width('100%').fontColor(Color.White)
                .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '40.00vp' })
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
            Column() {
              Text('').fontSize(10).width('100%').height(10)
              Text('出口').fontSize(20).width('100%').fontColor(Color.White)
                .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' })
            }
          }.width('100%').justifyContent(FlexAlign.End).alignItems(VerticalAlign.Top).height(40)
          Row() {
            Button('←').backgroundColor('#20101010').height(60).width(60)
              .onClick(() => {
                this.positionnumber = this.positionnumber - 1;
                if (this.wall[this.positionnumber] === 0) {
                  this.peoplex -= 16.4;
                } else {
                  this.positionnumber = this.positionnumber + 1;
                }
              })
            Button('↑').backgroundColor('#20101010').height(60).width(60)
              .onClick(() => {
                this.positionnumber = this.positionnumber - 20;
                if (this.wall[this.positionnumber] === 0) {
                  this.peopley -= 20;
                } else {
                  this.positionnumber = this.positionnumber + 20;
                }
              })
            Button('↓').backgroundColor('#20101010').height(60).width(60)
              .onClick(() => {
                if (this.positionnumber === this.wall.length - 2) {
                  // this.over=true
                  AlertDialog.show(
                    {
                      title: '游戏成功',
                      message: '恭喜通关',
                      autoCancel: true,
                      alignment: DialogAlignment.Bottom,
                      gridCount: 4,
                      offset: { dx: 0, dy: -20 },
                      primaryButton: {
                        value: '确定',
                        action: () => {
                          console.info('Callback when the first button is clicked')
                        }
                      },
                      secondaryButton: {
                        value: '最优路径',
                        action: () => {
                          router.pushUrl({
                            url: "test_pages/migong",
                          });
                        }
                      },
                      cancel: () => {
                        console.info('Closed callbacks')
                      }
                    }
                  )
                  // prompt.showToast({
                  //   message: '游戏成功',
                  //   duration: 2000
                  // });
                } else {
                  this.positionnumber = this.positionnumber + 20;
                  if (this.wall[this.positionnumber] === 0) {
                    this.peopley += 20;
                  } else {
                    this.positionnumber = this.positionnumber - 20;
                  }
                }
              })
            Button('→').backgroundColor('#20101010').height(60).width(60)
              .onClick(() => {
                this.positionnumber = this.positionnumber + 1;
                if (this.wall[this.positionnumber] === 0) {
                  this.peoplex += 16.4;
                } else {
                  this.positionnumber = this.positionnumber - 1;
                }
              })

          }.width('100%').justifyContent(FlexAlign.SpaceEvenly)
          .margin({ top: '10.00vp', right: '0.00vp', bottom: '40.00vp', left: '0.00vp' })
          Image($r('app.media.people')).height(30).width(30).fillColor(Color.Red)
            .position({
              x: this.peoplex,
              y: this.peopley
            })
          Button('解锁最优路径 ').backgroundColor('#cccdbc8d').fontSize(20)
            .onClick(() => {
              router.pushUrl({
                url: "test_pages/migong1",
              });
            })
        }.width('100%').height('100%')
      }
    }.width('100%').height('100%')
  }
}