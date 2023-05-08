let aa: string = "kim";
aa = "123";

// 타입 2개이상은 유니온타입
let bb: string | number = 123;

let arr: string[] = ["kim", "choi"];
let obj: {name?: string} = {name: "kim"};

// 타입을 변수에 담아서 사용가능
type Name = string | number;
let myname: Name = 123;

//        파라미터 타입, 리턴값 타입
function fuu(x: number): number {
  return x * 2;
}
fuu(123);

// 리턴값 없어야할때 보이드타입 //?치면 옵션(들어올수도 있다)
//x?: number ===== x:number|undefind
function fuu2(x: number): void {
  x * 2;
}
// 무조건 값 넣어줘야함
fuu2(1);

// 무조건 첫째는 넘버,둘째는 불린   (tuple 타입)
type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  [key: string]: string;
};
let kim: Member2 = {name: "kim"};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// let qq: any;   아무거나 넣는거 언노운이 안전
let qq: unknown;
qq = 1;
qq = true;
qq = [];

// 유니온 타입, 언노운타입 산수안됨

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// 타입이 불확실 하다면 if문 등으로 narrowing 해줘야 조작가능
function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + 1;
  } else {
    return x + 1;
  }
}
내함수(123);

// if문 썼으면 끝까지 써야함
function 내함수2(x: number | string) {
  let arr: number[] = [];
  if (typeof x === "number") {
    arr[0] = x;
  }
  //typeof,in,instanceof 등등 현재 변수를 하나로 지정해줄수있으면 다 인정해줌
}

//타입 덮어쓰기 assertion 문법
function 내함수3(x: number | string) {
  let arr2: number[] = [];
  arr2[0] = x as number; //  무슨타입이 들어올지 확실할때만 사용,쓰지마셈,디버깅용
}

function qwer(x: (number | string)[]): number[] {
  let arr: number[] = [];
  x.forEach((i) => {
    if (typeof i === "string") {
      arr.push(parseFloat(i));
    } else {
      arr.push(i);
    }
  });
  return arr;
}
// console.log(qwer(["1", 2, "3"]));

let 철수쌤 = {subject: "math"};
let 영희쌤 = {subject: ["science", "english"]};
let 민수쌤 = {subject: ["science", "art", "korean"]};

let teacher = (x: {subject: string | string[]}): string => {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "엄슴";
  }
};
console.log(teacher(영희쌤));

// 타입변수
type Animal = string | number | undefined;
let ani: Animal = 123;

type Animal2 = {name: string; age: number};
let ani2: Animal2 = {name: "kim", age: 20};

const born = {region: "seoul"};
born.region = "busan"; //가능

//TS 에서는 오브젝트 안의 내용도 고정가능
type FriendType = {readonly name: string}; //읽기전용
const friend: FriendType = {
  name: "kim",
};
// friend.name = 'park' 에디터에서만 에러내줌

// 타입 합치기
type A = string;
type B = number;
type C = A | B;

type PostionX = {x: number; y?: string};
type PostionY = {y: number};
type New = PostionX & PostionY;

//let aqw: New = {x: 123, y: '123'};
//y에 둘다 안됨

// 리터럴 타입 적은값만 들어올수있음
let 리터럴: 123;
let 리터럴2: "가나다" | "마바사";
리터럴2 = "가나다";

function rock(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["바위"];
}

let 자료 = {
  name: "kim",
} as const; //타입지정을 리터럴 타입처럼 해줌(밸류값을 타입으로 지정해줌),모든 속성에 readonly부여해줌

function myfu(a: "kim") {}
myfu(자료.name);

// 함수 타입지정
type Fu = (a: string) => number;
type Fu2 = (a: number) => number;

let myfu2: Fu = (a) => 1;
myfu2("aa");

type Member1 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let mem: Member1 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("hi");
  },
};
mem.plusOne(1);

type Cut = (a: string) => string;
let cutZero: Cut = (a) => {
  if (a.slice(0, 1) === "0") {
    a = a.slice(1, a.length);
  }
  console.log(a);
  return a;
};
cutZero("0123123");

type Dash = (a: string) => number;
let removeDash: Dash = (a) => {
  return parseInt(a.replace(/-/g, ""));
};
console.log(removeDash("12-23-123"));

type Cutdash = (a: string, b: Cut, c: Dash) => number;

let cutdash: Cutdash = (a, b, c) => {
  return c(b(a));
};
console.log(cutdash("010-1111-2222", cutZero, removeDash));

