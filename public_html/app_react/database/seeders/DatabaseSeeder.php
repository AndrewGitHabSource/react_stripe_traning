<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         \App\Models\Product::factory(10)->create();

         \App\Models\Product::factory()->create([
             'title' => 'Product',
             'slug' => Str::slug('Product'),
             'description' => 'Great Product',
             'price' => 25.50,
             'image' => '/img/product.jpg',
         ]);
    }
}
