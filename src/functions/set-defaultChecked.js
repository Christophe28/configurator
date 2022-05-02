const setDefaultChecked = (setCurrentChecked, index, result) => {
    setCurrentChecked((oldCurrentChecked) => {
        const newCurrentChecked = [...oldCurrentChecked];
        newCurrentChecked[index] = result;
        return newCurrentChecked;
    })
}

export default setDefaultChecked;