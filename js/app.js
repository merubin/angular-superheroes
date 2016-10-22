superheroPhonebook = [
  { name: 'Spider-Man', affiliation : "Marvel", phoneNumber: 9159687825, photo_url: "images/Spider-Man.png"},
  { name: 'Superman', affiliation : "DC", phoneNumber: 5309384645, photo_url: "images/Superman.jpg"},
  { name: 'Atlas', affiliation : "Lone Star", phoneNumber: 8124242222, photo_url: "images/atlas.jpg"},
  { name: 'Blacklight', affiliation : "Image", phoneNumber: 8124242222, photo_url: "images/blacklight.jpg"},
  { name: 'Wonder Woman', affiliation : "DC", phoneNumber: 2036917716, photo_url: "images/wonder-woman.jpg"}


]
//  setter
angular
.module('superherosApp', [])
.controller("superherosCtrl", [ superherosController ])

.filter("phone",function() {
   return function (phoneNumber) {
  number = String(phoneNumber);
  return("("+number.substring(0,3)+") "+number.substring(3,6)+"-"+number.substring(6,10))
}})



function superherosController () {
  this.superheros = superheroPhonebook
  this.newSuperhero={}   /* initial new todo */
  this.lastSearchTerm=""
  this.myValue=""
  this.feature_photo=superheroPhonebook[0].photo_url
  this.feature_name=superheroPhonebook[0].name
  this.addSuperhero = function () {

    this.newSuperhero={ name:this.newSuperhero.name, affiliation:this.newSuperhero.affiliation,
                     phoneNumber:this.newSuperhero.phoneNumber, photo_url:this.newSuperhero.photo_url }
    let superhero=this.newSuperhero
    this.superheros.push(superhero)
    this.newSuperhero={ name: '', affiliation: '',
                     phoneNumber:'', photo_url: '' }
  }

this.setFeaturePhoto=function(name,url){
  this.feature_photo=url
  this.feature_name=name
}

  this.searchSuperhero= function(){
   console.log('Search Pressed'+this.search)
   this.lastSearchTerm=this.search
   document.getElementById("SearchButton").value = "";
  };
}
