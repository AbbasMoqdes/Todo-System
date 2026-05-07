const mongoose = require("mongoose")

const DBconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todoapp")
        console.log("DB Connected Succesfully")
    } catch (error) {
        console.error(error)
        console.log(("Error in DB"))
        process.exit(1)
    }
}

module.exports = DBconnect