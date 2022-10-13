<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;
use App\Models\Product;

class OrderController extends Controller {
    private $stripe;

    public function __construct()
    {
        $this->stripe = new \Stripe\StripeClient(config('services.stripe.secret'));
    }

    public function orderProduct(Request $request): JsonResponse {
        $product = Product::where('id', '=', $request->user)->first();

        $paymentIntent = $this->stripe->paymentIntents->create([
            'amount' => $product->price * 100,
            'currency' => 'usd',
        ]);

        return response()->json($paymentIntent);
    }
}
