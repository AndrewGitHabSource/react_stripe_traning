<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AuthController extends Controller {
    use HasApiTokens, HasFactory, Notifiable;

    public function login(Request $request, User $user) {
        try {
            $token = $user->authenticate($request);
            if(!$token) {
                return response()->json([
                    'message' => config('common.loginError'),
                ], 401);
            }

            return response()->json([
                'token' => "Bearer $token",
            ], 200)->header('Authorization', $token);

        } catch (\Throwable $throw) {
            return response()->json([
                'message' => $throw->getMessage()
            ], 500);
        }
    }
}
