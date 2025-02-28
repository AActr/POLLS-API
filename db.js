import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

export const getUser = async (username, email) => {
    try {
        const {data, error} = await supabase
            .from("users")
            .select("*")
            .or(`username.eq.${username}, email.eq.${email}`)

        if (error) {
            console.log("Error fetching data: " + error)
        }

        if (data.length > 0) {
            return data;
        } else {
            console.log("No user found with that username or email")
        }

    } catch (error) {
        console.log("Error fetching data: " + error)
    }
}