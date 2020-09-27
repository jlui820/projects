//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';



//api config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: '1080359',
  key: 'dde365433062065ed8f7',
  secret: 'c5b63dc70bd5f96b744d',
  cluster: 'us3',
  encrypted: true,
});

// middleware

app.use(express.json());

//DB config

const connection_url =
  'mongodb+srv://admin:0VDAfA3ojw97Z73l@cluster0.m9i9z.mongodb.net/whatsapp?retryWrites=true&w=majority';
  
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => {
  console.log('db connection')

  const msgCollection 
});


//api routes
app.get('/', (req, res) => res.status(200).send('hellooooo world'));

app.get('messages/sync', (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send({data})
    }
  })
})

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
