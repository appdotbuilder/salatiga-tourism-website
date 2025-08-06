<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Gallery
 *
 * @property int $id
 * @property string $title
 * @property string|null $description
 * @property string $type
 * @property string $url
 * @property string|null $thumbnail_url
 * @property string $category
 * @property string|null $location
 * @property string|null $photographer
 * @property \Illuminate\Support\Carbon|null $taken_date
 * @property bool $is_featured
 * @property int $likes_count
 * @property int $views_count
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery query()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereLikesCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery wherePhotographer($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereTakenDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereThumbnailUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery whereViewsCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery photos()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery videos()
 * @method static \Illuminate\Database\Eloquent\Builder|Gallery byCategory($category)
 * @method static \Database\Factories\GalleryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Gallery extends Model
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
        'type',
        'url',
        'thumbnail_url',
        'category',
        'location',
        'photographer',
        'taken_date',
        'is_featured',
        'likes_count',
        'views_count',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'gallery';

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'taken_date' => 'date',
        'is_featured' => 'boolean',
        'likes_count' => 'integer',
        'views_count' => 'integer',
    ];

    /**
     * Scope a query to only include featured gallery items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope a query to only include photos.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePhotos($query)
    {
        return $query->where('type', 'photo');
    }

    /**
     * Scope a query to only include videos.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeVideos($query)
    {
        return $query->where('type', 'video');
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