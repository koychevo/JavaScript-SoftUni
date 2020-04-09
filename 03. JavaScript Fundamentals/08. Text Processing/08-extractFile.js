function printFileName(text) {
    let slashIndex = text.lastIndexOf('\\');
    let dotIndex = text.lastIndexOf('.');;
    let extension = text.substring(dotIndex +  1);
    let name = text.substring(slashIndex + 1, dotIndex);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

printFileName('C:\\Internal\\training-internal\\Template.pptx');
printFileName('C:\\Projects\\Data-Structures\\LinkedList.cs');

/*
Task: Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
*/
