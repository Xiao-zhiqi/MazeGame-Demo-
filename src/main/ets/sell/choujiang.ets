import { image } from '@kit.ImageKit'

interface  content{
  Count: number,
  picture: string
}
// Bage({
//  count:1;
// position:BadgePosition.RightTop,
//   style:{
//   fontsize:12,
//     badgeSize:16,
//     badgeColor:'0xfff'圆形底色
//   }
//   }){
//   Image:($r('app.media.pmg2'))
//     .width(80)
// }
@Component struct chouka{
Count:number=0
picture:string='app.media.book';
  build() {
    Badge({
      count:this.Count,
      position:BadgePosition.RightTop,
      style:{
        fontSize:14,
        badgeSize:28,
        badgeColor:Color.Red
      }
    }){
      Image($r(this.picture))
        .width(100)
        .padding(5)
    }
  }
  }

@Entry
@Component
struct Index {
  @State contents: Array<content> = [
    { Count: 0, picture: 'app.media.img0' },
    { Count: 0, picture: 'app.media.img1' },
    { Count: 0, picture: 'app.media.img2' },
    { Count: 0, picture: 'app.media.img3' },
    { Count: 0, picture: 'app.media.img4' },
    { Count: 0, picture: 'app.media.img5' },
  ]
  @State maskopcity: number = 0
  @State maskIndex: number = -1
  @State maskImagex: number = 0
  @State maskImagey: number = 0
  @State randomIndex: number = -1
  @State isget: boolean = false
  @State arr: string[] = ['0', '1', '2']
  @State prize: string= ''

  build() {
    Stack() {
      Column() {
        Grid() {
          ForEach(
            this.contents,
            (item: content, index: number) => {
              GridItem() {
                chouka({ Count: item.Count, picture: item.picture })
              }
            })
        }
        .columnsTemplate('1fr 1fr 1fr')
        .rowsTemplate('1fr 1fr')
        .width('100%')
        .height(300)
        .margin({
          top: '0.00vp',
          right: '0.00vp',
          bottom: '0.00vp',
          left: '10.00vp'
        })


        Button('立即抽卡')
          .width(200)
          .fontColor(Color.Black)
          .backgroundColor(Color.Yellow)
          .margin({
            top: '100.00vp',
            right: '0.00vp',
            bottom: '0.00vp',
            left: '0.00vp'
          })
          .onClick(() => {
            this.maskopcity = 1
            this.maskIndex = 99
            this.maskImagex = 0.8
            this.maskImagey = 1
            this.randomIndex = Math.floor(Math.random() * 6)
          })
      }
      .width('100%')
      .height('100%')
      .margin({
        top: '200.00vp',
        right: '0.00vp',
        bottom: '0.00vp',
        left: '0.00vp'
      })

      Column() {
        Text('恭喜获得卡片')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .fontColor('#f5ebcf')
        Image($r(`app.media.img${this.randomIndex}`))
          .height(250)
          .scale({
            x: this.maskImagex = 1,
            y: this.maskImagey = 1
          }).animation({
          duration: 200
        })
          .margin({
            top: '20.00vp',
            right: '0.00vp',
            bottom: '35.00vp',
            left: '0.00vp'
          })
        Button('开心收下')
          .width(200)
          .height(50)
          .border({ width: 2, color: '#fff9e0' })
          .backgroundColor(Color.Transparent)
          .onClick(() => {
            this.maskopcity = 0
            this.maskIndex = -1
            this.maskImagex = 0
            this.maskImagey = 0

            this.contents[this.randomIndex] = {
              picture: `app.media.img${this.randomIndex}`,
              Count: this.contents[this.randomIndex].Count + 1
            }
            let flag: boolean = true
            for (let item of this.contents) {
              if (item.Count == 0) {
                flag = false
                break
              }
            }
            this.isget = flag
            if (flag) {
              let randomIndex: number = Math.floor(Math.random() * 3)
              this.prize = this.arr[randomIndex]
            }
          })
      }
      .justifyContent(FlexAlign.Center)
      .width('100%')
      .height('100%')
      .backgroundColor('#cc000000')
      .opacity(this.maskopcity)
      .zIndex(this.maskIndex)
      .animation({
        duration: 200
      })

      if (this.isget) {
        Column({ space: 30 }) {
          Text('恭喜您获得手机一部')
            .fontSize(25)
            .fontWeight(FontWeight.Bold)
            .fontColor('#f5ebcf')
          Image($r(`app.media.pmg${this.prize}`))
            .width(300)
          Button('再来一次')
            .width(200)
            .height(50)
            .border({ width: 2, color: '#fff9e0' })
            .backgroundColor(Color.Transparent)
            .onClick(()=>{
              this.isget=false
              this.prize=''
              this.contents = [
                { Count: 0, picture: 'app.media.img0' },
                { Count: 0, picture: 'app.media.img1' },
                { Count: 0, picture: 'app.media.img2' },
                { Count: 0, picture: 'app.media.img3' },
                { Count: 0, picture: 'app.media.img4' },
                { Count: 0, picture: 'app.media.img5' },
              ]
            })
        }
        .justifyContent(FlexAlign.Center)
        .width('100%')
        .height('100%')
        .backgroundColor('#cc000000')
        .margin({
          top: '0.00vp',
          right: '2.00vp',
          bottom: '0.00vp',
          left: '0.00vp'
        })
      }
    }
  }
}