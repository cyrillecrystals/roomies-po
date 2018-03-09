/*var imageSlider = document.getElementById('imagesSlider');
var image = imageSlider.style.backgroundImage;

var images =["url('img/av5.jpg')", "url('img/av8.jpg')" , "url('images/pic4.jpeg')", "url('img/av9.jpg')" ]
var counter  = 0;


function carousel(){

  imageSlider.style.backgroundImage = images [counter];
  counter++;
  if (counter>3){
    counter = 0;
  }
}*/

var imageSlider = document.getElementById('imagesSlider');

var images =["url('../roomies-po/img/lst6-c.jpeg')" , "url('..roomies-po')" "url('../roomies-po/img/lst7.jpeg')" , "url('../roomies-po/img/av12.jpg')" ,"url('../roomies-po/img/av6.jpg')","url('../roomies-po/img/av9.jpg')"];
var counter = 0;

function carousel(){
imageSlider.style.backgroundImage = images[counter];
counter++;
if(counter > 5){
   counter = 0;
}
}
setInterval(carousel, 3000);



/*function showContact() {
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}*/

/*$(document).ready(function(
    function showContact() {
	document.getElementById("contact").show("contactform");
};*/
/*document.getElementById('contact').onclick=

$(document).ready(function() {
        $(".contact").click(function() {
          $(".contactform").show();
        });
      });*/
/*var user (name, contact, location, listing, identity) { 
       this.name=name;
       this.contact=contact;
       this.location=location;
       this.listing=[true/false];
       this.identity=identityNo;
	   
}

var person (firstName , lastName ) {
	this.firstName=firstName;
	this.lastName=lastName;
}

var contact (phoneNo , email , phyadd, school ) {
	this.phoneNo=number;
	this.email=email;
	this.phyadd=phyadd;
	this.school=school;

}
var listing=location , cost , image , name){
 	this.location= mnlocation;
 	this.cost=cost;
 	this.image=image;
 	this.name=pname;
 }*/cd 