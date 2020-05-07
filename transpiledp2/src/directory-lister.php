<?PHP
    header('Content-type: application/javascript');
    $fileNames = json_encode(scandir("media"));
    $IRfileNames = json_encode(scandir("ir_lofi"));
    $ff = ["IRfileNames"=> $fileNames,"fileNames"=>$IRfileNames];
	echo json_encode($ff);
?>