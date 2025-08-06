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
        Schema::create('gallery', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('type'); // photo, video
            $table->string('url'); // image or video URL
            $table->string('thumbnail_url')->nullable(); // for videos
            $table->string('category'); // nature, culture, food, events, etc
            $table->string('location')->nullable();
            $table->string('photographer')->nullable();
            $table->date('taken_date')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->integer('likes_count')->default(0);
            $table->integer('views_count')->default(0);
            $table->timestamps();
            
            $table->index(['type', 'category']);
            $table->index(['is_featured', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery');
    }
};