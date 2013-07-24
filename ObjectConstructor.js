



function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) { 

	this.color = theColor; 
	this.sweetness = theSweetness; 
	this.fruitName = theFruitName; 
	this.nativeToLand = theNativeToLand; 
	
	this.showName = function () { 
		console.log("this is a " + this.fruitName); 
	}
	
	this.nativeTo = function () { 
		this.nativeToLand.forEach(function (eachCountry) { 
			console.log("Grown in: " + eachCountry); 
		})
	}
}

var iFruit = new Fruit("yellow", "verySweet", "banana", ["panama","Peru"]);


console.log(iFruit.color);
iFruit.nativeTo(); 