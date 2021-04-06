

  


function anagram(test, original){
    
    //buat mecah dari string ke array biar bisa di sorting
    let usingObjectAssign = Object.assign([], test.toLowerCase());
    let usingObjectAssign2 = Object.assign([], original.toLowerCase());

    //buat di sorting array
    let sorted1 = usingObjectAssign.sort();
    let sorted2 = usingObjectAssign2.sort();

    //di join lagi array ke string
    let joinArray1 = sorted1.join('');
    let joinArray2 = sorted2.join('');

    //dicompare
    return joinArray1 == joinArray2;
   
}

// console.log(usingObjectAssign);

console.log(anagram("yogA", "aGoy"));

// function isAnagram(stringA, stringB) {
//     // Sanitizing
//     stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
//     stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");
  
//     // sorting
//     const stringASorted = stringA.split("").sort().join("");
//     const stringBSorted = stringB.split("").sort().join("");
  
//     return stringASorted === stringBSorted;
//   }

//   console.log(isAnagram("Agoy", "yoGa"));