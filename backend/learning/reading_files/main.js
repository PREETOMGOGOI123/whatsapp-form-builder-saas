import {promises as fs} from 'fs'
import path from 'path'
import {fileURLToPath} from "url";
import {dirname} from "path";
import connectToDb from "./config/postgres.js";


const fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(fileName)
const filePath = path.join(__dirname, "quotes.json")

async function run(){
    const client = await connectToDb();
    try{
        const result = await client.query("SELECT * FROM  quotes");
        console.log(result.rows[5])
    }catch(err){
        console.error(err)
    }finally{
        await client.end()
    }
}

run()
