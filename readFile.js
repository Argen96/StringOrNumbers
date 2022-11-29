import fsp from 'fs/promises';
// In this folder we turn the file into the array
async function readContentOfTheFile(file){
const fileImportedContent = await fsp.readFile(file,'utf-8');
const ContentInArray=fileImportedContent.split('\r\n');
return ContentInArray;
}

export default readContentOfTheFile;
