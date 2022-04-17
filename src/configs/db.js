const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://alok:alok@cluster0.fmya8.mongodb.net/apartment-manager?retryWrites=true&w=majority");
};
// export default connect