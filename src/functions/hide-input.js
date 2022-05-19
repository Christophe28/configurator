const hideInput = (myState, setVisibility) => {
    if(myState === "") {
        setVisibility(false);
    }
}

export default hideInput;