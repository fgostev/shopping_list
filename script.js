var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listOld = document.querySelectorAll("li");



// old list


listOld.forEach(function(element){
	element.addEventListener("click", event =>{
		element.classList.toggle("done");
	})
	var b = document.createElement("button");
	b.appendChild(document.createTextNode("clear"))
	element.appendChild(b);
	b.addEventListener("click", event => {
		ul.removeChild(element);
	})
})

// new elements

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// add line trough
	li.addEventListener("click", function(){
		li.classList.toggle("done");
	})

	var b = document.createElement("button");
	b.appendChild(document.createTextNode("clear"))
	li.appendChild(b);
	b.addEventListener("click", event => {
		ul.removeChild(li);
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
// list.addEventListener("click", toggleDone);