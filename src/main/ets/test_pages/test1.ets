import router  from '@ohos.router';
@Entry
@Component
struct UI_test1{

  build() {
    Column(){
      Stack(){
        Image($r("app.media.bg")).width('100%').height('100%')
        Column(){
          Text('迷宫游戏 ').fontColor(Color.White).fontSize(58).width(250).height(100).fontStyle(FontStyle.Italic).fontWeight(FontWeight.Bold)
            .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '12.00vp' })
          Button('开始游戏').fontColor(Color.White).fontSize(30).width(200).height(50).backgroundColor('#9964f0fd')
            .margin({ top: '400.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' })
            .onClick(()=>{
              router.pushUrl({
                url: "test_pages/migong",
              });
            });
        }.width('100%').height('100%').justifyContent(FlexAlign.Center)
      }
    }.width('100%').height('100%')
  }
}