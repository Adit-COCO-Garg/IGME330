<?PHP
    header('Content-type: application/javascript');
    $fileNames = json_encode(scandir("media"));
    $IRfileNames = json_encode(scandir("ir_lofi"));
    echo "window[`agLIB`].fileNames=".  $fileNames . ";\n";
    echo "window[`agLIB`].IRfileNames=" . $IRfileNames. ";\n";  
    echo "window[`agLIB`].fileNames=window[`agLIB`].fileNames.filter(f=>f!='.'&&f!='..');\n";
    echo "window[`agLIB`].IRfileNames=window[`agLIB`].IRfileNames.filter(f=>f!='.'&&f!='..');\n";
    echo "window[`agLIB`].IRfileName=window[`agLIB`].IRfileNames[0];\n";
    echo "export {}";
?>