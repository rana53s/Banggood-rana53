const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://ranaBanggood:rana9830@cluster0.9sm0a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}