//monster Script
// in this script. we declare a class of monster...
function Img (_name, _color){ // so each monster has character...
	this.name = _name;
	this.color = _color;
	this.mood = "color"; //natural or angry... we set the mood in the natural lang.
	
	this.updateImage = function(){
		this.imageLink = "images/"+this.color+"_"+this.mood+".jpg";
	}
	this.setMood = function(_mood){
		this.mood = _mood;
	}

}

var g = new Img("G","green");
var o = new Img("O","orange");
var r = new Img("R","red");
var y = new Img("Y","yellow");
var br = new Img("BR","brown");
var b = new Img("B","blue");
var v = new Img("V","violet");

var colorArray = [g, o, r, y, br, b, v];
for(var i = 0; i < colorArray.length; i++){
	colorArray[i].updateImage(); // this loop will selected the monster to Output it in the html
}
