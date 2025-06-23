<?php

namespace App\presentation;


use App\application\usecase\AddCartItem;
use App\application\usecase\DeleteCartItem;
use App\application\usecase\ViewCart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    #[Route('/api/php/carts', methods: ['POST'])]
    public function add(Request $request, AddCartItem $useCase): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $useCase->execute($data['product'], $data['quantity']);
        return new JsonResponse(['message' => 'Item added']);
    }

    #[Route('/api/php/carts', methods: ['GET'])]
    public function view(ViewCart $useCase): JsonResponse
    {
        return $this->json($useCase->execute());
    }

    #[Route('/api/php/carts/{id}', methods: ['DELETE'])]
    public function delete(int $id, DeleteCartItem $useCase): JsonResponse
    {
        $useCase->execute($id);
        return new JsonResponse(['message' => 'Item deleted']);
    }

}
