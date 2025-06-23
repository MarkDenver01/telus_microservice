<?php

namespace App\application\usecase;

use App\domain\repository\CartRepository;

class DeleteCartItem
{
    public function __construct(private CartRepository $cartRepository) {}

    public function execute(int $id): void
    {
        $this->cartRepository->delete($id);
    }
}
