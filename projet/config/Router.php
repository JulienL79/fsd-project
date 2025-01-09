<?php

class Router {
    
    private $pdo;
    
    public function __construct ($pdo) {
        $this->pdo = $pdo;
    }
    
    public function routeRequest() {
        
        $page = $_GET['page'] ?? 'home';
        $action = $_GET['action'] ?? 'display';
        
        switch($page){
            case 'home':
                $controller = new HomeController($this->pdo);
                $this->handleHomeController($controller, $action);
                break;

            case 'result':
                    $controller = new ResultController($this->pdo);
                    $this->handleResultController($controller, $action);
                    break;

            case 'product':
                $controller = new ProductController($this->pdo);
                $this->handleProductController($controller, $action);
                break;
                    
            case 'profile':
                $controller = new ProfileController($this->pdo);
                $this->handleProfileController($controller, $action);
                break;
            
            default :
                echo "Page not found";
                break;
        }
    }
    
    private function handleHomeController($controller, $action) {
        $controller->handleRequest();
    }

    private function handleResultController($controller, $action) {
        $controller->handleRequest();
    }

    private function handleProductController($controller, $action) {
        $controller->handleRequest();
    }
    
    private function handleProfileController($controller, $action) {
        $controller->handleRequest();
    }    
}

?>