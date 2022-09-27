<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    })->name('home');

    Route::resource('users', UserController::class);

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    })->name('settings');
});
