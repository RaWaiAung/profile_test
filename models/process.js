const moongoose = require("mongoose");
const processSchema = new moongoose.Schema({
    processTitle: {
        type: String,
        required: true
    },
    subName: {
        type: String,
        required: true
    },
    subVersion: {
        type: String,
        required: true
    }
})

module.exports = moongoose.model('processes', processSchema);
 