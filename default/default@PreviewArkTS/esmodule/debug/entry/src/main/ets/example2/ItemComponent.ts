if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface itemComponent_Params {
    index?: number;
    name?: string;
    vote?: string;
    isChoice?: boolean;
}
export class itemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.index = 0;
        this.name = '';
        this.vote = '';
        this.__isChoice = new ObservedPropertySimplePU(false, this, "isChoice");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: itemComponent_Params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.vote !== undefined) {
            this.vote = params.vote;
        }
        if (params.isChoice !== undefined) {
            this.isChoice = params.isChoice;
        }
    }
    updateStateVars(params: itemComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isChoice.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isChoice.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private index: number;
    private name: string;
    private vote: string;
    private __isChoice: ObservedPropertySimplePU<boolean>;
    get isChoice() {
        return this.__isChoice.get();
    }
    set isChoice(newValue: boolean) {
        this.__isChoice.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/example2/ItemComponent.ets(13:5)", "entry");
            Row.width('100%');
            Row.height(65);
            Row.onClick(() => {
                this.isChoice = !this.isChoice;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/example2/ItemComponent.ets(14:7)", "entry");
            Column.width('20%');
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isCircleText()) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.CreatCircleText.bind(this)(this.index);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.index.toString());
                        Text.debugLine("entry/src/main/ets/example2/ItemComponent.ets(18:11)", "entry");
                        Text.lineHeight(35);
                        Text.fontSize(25);
                        Text.fontWeight(400);
                        Text.textAlign(TextAlign.Center);
                        Text.width(30);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            //
            Text.create(this.name);
            Text.debugLine("entry/src/main/ets/example2/ItemComponent.ets(29:7)", "entry");
            //
            Text.width('50%');
            //
            Text.fontSize(30);
            //
            Text.fontWeight(500);
            //
            Text.fontColor(this.isChoice ? Color.Blue : Color.Gray);
        }, Text);
        //
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.vote);
            Text.debugLine("entry/src/main/ets/example2/ItemComponent.ets(35:7)", "entry");
            Text.width('30%');
            Text.fontSize(30);
            Text.fontWeight(500);
            Text.fontColor(this.isChoice ? Color.Blue : Color.Gray);
        }, Text);
        Text.pop();
        Row.pop();
    }
    CreatCircleText(index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/example2/ItemComponent.ets(51:5)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.borderRadius(24);
            Row.size({ width: 24, height: 24 });
            Row.backgroundColor(Color.Blue);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.index.toString());
            Text.debugLine("entry/src/main/ets/example2/ItemComponent.ets(52:7)", "entry");
            Text.lineHeight(30);
            Text.fontSize(25);
            Text.fontWeight(400);
            Text.textAlign(TextAlign.Center);
            Text.width(30);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
    }
    isCircleText(): boolean {
        return this.index === 1 || this.index === 2 || this.index === 3;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
