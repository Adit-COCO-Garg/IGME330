<?php
	$jokes = [
		["q"=>"What do you call a very small valentine?","a"=>"A valen-tiny!"],
		["q"=>"What did the dog say when he rubbed his tail on the sandpaper?","a"=>"Ruff, Ruff!"],
		["q"=>"Why don't sharks like to eat clowns?","a"=>"Because they taste funny!"],
		["q"=>"What did the fish say when be bumped his head?","a"=>"Dam!"],
		["q"=>"qus1?","a"=>"ans1!"],
		["q"=>"qus2?","a"=>"ans2!"],
		["q"=>"qus3?","a"=>"ans3!"],
		["q"=>"qus4?","a"=>"ans5!"],
		["q"=>"qus5","a"=>"ans4!"],
		["q"=>"qus6","a"=>"and9!"],
		["q"=>"qus7","a"=>"idk!"]
	];
	
    $randomJoke = json_encode($jokes[array_rand($jokes,1)]);

	header('content-type:application/json');      // tell the requestor that this is JSON
	header("Access-Control-Allow-Origin: *");     // turn on CORS
	header("X-this-330-service-is-kinda-lame: true");   // a custom header - by convention they begin with 'X'
	echo($randomJoke);

?>  