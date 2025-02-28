import {
    getUser,
    insertUser
} from "../db.js";
import {
    saltGenerator,
    hashPassword
} from "../hash.js"

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const data = await getUser(username);

        const userPassword = data[0].password_hash;
        const salt = data[0].salt;
        const hashedPassword = hashPassword(password, salt)

        if (userPassword === hashedPassword) {
            console.log("success")
        }
    } catch (error) {
        console.log(error)
    }

}

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = saltGenerator();
        const hashedPassword = hashPassword(password, salt);
    
        insertUser(username, email, hashedPassword, salt);
    } catch (error) {
        console.log(error)
    }
}