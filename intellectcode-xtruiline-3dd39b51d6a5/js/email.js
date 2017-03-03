function enquire_form(enquiry_form){
	console.log(enquiry_form)

	 // emailjs.sendForm("gmail","enquiry",enquiry_form);
	 emailjs.sendForm("gmail","enquiry",enquiry_form).then(function(response) {
	 	console.log("response",response);
	 	location.reload();
	 }, function(err) {
	 	console.log("err",err);
	 	//location.reload();
	});

	 // var count = 0;
	 // while(count < 1000){
	 // 	count = + 1;
	 // }

	// var count;
	// for (count = 0; count < 3; count++) {
 //    	setTimeout(function() {
 //    	    //alert("Click OK to submit form");
 //   		}, 1000 * count);
	// }
}

function contact_us(contact){
	console.log(contact)

	 // emailjs.sendForm("gmail","contact_us",contact);
	 emailjs.sendForm("gmail","contact_us",contact).then(function(response) {
	 	console.log("response",response);
	 	location.reload();
	 }, function(err) {
	 	console.log("err",err);
	 	location.reload();
	});

	// var count;
	// for (count = 0; count < 10; count++) {
 //    	setTimeout(function() {
 //    	   // alert("Click OK to submit form");
 //   		}, 1000 * count);
	// }
}