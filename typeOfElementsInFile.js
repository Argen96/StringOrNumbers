// in this folder we find the type of the elements inside the array

function typeOfTheContentFile(array){
  
  const numbersType = array.every((elements)=> typeof Number(elements) ==='number' && !isNaN(Number(elements)));
  const stringsType = array.every((elements)=>typeof (elements) ==='string' && isNaN(Number(elements)));

   if(numbersType) {
    const sumoftheElemnts = array.reduce((acc,values)=>acc+Number(values),0);
    return sumoftheElemnts; 
   } 
   else if(stringsType) {
    return new Set(array);
   }
   else {
    throw new Error('The elements in the file should contain only strings or numbers');
   }
}

export default typeOfTheContentFile;
