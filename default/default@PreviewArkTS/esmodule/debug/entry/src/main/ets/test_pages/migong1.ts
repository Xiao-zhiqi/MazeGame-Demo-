if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UI_test1_Params {
    wall?: number[];
    peoplex?: number;
    peopley?: number;
    positionnumber?: number;
}
import prompt from "@ohos:prompt";
import router from "@ohos:router";
class UI_test1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__wall = new ObservedPropertyObjectPU(this.generateRandomWall(), this, "wall");
        this.__peoplex = new ObservedPropertySimplePU(34, this, "peoplex");
        this.__peopley = new ObservedPropertySimplePU(130, this, "peopley");
        this.__positionnumber = new ObservedPropertySimplePU(1, this, "positionnumber");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UI_test1_Params) {
        if (params.wall !== undefined) {
            this.wall = params.wall;
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
    }
    updateStateVars(params: UI_test1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__wall.purgeDependencyOnElmtId(rmElmtId);
        this.__peoplex.purgeDependencyOnElmtId(rmElmtId);
        this.__peopley.purgeDependencyOnElmtId(rmElmtId);
        this.__positionnumber.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__wall.aboutToBeDeleted();
        this.__peoplex.aboutToBeDeleted();
        this.__peopley.aboutToBeDeleted();
        this.__positionnumber.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 生成随机迷宫数组并确保有路径
    generateRandomWall(): number[] {
        const originalWall = [
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
            1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
            1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1
        ];
        const rows = 20;
        const cols = 20;
        let newWall: number[] = [];
        // 固定第一行
        for (let i = 0; i < cols; i++) {
            newWall.push(originalWall[i]);
        }
        for (let r = 1; r < rows - 1; r++) {
            newWall.push(originalWall[r * cols]); // 固定第一列
            for (let c = 1; c < cols - 1; c++) {
                let randomValue = Math.random() > 0.5 ? 1 : 0;
                if (r === 1 && c === 1) {
                    randomValue = 0;
                }
                if (r === rows - 2 && c === cols - 2) {
                    randomValue = 0;
                }
                newWall.push(randomValue);
            }
            newWall.push(originalWall[r * cols + cols - 1]); // 固定最后一列
        }
        // 固定最后一行
        for (let i = cols * (rows - 1); i < cols * rows; i++) {
            newWall.push(originalWall[i]);
        }
        // 确保有路径从第二格到倒数第二格
        while (!this.checkPathExists(newWall)) {
            let tempWall = this.generateRandomWall();
            newWall = tempWall.slice();
        }
        return newWall;
    }
    // 使用 BFS 检查路径是否存在并记录最短路径，明确返回类型为 number[][] | null
    checkPathExists(wall: number[]): number[][] | null {
        const rows = 20;
        const cols = 20;
        let startX = 1, startY = 1;
        let endX = cols - 2, endY = rows - 2;
        let visited: boolean[][] = [];
        for (let i = 0; i < rows; i++) {
            visited[i] = new Array(cols).fill(false);
        }
        let queue: Array<[
            number,
            number,
            number[][]
        ]> = [];
        queue.push([startX, startY, []]);
        visited[startY][startX] = true;
        while (queue.length > 0) {
            let tempArray = queue.shift();
            if (tempArray) {
                let x = tempArray[0];
                let y = tempArray[1];
                let pathSoFar = tempArray[2];
                if (x === endX && y === endY) {
                    return pathSoFar.concat([[x, y]]);
                }
                let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
                for (let direction of directions) {
                    let newX = x + direction[0];
                    let newY = y + direction[1];
                    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows && !visited[newY][newX] && wall[newY * cols + newX] === 0) {
                        queue.push([newX, newY, pathSoFar.concat([[x, y]])]);
                        visited[newY][newX] = true;
                    }
                }
            }
        }
        return null;
    }
    private __wall: ObservedPropertyObjectPU<number[]>;
    get wall() {
        return this.__wall.get();
    }
    set wall(newValue: number[]) {
        this.__wall.set(newValue);
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
    // 现在 findPath 函数可以直接调用 checkPathExists
    findPath(wall: number[], startX: number, startY: number, endX: number, endY: number): number[][] | null {
        return this.checkPathExists(wall);
    }
    onButtonClick() {
        const cols = 20;
        const rows = 20;
        let startX = 1, startY = 1;
        let endX = cols - 2, endY = rows - 2;
        let path = this.findPath(this.wall, startX, startY, endX, endY);
        if (path !== null) {
            let step = 0;
            let interval = setInterval(() => {
                if (path && step < path.length) {
                    // 不使用解构赋值，通过索引获取坐标
                    this.wall[1] = 2;
                    let currentPosition = path[step];
                    let currentX = currentPosition[0];
                    let currentY = currentPosition[1];
                    // 将当前位置在 wall 中标记为 2
                    this.wall[currentY * cols + currentX] = 2;
                    this.peoplex = currentX * 16.4 + 17.6;
                    this.peopley = currentY * 20 + 130;
                    prompt.showToast({
                        message: `Step ${step + 1}: Move to (${currentX}, ${currentY})`,
                        duration: 500
                    });
                    step++;
                }
                else {
                    clearInterval(interval);
                    this.peopley += 20;
                    prompt.showToast({
                        message: 'Path found!',
                        duration: 500
                    });
                }
            }, 500);
        }
        else {
            prompt.showToast({
                message: 'No path found!',
                duration: 500
            });
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong1.ets(152:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/test_pages/migong1.ets(153:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong1.ets(154:9)", "entry");
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong1.ets(155:9)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong1.ets(156:11)", "entry");
            Row.width('100%');
            Row.height('10%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong1.ets(157:13)", "entry");
            Image.width(35);
            Image.fillColor('#FFFFFF');
            Image.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '18.00vp'
            });
            Image.onClick(() => {
                router.pushUrl({
                    url: "test_pages/migong",
                });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('     随机迷宫游戏');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(169:13)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(28);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong1.ets(172:11)", "entry");
            Row.height(30);
            Row.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '20.00vp',
                left: '0.00vp'
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("最优路径演示 ");
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(173:13)", "entry");
            Text.fontSize(28);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong1.ets(182:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong1.ets(183:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('入口');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(184:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '40.00vp'
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(191:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/test_pages/migong1.ets(195:11)", "entry");
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
                        GridItem.debugLine("entry/src/main/ets/test_pages/migong1.ets(197:15)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item === 0) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(199:19)", "entry");
                                        Text.fontSize(32);
                                        Text.backgroundColor(Color.White);
                                        Text.width(18);
                                        Text.height(21);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else if (item === 1) {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(206:19)", "entry");
                                        Text.fontSize(32);
                                        Text.backgroundColor('#8a5e929b');
                                        Text.width(18);
                                        Text.height(21);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else if (item === 2) {
                                this.ifElseBranchUpdateFunction(2, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(213:19)", "entry");
                                        Text.fontSize(32);
                                        Text.backgroundColor('#8aece3d1');
                                        Text.width(18);
                                        Text.height(21);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(3, () => {
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
            Row.debugLine("entry/src/main/ets/test_pages/migong1.ets(231:11)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.End);
            Row.alignItems(VerticalAlign.Top);
            Row.height(40);
            Row.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '40.00vp',
                left: '0.00vp'
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('                                     ');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(232:13)", "entry");
            Text.fontSize(30);
            Text.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '0.00vp'
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong1.ets(239:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(240:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('出口');
            Text.debugLine("entry/src/main/ets/test_pages/migong1.ets(241:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({
                top: '0.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '0.00vp'
            });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong1.ets(261:11)", "entry");
            Image.height(30);
            Image.width(30);
            Image.fillColor(Color.Red);
            Image.position({
                x: this.peoplex,
                y: this.peopley
            });
            Image.margin({
                top: '20.00vp',
                right: '0.00vp',
                bottom: '0.00vp',
                left: '0.00vp'
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('通关路径演示');
            Button.debugLine("entry/src/main/ets/test_pages/migong1.ets(275:11)", "entry");
            Button.backgroundColor('#cccdbc8d');
            Button.fontSize(20);
            Button.onClick(() => {
                this.onButtonClick();
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
registerNamedRoute(() => new UI_test1(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "test_pages/migong1", pageFullPath: "entry/src/main/ets/test_pages/migong1", integratedHsp: "false" });
