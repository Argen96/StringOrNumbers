import typeOfTheContentFile from './typeOfElementsInFile.js';
import readContentOfTheFile from './readFile.js';

const fileContent = await readContentOfTheFile('file.txt');

console.log(typeOfTheContentFile(fileContent));
