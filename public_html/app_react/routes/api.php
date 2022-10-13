<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers as Controllers;

Route::get('/', [Controllers\ProductController::class, 'index'])->name('index');
Route::get('/get-user', [Controllers\UserController::class, 'getUser'])->name('get.user');
Route::post('/save', [Controllers\UserController::class, 'save'])->name('save');
Route::post('/edit', [Controllers\UserController::class, 'edit'])->name('edit');
Route::post('/delete', [Controllers\UserController::class, 'delete'])->name('delete');

Route::post('/order', [Controllers\OrderController::class, 'orderProduct'])->name('order');

Route::post('/login', [Controllers\Auth\AuthController::class, 'login'])->name('login');

Route::middleware('auth:api')->prefix('admin')->group(function () {
    Route::post('/posts', [Controllers\Admin\AdminController::class, 'index'])->name('admin');
});


