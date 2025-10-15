if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UI_test1_Params {
    wall?: number[];
    wall2?: number[][];
    peoplex?: number;
    peopley?: number;
    positionnumber?: number;
    over?: boolean;
}
import router from "@ohos:router";
class UI_test1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__wall = new ObservedPropertyObjectPU([
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
        ], this, "wall");
        this.__wall2 = new ObservedPropertyObjectPU([
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
        ], this, "wall2");
        this.__peoplex = new ObservedPropertySimplePU(34, this, "peoplex");
        this.__peopley = new ObservedPropertySimplePU(130, this, "peopley");
        this.__positionnumber = new ObservedPropertySimplePU(1, this, "positionnumber");
        this.__over = new ObservedPropertySimplePU(false, this, "over");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UI_test1_Params) {
        if (params.wall !== undefined) {
            this.wall = params.wall;
        }
        if (params.wall2 !== undefined) {
            this.wall2 = params.wall2;
        }
        if (params.peoplex !== undefined) {
            this.peoplex = params.peoplex;
        }
        if (params.peopley !== undefined) {
            this.peopley = params.peopley;
        }
        if (params.positionnumber !== undefined) {
            this.positionnumber = params.positionnumber;
        }
        if (params.over !== undefined) {
            this.over = params.over;
        }
    }
    updateStateVars(params: UI_test1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__wall.purgeDependencyOnElmtId(rmElmtId);
        this.__wall2.purgeDependencyOnElmtId(rmElmtId);
        this.__peoplex.purgeDependencyOnElmtId(rmElmtId);
        this.__peopley.purgeDependencyOnElmtId(rmElmtId);
        this.__positionnumber.purgeDependencyOnElmtId(rmElmtId);
        this.__over.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__wall.aboutToBeDeleted();
        this.__wall2.aboutToBeDeleted();
        this.__peoplex.aboutToBeDeleted();
        this.__peopley.aboutToBeDeleted();
        this.__positionnumber.aboutToBeDeleted();
        this.__over.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __wall: ObservedPropertyObjectPU<number[]>;
    get wall() {
        return this.__wall.get();
    }
    set wall(newValue: number[]) {
        this.__wall.set(newValue);
    }
    private __wall2: ObservedPropertyObjectPU<number[][]>;
    get wall2() {
        return this.__wall2.get();
    }
    set wall2(newValue: number[][]) {
        this.__wall2.set(newValue);
    }
    private __peoplex: ObservedPropertySimplePU<number>;
    get peoplex() {
        return this.__peoplex.get();
    }
    set peoplex(newValue: number) {
        this.__peoplex.set(newValue);
    }
    private __peopley: ObservedPropertySimplePU<number>;
    get peopley() {
        return this.__peopley.get();
    }
    set peopley(newValue: number) {
        this.__peopley.set(newValue);
    }
    private __positionnumber: ObservedPropertySimplePU<number>;
    get positionnumber() {
        return this.__positionnumber.get();
    }
    set positionnumber(newValue: number) {
        this.__positionnumber.set(newValue);
    }
    private __over: ObservedPropertySimplePU<boolean>;
    get over() {
        return this.__over.get();
    }
    set over(newValue: boolean) {
        this.__over.set(newValue);
    }
    findPathDFS() {
        let rows = this.wall2.length;
        let cols = this.wall2[0].length;
        let visited: boolean[][] = [];
        for (let i = 0; i < rows; i++) {
            visited[i] = new Array(cols).fill(false);
        }
        let path: [
            number,
            number
        ][] = [];
        let dfsHelper = (x: number, y: number) => {
            if (x === rows - 1 && y === cols - 1) {
                path.push([x, y]);
                return true;
            }
            visited[x][y] = true;
            let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            for (let direction of directions) {
                let newX = x + direction[0];
                let newY = y + direction[1];
                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && !visited[newX][newY] && this.wall2[newX][newY] !== 1) {
                    if (dfsHelper(newX, newY)) {
                        path.push([x, y]);
                        return true;
                    }
                }
            }
            return false;
        };
        dfsHelper(0, 0);
        return path.reverse();
    }
    moveAlongPath(path: [
        number,
        number
    ][]) {
        let index = 0;
        let intervalId = setInterval(() => {
            if (index < path.length) {
                this.peoplex = path[index][1] * 21;
                this.peopley = path[index][0] * 21;
                index++;
            }
            else {
                clearInterval(intervalId);
            }
        }, 500);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test 2.ets(103:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/test_pages/test 2.ets(104:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test 2.ets(105:9)", "entry");
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test 2.ets(106:9)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/test 2.ets(107:11)", "entry");
            Row.width('100%');
            Row.height('10%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test 2.ets(108:13)", "entry");
            Image.width(35);
            Image.fillColor('#FFFFFF');
            Image.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '18.00vp' });
            Image.onClick(() => {
                router.pushUrl({
                    url: "test_pages/migong",
                });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('         迷宫游戏');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(115:13)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(28);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/test 2.ets(117:11)", "entry");
            Row.height(30);
            Row.margin({ top: '0.00vp', right: '0.00vp', bottom: '20.00vp', left: '0.00vp' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("最优路径演示");
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(118:13)", "entry");
            Text.fontSize(28);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/test 2.ets(121:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test 2.ets(122:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('入口');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(123:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '40.00vp' });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(125:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/test_pages/test 2.ets(128:11)", "entry");
            Grid.columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            Grid.rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            Grid.columnsGap(1);
            Grid.rowsGap(1);
            Grid.width('90%');
            Grid.backgroundColor(Color.White);
            Grid.height(400);
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/test_pages/test 2.ets(130:15)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item == 0) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(132:19)", "entry");
                                        Text.fontSize(32);
                                        Text.backgroundColor(Color.White);
                                        Text.width(18);
                                        Text.height(21);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else if (item == 1) {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(139:19)", "entry");
                                        Text.fontSize(32);
                                        Text.backgroundColor('#8a5e929b');
                                        Text.width(18);
                                        Text.height(21);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(2, () => {
                                });
                            }
                        }, If);
                        If.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.wall, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/test 2.ets(156:11)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.End);
            Row.alignItems(VerticalAlign.Top);
            Row.height(40);
            Row.margin({ top: '0.00vp', right: '0.00vp', bottom: '40.00vp', left: '0.00vp' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('                                     ');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(157:13)", "entry");
            Text.fontSize(30);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test 2.ets(159:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(160:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('出口');
            Text.debugLine("entry/src/main/ets/test_pages/test 2.ets(161:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test 2.ets(166:11)", "entry");
            Image.height(30);
            Image.width(30);
            Image.fillColor(Color.Red);
            Image.position({
                x: this.peoplex,
                y: this.peopley
            });
            Image.margin({ top: '20.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('最优路径演示');
            Button.debugLine("entry/src/main/ets/test_pages/test 2.ets(172:11)", "entry");
            Button.backgroundColor('#cccdbc8d');
            Button.fontSize(20);
            Button.onClick(() => {
                let path = this.findPathDFS();
                this.moveAlongPath(path);
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
registerNamedRoute(() => new UI_test1(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "test_pages/test 2", pageFullPath: "entry/src/main/ets/test_pages/test 2", integratedHsp: "false" });
