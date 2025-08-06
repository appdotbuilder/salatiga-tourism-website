<?php

namespace Database\Factories;

use App\Models\Culinary;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Culinary>
 */
class CulinaryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Culinary>
     */
    protected $model = Culinary::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company() . ' ' . $this->faker->randomElement(['Warung', 'Resto', 'Cafe', 'Bakery']),
            'description' => $this->faker->paragraph(2),
            'address' => $this->faker->address(),
            'category' => $this->faker->randomElement(['traditional', 'cafe', 'restaurant', 'street_food', 'bakery', 'dessert']),
            'image_url' => '/images/culinary-' . $this->faker->numberBetween(1, 10) . '.jpg',
            'gallery_images' => $this->faker->randomElements([
                '/images/food-gallery1.jpg',
                '/images/food-gallery2.jpg',
                '/images/food-gallery3.jpg',
            ], $this->faker->numberBetween(0, 3)),
            'operating_hours' => $this->faker->randomElement(['08:00 - 20:00 WIB', '10:00 - 22:00 WIB', '17:00 - 24:00 WIB']),
            'price_range' => $this->faker->randomElement(['Rp 5.000 - Rp 15.000', 'Rp 15.000 - Rp 35.000', 'Rp 25.000 - Rp 75.000']),
            'phone' => $this->faker->optional()->phoneNumber(),
            'specialties' => $this->faker->randomElements([
                'Nasi Gudeg',
                'Sate Ayam',
                'Es Teh Manis',
                'Kopi Susu',
                'Tahu Aci',
                'Pecel Lele',
                'Bakso',
                'Mie Ayam',
            ], $this->faker->numberBetween(2, 5)),
            'is_halal' => $this->faker->boolean(85),
            'is_featured' => $this->faker->boolean(20),
            'rating' => $this->faker->optional()->randomFloat(1, 3.5, 5.0),
            'views_count' => $this->faker->numberBetween(50, 10000),
        ];
    }

    /**
     * Indicate that the culinary place is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the culinary place is halal.
     */
    public function halal(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_halal' => true,
        ]);
    }
}