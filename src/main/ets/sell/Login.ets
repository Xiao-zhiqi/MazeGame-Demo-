//登录页面

@Entry
@Component
struct Index {
  build() {
    Column() {

        Image($r('app.media.app_icon'))
          .height(150)
          .width(150)
          .margin({ top: '40.00vp', right: '0.00vp', bottom: '0.00vp', left: '7.00vp' })


        Text($r('app.string.app_name'))
          .fontSize(30)
          .fontWeight(FontWeight.Medium)
          .fontColor(Color.Black)
          .height(50)
          .width(300)
          .margin({ top: '20.00vp', right: '0.00vp', bottom: '0.00vp', left: '70.00vp' })

      Text('登录了解更多')
        .fontSize(20)
        .fontWeight(FontWeight.Medium)
        .fontColor(Color.Gray)
        .height(35)
        .width(300)
        .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '110.00vp' })

      TextInput({placeholder:'请输入账号',text:''})
        .fontSize(30)
        .fontWeight(FontWeight.Medium)
        .fontColor(Color.Gray)
        .height(50)
        .width(300)
        .margin({ top: '100.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' })

      TextInput({placeholder:'请输入密码',text:''})
        .fontSize(30)
        .fontWeight(FontWeight.Medium)
        .fontColor(Color.Gray)
        .height(50)
        .width(300)

      Row(){
            Text('短信验证码登录')
              .fontSize(15)
              .fontWeight(FontWeight.Medium)
              .fontColor(Color.Blue)
              .height(40)
              .width(150)
              .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '18.00vp' })

        Blank(120)

          Text('忘记密码')
             .fontSize(15)
              .fontWeight(FontWeight.Medium)
              .fontColor(Color.Blue)
              .height(40)
              .width(100)
      }

      Button('登录')
        .height(60)
        .width(150)
        .fontSize(30)

    }
  }
}