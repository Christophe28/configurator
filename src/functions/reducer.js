const reducer = (array, value, quantity) => {
    array.push(value * quantity);
    const cheatReduce = array.reduce((a, b) => a + b);
    total = cheatReduce;
}

export default reducer