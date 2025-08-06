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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->text('location');
            $table->datetime('start_date');
            $table->datetime('end_date')->nullable();
            $table->string('image_url')->nullable();
            $table->json('gallery_images')->nullable();
            $table->string('category'); // festival, concert, exhibition, etc
            $table->string('price')->nullable();
            $table->text('contact_info')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('views_count')->default(0);
            $table->timestamps();
            
            $table->index(['start_date', 'is_featured']);
            $table->index('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};