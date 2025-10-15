//售货页面
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

@Entry
@Component
struct sell{
  items:Array<Item>=[//构建一个以Item类型为元素的数组    数组名：Arry<数组类型>=[]
    new Item('华为mate60',6999,'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
  new Item('华为10S',2999,'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg') ,
    new Item('华为畅享10',1999,'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg'),
    new Item('华为Watch4',699,'https://photo.16pic.com/00/75/74/16pic_7574368_b.jpg')
  ]
  build() {
    Column({ space: 8 }) {
      Row() {
        Text('商品列表')
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .margin({ top: '15.00vp', right: '0.00vp', bottom: '0.00vp', left: '10.00vp' })
      }
      .width('100%')
      .margin({ bottom: 20 })

      ForEach(
        this.items,//要遍历的数组
        (item:Item) => {//（item：类型）=>{}
          Row({ space: 10 }) {
            Image(item.image)
            .width(100)
              .margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' })
            Column({space:4}){
              Text(item.name)
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
              Text('￥'+item.price)
                .fontSize(18)
                .fontWeight(FontWeight.Bold)
                .fontColor(Color.Red)
            }
            .width(100)
            .height(50)
            .alignItems(HorizontalAlign.Start)
          }
          .margin({ top: '10.00vp', right: '0.00vp', bottom: '10.00vp', left: '50.00vp' })
        }
      )
    }
    .alignItems(HorizontalAlign.Start)
    .margin({ top: '5.00vp', right: '0.00vp', bottom: '10.00vp', left: '00.00vp' })
  }
}