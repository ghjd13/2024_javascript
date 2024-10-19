// const first=prompt("첫번째 숫자");
// const second=prompt("두번째 숫자");
// console.log(Number(first)+Number(second));

// const age=prompt("나이");
// Number(age);
// console.log(`태어난 년도 ${2025-age}`)

const side=Number(prompt("한변의 길이는?"));
const square=side*side;

console.log(`정사각형의 넓이: ${square}`);

const base=Number(prompt("밑변의 길이는?"));
const height=Number(prompt("높이의 길이는?"));
const triangle=(base*height)/2;

console.log(`삼각형의 넓이: ${triangle}`);

const radius=Number(prompt("반지름의 길이는?"));
const pie = 3.141592;
const circleArea=2*pie*(radius*radius);
const circlePeri=2*radius*pie;

console.log(`원의 넓이: ${circleArea}`);
console.log(`원의 둘레: ${circlePeri}`);

const exchange=0.11;
const won=Number(prompt("교환하고 싶은 원화는 얼마?"));
const yen = won*exchange;

console.log(`총 ${yen}￥이 교환되었습니다.`);