<?php

namespace App\application\usecase;

use App\Domain\Entity\Cart;
use App\domain\repository\CartRepository;

class AddCartItem
{
    public function __construct(private CartRepository $cartRepository) {}

    public function execute(string $product, int $quantity): void
    {
        $cart = new Cart($product, $quantity);
        $this->cartRepository->add($cart);
    }
}
