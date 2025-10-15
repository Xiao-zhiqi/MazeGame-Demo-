if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UI_test1_Params {
}
import router from "@ohos:router";
class UI_test1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UI_test1_Params) {
    }
    updateStateVars(params: UI_test1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test1.ets(7:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/test_pages/test1.ets(8:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test1.ets(9:9)", "entry");
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test1.ets(10:9)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('迷宫游戏 ');
            Text.debugLine("entry/src/main/ets/test_pages/test1.ets(11:11)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(58);
            Text.width(250);
            Text.height(100);
            Text.fontStyle(FontStyle.Italic);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '12.00vp' });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('开始游戏');
            Button.debugLine("entry/src/main/ets/test_pages/test1.ets(13:11)", "entry");
            Button.fontColor(Color.White);
            Button.fontSize(30);
            Button.width(200);
            Button.height(50);
            Button.backgroundColor('#9964f0fd');
            Button.margin({ top: '400.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' });
            Button.onClick(() => {
                router.pushUrl({
                    url: "test_pages/migong",
                });
            });
        }, Button);
        Button.pop();
        Column.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "UI_test1";
    }
}
registerNamedRoute(() => new UI_test1(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "test_pages/test1", pageFullPath: "entry/src/main/ets/test_pages/test1", integratedHsp: "false" });
