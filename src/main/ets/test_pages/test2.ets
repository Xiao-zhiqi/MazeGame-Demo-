import { router } from '@kit.ArkUI';
import prompt from '@ohos.prompt';

@Entry
@Component
struct UI_test1 {
  @State wall: number[] = [
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  ];
  @State peoplex: number = 3;
  @State peopley: number = 115;
  @State positionnumber: number = 1;
  @State over: boolean = false;

  horseMoves: number[][] = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  // 判断移动是否合法
  isValidMove(board: number[][], x: number, y: number): boolean {
    const N = 18;
    return (x >= 0 && x < N) && (y >= 0 && y < N) && (board[x][y] === -1);
  }

  // 打印棋盘状态
  printBoard(board: number[][]): void {
    for (let i = 0; i < 18; i++) {
      console.log(board[i].map(num => num.toString().padStart(3, ' ')).join(' '));
    }
  }

  // 马踏棋盘的主逻辑函数
  knightTour(board: number[][], x: number, y: number, moveCount: number): boolean {
    if (moveCount === 18 * 18) {
      return true;
    }

    for (let i = 0; i < 8; i++) {
      const nextX = x + [2, 1, -1, -2, -2, -1, 1, 2][i];
      const nextY = y + [1, 2, 2, 1, -1, -2, -2, -1][i];

      if (this.isValidMove(board, nextX, nextY)) {
        board[nextX][nextY] = moveCount;
        if (this.knightTour(board, nextX, nextY, moveCount + 1)) {
          // 更新棋子位置
          this.peoplex = nextX * 20;
          this.peopley = nextY * 20;
          return true;
        }
        board[nextX][nextY] = -1;
      }
    }
    return false;
  }

  // 解决马踏棋盘问题的入口函数
  solveKnightTour(): void {
    let board: number[][] = new Array(18);
    for (let i = 0; i < 18; i++) {
      board[i] = new Array(18).fill(-1);
    }
    board[0][0] = 0;
    if (this.knightTour(board, 0, 0, 1)) {
      this.printBoard(board);
      console.log(JSON.stringify(this.peoplex))
    } else {
      console.log("没有找到解决方案。");
    }
  }

  build() {
    Column() {
      Stack() {
        Image($r("app.media.img")).width('100%').height('100%')
        Column() {
          Row() {
            Text('              马踏棋盘').fontColor(Color.Black).fontSize(28)
          }.width('100%').height('10%').justifyContent(FlexAlign.Start)
          Grid() {
            ForEach(this.wall, (item: number) => {
              GridItem() {
                if (item == 0) {
                  Text('')
                    .fontSize(30)
                    .backgroundColor(Color.White)
                    .width(20)
                    .height(20)
                    .textAlign(TextAlign.Center)
                } else if (item == 1) {
                  Text('')
                    .fontSize(30)
                    .backgroundColor('#8a000000')
                    .width(20)
                    .height(20)
                    .textAlign(TextAlign.Center)
                }
              }
            })
          }
          .columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')
          .rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr')
          .columnsGap(1)
          .rowsGap(1)
          .width('95%')
          .backgroundColor(Color.White)
          .height(400)
          .margin({ top: '50.00vp', right: '0.00vp', bottom: '40.00vp', left: '0.00vp' })
          Image($r('app.media.qi')).height(40).width(30).fillColor(Color.Orange)
            .position({
              x: this.peoplex,
              y: this.peopley
            })
          Button('开始').backgroundColor('#cccdbc8d').fontSize(20)
            .onClick(() => {
              this.solveKnightTour();
            })
        }.width('100%').height('100%')
      }
    }.width('100%').height('100%')
  }
}