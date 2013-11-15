// when the page is ready
$(document).ready(function(){
	
	// bind event to basecamp container
    $('#basecamp').mouseenter(function(){
        $('#header-container h1').text("Basecamp is the project management tool you wish you had on your last project.");
		$('header-container h1').css("font-size", "16px");
		$('#header-container h5').text("Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
    });
        
    $('#basecamp').mouseleave(function(){
        $('#header-container h1').text("Making collaboration productive and enjoyable for people every day.");
		$('header-container h5').css("font-size", "16px");
		$('#header-container h5').text("Frustration free web based apps for colloboration, sharing information, and making decisions.");
		$('header-container h5').css("font-size", "20px");
    });
	
	// bind event to highrise container
	$('#highrise').mouseenter(function(){
        $('#header-container h1').text("Highrise remembers the important things about people you’d normally forget.");
		$('#header-container h5').text("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.");
		$('header-container h5').css("font-size", "20px");
    });
        
    $('#highrise').mouseleave(function(){
        $('#header-container h1').text("Making collaboration productive and enjoyable for people every day.");
		$('#header-container h5').text("Frustration free web based apps for colloboration, sharing information, and making decisions.");
		$('header-container h5').css("font-size", "20px");
    });
	
	// bind event to campfire container
	$('#campfire').mouseenter(function(){
        $('#header-container h1').text("From near or far, helps teams work together over the web in real-time.");
		$('#header-container h5').text("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It’s game changing. We couldn’t run our own business without Campfire.");
		$('header-container h5').css("font-size", "20px");
    });
        
    $('#campfire').mouseleave(function(){
        $('#header-container h1').text("Making collaboration productive and enjoyable for people every day.");
		$('#header-container h5').text("Frustration free web based apps for colloboration, sharing information, and making decisions.");
		$('header-container h5').css("font-size", "20px");
    });
	
	
	
});










