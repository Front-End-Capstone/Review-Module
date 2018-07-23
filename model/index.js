const mongoose = require('mongoose');
const faker = require('faker');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  firstName: {
    type: String
  },
  img: {type: String},
  reviews: {
      type: String
    },
    data: {type: Date}

})

const users = mongoose.model('users', userSchema);

//Create users

// for (let i = 0; i < 3; i++) {
//   users.create({firstName: faker.name.firstName(), img: faker.lorem.sentences(4), reviews: faker.image.avatar(), data: faker.date.between("2017-03-17", "2018-07-25")},
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
// console.log(faker.date.between("2017-03-17", "2018-07-25"));

module.exports = users;