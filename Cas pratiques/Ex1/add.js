function add(a, b=2) {
    console.log('we will never see this log');
    return a + b;
}

add(2);
console.log(add);