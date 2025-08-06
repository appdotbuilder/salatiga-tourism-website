<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Culinary;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CulinaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $category = $request->get('category');
        
        $culinary = Culinary::when($category, function ($query, $category) {
                return $query->byCategory($category);
            })
            ->orderBy('is_featured', 'desc')
            ->orderBy('rating', 'desc')
            ->paginate(12);

        $categories = Culinary::distinct()->pluck('category');

        return Inertia::render('culinary', [
            'culinary' => $culinary,
            'categories' => $categories,
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
    public function show(Culinary $culinary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Culinary $culinary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Culinary $culinary)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Culinary $culinary)
    {
        //
    }
}