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
        Schema::create('attractions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('address');
            $table->string('category'); // nature, culture, culinary, etc
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('image_url')->nullable();
            $table->json('gallery_images')->nullable();
            $table->string('operating_hours')->nullable();
            $table->string('price_range')->nullable();
            $table->text('facilities')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('views_count')->default(0);
            $table->timestamps();
            
            $table->index(['category', 'is_featured']);
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attractions');
    }
};