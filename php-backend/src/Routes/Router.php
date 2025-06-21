<?php

require_once __DIR__ . '/../Controller/CartController.php';

$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

$cart = new CartController();

if ($request === '/api/php/carts' && $method === 'GET') {
    $cart->index();
} elseif ($request === '/api/php/carts/add' && $method === 'POST') {
    $cart->add();
} elseif (preg_match('/\/api\/php\/carts\/(\d+)/', $request, $matches) && $method === 'DELETE') {
    $cart->delete($matches[1]);
} elseif ($request === '/api/php/carts/checkout' && $method === 'POST') {
    $cart->checkout();
} else {
    http_response_code(404);
    echo json_encode(["error" => "Route not found"]);
}
