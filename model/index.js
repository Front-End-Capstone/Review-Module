const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const userSchema = new Schema ({
  firstName: {
    type: String
  },
  //img: {type: String},
  reviews: [{ 
    msg: {
      type: String
    },
    //data: {type: Date}
  }]
})

const users = mongoose.model('users', userSchema);

module.exports = users;