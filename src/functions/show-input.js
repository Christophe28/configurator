const showInput = (myState, nameInput) => {
    let valueInput = false;

    if(Array.isArray(myState) === true) {
        myState.length !== 0 ? valueInput = nameInput : "";
    }
    else {
        myState !== "" ? valueInput = nameInput : "";
    }
    return valueInput
}

export default showInput