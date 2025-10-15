if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TableHeaderComponent_Params {
    widthValue?: Length;
    paddingValue?: Padding | Length;
}
export class TableHeaderComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.widthValue = 0;
        this.paddingValue = 0;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TableHeaderComponent_Params) {
        if (params.widthValue !== undefined) {
            this.widthValue = params.widthValue;
        }
        if (params.paddingValue !== undefined) {
            this.paddingValue = params.paddingValue;
        }
    }
    updateStateVars(params: TableHeaderComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private widthValue: Length;
    private paddingValue: Padding | Length;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/example2/TableHeadComponent.ets(10:5)", "entry");
            Row.width(this.widthValue);
            Row.padding(this.paddingValue);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('排名');
            Text.debugLine("entry/src/main/ets/example2/TableHeadComponent.ets(11:7)", "entry");
            Text.fontSize(16);
            Text.width('20%');
            Text.fontWeight(400);
            Text.fontColor(Color.Gray);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('种类');
            Text.debugLine("entry/src/main/ets/example2/TableHeadComponent.ets(17:7)", "entry");
            Text.fontSize(16);
            Text.width('50%');
            Text.fontWeight(400);
            Text.fontColor(Color.Gray);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('得票数');
            Text.debugLine("entry/src/main/ets/example2/TableHeadComponent.ets(23:7)", "entry");
            Text.fontSize(16);
            Text.width('30%');
            Text.fontWeight(400);
            Text.fontColor(Color.Gray);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
