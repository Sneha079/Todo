const { default: mongoose, model } = require("mongoose");

const TodoSchema = mongoose.Schema({

    id: {
        type: String,
        // required: true,
        unique: [true, "id must be unique"],
    },
    task: {
        type: String,
        required: [true, "no task found"],

    }

})


const Todo = mongoose.model('User', TodoSchema);

module.exports = Todo;