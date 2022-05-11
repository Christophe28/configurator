const reducer = (array, value, quantity, setState) => {
    array.push(value * quantity);
    const cheatReduce = array.reduce((a, b) => a + b);
    setState(cheatReduce)
}

export default reducer