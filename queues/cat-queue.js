'use strict';

const Queue = require('./queue');

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
    imageURL:'http://catmylove.com/wp-content/uploads/2015/12/old_cat.jpeg', 
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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

const catQueue = new Queue();

for (let i = 0; i < cats.length; i++) {
  catQueue.enqueue(cats[i]);
}

module.exports = catQueue;