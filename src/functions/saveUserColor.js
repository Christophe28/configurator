const saveUserColor = (e, colorName, hexadecimalColor) => {
    if(e.target.value === colorName) {
        setColor(hexadecimalColor);
    } 
}

export default saveUserColor