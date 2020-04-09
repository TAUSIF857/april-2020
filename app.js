const calculator={
    add:(a,b,c)=>{
        return a+b+c;
    },
    sub:(a,b)=>{
        return a-b;
    },
    multiply:(a,b)=>{
        return a*b;
    },
    divide:(a,b)=>{
        return a/b;
    }
}
console.log(calculator.add(10,10,10));
console.log(calculator.sub(10,10));
console.log(calculator.multiply(10,10));
console.log(calculator.divide(10,10));
