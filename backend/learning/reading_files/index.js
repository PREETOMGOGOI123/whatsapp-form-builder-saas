import  {promises as fs} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const filePath = path.join( __dirname, "quotes.txt")

async function run(){
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
        const quotes = data.split('\n').filter(quote => quote !== "")
        const updatedQuotes = quotes.map(quote=>{
            if(quote.trim() === "Edited Line"){
                return "Newly Edited Line"
            }
            return quote;
        })
        const updatedText = updatedQuotes.join("\n")
        await fs.writeFile(filePath, updatedText)

        const textToAppend = "\nThis is the first entered line.\nThis is the second entered line.";
        await fs.writeFile(filePath, textToAppend, { flag: "a" });

        console.log("Lines appended successfully.");
    }catch(err){
        console.error(err)
    }
}

run()

// fs.readFile(filePath, 'utf8', (err, data)=>{
//     if(err){
//         console.error("Error reading file: ", err)
//         return
//     }
//
//     const quotes = data.split('\n').filter(quote => quote.trim() !== "")
//
//     let updatedQuotes = quotes.map(quote=>{
//         if(quote.trim() === "Newly Edited Line"){
//             return "Edited Line"
//         }return quote
//     })
//
//     const updatedText = updatedQuotes.join("\n")
//
//     fs.writeFile(filePath, updatedText,err => {
//         if (err) {
//             console.error("Error writing file:", err);
//             return;
//         }
//         console.log("Line edited successfully!");
//     });
//
//     const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//
//     console.log("✨ Quote of the Day:");
//     console.log(randomQuote);
// })
//
// const text = "\nThis is the first entered line.\nThis is the second entered line.";
//
// fs.writeFile(filePath, text, {flag:"a"}, (err) => {
//     if (err) throw err;
//     console.log("File written successfully!");
// });

