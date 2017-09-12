var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
	nameUpperCased = dinosaur.toUpperCase();
	textChanged = text.replace ('Velociraptor',nameUpperCased);
	pices = textChanged.slice(0, text.length / 2);

console.log(nameUpperCased);
console.log(textChanged);
console.log(text.length);
console.log(pices);