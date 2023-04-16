import React from "react"

 const UpperFirstLetter = (sample= "") => {
    let words = sample.split(" ")
    
    //split = cümleleri kelimelere  birbirinden ayırma

  let newWords = []
  for(let i = 0; i<words.length; i++){
    let tempWord = "";
    for(let j = 0; j<words[i].length; j++){
        if( j === 0){
            tempWord += words[i][j].toLocaleUpperCase("tr-TR")

        }else{
            tempWord += words[i][j].toLocaleLowerCase("tr-TR")
        }
    }
    newWords.push(tempWord)
  }


  const newSample= newWords.join(" ")

  
    return newSample
}

export default UpperFirstLetter;