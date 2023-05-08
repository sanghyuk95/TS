var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var aa = "kim";
aa = "123";
// 타입 2개이상은 유니온타입
var bb = 123;
var arr = ["kim", "choi"];
var obj = { name: "kim" };
var myname = 123;
//        파라미터 타입, 리턴값 타입
function fuu(x) {
    return x * 2;
}
fuu(123);
// 리턴값 없어야할때 보이드타입 //?치면 옵션(들어올수도 있다)
//x?: number ===== x:number|undefind
function fuu2(x) {
    x * 2;
}
// 무조건 값 넣어줘야함
fuu2(1);
var john = [123, true];
var kim = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// let qq: any;   아무거나 넣는거 언노운이 안전
var qq;
qq = 1;
qq = true;
qq = [];
// 유니온 타입, 언노운타입 산수안됨
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// 타입이 불확실 하다면 if문 등으로 narrowing 해줘야 조작가능
function 내함수(x) {
    if (typeof x === "string") {
        return x + 1;
    }
    else {
        return x + 1;
    }
}
내함수(123);
// if문 썼으면 끝까지 써야함
function 내함수2(x) {
    var arr = [];
    if (typeof x === "number") {
        arr[0] = x;
    }
    //typeof,in,instanceof 등등 현재 변수를 하나로 지정해줄수있으면 다 인정해줌
}
//타입 덮어쓰기 assertion 문법
function 내함수3(x) {
    var arr2 = [];
    arr2[0] = x; //  무슨타입이 들어올지 확실할때만 사용,쓰지마셈,디버깅용
}
function qwer(x) {
    var arr = [];
    x.forEach(function (i) {
        if (typeof i === "string") {
            arr.push(parseFloat(i));
        }
        else {
            arr.push(i);
        }
    });
    return arr;
}
// console.log(qwer(["1", 2, "3"]));
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
var teacher = function (x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "엄슴";
    }
};
console.log(teacher(영희쌤));
var ani = 123;
var ani2 = { name: "kim", age: 20 };
var born = { region: "seoul" };
born.region = "busan"; //가능
var friend = {
    name: "kim",
};
//let aqw: New = {x: 123, y: '123'};
//y에 둘다 안됨
// 리터럴 타입 적은값만 들어올수있음
var 리터럴;
var 리터럴2;
리터럴2 = "가나다";
function rock(a) {
    return ["바위"];
}
var 자료 = {
    name: "kim",
}; //타입지정을 리터럴 타입처럼 해줌(밸류값을 타입으로 지정해줌),모든 속성에 readonly부여해줌
function myfu(a) { }
myfu(자료.name);
var myfu2 = function (a) { return 1; };
myfu2("aa");
var mem = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("hi");
    },
};
mem.plusOne(1);
var cutZero = function (a) {
    if (a.slice(0, 1) === "0") {
        a = a.slice(1, a.length);
    }
    console.log(a);
    return a;
};
cutZero("0123123");
var removeDash = function (a) {
    return parseInt(a.replace(/-/g, ""));
};
console.log(removeDash("12-23-123"));
var cutdash = function (a, b, c) {
    return c(b(a));
};
console.log(cutdash("010-1111-2222", cutZero, removeDash));
// HTML 조작
var $title = document.querySelector("#title"); //as Element
// if ($title !== null) {
//   $title.innerHTML = '반가워요'
// // }
// if ($title?.innerHTML) {
//   $title.innerHTML = '반가워요'
// }
if ($title instanceof Element) {
    $title.innerHTML = "반가워요";
}
var $link = document.querySelectorAll(".link");
$link.forEach(function (e) {
    if (e instanceof HTMLAnchorElement)
        e.href = "https://kakao.com";
});
var $button = document.querySelector("#button");
$button === null || $button === void 0 ? void 0 : $button.addEventListener("click", function () { });
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.pfu = function (a) {
        console.log("hi" + a);
    };
    return Person;
}());
var person1 = new Person("choi");
var person2 = new Person("park");
person1.pfu("zzzzzz");
console.log(person1);
console.log(person2);
console.log("-----------------------------");
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
console.log("-----------------------------");
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var numarr = [];
        var strarr = [];
        param.forEach(function (x) {
            if (typeof x === "number") {
                numarr.push(x);
            }
            else {
                strarr.push(x);
            }
        });
        this.num = numarr;
        this.str = strarr;
    }
    return Word;
}());
var obj1 = new Word("kim", 3, 5, "park");
console.log(obj1);
console.log("-----------------------------");
var squre = { color: "red", width: 100 };
var student1 = { name: "kim" };
var teacher1 = { name: "kim", age: 20 };
var cat = { name: "navi", age: 11 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "삼다수", price: 800 },
    { product: "청소기", price: 7000, card: false },
];
var sansu = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
console.log(sansu.plus(3, 5));
// ---------------------------------------------------
//rest 파라미터,여러개 넣을수 있음,맨뒤에 써야함,어레이 타입써야함
function rest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
rest(1, 3, 4, 5, 6, 5);
//destructuring
var _a = ["hi", 100], 변수1 = _a[0], 변수2 = _a[1];
console.log(변수1); //hi
// 타입 생략가능
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var desobj = { student: true, age: 20 };
function des(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
// des(desobj.student,desobj.age)
des(desobj); //teue,20
// --------------------------------
function maxnum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(maxnum(1, 3, 4, 7));
var myobj = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
};
myobj({ user: "kim", comment: [3, 5, 4], admin: false });
var myarr = function (_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
};
myarr([40, "wine", false]);
// ----------------------------------------
function printAll(strs) {
    if (strs && typeof strs === "string") {
        console.log(strs);
    }
}
function naanimal(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
function bikeOrCar(x) {
    if (x.wheel === "4개") {
        console.log("이 차는 " + x.color);
    }
    else {
        console.log("이 바이크는 " + x.color);
    }
}
//-----------------------
// function 함수(): never{}
//끝나지 않는 함수에만 가능
//대부분 안씀, 코드 이상하게짜면 출몰
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyname = "kim";
        this.name = a + this.familyname;
    }
    //private 변경하려면 미리 함수 만들어 두고 사용
    User2.prototype.이름변경함수 = function () {
        this.familyname = "park";
    };
    return User2;
}());
var user1 = new User2("minsu");
user1.이름변경함수(); //패밀리네임 변경
user1.name;
var Person0 = /** @class */ (function () {
    function Person0(name) {
        this.name = name;
        // 이자리에 들어온 파라미터는 자식의 name속성에 기입해 주세요
    }
    return Person0;
}());
var son = new Person0("kim");
son.name; //kim
// ------------------------
//클래스 복사
var Q = /** @class */ (function () {
    function Q() {
        //private랑 비슷함, protected쓰면 extands로 복사된 클래스에서 사용가능
        this.x = 10;
    }
    return Q;
}());
var NewQ = /** @class */ (function (_super) {
    __extends(NewQ, _super);
    function NewQ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewQ.prototype.doThis = function () {
        this.x = 20;
    };
    return NewQ;
}(Q));
var q = new NewQ();
var W = /** @class */ (function () {
    function W() {
        this.y = 20;
    }
    //static 키워드 쓰면 부모클래스에 직접부여됨
    // private,public,protected 랑 같이 사용가능
    W.x = 10;
    return W;
}());
var ww = new W();
//console.log(ww.x) 에러
console.log(W.x);
//console.log(W.y) 불가능
var User0 = /** @class */ (function () {
    function User0() {
        this.intro = User0.skill + "전문가";
    }
    User0.skill = "js";
    return User0;
}());
var chul = new User0();
console.log(chul); //js
User0.skill = "ts";
var chul2 = new User0();
console.log(chul2); //ts
// -------------------------
console.log("---------------------");
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.addOne = function (a) {
        User3.x + a;
    };
    User3.printX = function () {
        console.log(User3.x);
    };
    User3.x = 10;
    User3.y = 20;
    return User3;
}());
User3.addOne(3); //이렇게 하면 x가 3 더해져야함
User3.addOne(4); //이렇게 하면 x가 4 더해져야함
User3.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
// ----------------------------
var Square = /** @class */ (function () {
    function Square(a, b, c) {
        this.width = a;
        this.height = b;
        this.color = c;
    }
    Square.prototype.draw = function () {
        this.box = document.createElement("div");
        this.box.style.width = "".concat(this.width, "px");
        this.box.style.height = "".concat(this.height, "px");
        this.box.style.backgroundColor = this.color;
        this.box.style.position = "absolute";
        this.box.style.top = "".concat(Math.random() * 370, "px");
        this.box.style.left = "".concat(Math.random() * 370, "px");
        document.body.appendChild(this.box);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
// -------------------
//gemeric 함수에 타입파라미터 집어넣울수 있음
function fuu0(x) {
    return x[0];
}
var a = fuu0([4, 2]);
var a2 = fuu0(["4", "2"]);
function fu1(x) {
    return x - 1;
}
var a3 = fu1(100);
// let a4 = fu1<string>(100)    err
// -----------------------------------------
function len(x) {
    return console.log(x.length);
}
len("hello");
len(["kim", "park"]);
var data = '{"name" : "dog", "age" : 1 }';
function jsonAnimal(x) {
    return JSON.parse(x);
}
console.log(jsonAnimal(data));
// -------------------------------
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    return Person2;
}());
var aa1 = new Person2("어쩌구");
aa1.name;
//------------------------------
//튜플타입,자료위치까지 타입지정
var 멍멍이 = ["dog", true];
var arr3 = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
function hw() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
}
hw("a", true, 6, 3, "1", 4);
function hw2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var str = [];
    var num = [];
    a.forEach(function (e) {
        if (typeof e === "string") {
            str.push(e);
        }
        else {
            num.push(e);
        }
    });
    return [str, num];
}
console.log(hw2("b", 5, 6, 7, "a"));
console.log("===============================");
console.log(ppp + 1); //되긴함
//ts에서 가져오기 ,그냥써도댐,ts변수는 전부 전역변수
var q2 = "kim";
var obj11 = {
    name: "kim",
    age: "20",
    location: "seoul",
};
var obj22 = {
    "font-size": 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": 14,
        },
    },
};
var zz = "name";
var ss;
var ss2;
var dd;
var dd2;
var age12;
var age23;
