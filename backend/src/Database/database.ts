import mongoose from "mongoose";
export default class DB {
    constructor(db: string){
        mongoose
        .connect(db, { useNewUrlParser: true })
        .then(() => {
          return console.log(`Successfully connected to ${db}`);
        })
        .catch(error => {
          console.log("Error connecting to database: ", error);
          return process.exit(1);
        });     
    }
}

