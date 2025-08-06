<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Attraction;
use App\Models\Event;
use App\Models\Culinary;
use App\Models\Gallery;
use Inertia\Inertia;

class TourismController extends Controller
{
    /**
     * Display the tourism homepage.
     */
    public function index()
    {
        $featuredAttractions = Attraction::featured()
            ->orderBy('views_count', 'desc')
            ->limit(6)
            ->get();

        $upcomingEvents = Event::upcoming()
            ->orderBy('start_date', 'asc')
            ->limit(4)
            ->get();

        $featuredCulinary = Culinary::featured()
            ->orderBy('rating', 'desc')
            ->limit(4)
            ->get();

        $featuredGallery = Gallery::featured()
            ->orderBy('likes_count', 'desc')
            ->limit(8)
            ->get();

        return Inertia::render('welcome', [
            'featuredAttractions' => $featuredAttractions,
            'upcomingEvents' => $upcomingEvents,
            'featuredCulinary' => $featuredCulinary,
            'featuredGallery' => $featuredGallery,
        ]);
    }
}