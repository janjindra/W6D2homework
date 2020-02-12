const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('brachiosaurus', 'herbivore', 100);
    dino3 = new Dinosaur('dilophosaurus', 'omnivore', 90);
    dino4 = new Dinosaur('t-rex', 'herbivore', 40);
  })

  it('should have a name', function(){
    const actual = park.name;
    const expected = 'Jurassic Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    const expected = 20;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    const actual = park.dinosaurs;
    const expected = [];
    assert.strictEqual(actual, expected);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino1);
    const actual = park.dinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.findMostAttractiveDino();
    const expected = 'brachiosaurus';
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.findAllDinosBySpecies('t-rex').length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.totalNumberOfVisitors();
    const expected = 280;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.totalNumberOfVisitorsPerYear();
    const expected = (102200);
    assert.strictEqual(actual, expected);
  });

    it('should be able to calculate total revenue for one year', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.addDino(dino4);
      const actual = park.totalRevenue();
      const expected = (2044000);
      assert.strictEqual(actual, expected);
    });

    // it('Remove all dinosaurs of a particular species', function(){
    //   park.addDino(dino1);
    //   park.addDino(dino2);
    //   park.addDino(dino3);
    //   park.addDino(dino4);
    //   park.removeDinosBySpecies('t-rex');
    //   const actual = park.dinosaurs.length;
    //   const expected = 1;
    //   assert.strictEqual(actual, expected);
    // });
});