// HTML 조작
const $title = document.querySelector("#title"); //as Element
// if ($title !== null) {
//   $title.innerHTML = '반가워요'
// // }
// if ($title?.innerHTML) {
//   $title.innerHTML = '반가워요'
// }
if ($title instanceof Element) {
  $title.innerHTML = "반가워요";
}

const $link = document.querySelectorAll(".link");
$link.forEach((e) => {
  if (e instanceof HTMLAnchorElement) e.href = "https://kakao.com";
});

const $button = document.querySelector("#button");
$button?.addEventListener("click", () => {});

class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  pfu(a: string) {
    console.log("hi" + a);
  }
}
let person1 = new Person("choi");
let person2 = new Person("park");
person1.pfu("zzzzzz");
console.log(person1);
console.log(person2);
console.log("-----------------------------");

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
console.log("-----------------------------");

class Word {
  num;
  str;
  constructor(...param) {
    let numarr: number[] = [];
    let strarr: string[] = [];
    param.forEach((x) => {
      if (typeof x === "number") {
        numarr.push(x);
      } else {
        strarr.push(x);
      }
    });
    this.num = numarr;
    this.str = strarr;
  }
}

let obj1 = new Word("kim", 3, 5, "park");
console.log(obj1);
console.log("-----------------------------");

//type Squre = {color: string; width: number};
interface Squre {
  color: string;
  width: number;
}
let squre: Squre = {color: "red", width: 100};

//장점 extends로 복사가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let student1: Student = {name: "kim"};
let teacher1: Teacher = {name: "kim", age: 20};

//타입,인터페이스도 합체가능
type Ani = {name: string};
type Cat = {age: number} & Ani;

let cat = {name: "navi", age: 11};

// 인터페이스는 중복선언 가능, 타입은 불가능

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Cart {
  product: string;
  price: number;
}
interface Cart2 extends Cart {
  card?: boolean;
}

let 장바구니: Cart2[] = [
  {product: "삼다수", price: 800},
  {product: "청소기", price: 7000, card: false},
];

// ---------------------------------

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let sansu: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
console.log(sansu.plus(3, 5));

// ---------------------------------------------------
//rest 파라미터,여러개 넣을수 있음,맨뒤에 써야함,어레이 타입써야함
function rest(...a: number[]) {
  console.log(a);
}
rest(1, 3, 4, 5, 6, 5);

//destructuring
let [변수1, 변수2] = ["hi", 100];
console.log(변수1); //hi

// 타입 생략가능
let {student, age: age} = {student: true, age: 20};
let desobj = {student: true, age: 20};
function des({student, age}: {student: boolean; age: number}) {
  console.log(student, age);
}
// des(desobj.student,desobj.age)
des(desobj); //teue,20

// --------------------------------
function maxnum(...a: number[]) {
  let result = 0;
  a.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}
console.log(maxnum(1, 3, 4, 7));

let myobj = ({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) => {
  console.log(user, comment, admin);
};
myobj({user: "kim", comment: [3, 5, 4], admin: false});

let myarr = ([a, b, c]: (number | string | boolean)[]) => {
  console.log(a, b, c);
};
myarr([40, "wine", false]);

// ----------------------------------------

function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log(strs);
  }
}

