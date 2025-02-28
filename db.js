import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

export const getUser = async (username) => {
    try {
        const {data, error} = await supabase
            .from("users")
            .select("*")
            .or(`username.eq.${username}, email.eq.${username}`)

        if (error) {
            console.log("Error fetching data: " + error)
        }

        if (data.length > 0) {
            return data;
        } else {
            console.log("No user found with that username or email")
            return false;
        }

    } catch (err) {
        console.log("Error fetching data: " + err)
    }
}

export const insertUser = async (username, email, hashedPassword, salt) => {
    try {
        // Check if user is already registered
        // const usernameData = await getUser(username)
        // const emailData = await getUser(email)

        // if (usernameData != false) {
        //     console.log("Username taken.");
        //     return;
        // }

        // if (emailData != false) {
        //     console.log("Email is already registered.")
        //     return;
        // }

        // If user is not registered then insert into the table
        const {data, error} = await supabase
            .from("users")
            .insert([
                {
                    username: username,
                    email: email,
                    password_hash: hashedPassword,
                    salt: salt
                }
            ])

        if (error) {
            console.log("Error inserting data: " + JSON.stringify(error, null, 2))
        }
    } catch (err) {
        console.log("Error fetching data: " + err)
    }
}