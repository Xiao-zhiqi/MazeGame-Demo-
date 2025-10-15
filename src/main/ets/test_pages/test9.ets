export class TaskDataModel {
  private tasks: Array<string> = [
    '早起晨练',
    '准备早餐',
    '阅读名著',
    '学习',
    '玩游戏',
    '吃午饭'
  ]

  getData(): Array<string> {
    return this.tasks
  }
}
  // new TaskDataModel()
@Component
struct ItemComponent{
  private  task_content:string=''
  @State iscomplete:boolean=false
  @Builder
  CreateIcon(icon:ResourceStr){
    Image(icon)
      .width(28)
      .height(28)
      .objectFit(ImageFit.Contain)
      .margin(20)
  }

  build() {
  Row(){
        if (this.iscomplete) {
          this.CreateIcon($r('app.media.app_icon'))
        }
        else{
          this.CreateIcon($r('app.media.background'))
        }
        Text(this.task_content)
          .fontSize(20)
          .fontWeight(500)
          .opacity(this.iscomplete?0.5:1)
          .decoration({type:this.iscomplete?TextDecorationType.LineThrough:TextDecorationType.None})
    }
    .borderRadius(24)
    .backgroundColor(Color.White)
    .width('90%')
  .justifyContent(FlexAlign.Start)
    .height(65)
    .onClick(()=>{
      this.iscomplete=!this.iscomplete
    })
  }
}
@Entry
@Component
struct  showout{
private  totaldata:Array<string>=[]
  aboutToAppear(): void {
  this.totaldata=new TaskDataModel().getData()}

  build() {//构建入口的UI界面
    Column({space:8}){
      Text('待办')
        .fontSize(28)
        .lineHeight(33)
        .fontWeight(FontWeight.Bold)
        .width('80%')
        .textAlign(TextAlign.Start)


    List({space:10}){
      ForEach(
        this.totaldata,
        (item:string)=>{
          ListItem(){
            ItemComponent({task_content:item})
          }
      })
    }
    .width('100%')
      .height('100%')
      .backgroundColor('#FFECECEC')
    .backgroundImageSize(ImageSize.Cover)

  }
  }
}
