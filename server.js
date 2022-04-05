const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const User = require('./routes/userRoute')
const Post = require('./routes/postRoute')
const Comment = require('./routes/commentRoute')
const cors = require('cors')
//Set up mongoose connection
var mongoDB = process.env.MONGO_DB_URL;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express()
const port = 5000

//setting up middlewares
app.use(cors())
app.use(express.json());
app.use('/users',User)
app.use('/posts',Post)
app.use('/comments',Comment)


app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})




































// newPost.save((err,result)=>{
//   if(err)
//   {
//     console.log(err)
//   }
//   else{
//     console.log(result)
//   }
// })
// async function listGames() {
//   const games = await Post.find()
//       .populate('author')
//       // .select('title');
//   console.log(games);
// }
// listGames()
// const EventEmitter = require('events')

// // const eventEmitter = new EventEmitter()
// // eventEmitter.on('click', () => {
// //     console.log('started')
// //   })
// //   eventEmitter.emit('click')


// //application level middleware

// // app.use((req, res, next) => {
// //     console.log('Time:', Date.now())
// //     next()
// //   })

// // app.get('/', (req, res) => {
// //     console.log('first')
// //   res.send('Hello World!')
// // })
// // app.get('/user/:id', (req, res, next) => {
// //     console.log('ID:', req.params.id)
// //     next()
// //   }, (req, res, next) => {
// //       console.log('here')
// //     res.send('User Info')
// //   })

// // // check() is a middleware used to validate
// // // the incoming data as per the fields
// // app.post('/saveData', [
// //     check('email', 'Email length should be 10 to 30 characters')
// //                     .isEmail().isLength({ min: 3, max: 30 }),
// //     check('password', 'Password length should be 8 to 10 characters')
// //                     .isLength({ min: 3, max: 10 })
// // ], (req, res) => {
 
// //     // validationResult function checks whether
// //     // any occurs or not and return an object
// //     const errors = validationResult(req);
 
// //     // If some error occurs, then this
// //     // block of code will run
// //     if (!errors.isEmpty()) {
// //         res.json(errors)
// //     }
 
// //     // If no error occurs, then this
// //     // block of code will run
// //     else {
// //         res.send("Successfully validated")
// //     }
// // });

// //producer
// const queue = new Bull("myQueue");

// const main = async () => {
//   await queue.add({ name: "John", age: 30 });
// };

// queue.process((job, done) => {
//   console.log(job.data);
//   done();
// });

// main().catch(console.error);
// queue.on('completed', job => {
//     console.log(`Job with id ${job.id} has been completed`);
//   })
// // const doSomething=(data)=>
// // {
// //     console.log('data')
// // }