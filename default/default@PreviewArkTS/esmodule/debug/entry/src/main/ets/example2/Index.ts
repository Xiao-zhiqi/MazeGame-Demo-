if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    isSwitchDataSource?: boolean;
    dataSource1?: Array<FruitData>;
    dataSource2?: Array<FruitData>;
}
import { FruitData } from "@bundle:com.example.myapplication2/entry/ets/example2/models";
import { titleComponent } from "@bundle:com.example.myapplication2/entry/ets/example2/titleComponent";
import { itemComponent } from "@bundle:com.example.myapplication2/entry/ets/example2/ItemComponent";
import { TableHeaderComponent } from "@bundle:com.example.myapplication2/entry/ets/example2/TableHeadComponent";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isSwitchDataSource = new ObservedPropertySimplePU(true, this, "isSwitchDataSource");
        this.__dataSource1 = new ObservedPropertyObjectPU([
            new FruitData(1, '苹果', '12808'),
            new FruitData(2, '苹果', '12808'),
            new FruitData(3, '苹果', '12808'),
            new FruitData(4, '苹果', '12808'),
            new FruitData(5, '苹果', '12808'),
            new FruitData(6, '苹果', '12808'),
            new FruitData(7, '苹果', '12808'),
            new FruitData(8, '苹果', '12808'),
            new FruitData(9, '苹果', '12808'),
        ], this, "dataSource1");
        this.__dataSource2 = new ObservedPropertyObjectPU([
            new FruitData(1, '香蕉', '12000'),
            new FruitData(2, '香蕉', '12000'),
            new FruitData(3, '香蕉', '12000'),
            new FruitData(4, '香蕉', '12000'),
            new FruitData(5, '香蕉', '12000'),
            new FruitData(6, '香蕉', '12000'),
            new FruitData(7, '香蕉', '12000'),
            new FruitData(8, '香蕉', '12000'),
            new FruitData(9, '香蕉', '12000'),
            new FruitData(10, '香蕉', '12000'),
            new FruitData(11, '香蕉', '12000')
        ], this, "dataSource2");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.isSwitchDataSource !== undefined) {
            this.isSwitchDataSource = params.isSwitchDataSource;
        }
        if (params.dataSource1 !== undefined) {
            this.dataSource1 = params.dataSource1;
        }
        if (params.dataSource2 !== undefined) {
            this.dataSource2 = params.dataSource2;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isSwitchDataSource.purgeDependencyOnElmtId(rmElmtId);
        this.__dataSource1.purgeDependencyOnElmtId(rmElmtId);
        this.__dataSource2.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isSwitchDataSource.aboutToBeDeleted();
        this.__dataSource1.aboutToBeDeleted();
        this.__dataSource2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isSwitchDataSource: ObservedPropertySimplePU<boolean>;
    get isSwitchDataSource() {
        return this.__isSwitchDataSource.get();
    }
    set isSwitchDataSource(newValue: boolean) {
        this.__isSwitchDataSource.set(newValue);
    }
    private __dataSource1: ObservedPropertyObjectPU<Array<FruitData>>;
    get dataSource1() {
        return this.__dataSource1.get();
    }
    set dataSource1(newValue: Array<FruitData>) {
        this.__dataSource1.set(newValue);
    }
    private __dataSource2: ObservedPropertyObjectPU<Array<FruitData>>;
    get dataSource2() {
        return this.__dataSource2.get();
    }
    set dataSource2(newValue: Array<FruitData>) {
        this.__dataSource2.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/example2/Index.ets(39:5)", "entry");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new titleComponent(this, { isrefreshData: this.__isSwitchDataSource, titl: '水果排行榜' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/example2/Index.ets", line: 40, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isrefreshData: this.isSwitchDataSource,
                            titl: '水果排行榜'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "titleComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.margin({
                top: 20,
                bottom: 15
            });
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TableHeaderComponent(this, {
                        paddingValue: {
                            left: 15,
                            right: 15
                        },
                        widthValue: '90%'
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/example2/Index.ets", line: 42, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            paddingValue: {
                                left: 15,
                                right: 15
                            },
                            widthValue: '90%'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TableHeaderComponent" });
        }
        __Common__.pop();
        this.CreateArrayItemComponent.bind(this)();
        Column.pop();
    }
    CreateArrayItemComponent(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/example2/Index.ets(59:7)", "entry");
            Column.padding({
                left: 15,
                right: 15
            });
            Column.width('90%');
            Column.borderRadius(20);
            Column.alignItems(HorizontalAlign.Center);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/example2/Index.ets(60:9)", "entry");
            List.width('100%');
            List.height('80%');
            List.divider({ strokeWidth: 1 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("entry/src/main/ets/example2/Index.ets(64:15)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new itemComponent(this, {
                                        index: item.id,
                                        name: item.name,
                                        vote: item.vote
                                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/example2/Index.ets", line: 65, col: 17 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            index: item.id,
                                            name: item.name,
                                            vote: item.vote
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "itemComponent" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.isSwitchDataSource ? this.dataSource1 : this.dataSource2, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "example2/Index", pageFullPath: "entry/src/main/ets/example2/Index", integratedHsp: "false" });
