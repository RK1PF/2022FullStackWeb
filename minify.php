<?php 
use MatthiasMullie\Minify\JS;
$minifier = new JS("./.min/file.js");
echo "<h1>$minifier->minify('./dice.js')</h1>";
?>