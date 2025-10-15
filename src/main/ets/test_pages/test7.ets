@Observed
class  Task{
  static id:number=1
  name:string=`任务${Task.id++}`
  finished:boolean=false
}

@Styles function card(){
  .width('95%')
  .padding(20)
  .backgroundColor(Color.White)
  .borderRadius(15)
  .shadow({radius:6,color:'#1F000000',offsetX:2,offsetY:4})
}

@Extend(Text) function finishedTask(){
  .decoration({type:TextDecorationType.LineThrough})
  .fontColor('#B1B2B1')
}


@Entry
@Component
struct  PropPage{
  //任务总数量
  @State totalTask:number=0
  //已完成任务数量
  @State finishTask:number=0
  build() {
    Column({space:10}) {
      //1.任务进度卡片
      TaskStatistic({finishTask:this.finishTask,totalTask:this.totalTask})
      //新增任务按钮
      TaskList({finishTask:$finishTask,totalTask:$totalTask})
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F2F3')
  }
}
@Component
struct TaskStatistic{
  @Link finishTask:number
  @Link  totalTask:number
  build() {
    Row() {
      Text('任务进度')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Stack() {
        Progress({
          value: this.finishTask,
          total: this.totalTask,
          type: ProgressType.Ring
        })
          .width(100)
        Row() {
          Text(this.finishTask.toString())
            .fontSize(24)
            .fontColor('#36D')
          Text('/' + this.totalTask.toString())
            .fontSize(24)
            .fontColor('#36D')
        }
      }
    }.card()
    .margin({ top: 20, bottom: 10 })
    .justifyContent(FlexAlign.SpaceEvenly)
  }
}
@Component
struct  TaskList {
  //任务总数量
  @Link totalTask: number
  //已完成任务数量
  @Link finishTask: number
  @State tasks: Task[] = []

  handleTaskChange() {
    this.totalTask = this.tasks.length
    this.finishTask = this.tasks.filter(item => item.finished).length
  }

  build() {
    Column() {
      Button('新增任务')
        .width(200)
        .onClick(() => {
          this.tasks.push(new Task())
          this.handleTaskChange()
        })
      //3.任务列表
      List({ space: 10 }) {
        ForEach(
          this.tasks,
          (item: Task, Index) => {
            ListItem() {
              TaskItem({item:item,onTaskChange:this.handleTaskChange.bind(this)})
            }
            .swipeAction({ end: this.DeletButton(Index) })
          }
        )
      }
      .width('100%')
      .layoutWeight(1)
      .alignListItem(ListItemAlign.Center)
    }
  }
      @
      Builder
      DeletButton(index: number)
      {
        Button('删除')
          .backgroundColor(Color.Blue)
          .width(100)
          .height(40)
          .fontColor(Color.White)
          .fontSize(30)
          .type(ButtonType.Capsule)
          .margin(5)
          .onClick(() => {
            this.tasks.splice(index, 1)
            this.handleTaskChange()
          })
      }
  }

@Component
struct  TaskItem{
  @ObjectLink item:Task
  onTaskChange =() => undefined;
  build() {
    Row() {
      if(this.item.finished){
        Text(this.item.name)
          .finishedTask()
      }else
      {Text(this.item.name)}
      Checkbox()
        .select(this.item.finished)
        .onChange(val => {
          this.item.finished = val
          this.onTaskChange()
        })
    }
    .card()
    .justifyContent(FlexAlign.SpaceBetween)
  }
}