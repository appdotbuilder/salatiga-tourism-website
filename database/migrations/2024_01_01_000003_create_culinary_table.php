<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('culinary', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('address');
            $table->string('category'); // restaurant, cafe, street_food, traditional, etc
            $table->string('image_url')->nullable();
            $table->json('gallery_images')->nullable();
            $table->string('operating_hours')->nullable();
            $table->string('price_range');
            $table->string('phone')->nullable();
            $table->json('specialties')->nullable(); // array of specialty dishes
            $table->boolean('is_halal')->default(true);
            $table->boolean('is_featured')->default(false);
            $table->decimal('rating', 2, 1)->nullable();
            $table->integer('views_count')->default(0);
            $table->timestamps();
            
            $table->index(['category', 'is_featured']);
            $table->index('price_range');
            $table->index('rating');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('culinary');
    }
};