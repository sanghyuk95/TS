declare let aa: string;
declare let bb: string | number;
declare let arr: string[];
declare let obj: {
    name?: string;
};
type Name = string | number;
declare let myname: Name;
declare function fuu(x: number): number;
declare function fuu2(x: number): void;
type Member = [number, boolean];
declare let john: Member;
type Member2 = {
    [key: string]: string;
};
declare let kim: Member2;
declare class User {
    name: string;
    constructor(name: string);
}
declare let qq: unknown;
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
};
declare function 내함수(x: number | string): string | number;
declare function 내함수2(x: number | string): void;
declare function 내함수3(x: number | string): void;
declare function qwer(x: (number | string)[]): number[];
declare let 철수쌤: {
    subject: string;
};
declare let 영희쌤: {
    subject: string[];
};
declare let 민수쌤: {
    subject: string[];
};
declare let teacher: (x: {
    subject: string | string[];
}) => string;
type Animal = string | number | undefined;
declare let ani: Animal;
type Animal2 = {
    name: string;
    age: number;
};
declare let ani2: Animal2;
declare const born: {
    region: string;
};
type FriendType = {
    readonly name: string;
};
declare const friend: FriendType;
type A = string;
type B = number;
type C = A | B;
type PostionX = {
    x: number;
    y?: string;
};
type PostionY = {
    y: number;
};
type New = PostionX & PostionY;
declare let 리터럴: 123;
declare let 리터럴2: "가나다" | "마바사";
declare function rock(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
declare let 자료: {
    readonly name: "kim";
};
declare function myfu(a: "kim"): void;
type Fu = (a: string) => number;
type Fu2 = (a: number) => number;
declare let myfu2: Fu;
type Member1 = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let mem: Member1;
type Cut = (a: string) => string;
declare let cutZero: Cut;
type Dash = (a: string) => number;
declare let removeDash: Dash;
type Cutdash = (a: string, b: Cut, c: Dash) => number;
declare let cutdash: Cutdash;
declare const $title: Element | null;
declare const $link: NodeListOf<Element>;
declare const $button: Element | null;
declare class Person {
    name: string;
    constructor(a: string);
    pfu(a: string): void;
}
declare let person1: Person;
declare let person2: Person;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: any;
    str: any;
    constructor(...param: any[]);
}
declare let obj1: Word;
interface Squre {
    color: string;
    width: number;
}
declare let squre: Squre;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let student1: Student;
declare let teacher1: Teacher;
type Ani = {
    name: string;
};
type Cat = {
    age: number;
} & Ani;
declare let cat: {
    name: string;
    age: number;
};
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
interface Cart2 extends Cart {
    card?: boolean;
}
declare let 장바구니: Cart2[];
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let sansu: MathObj;
declare function rest(...a: number[]): void;
declare let 변수1: string, 변수2: number;
declare let student: boolean, age: number;
declare let desobj: {
    student: boolean;
    age: number;
};
declare function des({ student, age }: {
    student: boolean;
    age: number;
}): void;
declare function maxnum(...a: number[]): number;
declare let myobj: ({ user, comment, admin, }: {
    user: string;
    comment: number[];
    admin: boolean;
}) => void;
declare let myarr: ([a, b, c]: (number | string | boolean)[]) => void;
declare function printAll(strs: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function naanimal(animal: Fish | Bird): string;
type Car2 = {
    wheel: "4개";
    color: string;
};
type Bike = {
    wheel: "2개";
    color: string;
};
declare function bikeOrCar(x: Car2 | Bike): void;
declare class User2 {
    name: string;
    private familyname;
    constructor(a: any);
    이름변경함수(): void;
}
declare let user1: User2;
declare class Person0 {
    name: string;
    constructor(name: string);
}
declare let son: Person0;
declare class Q {
    protected x: number;
}
declare class NewQ extends Q {
    doThis(): void;
}
declare let q: NewQ;
declare class W {
    static x: number;
    y: number;
}
declare let ww: W;
declare class User0 {
    static skill: string;
    intro: string;
}
declare let chul: User0;
declare let chul2: User0;
declare class User3 {
    private static x;
    static y: number;
    static addOne(a: number): void;
    static printX(): void;
}
declare class Square {
    box: any;
    width: any;
    height: any;
    color: any;
    constructor(a: any, b: any, c: any);
    draw(): void;
}
declare let 네모: Square;
declare function fuu0<MyType>(x: MyType[]): MyType;
declare let a: number;
declare let a2: string;
declare function fu1<MyType2 extends number>(x: MyType2): number;
declare let a3: number;
declare function len<Len extends string | string[]>(x: Len): void;
interface Animal3 {
    name: string;
    age: number;
}
declare let data: string;
declare function jsonAnimal<JsonAnimal>(x: string): JsonAnimal;
declare class Person2<T> {
    name: any;
    constructor(a: T);
}
declare let aa1: Person2<string>;
declare let 멍멍이: [string, boolean?];
declare let arr3: [string, number, ...boolean[]];
declare function hw(...a: [string, boolean, ...(number | string)[]]): void;
declare function hw2(...a: (string | number)[]): [string[], number[]];
declare let ppp: number;
declare let q2: Dog22;
interface StringOnly {
    [key: string]: string;
}
declare let obj11: StringOnly;
interface Obj22 {
    "font-size": number;
    [key: string]: number | Obj22;
}
declare let obj22: {
    "font-size": number;
    secondary: {
        "font-size": number;
        third: {
            "font-size": number;
        };
    };
};
interface Person11 {
    age: number;
    name: string;
}
type PersonKeys = keyof Person11;
declare let zz: PersonKeys;
type Car11 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType111> = {
    [key in keyof MyType111]: string;
};
type NewType = TypeChanger<Car11>;
type Age11<T> = T extends string ? string : unknown;
declare let ss: Age11<string>;
declare let ss2: Age11<number>;
type First<T> = T extends any[] ? T[0] : any;
declare let dd: First<string[]>;
declare let dd2: First<number>;
type Age22<T> = T extends (infer R)[] ? R : unknown;
type a = Age22<string[]>;
type Age33<T> = T extends [string, ...any] ? string : unknown;
declare let age12: Age33<[string, number]>;
declare let age23: Age33<[boolean, number]>;
type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;
type xx = 타입뽑기<(x: number) => void>;
type xx2 = 타입뽑기<(x: string) => void>;
