<?php

namespace Database\Factories;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Gallery>
     */
    protected $model = Gallery::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = $this->faker->randomElement(['photo', 'video']);

        return [
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->optional()->sentence(8),
            'type' => $type,
            'url' => $type === 'photo' 
                ? '/images/gallery-' . $this->faker->numberBetween(1, 50) . '.jpg'
                : '/videos/gallery-' . $this->faker->numberBetween(1, 20) . '.mp4',
            'thumbnail_url' => $type === 'video' 
                ? '/images/video-thumb-' . $this->faker->numberBetween(1, 20) . '.jpg'
                : null,
            'category' => $this->faker->randomElement(['nature', 'culture', 'food', 'events', 'architecture', 'people', 'adventure']),
            'location' => $this->faker->optional()->city(),
            'photographer' => $this->faker->optional()->name(),
            'taken_date' => $this->faker->optional()->dateTimeBetween('-2 years', 'now'),
            'is_featured' => $this->faker->boolean(15),
            'likes_count' => $this->faker->numberBetween(0, 5000),
            'views_count' => $this->faker->numberBetween(10, 20000),
        ];
    }

    /**
     * Indicate that the gallery item is a photo.
     */
    public function photo(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'photo',
            'thumbnail_url' => null,
        ]);
    }

    /**
     * Indicate that the gallery item is a video.
     */
    public function video(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'video',
            'thumbnail_url' => '/images/video-thumb-' . random_int(1, 20) . '.jpg',
        ]);
    }

    /**
     * Indicate that the gallery item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}