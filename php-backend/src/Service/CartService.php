<?php

class CartService {
    private string $file;

    public function __construct() {
        $this->file = __DIR__ . '/../data/cart.json';
        if (!file_exists($this->file)) file_put_contents($this->file, json_encode([]));
    }

    public function getAll(): array {
        return json_decode(file_get_contents($this->file), true);
    }

    public function save(array $items): void {
        file_put_contents($this->file, json_encode($items, JSON_PRETTY_PRINT));
    }

    public function add(array $data): array {
        $items = $this->getAll();
        $data['id'] = count($items) + 1;
        $items[] = $data;
        $this->save($items);
        return $items;
    }

    public function delete(int $id): array {
        $items = $this->getAll();
        $items = array_values(array_filter($items, fn($item) => $item['id'] !== $id));
        $this->save($items);
        return $items;
    }

    public function clear(): void {
        $this->save([]);
    }
}
