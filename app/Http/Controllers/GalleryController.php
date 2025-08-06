<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $type = $request->get('type', 'photo');
        $category = $request->get('category');
        
        $gallery = Gallery::where('type', $type)
            ->when($category, function ($query, $category) {
                return $query->byCategory($category);
            })
            ->orderBy('is_featured', 'desc')
            ->orderBy('likes_count', 'desc')
            ->paginate(16);

        $categories = Gallery::distinct()->pluck('category');

        return Inertia::render('gallery', [
            'gallery' => $gallery,
            'categories' => $categories,
            'selectedType' => $type,
            'selectedCategory' => $category,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}