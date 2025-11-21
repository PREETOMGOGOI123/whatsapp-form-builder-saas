import {promises as fs} from 'fs'
import path from 'path'
import {fileURLToPath} from "url";
import {dirname} from "path";

const fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(fileName)
const filePath = path.join(__dirname, "quotes.json")

async function run(){
    try{
        const data = await fs.readFile(filePath,"utf-8")
        let quotes = JSON.parse(data).quotes

        let updatedQuotes = quotes.map((quote,index) =>{
            if(quote === "Newly Edited Line") return "Line to be edited"
            return quote
        })

        const newData = { quotes: updatedQuotes }

        await fs.writeFile(
            filePath,
            JSON.stringify(newData, null, 2)
        )

    }catch(err){
        console.error(err);
    }
}

run()
