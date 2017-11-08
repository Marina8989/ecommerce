// product constructor
function Watches(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

var whitetee  = new Watches("OMEGA Watches", "De Ville", "Co-Axial Chronometer","41 mm", "https://www.omegawatches.com/images/Watches/Soldier/43113425103001.png")
var blacktee  = new Watches("OMEGA Watches", "De Ville Tourbillon", "Numbered Edition", "55 mm", "https://www.omegawatches.com/images/Watches/Soldier/51353392199001.png")
var redtee    = new Watches("OMEGA Watches", "Uhren", "Co-Axial Chronograph", "44mm", "https://www.omegawatches.com/images/Watches/Soldier/21230445001001.png")
var bluetee   = new Watches("OMEGA Watches", "Seamaster", "Co-Axial Chronograph", "45.5 mm", "https://www.omegawatches.com/images/Watches/Soldier/23232465101005.png")
var greentee  = new Watches("OMEGA Watches", "James Bond", "Co-Axial Chronograph", "55 mm", "https://www.omegawatches.com/images/Watches/Soldier/25418000_01.png")
var yellowtee = new Watches("OMEGA Watches", "Speedmaster", "Broad Arrow", "42 mm", "https://www.omegawatches.com/images/Watches/Soldier/32110425002001.png")

// create an array to add products to
var shirtArray = new Array

// add products to array of products
shirtArray.push(whitetee, blacktee, redtee, bluetee, greentee, yellowtee)

// loop through products array
for(var i = 0; i < shirtArray.length; i++) {
	// create new elements for each product
	var newItem  = document.createElement("div")
	var newDiv   = document.createElement("div")
	var nameH1   = document.createElement("h1")
	var sizeH4   = document.createElement("h4")
	var colorH4  = document.createElement("h4")
	var stockH4  = document.createElement("h4")
	var btn      = document.createElement("button")
	var image    = document.createElement("img")

	// create text for new elements
	var tName   = document.createTextNode(shirtArray[i].name)
	var tSize   = document.createTextNode("Available size: " + shirtArray[i].size)
	var tColor  = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock  = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")

	// update source attribute
	image.src = shirtArray[i].image

	// update class attributes
	image.className = "img-responsive"
	btn.className = "btn btn-danger btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"
	
	// add text to elements
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	btn.appendChild(tButton)

	// add elements to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	// add new div to new item div
	newItem.appendChild(newDiv)

	// add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}