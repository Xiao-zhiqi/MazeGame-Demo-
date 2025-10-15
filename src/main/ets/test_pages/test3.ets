@Entry
@Component
struct UI_test1{
  @State
  textSize: number = 50
  textValue = 'hello'
  // myClickHandler():void{
  //   this.textSize+=4
  // }
   build() {
     Column(){
       Text(this.textValue)
         .fontSize(this.textSize)
         .fontWeight(FontWeight.Bold)
         .fontColor(Color.Blue)
       Button('增大字体')
         .height(50)
         .width(100)
         .margin({top:20})
         .onClick(()=>{
           this.textSize+=4
         })
         // .onClick(this.myClickHandler.bind(this))
     }
   }
}