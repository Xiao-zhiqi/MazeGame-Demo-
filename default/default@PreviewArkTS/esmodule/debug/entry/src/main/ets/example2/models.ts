//水果排行的对象
export class FruitData {
    name: string;
    vote: string;
    id: number;
    constructor(id: number, name: string, vote: string) {
        this.id = id;
        this.name = name;
        this.vote = vote;
    }
}
