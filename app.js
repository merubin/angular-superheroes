superheroPhonebook = [
  { name: 'Spider-Man', affiliation : "Marvel", phoneNumber: 9159687825, photo_url: "http://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-PNG-Pic.png"},
  { name: 'Superman', affiliation : "DC", phoneNumber: 5309384645, photo_url: "http://www.planwallpaper.com/static/images/Superman1.jpg"},
  { name: 'Atlas', affiliation : "Lone Star", phoneNumber: 8124242222, photo_url: "http://www.idwpublishing.com/wp-content/uploads/2014/08/ICO002716_21.jpg"},
  { name: 'Blacklight', affiliation : "Image", phoneNumber: 8124242222, photo_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Blacklight_01_cover.jpg"}
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
  this.addSuperhero = function () {

    this.newSuperhero={ name:this.newSuperhero.name, affiliation:this.newSuperhero.affiliation,
                     phoneNumber:this.newSuperhero.phoneNumber, photo_url:this.newSuperhero.photo_url }
    let superhero=this.newSuperhero
    this.superheros.push(superhero)
    this.newSuperhero={ name: '', affiliation: '',
                     phoneNumber:'', photo_url: '' }
  }
  this.searchSuperhero= function(){
   console.log('Search Pressed'+this.search)
   this.lastSearchTerm=this.search
   document.getElementById("SearchButton").value = "";
  };
}
