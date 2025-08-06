<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Attraction
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $address
 * @property string $category
 * @property float|null $latitude
 * @property float|null $longitude
 * @property string|null $image_url
 * @property array|null $gallery_images
 * @property string|null $operating_hours
 * @property string|null $price_range
 * @property string|null $facilities
 * @property bool $is_featured
 * @property int $views_count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction query()
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereFacilities($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereGalleryImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereOperatingHours($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction wherePriceRange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction whereViewsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Attraction byCategory($category)
 * @method static \Database\Factories\AttractionFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Attraction extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'address',
        'category',
        'latitude',
        'longitude',
        'image_url',
        'gallery_images',
        'operating_hours',
        'price_range',
        'facilities',
        'is_featured',
        'views_count',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'gallery_images' => 'array',
        'is_featured' => 'boolean',
        'views_count' => 'integer',
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
    ];

    /**
     * Scope a query to only include featured attractions.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope a query to filter by category.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $category
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }
}