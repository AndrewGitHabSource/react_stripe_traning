<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Type\Integer;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        'price' => 'integer',
    ];
}
