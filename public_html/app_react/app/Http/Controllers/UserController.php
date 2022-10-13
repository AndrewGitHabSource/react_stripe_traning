<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;

class UserController extends Controller {
    private $limit;

    public function __construct()
    {
        $this->limit = config('common.limitPagination');
    }

    public function index(Request $request): JsonResponse {
        $skip = $request->page === 1 ? 0 : ($this->limit * $request->page) - $this->limit;

        return response()->json([
            'users' => User::skip($skip)->take($this->limit)->get(),
            'total' => User::count(),
        ]);
    }

    public function getUser(Request $request): JsonResponse {
        return response()->json(User::where('id', '=', $request->id)->first());
    }

    public function save(UserRequest $request): void {
        $user = $request->except($request->password);
        $user['password'] = Hash::make($request->password);
        User::create($user);
    }

    public function edit(UserRequest $request): void {
        $user = $request->except('password', 'id');
        $user['password'] = Hash::make($request->password);

        User::where('id', $request->id)->update($user);
    }

    public function delete(Request $request): void {
        User::destroy($request->id);
    }
}
