<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Culinary
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $address
 * @property string $category
 * @property string|null $image_url
 * @property array|null $gallery_images
 * @property string|null $operating_hours
 * @property string $price_range
 * @property string|null $phone
 * @property array|null $specialties
 * @property bool $is_halal
 * @property bool $is_featured
 * @property float|null $rating
 * @property int $views_count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary query()
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereGalleryImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereIsHalal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereOperatingHours($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary wherePriceRange($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereSpecialties($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary whereViewsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary byCategory($category)
 * @method static \Illuminate\Database\Eloquent\Builder|Culinary halal()
 * @method static \Database\Factories\CulinaryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Culinary extends Model
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
        'image_url',
        'gallery_images',
        'operating_hours',
        'price_range',
        'phone',
        'specialties',
        'is_halal',
        'is_featured',
        'rating',
        'views_count',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'culinary';

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'gallery_images' => 'array',
        'specialties' => 'array',
        'is_halal' => 'boolean',
        'is_featured' => 'boolean',
        'rating' => 'decimal:1',
        'views_count' => 'integer',
    ];

    /**
     * Scope a query to only include featured culinary places.
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

    /**
     * Scope a query to only include halal places.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHalal($query)
    {
        return $query->where('is_halal', true);
    }
}