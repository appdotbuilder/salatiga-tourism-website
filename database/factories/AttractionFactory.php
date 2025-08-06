<?php

namespace Database\Factories;

use App\Models\Attraction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Attraction>
 */
class AttractionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Attraction>
     */
    protected $model = Attraction::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'address' => $this->faker->address(),
            'category' => $this->faker->randomElement(['nature', 'culture', 'adventure', 'religious', 'entertainment']),
            'latitude' => $this->faker->latitude(-7.8, -7.6),
            'longitude' => $this->faker->longitude(110.4, 110.6),
            'image_url' => '/images/attraction-' . $this->faker->numberBetween(1, 10) . '.jpg',
            'gallery_images' => $this->faker->randomElements([
                '/images/gallery1.jpg',
                '/images/gallery2.jpg',
                '/images/gallery3.jpg',
            ], $this->faker->numberBetween(0, 3)),
            'operating_hours' => $this->faker->randomElement(['08:00 - 17:00 WIB', '09:00 - 18:00 WIB', '24 jam']),
            'price_range' => $this->faker->randomElement(['Gratis', 'Rp 5.000 - Rp 10.000', 'Rp 15.000 - Rp 25.000']),
            'facilities' => $this->faker->sentence(10),
            'is_featured' => $this->faker->boolean(30),
            'views_count' => $this->faker->numberBetween(100, 20000),
        ];
    }

    /**
     * Indicate that the attraction is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}