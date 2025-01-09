<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

$template = './views/home/home_content.phtml';

require_once './views/layout.phtml';

//require_once './config/Autoloader.php';
//require_once './config/Utilities.php';

//$db = new Database();
//$pdo = $db->getConnection();

//$router = new Router($pdo);

//$router->routeRequest();

?>

