<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Event>
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('now', '+6 months');
        $endDate = $this->faker->optional()->dateTimeBetween($startDate, $startDate->format('Y-m-d H:i:s') . ' +3 days');

        return [
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(3),
            'location' => $this->faker->address(),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'image_url' => '/images/event-' . $this->faker->numberBetween(1, 10) . '.jpg',
            'gallery_images' => $this->faker->randomElements([
                '/images/event-gallery1.jpg',
                '/images/event-gallery2.jpg',
                '/images/event-gallery3.jpg',
            ], $this->faker->numberBetween(0, 3)),
            'category' => $this->faker->randomElement(['festival', 'concert', 'exhibition', 'cultural', 'sports', 'workshop']),
            'price' => $this->faker->optional()->randomElement(['Gratis', 'Rp 25.000', 'Rp 50.000 - Rp 100.000']),
            'contact_info' => $this->faker->optional()->phoneNumber(),
            'is_featured' => $this->faker->boolean(25),
            'views_count' => $this->faker->numberBetween(50, 5000),
        ];
    }

    /**
     * Indicate that the event is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}