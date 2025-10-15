//售货页面可滑动
class Item{     //构建一个类
  name:string
  price:number
  image:string

  constructor(name:string,price:number,image:string) {
    this.name=name//类的属性
    this.price=price
    this.image=image
  }
}
@Component
struct header{
 @State title:ResourceStr=' '
  build() {
  Row(){
    Image($r('app.media.startIcon'))
      .width(30)
    Text(this.title)
      .fontSize(30)
      .width(150)
      .height(30)
    Blank()
    Image($r('app.media.app_icon'))
      .width(30)
  }
  .height(30)
    .width('100%')
  .margin({ top: '10.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' })
  }
}


@Entry
@Component
struct sell {
  items: Array<Item> = [//构建一个以Item类型为元素的数组    数组名：Arry<数组类型>=[]
    new Item('华为mate60', 6999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为10S', 2999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为畅享10', 1999, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为Watch4', 699, 'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg')
  ]

  build() {
    Column({ space: 8 }) {
      header({ title: '商品列表' })
      List({ space: 10 }) {
        ForEach(
          this.items,
          (item: Item) => {
            ListItem() {
              Row({ space: 10 }) {
                Image(item.image)
                  .width(100)
                  .margin({
                    top: '0.00vp',
                    right: '0.00vp',
                    bottom: '0.00vp',
                    left: '0.00vp'
                  })
                Column({ space: 4 }) {
                  Text(item.name)
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                  Text('￥' + item.price)
                    .fontSize(18)
                    .fontWeight(FontWeight.Bold)
                    .fontColor(Color.Red)
                }
                .width(100)
                .height(100)
                .alignItems(HorizontalAlign.Center)
              }
              .alignItems(VerticalAlign.Center)
              .justifyContent(FlexAlign.Center)
            }
          }
        )
      }
      .margin({
        top: '10.00vp',
        right: '0.00vp',
        bottom: '0.00vp',
        left: '0.00vp'
      })
      .padding({
        top: '20.00vp',
        right: '0.00vp',
        bottom: '0.00vp',
        left: '60.00vp'
      })
      .backgroundColor(Color.Transparent)
      .foregroundColor(Color.Black)
      .borderColor(Color.Blue)

    }
  }
}