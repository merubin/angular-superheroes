superheroPhonebook = [
  { name: 'Spider-Man', affiliation : "Marvel", phoneNumber: 9159687825, photo_url: "images/Spider-Man.png"},
  { name: 'Superman', affiliation : "DC", phoneNumber: 5309384645, photo_url: "images/Superman.jpg"},
  { name: 'Atlas', affiliation : "Lone Star", phoneNumber: 8124242222, photo_url: "images/atlas.jpg"},
  { name: 'Blacklight', affiliation : "Image", phoneNumber: 8124242222, photo_url: "images/blacklight.jpg"},
  { name: 'Wonder Woman', affiliation : "DC", phoneNumber: 2036917716, photo_url: "images/wonder-woman.jpg"}

]

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
  this.newSuperhero={}
  this.editSuperhero={}
  this.editIndex=0
  this.lastSearchTerm=""
  this.myValue=""
  this.show_phonebook=true
  this.show_editphonebook=false
  this.show_addphonebook=false
  this.feature_photo=superheroPhonebook[0].photo_url
  this.feature_name=superheroPhonebook[0].name
  this.addNewSuperhero = function () {
    this.show_phonebook=false
    this.show_editphonebook=false
    this.show_addphonebook=true
  }
  this.editSuperhero = function (index) {
    this.show_phonebook=false
    this.show_editphonebook=true
    this.show_addphonebook=false
    this.editSuperhero=this.superheros[index]
    this.editIndex=index
  }
  this.toggle = function() {
            this.show_phonebook = !this.show_phonebook;
            console.log("value of show_phonebook= "+ this.show_phonebook.toString())
  }
  this.addSuperhero = function () {

    this.newSuperhero={ name:this.newSuperhero.name, affiliation:this.newSuperhero.affiliation,
                     phoneNumber:this.newSuperhero.phoneNumber, photo_url:this.newSuperhero.photo_url }
    let superhero=this.newSuperhero
    this.superheros.push(superhero)
    this.newSuperhero={ name: '', affiliation: '',
                     phoneNumber:'', photo_url: '' }
    this.show_phonebook=true
    this.show_editphonebook=false
    this.show_addphonebook=false
  }

  this.updateSuperhero = function () {
     console.log("this index=",this.editIndex)
    this.superheros[this.editIndex].name = this.editSuperhero.name
    this.superheros[this.editIndex].phoneNumber=this.editSuperhero.phoneNumber
    this.superheros[this.editIndex].affiliation=this.editSuperhero.affiliation
    this.superheros[this.editIndex].photo_url=this.editSuperhero.photo_url

    this.show_phonebook=true
    this.show_editphonebook=false
    this.show_addphonebook=false
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
