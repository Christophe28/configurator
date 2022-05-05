const setItems = (setCurrentTotalItems, index, value) => {
    setCurrentTotalItems(
        oldState => {
            const newState = [...oldState]
            newState[index].quantity = value
            return newState
        }
     )
}

export default setItems