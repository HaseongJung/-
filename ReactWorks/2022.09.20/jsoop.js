// Class definition
class Person {
    // 생성자를 통해서 멤버변수 생성하고 초기값을 설정
    constructor(name, age, point){
        this.name = name;   // 사람이름
        this.age = age;
        this.point = point;
    }
    // 멤버 함수 정의
    showMe() {
        return `Name: ${this.name}, Age: ${this.age}, Point: ${this.point}`;
    }
}

// Person 객체 생성
const person = new Person("HaSeong", 22, 15000);
person.age = 23;
const info = person.showMe();
const test = document.getElementById("test");
test.innerHTML = `<h2>${info}</h2>`;

// 클래스 상속 정의
class Man extends Person {  // (subclass)Man --> Person(Superclass)
    constructor(name, age, point, tel) {
        super(name, age, point);    // person 클래스의 생성자 호출
        this.tel = tel;
    }
    // 부모에게 받은 함수를 재정의 (overriding)
    showMe() {
        return `Name: ${this.name}, Age: ${this.age}, Point: ${this.point}, Tel: ${this.tel}`;
    }
}
const man = new Man("Tom", 21, 5000, '010-1234-5678');
test.innerHTML = `<h2>${man.showMe()}</h2>`;

// Destructuring
function myBook() {
    const book = ["Java", 12000, 8.3];
    const book2 = ["lemon publisher", "2022/11/19"];
    return [...book,...book2]   // 배열 연결
}
const book = ["Java", 12000, 8.3];
// const title = book[0];
// const price = book[1];
// const rating = book[2];

const [title, price, rating,  pub, pubdate] = myBook();    // destructuring
test.innerHTML = `<h3>${title}, ${price}, ${rating}, ${pub}, ${pubdate}</h3>`;


// 예제
class Menu {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showMe() {
        return `<li>Name: ${this.name} -- price: ${this.price}</li>`;
    }
}

const menus = [];   // 비어있는 배열
menus[0] = new Menu("Steak", 34000);
menus.push(new Menu("Pasta", 18000));
menus[menus.length] = new Menu("Pizza", 22000);
menus.push(new Menu("Salad", 15000));

let output = `<ul>`;
for (m of menus) {
    output += m.showMe();
}
output += `</ul>`

// 2차원 배열
const order = [["Steak", 3], ["Salad", 1], ["Pizza", 2]]; // 주문 받은 것
let amount = 0; // 주문 금액

for (o of order) {
    for (m of menus) {
        if (m.name == o[0]) {
            amount += m.price * o[1];
        }
    }
}
output += `<h3>주문 금액 = ${amount}</h3>`
test.innerHTML = output;