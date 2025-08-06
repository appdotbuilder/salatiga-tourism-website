<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Attraction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AttractionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $category = $request->get('category');
        
        $attractions = Attraction::when($category, function ($query, $category) {
                return $query->byCategory($category);
            })
            ->orderBy('is_featured', 'desc')
            ->orderBy('views_count', 'desc')
            ->paginate(12);

        $categories = Attraction::distinct()->pluck('category');

        return Inertia::render('attractions', [
            'attractions' => $attractions,
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
    public function show(Attraction $attraction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attraction $attraction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Attraction $attraction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attraction $attraction)
    {
        //
    }
}