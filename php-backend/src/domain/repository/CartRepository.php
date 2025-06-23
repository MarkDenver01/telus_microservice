<?php

namespace App\domain\repository;
use App\Domain\Entity\Cart;

interface CartRepository
{
    public function add(Cart $cart): void;
    public function findAll(): array;
    public function delete(int $id): void;
}
