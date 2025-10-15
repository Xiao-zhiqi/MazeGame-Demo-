class Artical{
  id:number
  content:string
  picture:string

  constructor(id:number,content:string,picture:string) {
    this.id=id
    this.content=content
    this.picture=picture
  }
}

@Component
struct  showArtical{
   article=new Artical(1,'内容','app.media.app_icon')

  build() {
  Row(){
    Image($r(this.article.picture))
      .height(80)
      .width(80)
    Column(){
      Text('第'+this.article.id+'篇文章')
        .fontSize(20)
        .width(200)
        .height(50)
      Text(this.article.content)
        .fontSize(18)
        .width(200)
        .height(50)
    }
  }
  .backgroundColor('#FFECECEC')
  }
}

@Entry
@Component
struct parentshow{
  @State islistreached:boolean=false
  @State artical_arry:Array<Artical>=[
    new Artical(1,'内容','app.media.app_icon'),
    new Artical(2,'内容','app.media.app_icon'),
    new Artical(3,'内容','app.media.app_icon'),
    new Artical(4,'内容','app.media.app_icon'),
    new Artical(5,'内容','app.media.app_icon'),
    new Artical(6,'内容','app.media.app_icon'),
    new Artical(7,'内容','app.media.app_icon'),
    new Artical(8,'内容','app.media.app_icon'),
    new Artical(9,'内容','app.media.app_icon'),
    new Artical(10,'内容','app.media.app_icon'),
  ]
  build() {
  List({space:10}){
    ForEach(
      this.artical_arry,
      (item:Artical)=>{
      ListItem(){
        showArtical({article:item})
      }
    })
  }
  .onReachEnd(()=>{
    //到达列表底部
    this.islistreached=true
  })
  .parallelGesture(PanGesture({direction:PanDirection.Up,distance:80})
    .onActionStart(()=>{
        if (this.islistreached) {
          let count: number = this.artical_arry.length
          let new_id = count += 1
          this.artical_arry.push(new Artical(new_id, '内容', 'app.media.app_icon'))
          this.islistreached = false
        }
  }))
  .margin({ top: '10.00vp', right: '0.00vp', bottom: '10.00vp', left: '30.00vp' })
  }

}
