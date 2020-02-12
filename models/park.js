const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
};

Park.prototype.addDino = function(dino){
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function(dino){
  let pos = this.dinosaurs.indexOf('dino');
  this.dinosaurs.splice(pos, 1);
};

Park.prototype.findMostAttractiveDino = function () {
  arrayOfVisitors = []
  for (dino of this.dinosaurs) {
    arrayOfVisitors.push(dino.guestsAttractedPerDay)
  };
  max = Math.max(...arrayOfVisitors)
  for (dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay == max) {
      return dino.species;
    };
  };
};

Park.prototype.findAllDinosBySpecies = function (species) {
allBySpecies = [];
for (dino of this.dinosaurs) {
  if (dino.species === species) {
    allBySpecies.push(dino);
  };
};
return allBySpecies
};


Park.prototype.totalNumberOfVisitors = function (){
total = 0
for (dino of this.dinosaurs) {
  total += dino.guestsAttractedPerDay
};
return total;
};


Park.prototype.totalNumberOfVisitorsPerYear = function (){
return this.totalNumberOfVisitors() * 365;
};

Park.prototype.totalRevenue = function (){
return this.totalNumberOfVisitorsPerYear() * this.price;
};

//Extensions
Park.prototype.removeDinosBySpecies = function (species){
allBySpecies = [];
for (dino of this.dinosaurs) {
  if (dino.species === species) {
    allBySpecies.push(dino);
  };
};
pos = this.dinosaurs.species.sort.indexOf(species);
return this.dinosaurs.species.sort.splice(pos, allBySpecies.length);
};

module.exports = Park;
