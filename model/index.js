const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstName: {
    type: String
  },
  img: {type: String},
  review: {
      type: String
    },
    date: {type: Date}

})

const users = mongoose.model('users', userSchema);

module.exports = {users};

//Create users

// for (let i = 0; i < 33; i++) {
//   users.create({firstName: faker.name.firstName(), review: faker.lorem.sentences(2), img: faker.image.avatar(), date: faker.date.between("2017-03-17", "2018-07-25")},
//   (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data);
//     }
//   })
// }

// console.log(faker.name.firstName());
// console.log(faker.lorem.sentences(2));
// console.log(faker.image.avatar());
// console.log(moment(faker.date.between("03-17-2017", "07-25-2018")).format("MMMM D YYYY"));