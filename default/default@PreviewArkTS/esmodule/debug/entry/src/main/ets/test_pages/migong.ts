if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UI_test1_Params {
    wall?: number[];
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
        this.__wall = new ObservedPropertyObjectPU(this.generateRandomWall(), this, "wall");
        this.__peoplex = new ObservedPropertySimplePU(34, this, "peoplex");
        this.__peopley = new ObservedPropertySimplePU(100, this, "peopley");
        this.__positionnumber = new ObservedPropertySimplePU(1, this, "positionnumber");
        this.__over = new ObservedPropertySimplePU(false, this, "over");
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
        if (params.over !== undefined) {
            this.over = params.over;
        }
    }
    updateStateVars(params: UI_test1_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__wall.purgeDependencyOnElmtId(rmElmtId);
        this.__peoplex.purgeDependencyOnElmtId(rmElmtId);
        this.__peopley.purgeDependencyOnElmtId(rmElmtId);
        this.__positionnumber.purgeDependencyOnElmtId(rmElmtId);
        this.__over.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__wall.aboutToBeDeleted();
        this.__peoplex.aboutToBeDeleted();
        this.__peopley.aboutToBeDeleted();
        this.__positionnumber.aboutToBeDeleted();
        this.__over.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 生成随机迷宫数组并确保有路径
    generateRandomWall() {
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
    // 检查路径是否存在
    checkPathExists(wall: number[]) {
        const rows = 20;
        const cols = 20;
        let startX = 1, startY = 1;
        let endX = cols - 2, endY = rows - 2;
        let visited: boolean[][] = [];
        for (let i = 0; i < rows; i++) {
            visited[i] = new Array(cols).fill(false);
        }
        let queue: [
            number,
            number
        ][] = [];
        queue.push([startX, startY]);
        visited[startY][startX] = true;
        while (queue.length > 0) {
            let item = queue.shift();
            if (item) {
                let x = item[0];
                let y = item[1];
                if (x === endX && y === endY) {
                    return true;
                }
                let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
                for (let direction of directions) {
                    let newX = x + direction[0];
                    let newY = y + direction[1];
                    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows && !visited[newY][newX] && wall[newY * cols + newX] === 0) {
                        queue.push([newX, newY]);
                        visited[newY][newX] = true;
                    }
                }
            }
        }
        return false;
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
    private __over: ObservedPropertySimplePU<boolean>;
    get over() {
        return this.__over.get();
    }
    set over(newValue: boolean) {
        this.__over.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong.ets(106:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/test_pages/migong.ets(107:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong.ets(108:9)", "entry");
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong.ets(109:9)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong.ets(110:11)", "entry");
            Row.width('100%');
            Row.height('10%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong.ets(111:13)", "entry");
            Image.width(35);
            Image.fillColor('#FFFFFF');
            Image.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '18.00vp' });
            Image.onClick(() => {
                router.pushUrl({
                    url: "test_pages/test1",
                });
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('      随机迷宫游戏');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(118:13)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize(28);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong.ets(120:11)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong.ets(121:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('入口');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(122:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '40.00vp' });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(124:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/test_pages/migong.ets(127:11)", "entry");
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
                        GridItem.debugLine("entry/src/main/ets/test_pages/migong.ets(129:15)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item === 0) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/migong.ets(131:19)", "entry");
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
                                        Text.debugLine("entry/src/main/ets/test_pages/migong.ets(138:19)", "entry");
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
            Row.debugLine("entry/src/main/ets/test_pages/migong.ets(155:11)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.End);
            Row.alignItems(VerticalAlign.Top);
            Row.height(40);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('                                     ');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(156:13)", "entry");
            Text.fontSize(30);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/migong.ets(157:13)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(158:15)", "entry");
            Text.fontSize(10);
            Text.width('100%');
            Text.height(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('出口');
            Text.debugLine("entry/src/main/ets/test_pages/migong.ets(159:15)", "entry");
            Text.fontSize(20);
            Text.width('100%');
            Text.fontColor(Color.White);
            Text.margin({ top: '0.00vp', right: '0.00vp', bottom: '0.00vp', left: '0.00vp' });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/migong.ets(163:11)", "entry");
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceEvenly);
            Row.margin({ top: '10.00vp', right: '0.00vp', bottom: '40.00vp', left: '0.00vp' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('←');
            Button.debugLine("entry/src/main/ets/test_pages/migong.ets(164:13)", "entry");
            Button.backgroundColor('#20101010');
            Button.height(60);
            Button.width(60);
            Button.onClick(() => {
                this.positionnumber = this.positionnumber - 1;
                if (this.wall[this.positionnumber] === 0) {
                    this.peoplex -= 16.4;
                }
                else {
                    this.positionnumber = this.positionnumber + 1;
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('↑');
            Button.debugLine("entry/src/main/ets/test_pages/migong.ets(173:13)", "entry");
            Button.backgroundColor('#20101010');
            Button.height(60);
            Button.width(60);
            Button.onClick(() => {
                this.positionnumber = this.positionnumber - 20;
                if (this.wall[this.positionnumber] === 0) {
                    this.peopley -= 20;
                }
                else {
                    this.positionnumber = this.positionnumber + 20;
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('↓');
            Button.debugLine("entry/src/main/ets/test_pages/migong.ets(182:13)", "entry");
            Button.backgroundColor('#20101010');
            Button.height(60);
            Button.width(60);
            Button.onClick(() => {
                if (this.positionnumber === this.wall.length - 2) {
                    // this.over=true
                    AlertDialog.show({
                        title: '游戏成功',
                        message: '恭喜通关',
                        autoCancel: true,
                        alignment: DialogAlignment.Bottom,
                        gridCount: 4,
                        offset: { dx: 0, dy: -20 },
                        primaryButton: {
                            value: '确定',
                            action: () => {
                                console.info('Callback when the first button is clicked');
                            }
                        },
                        secondaryButton: {
                            value: '最优路径',
                            action: () => {
                                router.pushUrl({
                                    url: "test_pages/migong",
                                });
                            }
                        },
                        cancel: () => {
                            console.info('Closed callbacks');
                        }
                    });
                    // prompt.showToast({
                    //   message: '游戏成功',
                    //   duration: 2000
                    // });
                }
                else {
                    this.positionnumber = this.positionnumber + 20;
                    if (this.wall[this.positionnumber] === 0) {
                        this.peopley += 20;
                    }
                    else {
                        this.positionnumber = this.positionnumber - 20;
                    }
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('→');
            Button.debugLine("entry/src/main/ets/test_pages/migong.ets(226:13)", "entry");
            Button.backgroundColor('#20101010');
            Button.height(60);
            Button.width(60);
            Button.onClick(() => {
                this.positionnumber = this.positionnumber + 1;
                if (this.wall[this.positionnumber] === 0) {
                    this.peoplex += 16.4;
                }
                else {
                    this.positionnumber = this.positionnumber - 1;
                }
            });
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/migong.ets(238:11)", "entry");
            Image.height(30);
            Image.width(30);
            Image.fillColor(Color.Red);
            Image.position({
                x: this.peoplex,
                y: this.peopley
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('解锁最优路径 ');
            Button.debugLine("entry/src/main/ets/test_pages/migong.ets(243:11)", "entry");
            Button.backgroundColor('#cccdbc8d');
            Button.fontSize(20);
            Button.onClick(() => {
                router.pushUrl({
                    url: "test_pages/migong1",
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
registerNamedRoute(() => new UI_test1(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "test_pages/migong", pageFullPath: "entry/src/main/ets/test_pages/migong", integratedHsp: "false" });
