<?php

use App\Http\Controllers\TourismController;
use App\Http\Controllers\AttractionController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CulinaryController;
use App\Http\Controllers\GalleryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', [TourismController::class, 'index'])->name('home');

// Tourism routes
Route::get('/wisata', [AttractionController::class, 'index'])->name('attractions');
Route::get('/acara', [EventController::class, 'index'])->name('events');
Route::get('/kuliner', [CulinaryController::class, 'index'])->name('culinary');
Route::get('/galeri', [GalleryController::class, 'index'])->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
