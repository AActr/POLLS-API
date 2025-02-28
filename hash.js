import crypto from "crypto";

export const saltGenerator = () => {
    return crypto.randomBytes(16).toString("hex");
}

export const hashPassword = (password, salt) => {
    try {
        const hash = crypto.createHash("sha256");
        hash.update(salt + password);
        const hashedPassword = hash.digest("hex");

        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}