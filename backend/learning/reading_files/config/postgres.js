import {promises as fs } from 'fs'
import pkg from 'pg'

const {Client} = pkg

async function connectToDb(){
    try {


        const client = await new Client({
            user: "preetomgogoi",
            host: "localhost",
            database: "postgres",
            password: "",
            port: 5432,
        })
        await client.connect()
        console.log("client connected to database :", client.database)
        return client
    }catch(err){
        console.error(err)
    }
    }

export default connectToDb