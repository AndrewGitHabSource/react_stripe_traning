<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller {
    private $limit;

    public function __construct()
    {
        $this->limit = config('common.limitPagination');
    }

    public function index(Request $request): JsonResponse {
        $skip = $request->page === 1 ? 0 : ($this->limit * $request->page) - $this->limit;

        return response()->json([
            'products' => Product::skip($skip)->take($this->limit)->get(),
            'total' => Product::count(),
        ]);
    }

    public function getProduct(Request $request): JsonResponse {
        return response()->json(Product::where('id', '=', $request->id)->first());
    }
}
