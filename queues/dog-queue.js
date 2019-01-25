'use strict';

const Queue = require('./queue');

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
  },
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
  },
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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
  },{
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

const dogQueue = new Queue();

for (let i = 0; i < dogs.length; i++) {
  dogQueue.enqueue(dogs[i]);
}

module.exports = dogQueue;

