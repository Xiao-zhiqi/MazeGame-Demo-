if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UI_test1_Params {
    wall?: number[];
    peoplex?: number;
    peopley?: number;
    positionnumber?: number;
    over?: boolean;
    horseMoves?: number[][];
}
class UI_test1 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__wall = new ObservedPropertyObjectPU([
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
            0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
        ], this, "wall");
        this.__peoplex = new ObservedPropertySimplePU(3, this, "peoplex");
        this.__peopley = new ObservedPropertySimplePU(115, this, "peopley");
        this.__positionnumber = new ObservedPropertySimplePU(1, this, "positionnumber");
        this.__over = new ObservedPropertySimplePU(false, this, "over");
        this.horseMoves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];
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
        if (params.horseMoves !== undefined) {
            this.horseMoves = params.horseMoves;
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
    private horseMoves: number[][];
    // 判断移动是否合法
    isValidMove(board: number[][], x: number, y: number): boolean {
        const N = 18;
        return (x >= 0 && x < N) && (y >= 0 && y < N) && (board[x][y] === -1);
    }
    // 打印棋盘状态
    printBoard(board: number[][]): void {
        for (let i = 0; i < 18; i++) {
            console.log(board[i].map(num => num.toString().padStart(3, ' ')).join(' '));
        }
    }
    // 马踏棋盘的主逻辑函数
    knightTour(board: number[][], x: number, y: number, moveCount: number): boolean {
        if (moveCount === 18 * 18) {
            return true;
        }
        for (let i = 0; i < 8; i++) {
            const nextX = x + [2, 1, -1, -2, -2, -1, 1, 2][i];
            const nextY = y + [1, 2, 2, 1, -1, -2, -2, -1][i];
            if (this.isValidMove(board, nextX, nextY)) {
                board[nextX][nextY] = moveCount;
                if (this.knightTour(board, nextX, nextY, moveCount + 1)) {
                    // 更新棋子位置
                    this.peoplex = nextX * 20;
                    this.peopley = nextY * 20;
                    return true;
                }
                board[nextX][nextY] = -1;
            }
        }
        return false;
    }
    // 解决马踏棋盘问题的入口函数
    solveKnightTour(): void {
        let board: number[][] = new Array(18);
        for (let i = 0; i < 18; i++) {
            board[i] = new Array(18).fill(-1);
        }
        board[0][0] = 0;
        if (this.knightTour(board, 0, 0, 1)) {
            this.printBoard(board);
            console.log(JSON.stringify(this.peoplex));
        }
        else {
            console.log("没有找到解决方案。");
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test2.ets(90:5)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("entry/src/main/ets/test_pages/test2.ets(91:7)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test2.ets(92:9)", "entry");
            Image.width('100%');
            Image.height('100%');
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/test_pages/test2.ets(93:9)", "entry");
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/test_pages/test2.ets(94:11)", "entry");
            Row.width('100%');
            Row.height('10%');
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('              马踏棋盘');
            Text.debugLine("entry/src/main/ets/test_pages/test2.ets(95:13)", "entry");
            Text.fontColor(Color.Black);
            Text.fontSize(28);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/test_pages/test2.ets(97:11)", "entry");
            Grid.columnsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            Grid.rowsTemplate('1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
            Grid.columnsGap(1);
            Grid.rowsGap(1);
            Grid.width('95%');
            Grid.backgroundColor(Color.White);
            Grid.height(400);
            Grid.margin({ top: '50.00vp', right: '0.00vp', bottom: '40.00vp', left: '0.00vp' });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/test_pages/test2.ets(99:15)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item == 0) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/test2.ets(101:19)", "entry");
                                        Text.fontSize(30);
                                        Text.backgroundColor(Color.White);
                                        Text.width(20);
                                        Text.height(20);
                                        Text.textAlign(TextAlign.Center);
                                    }, Text);
                                    Text.pop();
                                });
                            }
                            else if (item == 1) {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Text.create('');
                                        Text.debugLine("entry/src/main/ets/test_pages/test2.ets(108:19)", "entry");
                                        Text.fontSize(30);
                                        Text.backgroundColor('#8a000000');
                                        Text.width(20);
                                        Text.height(20);
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
            Image.create({ "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.myapplication2", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/test_pages/test2.ets(126:11)", "entry");
            Image.height(40);
            Image.width(30);
            Image.fillColor(Color.Orange);
            Image.position({
                x: this.peoplex,
                y: this.peopley
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('开始');
            Button.debugLine("entry/src/main/ets/test_pages/test2.ets(131:11)", "entry");
            Button.backgroundColor('#cccdbc8d');
            Button.fontSize(20);
            Button.onClick(() => {
                this.solveKnightTour();
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
registerNamedRoute(() => new UI_test1(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "test_pages/test2", pageFullPath: "entry/src/main/ets/test_pages/test2", integratedHsp: "false" });
