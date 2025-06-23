<?php

namespace App\domain\entity;

class Cart
{
    private int $id;
    private String $product;
    private int $quantity;

    public function __construct(string $product, int $quantity)
    {
        $this->product = $product;
        $this->quantity = $quantity;
    }

    public function getId(): int { return $this->id; }
    public function getProduct(): string { return $this->product; }
    public function getQuantity(): int { return $this->quantity; }

    public function setProduct(string $product): void { $this->product = $product; }
    public function setQuantity(int $quantity): void { $this->quantity = $quantity; }
}
