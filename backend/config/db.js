const mongoose= require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {

    try {
        const dbConnect = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ugryv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        )

        console.log("Conectou ao Banco de Dados")

        return dbConnect
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn