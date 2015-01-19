$( document ).ready(function() {

	$( "#table-head td" ).click(function() {
		$( "#text" ).html( 
				$("#choose-lang").html()
		)
		$( "#language1 , #language2 , #language3").css("background-color", $(this).css("background-color") )
		$( "#language1 , #language2 , #language3").removeClass()
	});

	$( "#frontend" ).click(function() {
		$( "#language1" ).html("HTML").addClass("html")
		$( "#language2" ).html("CSS").addClass("css")
		$( "#language3" ).html("JavaScript").addClass("javascript")
	});

	$( "#backend" ).click(function() {
		$( "#language1" ).html("PHP").addClass("php")
		$( "#language2" ).html("Ruby").addClass("ruby")
		$( "#language3" ).html("Python").addClass("python")
	});

	$( "#database" ).click(function() {
		$( "#language1" ).html("MySQL").addClass("mysql")
		$( "#language2" ).html("PostgreSQL").addClass("postgresql")
		$( "#language3" ).html("").addClass("hidden")
	});

	$( "#mobile" ).click(function() {
		$( "#language1" ).html("Java").addClass("java")
		$( "#language2" ).html("ObjectiveC").addClass("objectivec")
		$( "#language3" ).html("Swift").addClass("swift")
	});

	$( "#software" ).click(function() {
		$( "#language1" ).html("Visual Basic").addClass("visual-basic")
		$( "#language2" ).html("C/C++").addClass("cplusplus")
		$( "#language3" ).html("C#").addClass("csharp")
	});

	$('body').on('click','.html', function() {
		$( "#text" ).html( 
				$("#db #html").html()
		)
	});

	$('body').on('click','.css', function() {
		$( "#text" ).html( 
				$("#db #css").html()
		)
	});

	$('body').on('click','.javascript', function() {
		$( "#text" ).html( 
				$("#db #javascript").html()
		)
	});

	$('body').on('click','.php', function() {
		$( "#text" ).html( 
				$("#db #php").html()
		)
	});

	$('body').on('click','.ruby', function() {
		$( "#text" ).html( 
				$("#db #ruby").html()
		)
	});

	$('body').on('click','.python', function() {
		$( "#text" ).html( 
				$("#db #python").html()
		)
	});

	$('body').on('click','.mysql', function() {
		$( "#text" ).html( 
				$("#db #mysql").html()
		)
	});

	$('body').on('click','.postgresql', function() {
		$( "#text" ).html( 
				$("#db #postgresql").html()
		)
	});

	$('body').on('click','.visual-basic', function() {
		$( "#text" ).html( 
				$("#db #visual-basic").html()
		)
	});

	$('body').on('click','.java', function() {
		$( "#text" ).html( 
				$("#db #java").html()
		)
	});

	$('body').on('click','.objectivec', function() {
		$( "#text" ).html( 
				$("#db #objectivec").html()
		)
	});

	$('body').on('click','.swift', function() {
		$( "#text" ).html( 
				$("#db #swift").html()
		)
	});

	$('body').on('click','.cplusplus', function() {
		$( "#text" ).html( 
				$("#db #cplusplus").html()
		)
	});

	$('body').on('click','.csharp', function() {
		$( "#text" ).html( 
				$("#db #csharp").html()
		)
	});

});
