<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Event
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $location
 * @property \Illuminate\Support\Carbon $start_date
 * @property \Illuminate\Support\Carbon|null $end_date
 * @property string|null $image_url
 * @property array|null $gallery_images
 * @property string $category
 * @property string|null $price
 * @property string|null $contact_info
 * @property bool $is_featured
 * @property int $views_count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereContactInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereGalleryImages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereViewsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Event upcoming()
 * @method static \Illuminate\Database\Eloquent\Builder|Event byCategory($category)
 * @method static \Database\Factories\EventFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'location',
        'start_date',
        'end_date',
        'image_url',
        'gallery_images',
        'category',
        'price',
        'contact_info',
        'is_featured',
        'views_count',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'gallery_images' => 'array',
        'is_featured' => 'boolean',
        'views_count' => 'integer',
    ];

    /**
     * Scope a query to only include featured events.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope a query to only include upcoming events.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeUpcoming($query)
    {
        return $query->where('start_date', '>=', now());
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