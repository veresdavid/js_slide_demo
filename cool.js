function logArrayData(array){
	for(var i=0; i<array.length; i++){
		console.log(array[i]);
	}
}

var previous, actual, next;
var index;
var data;
var blocked;

$(document).ready(function(){
	
	blocked = false;
	index = 0;
	data = blocks;
	loadBoxes();
	
});

function createBoxDiv(content, id, clazz, zIndex){
	var box = document.createElement("div");
	box.innerHTML = content;
	box.id = id;
	box.className += " " + clazz;
	box.zIndex = zIndex;
	return box;
}

function loadBoxes(){
	
	previous = null;
	
	actual = createBoxDiv(data[index].text, "actual", "activeBox", 1);
	
	if(index<=data.length-1){
		next = createBoxDiv(data[index+1].text, "next", "invisibleBox", -1);
	}else{
		next = null;
	}
	
	$("#boxes").append(previous, actual, next);
	
	/*
	// previous
	previous = createBoxDiv("First box", "previous", "invisibleBox", -1);
	
	// actual
	actual = createBoxDiv("Second box", "actual", "activeBox", 1);
	
	// next
	next = createBoxDiv("Third box", "next", "invisibleBox", -1);
	
	// append
	$("#boxes").append(previous, actual, next);
	*/
	
}

function prevBox(){
	
	if(index==0){
		console.log("THERES NO PREVIOUS BOX!");
	}else{
		console.log("ROLL BACK");
		
		if(blocked){
			return;
		}else{
			blocked = true;
		}
		
		// effects
		$("#actual").addClass("animated bounceOutRight").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#actual").removeClass("animated bounceOutRight");
		$("#actual").removeClass("activeBox");
		$("#actual").addClass("invisibleBox");
		});
		$("#previous").removeClass("invisibleBox");
		$("#previous").addClass("activeBox");
		$("#previous").addClass("animated bounceInLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#previous").removeClass("animated bounceInLeft");
			$("#previous").removeClass("invisibleBox");
			$("#previous").addClass("activeBox");
			
			// KULA
			// update data
			next = createBoxDiv(data[index].text, "next", "invisibleBox", -1)
			actual = createBoxDiv(data[index-1].text, "actual", "activeBox" ,1);
			if(index-2>=0){
				previous = createBoxDiv(data[index-2].text, "previous", "invisibleBox", -1);
			}else{
				previous = null;
			}
			index--;
			
			// update UI
			$("#boxes").empty();
			$("#boxes").append(previous, actual, next);
			
			blocked = false;
			
		});
		
		/*
		// update data
		next = createBoxDiv(data[index].text, "next", "invisibleBox", -1)
		actual = createBoxDiv(data[index-1].text, "actual", "activeBox" ,1);
		if(index-2>=0){
			previous = createBoxDiv(data[index-2].text, "previous", "invisibleBox", -1);
		}else{
			previous = null;
		}
		index--;
		
		// update UI
		$("#boxes").empty();
		$("#boxes").append(previous, actual, next);
		*/
		
	}
	
	/*
	$("#actual").addClass("animated bounceOutRight").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#actual").removeClass("animated bounceOutRight");
		$("#actual").removeClass("activeBox");
		$("#actual").addClass("invisibleBox");
	});
	$("#previous").removeClass("invisibleBox");
	$("#previous").addClass("activeBox");
	$("#previous").addClass("animated bounceInLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#previous").removeClass("animated bounceInLeft");
		$("#previous").removeClass("invisibleBox");
		$("#previous").addClass("activeBox");
	});
	*/
}

function nextBox(){
	
	if(index==data.length-1){
		console.log("THERES NO NEXT BOX!");
	}else{
		console.log("ROLL FORWARD");
		
		if(blocked){
			return;
		}else{
			blocked = true;
		}
		
		// effects
		$("#actual").addClass("animated bounceOutLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#actual").removeClass("animated bounceOutLeft");
		$("#actual").removeClass("activeBox");
		$("#actual").addClass("invisibleBox");
		});
		$("#next").removeClass("invisibleBox");
		$("#next").addClass("activeBox");
		$("#next").addClass("animated bounceInRight").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$("#next").removeClass("animated bounceInRight");
			$("#next").removeClass("invisibleBox");
			$("#next").addClass("activeBox");
			
			// KULA
			// update data
			previous = createBoxDiv(data[index].text, "previous", "invisibleBox", -1);
			actual = createBoxDiv(data[index+1].text, "actual", "activeBox", 1);
			if(index+2<=data.length-1){
				next = createBoxDiv(data[index+2].text, "next", "invisibleBox", -1);
			}else{
				next = null;
			}
			index++;
			
			// update UI
			$("#boxes").empty();
			$("#boxes").append(previous, actual, next);
			
			blocked = false;
			
		});
		
		/*
		// update data
		previous = createBoxDiv(data[index].text, "previous", "invisibleBox", -1);
		actual = createBoxDiv(data[index+1].text, "actual", "activeBox", 1);
		if(index+2<=data.length-1){
			next = createBoxDiv(data[index+2].text, "next", "invisibleBox", -1);
		}else{
			next = null;
		}
		index++;
		
		// update UI
		$("#boxes").empty();
		$("#boxes").append(previous, actual, next);
		*/
		
	}
	
	/*
	$("#actual").addClass("animated bounceOutLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#actual").removeClass("animated bounceOutLeft");
		$("#actual").removeClass("activeBox");
		$("#actual").addClass("invisibleBox");
	});
	$("#next").removeClass("invisibleBox");
	$("#next").addClass("activeBox");
	$("#next").addClass("animated bounceInRight").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#next").removeClass("animated bounceInRight");
		$("#next").removeClass("invisibleBox");
		$("#next").addClass("activeBox");
	});
	*/
}

function go(){
	console.log("GO");
	$("#ye1").addClass("animated bounceOutLeft").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$("#ye1").removeClass("animated bounceOutLeft");
		$("#ye1").remove();
	});
}