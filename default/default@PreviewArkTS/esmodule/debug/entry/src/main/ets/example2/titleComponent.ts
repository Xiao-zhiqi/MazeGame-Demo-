if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface titleComponent_Params {
    titl?: string;
    isrefreshData?: boolean;
}
import type AppContext from "@ohos:app.ability.common";
export class titleComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__titl = new ObservedPropertySimplePU('', this, "titl");
        this.__isrefreshData = new SynchedPropertySimpleTwoWayPU(params.isrefreshData, this, "isrefreshData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: titleComponent_Params) {
        if (params.titl !== undefined) {
            this.titl = params.titl;
        }
    }
    updateStateVars(params: titleComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__titl.purgeDependencyOnElmtId(rmElmtId);
        this.__isrefreshData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__titl.aboutToBeDeleted();
        this.__isrefreshData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __titl: ObservedPropertySimplePU<string>;
    get titl() {
        return this.__titl.get();
    }
    set titl(newValue: string) {
        this.__titl.set(newValue);
    }
    private __isrefreshData: SynchedPropertySimpleTwoWayPU<boolean>;
    get isrefreshData() {
        return this.__isrefreshData.get();
    }
    set isrefreshData(newValue: boolean) {
        this.__isrefreshData.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/example2/titleComponent.ets(12:5)", "entry");
            Row.justifyContent(FlexAlign.Start);
            Row.width('100%');
            Row.height(47);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/example2/titleComponent.ets(13:7)", "entry");
            Image.width(30);
            Image.height(30);
            Image.onClick(() => {
                //退出APP
                let context = getContext(this) as AppContext.UIAbilityContext; //获得上下文对象
                context.terminateSelf(); //关闭当前组件（退出0
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.titl);
            Text.debugLine("entry/src/main/ets/example2/titleComponent.ets(21:7)", "entry");
            Text.fontSize(28);
            Text.height(30);
            Text.width(150);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create(100);
            Blank.debugLine("entry/src/main/ets/example2/titleComponent.ets(25:7)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777228, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/example2/titleComponent.ets(26:7)", "entry");
            Image.width(30);
            Image.height(30);
            Image.onClick(() => {
                this.isrefreshData = !this.isrefreshData;
            });
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
