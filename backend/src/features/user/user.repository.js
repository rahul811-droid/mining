import { ObjectId } from "mongodb";
import { getDB } from "../../database/mongodb.js";

class userRepository{
    constructor(){
        this.collection = "user"
    }

    async add(newUser){
        try{
            // 1.get the db 
            const db = getDB();
            const collection = "user"
        }
    }
}