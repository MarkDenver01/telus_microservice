<?php

namespace App\Controller;

use App\Model\Cart;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CartController
{


    #[Route('/carts', name: 'get_carts', methods: ['GET'])]
    public function index(): JsonResponse
    {
       $data = json_decode(file_get_contents(__DIR__ . '/../data/cart.json'), true);
       return new JsonResponse(['carts' => $data]);
    }

//     #[Route('/api/php/carts', name: 'get_carts', methods: ['GET'])]
//     public function getCarts(): JsonResponse
//     {
//         $cart = [
//             new Cart(1, 101, "iPhone 13", 699.99, 1),
//             new Cart(2, 102, "Samsung Galaxy S22", 649.50, 2),
//         ];
//
//         $data = array_map(fn($item) => $item->toArray(), $cart);
//
//         return new JsonResponse([
//             'carts' => [
//                 'id' => 1,
//                 'products' => $data,
//                 'total' => array_sum(array_map(fn($i) => $i->price * $i->quantity, $cart)),
//                 'totalProducts' => count($cart),
//                 'totalQuantity' => array_sum(array_map(fn($i) => $i->quantity, $cart)),
//             ]
//         ]);
//     }

#[Route('/api/php/carts/checkout', name: 'checkout', methods: ['POST'])]
public function checkout(Request $request): JsonResponse
{
    $data = json_decode($request->getContent(), true);

    // You can store or log the data here
    // Update stock from $data['items'], and clear cart.json

    return new JsonResponse(['message' => 'Checkout successful'], 200);
}
}
