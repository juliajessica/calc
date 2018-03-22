// Business (or back-end) logic:
var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}


// User Interface (or front-end) logic:
$(document).ready(function(){
	$("form#calculator").submit(function(event){
		event.preventDefault();

	var number1 = parseInt($("#input1").val());
	var number2 = parseInt($("#input2").val());
	var operator = $("input:radio[name=operator]:checked").val();
	console.log("1st number: " + number1);  // for debugging
  console.log("2nd number: " + number2);  // for debugging
  console.log("operator: " + operator);
	var result;
	if (operator === "add") {
		result = add(number1, number2);
	} else if (operator === "subtract") {
		result = subtract(number1, number2);
	}	else if (operator === "multiply") {
		 result = multiply(number1, number2);
	} else if (operator === "divide") {
		 result = divide(number1, number2);
	}
	$("#output").text(result);
	// alert(add(number1, number2));
	// alert(subtract(number1, number2));
	// alert(multiply(number1, number2));
  });

	// $("form#subtraction").submit(function(e){
	// 	e.preventDefault();
	//
	// 	var number1 = parseInt($("#subtraction1").val());
	// 	var number2 = parseInt($("#subtraction2").val());
	// 	$("#output").text(subtract(number1, number2));
	// });
	//
	// $("form#multiply").submit(function(e){
	// 	e.preventDefault();
	//
	// 	var number1 = parseInt($("#multiply1").val());
	// 	var number2 = parseInt($("#multiply2").val());
	// 	$("#output").text(multiply(number1, number2));
	// });
	//
	// $("form#divide").submit(function(e){
	// 	e.preventDefault();
	//
	// 	var number1 = parseInt($("#divide1").val());
	// 	var number2 = parseInt($("#divide2").val());
	// 	$("#output").text(divide(number1, number2));
	// });

});
