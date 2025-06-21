<?php

namespace App\Model;

class Cart
{
    public int $id;
    public int $productId;
    public string $title;
    public float $price;
    public int $quantity;

    public function __construct(int $id, int $productId, string $title, float $price, int $quantity)
    {
        $this->id = $id;
        $this->productId = $productId;
        $this->title = $title;
        $this->price = $price;
        $this->quantity = $quantity;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'productId' => $this->productId,
            'title' => $this->title,
            'price' => $this->price,
            'quantity' => $this->quantity,
        ];
    }
}
