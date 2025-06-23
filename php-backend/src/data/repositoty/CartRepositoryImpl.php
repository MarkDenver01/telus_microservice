<?php

namespace App\data\repositoty;

use App\domain\entity\Cart;


class CartRepositoryImpl
{
    public function __construct(private EntityManagerInterface $em) {}

    public function add(Cart $cart): void
    {
        $this->em->persist($cart);
        $this->em->flush();
    }

    public function findAll(): array
    {
        return $this->em->getRepository(Cart::class)->findAll();
    }

    public function delete(int $id): void
    {
        $cart = $this->em->getRepository(Cart::class)->find($id);
        if ($cart) {
            $this->em->remove($cart);
            $this->em->flush();
        }
    }
}
