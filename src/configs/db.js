const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://rana53:rana_2323@cluster0.8shcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}