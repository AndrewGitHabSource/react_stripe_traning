<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => 'Product',
            'slug' => Str::slug('Product'),
            'description' => 'Great Product',
            'price' => 25.50,
            'image' => '/img/product.jpg',
        ];
    }

    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