//속성명 in 오브젝트 자료 ,서로 배타적일때 가능
type Fish = {swim: string};
type Bird = {fly: string};
function naanimal(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

//오브젝트 instanceof 부모class

//리터럴 타입(고정된값) 부여하면 구분쉬워짐
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function bikeOrCar(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}

//-----------------------
// function 함수(): never{}
//끝나지 않는 함수에만 가능
//대부분 안씀, 코드 이상하게짜면 출몰

class User2 {
  //퍼블릭은 기본 부착,있으면 자식들이 사용,수정가능/생략가능
  //public name;

  //private 붙으면 클래스 안에서만 수정,이용가능
  name: string;
  private familyname: string = "kim";
  constructor(a) {
    this.name = a + this.familyname;
  }
  //private 변경하려면 미리 함수 만들어 두고 사용
  이름변경함수() {
    this.familyname = "park";
  }
}
let user1 = new User2("minsu");
user1.이름변경함수(); //패밀리네임 변경
user1.name;

class Person0 {
  constructor(public name: string) {
    // 이자리에 들어온 파라미터는 자식의 name속성에 기입해 주세요
  }
}
let son = new Person0("kim");
son.name; //kim

// ------------------------
//클래스 복사
class Q {
  //private랑 비슷함, protected쓰면 extands로 복사된 클래스에서 사용가능
  protected x = 10;
}
class NewQ extends Q {
  doThis() {
    this.x = 20;
  }
}
let q = new NewQ();

class W {
  //static 키워드 쓰면 부모클래스에 직접부여됨
  // private,public,protected 랑 같이 사용가능
  static x = 10;
  y = 20;
}
let ww = new W();
//console.log(ww.x) 에러
console.log(W.x);
//console.log(W.y) 불가능

class User0 {
  static skill = "js";
  intro = User0.skill + "전문가";
}
let chul = new User0();
console.log(chul); //js
User0.skill = "ts";
let chul2 = new User0();
console.log(chul2); //ts

// -------------------------
console.log("---------------------");

class User3 {
  private static x = 10;
  public static y = 20;
  static addOne(a: number) {
    User3.x + a;
  }
  static printX() {
    console.log(User3.x);
  }
}
User3.addOne(3); //이렇게 하면 x가 3 더해져야함
User3.addOne(4); //이렇게 하면 x가 4 더해져야함
User3.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

// ----------------------------

class Square {
  box;
  width;
  height;
  color;
  constructor(a, b, c) {
    this.width = a;
    this.height = b;
    this.color = c;
  }
  draw() {
    this.box = document.createElement("div");
    this.box.style.width = `${this.width}px`;
    this.box.style.height = `${this.height}px`;
    this.box.style.backgroundColor = this.color;
    this.box.style.position = "absolute";
    this.box.style.top = `${Math.random() * 370}px`;
    this.box.style.left = `${Math.random() * 370}px`;
    document.body.appendChild(this.box);
  }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();

// -------------------
//gemeric 함수에 타입파라미터 집어넣울수 있음
function fuu0<MyType>(x: MyType[]): MyType {
  return x[0];
}
let a = fuu0<number>([4, 2]);
let a2 = fuu0<string>(["4", "2"]);

function fu1<MyType2 extends number>(x: MyType2) {
  return x - 1;
}
let a3 = fu1<number>(100);
// let a4 = fu1<string>(100)    err

// -----------------------------------------

function len<Len extends string | string[]>(x: Len) {
  return console.log(x.length);
}
len<string>("hello");
len<string[]>(["kim", "park"]);

// -------------------------------

interface Animal3 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function jsonAnimal<JsonAnimal>(x: string): JsonAnimal {
  return JSON.parse(x);
}

console.log(jsonAnimal<Animal3>(data));

// -------------------------------

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let aa1 = new Person2<string>("어쩌구");
aa1.name;

//------------------------------
//튜플타입,자료위치까지 타입지정
let 멍멍이: [string, boolean?] = ["dog", true];

let arr3: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

function hw(...a: [string, boolean, ...(number | string)[]]) {}
hw("a", true, 6, 3, "1", 4);

function hw2(...a: (string | number)[]): [string[], number[]] {
  let str: string[] = [];
  let num: number[] = [];
  a.forEach((e) => {
    if (typeof e === "string") {
      str.push(e);
    } else {
      num.push(e);
    }
  });
  return [str, num];
}
console.log(hw2("b", 5, 6, 7, "a"));

console.log("===============================");
// -------------------------------------
//js파일에서 가져오기
declare let ppp: number;
console.log(ppp + 1); //되긴함

//ts에서 가져오기 ,그냥써도댐,ts변수는 전부 전역변수
let q2: Dog22 = "kim";

// --------------------------

//모든 문자로 된 속성 인덱스시그니처
interface StringOnly {
  // age:number, 금지
  [key: string]: string;
}

let obj11: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

interface Obj22 {
  "font-size": number;
  [key: string]: number | Obj22;
}

let obj22 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
// --------------------------
interface Person11 {
  age: number;
  name: string;
}
//인터페이스의 키값을 유니온 타입으로 반환
type PersonKeys = keyof Person11; //'age'|'name'
let zz: PersonKeys = "name";

// 타입 변환기
type Car11 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType111> = {
  [key in keyof MyType111]: string;
};

type NewType = TypeChanger<Car11>;

// --------------------------
type Age11<T> = T extends string ? string : unknown;
let ss: Age11<string>;
let ss2: Age11<number>;

type First<T> = T extends any[] ? T[0] : any;

let dd: First<string[]>;
let dd2: First<number>;
// -------------------------------
//infer 왼쪽에서 같은위치 타입 뽑아옴
type Age22<T> = T extends (infer R)[] ? R : unknown;
type a = Age22<string[]>;
// -------------------------------
type Age33<T> = T extends [string, ...any] ? string : unknown;

let age12: Age33<[string, number]>;
let age23: Age33<[boolean, number]>;

type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;

type xx = 타입뽑기<(x: number) => void>; //이러면 number가 이 자리에 남음
type xx2 = 타입뽑기<(x: string) => void>; //이러면 string이 이 자리에 남음
