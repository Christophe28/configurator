const conditionForGoodAnim = (myArray, index) => {
    for(i = 0; i < myArray.length; i++) {
        if(index === i){
            // return leave
            console.log("C'est l'index ", index , "mon tableau", myArray);
        }
        if(index === i + 1) {
            // return welcom
            console.log("C'est l'index ", index , "mon tableau", myArray);
        }
    }
}

export default conditionForGoodAnim