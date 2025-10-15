//调整图片宽度
@Entry
@Component
struct kuan {
  @State w: number = 30

  build() {
    Column() {
      Row() {
        Image('https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg')
          .width(this.w)
      }
      .width('100%')
        .height(400)
      .justifyContent(FlexAlign.Center)
      Row() {
        Text('图像宽度：')
          .fontWeight(FontWeight.Bold)
          .fontSize(30)
          .width(160)
          .height(50)
        TextInput({ text: this.w.toFixed(0) })
          .fontSize(30)
          .width(160)
          .height(50)
          .fontWeight(FontWeight.Bold)
          .onChange(value => {
            this.w = parseInt(value)
          })
      }
      .width('90%')
      .margin(30)
      .justifyContent(FlexAlign.SpaceBetween)
      Divider()
        .width('90%')
        Row() {
          Button('放大')
            .fontSize(30)
            .width(120)
            .height(60)
            .fontWeight(FontWeight.Bold)
            .onClick(() => {if(this.w<295)
              this.w += 5
            })
          Button('缩小')
            .fontSize(30)
            .width(120)
            .height(60)
            .fontWeight(FontWeight.Bold)
            .onClick(() => {if(this.w>35)
              this.w -= 5
            })
        }
        .margin(30)
        .width('100%')
        .justifyContent(FlexAlign.SpaceEvenly)
          Slider({
            min:30,
            max:300,
            value:this.w,
            step:5,
            style: SliderStyle.OutSet
          })
            .showTips(true)
            .onChange((value:number)=>{
              this.w=value
            })
        }
    .justifyContent(FlexAlign.Center)
  }
}