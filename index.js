'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const catQueue = require('./queues/cat-queue');
const dogQueue = require('./queues/dog-queue');
const Queue = require('./queues/queue');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

const cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Grey with log hair.',
    name: 'Robert',
    sex: 'Male',
    age: 36,
    breed: 'Maine Coon',
    story: 'Very old, previous owner passed away'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'White',
    name: 'Sante',
    sex: 'Male',
    age: 5,
    breed: 'Siamese',
    story: 'Found at a walmart'
  },
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange tabby cat',
    name: 'Pia',
    sex: 'Female',
    age: 4,
    breed: 'Unkown',
    story: 'Unkown'
  },
];

const dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'Grey pitbul',
    name: 'Thanos',
    sex: 'Male',
    age: 3,
    breed: 'Pitbull',
    story: 'abandoned by owner'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'Little black dog',
    name: 'Mindy',
    sex: 'Female',
    age: 3,
    breed: 'Corgi',
    story: 'Lost in a park'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'Dirty white dog',
    name: 'Mr. Pete',
    sex: 'Male',
    age: 11,
    breed: 'Irish Pointer',
    story: 'Donated to a shelter'
  }
];


app.get('/api/cat', (req, res) => {
  const cat = catQueue.peek();
  return res.json(cat);
});

app.get('/api/dog', (req, res) => {
  const dog = dogQueue.peek();
  return res.json(dog);
});

app.delete('/api/cat', (req, res) => {
  catQueue.dequeue();
  return res.sendStatus(204);
});

app.delete('/api/dog', (req, res) => {
  dogQueue.dequeue();
  return res.sendStatus(204);
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  // dbConnect();
  runServer();
}

module.exports = { app };
