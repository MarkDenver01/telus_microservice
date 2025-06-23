<?php

namespace App\application\usecase;

use App\domain\repository\CartRepository;

class ViewCart
{
    public function __construct(private CartRepository $cartRepository) {}

    public function execute(): array
    {
        return $this->cartRepository->findAll();
    }
}
