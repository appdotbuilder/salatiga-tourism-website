<?php

namespace Database\Seeders;

use App\Models\Attraction;
use App\Models\Event;
use App\Models\Culinary;
use App\Models\Gallery;
use Illuminate\Database\Seeder;

class TourismSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Attractions
        $attractions = [
            [
                'name' => 'Candi Gedong Songo',
                'description' => 'Kompleks candi Hindu yang terletak di lereng Gunung Ungaran dengan pemandangan yang menakjubkan. Terdiri dari 9 candi yang tersebar di area seluas 29 hektar.',
                'address' => 'Desa Candi, Kecamatan Bandungan, Kabupaten Semarang',
                'category' => 'culture',
                'image_url' => '/images/gedong-songo.jpg',
                'operating_hours' => '07:00 - 17:00 WIB',
                'price_range' => 'Rp 15.000 - Rp 25.000',
                'facilities' => 'Area parkir, toilet, warung makan, jalur trekking, pemandu wisata',
                'is_featured' => true,
                'views_count' => 15420,
            ],
            [
                'name' => 'Umbul Sidomukti',
                'description' => 'Wisata alam dengan kolam pemandian air hangat alami yang berasal dari mata air pegunungan. Dilengkapi dengan berbagai wahana seru seperti flying fox dan outbound.',
                'address' => 'Sidomukti, Kecamatan Bandungan, Kabupaten Semarang',
                'category' => 'nature',
                'image_url' => '/images/umbul-sidomukti.jpg',
                'operating_hours' => '08:00 - 18:00 WIB',
                'price_range' => 'Rp 20.000 - Rp 35.000',
                'facilities' => 'Kolam renang, flying fox, outbound, restoran, penginapan',
                'is_featured' => true,
                'views_count' => 12380,
            ],
            [
                'name' => 'Lawang Sewu',
                'description' => 'Bangunan bersejarah peninggalan Belanda yang kini menjadi museum. Terkenal dengan arsitektur yang unik dan cerita mistis yang mengelilinginya.',
                'address' => 'Jl. Pemuda, Sekayu, Semarang Tengah, Kota Semarang',
                'category' => 'culture',
                'image_url' => '/images/lawang-sewu.jpg',
                'operating_hours' => '08:00 - 21:00 WIB',
                'price_range' => 'Rp 10.000 - Rp 20.000',
                'facilities' => 'Museum, tour guide, cafe, toko souvenir, area foto',
                'is_featured' => true,
                'views_count' => 18750,
            ],
            [
                'name' => 'Curug Lawe',
                'description' => 'Air terjun cantik yang tersembunyi di hutan tropis dengan ketinggian sekitar 30 meter. Cocok untuk pecinta alam dan fotografi.',
                'address' => 'Desa Kebon Dalem, Kecamatan Bandungan, Kabupaten Semarang',
                'category' => 'nature',
                'image_url' => '/images/curug-lawe.jpg',
                'operating_hours' => '07:00 - 17:00 WIB',
                'price_range' => 'Rp 5.000 - Rp 10.000',
                'facilities' => 'Jalur trekking, area istirahat, warung sederhana',
                'is_featured' => true,
                'views_count' => 8640,
            ],
            [
                'name' => 'Desa Wisata Kopeng',
                'description' => 'Desa wisata yang menawarkan pengalaman langsung kehidupan pedesaan dengan udara sejuk pegunungan dan berbagai aktivitas agrowisata.',
                'address' => 'Kopeng, Kecamatan Getasan, Kabupaten Semarang',
                'category' => 'culture',
                'image_url' => '/images/kopeng.jpg',
                'operating_hours' => '24 jam',
                'price_range' => 'Bervariasi',
                'facilities' => 'Homestay, agrowisata, kuliner khas, kerajinan lokal',
                'is_featured' => false,
                'views_count' => 5230,
            ],
            [
                'name' => 'Rawa Pening',
                'description' => 'Danau alami yang indah dengan luas sekitar 2.770 hektar. Menjadi habitat berbagai jenis burung dan tempat budidaya ikan.',
                'address' => 'Tuntang, Kabupaten Semarang',
                'category' => 'nature',
                'image_url' => '/images/rawa-pening.jpg',
                'operating_hours' => '24 jam',
                'price_range' => 'Gratis',
                'facilities' => 'Dermaga, perahu wisata, restoran terapung, area pancing',
                'is_featured' => true,
                'views_count' => 11920,
            ],
        ];

        foreach ($attractions as $attraction) {
            Attraction::create($attraction);
        }

        // Events
        $events = [
            [
                'title' => 'Festival Ruwatan Rawa Pening',
                'description' => 'Festival tahunan untuk melestarikan tradisi dan budaya lokal di sekitar Rawa Pening dengan berbagai pertunjukan seni dan pameran produk lokal.',
                'location' => 'Rawa Pening, Tuntang',
                'start_date' => now()->addDays(30),
                'end_date' => now()->addDays(32),
                'image_url' => '/images/festival-rawa-pening.jpg',
                'category' => 'festival',
                'price' => 'Gratis',
                'contact_info' => 'Dinas Pariwisata Kabupaten Semarang',
                'is_featured' => true,
                'views_count' => 3420,
            ],
            [
                'title' => 'Salatiga Jazz Festival',
                'description' => 'Festival musik jazz tahunan yang menghadirkan musisi jazz lokal dan nasional dalam suasana yang santai dan meriah.',
                'location' => 'Alun-alun Salatiga',
                'start_date' => now()->addDays(45),
                'end_date' => now()->addDays(47),
                'image_url' => '/images/jazz-festival.jpg',
                'category' => 'concert',
                'price' => 'Rp 50.000 - Rp 150.000',
                'contact_info' => 'jazzfestival@salatiga.go.id',
                'is_featured' => true,
                'views_count' => 2870,
            ],
            [
                'title' => 'Pasar Rakyat Kopeng',
                'description' => 'Pasar tradisional mingguan yang menjual hasil bumi lokal, kerajinan tangan, dan kuliner khas daerah pegunungan.',
                'location' => 'Desa Kopeng, Getasan',
                'start_date' => now()->addDays(7),
                'end_date' => now()->addDays(7),
                'image_url' => '/images/pasar-kopeng.jpg',
                'category' => 'exhibition',
                'price' => 'Gratis',
                'contact_info' => 'Kelurahan Kopeng',
                'is_featured' => false,
                'views_count' => 1240,
            ],
            [
                'title' => 'Gebyar Wisata Bandungan',
                'description' => 'Event promosi wisata Bandungan dengan berbagai atraksi, lomba fotografi, dan pengenalan destinasi wisata baru.',
                'location' => 'Kawasan Wisata Bandungan',
                'start_date' => now()->addDays(60),
                'end_date' => now()->addDays(62),
                'image_url' => '/images/gebyar-bandungan.jpg',
                'category' => 'festival',
                'price' => 'Gratis',
                'contact_info' => 'Pokdarwis Bandungan',
                'is_featured' => true,
                'views_count' => 1890,
            ],
        ];

        foreach ($events as $event) {
            Event::create($event);
        }

        // Culinary
        $culinary = [
            [
                'name' => 'Warung Tahu Aci Bu Nur',
                'description' => 'Warung legendaris yang menyajikan tahu aci khas Salatiga dengan kuah gurih dan bumbu kacang yang nikmat. Sudah berdiri sejak puluhan tahun.',
                'address' => 'Jl. Jenderal Sudirman No. 45, Salatiga',
                'category' => 'traditional',
                'image_url' => '/images/tahu-aci.jpg',
                'operating_hours' => '08:00 - 20:00 WIB',
                'price_range' => 'Rp 8.000 - Rp 15.000',
                'phone' => '0298-321456',
                'specialties' => ['Tahu Aci Original', 'Tahu Aci Pedas', 'Es Teh Manis'],
                'is_halal' => true,
                'is_featured' => true,
                'rating' => 4.8,
                'views_count' => 8420,
            ],
            [
                'name' => 'Kedai Kopi Arabica Kopeng',
                'description' => 'Kedai kopi dengan biji kopi arabica lokal yang ditanam langsung di dataran tinggi Kopeng. Suasana asri dengan pemandangan pegunungan.',
                'address' => 'Desa Kopeng, Getasan, Semarang',
                'category' => 'cafe',
                'image_url' => '/images/kopi-kopeng.jpg',
                'operating_hours' => '07:00 - 21:00 WIB',
                'price_range' => 'Rp 15.000 - Rp 35.000',
                'phone' => '0298-567890',
                'specialties' => ['Kopi Arabica Kopeng', 'Kopi Susu Gula Aren', 'Pisang Goreng Keju'],
                'is_halal' => true,
                'is_featured' => true,
                'rating' => 4.6,
                'views_count' => 6730,
            ],
            [
                'name' => 'Resto Rawa Pening',
                'description' => 'Restoran terapung di atas Rawa Pening yang menyajikan ikan air tawar segar dengan berbagai olahan khas Jawa Tengah.',
                'address' => 'Rawa Pening, Tuntang, Semarang',
                'category' => 'restaurant',
                'image_url' => '/images/resto-rawa.jpg',
                'operating_hours' => '10:00 - 22:00 WIB',
                'price_range' => 'Rp 25.000 - Rp 75.000',
                'phone' => '0298-445566',
                'specialties' => ['Ikan Bakar Rawa', 'Pecel Lele', 'Sayur Asem Ikan', 'Gudeg Manggar'],
                'is_halal' => true,
                'is_featured' => true,
                'rating' => 4.5,
                'views_count' => 5840,
            ],
            [
                'name' => 'Sate Kambing Pak Budi',
                'description' => 'Warung sate kambing yang terkenal dengan daging empuk dan bumbu kacang yang khas. Cocok untuk makan malam bersama keluarga.',
                'address' => 'Jl. Kartini No. 78, Salatiga',
                'category' => 'street_food',
                'image_url' => '/images/sate-kambing.jpg',
                'operating_hours' => '17:00 - 24:00 WIB',
                'price_range' => 'Rp 20.000 - Rp 50.000',
                'phone' => '0298-332211',
                'specialties' => ['Sate Kambing', 'Gulai Kambing', 'Tongseng', 'Nasi Gudeg'],
                'is_halal' => true,
                'is_featured' => false,
                'rating' => 4.3,
                'views_count' => 4120,
            ],
        ];

        foreach ($culinary as $item) {
            Culinary::create($item);
        }

        // Gallery
        $gallery = [
            [
                'title' => 'Sunrise di Gedong Songo',
                'description' => 'Pemandangan matahari terbit yang memukau dari kompleks Candi Gedong Songo',
                'type' => 'photo',
                'url' => '/images/gallery/sunrise-gedong-songo.jpg',
                'category' => 'nature',
                'location' => 'Candi Gedong Songo',
                'photographer' => 'Ahmad Photography',
                'taken_date' => now()->subDays(15),
                'is_featured' => true,
                'likes_count' => 1240,
                'views_count' => 5680,
            ],
            [
                'title' => 'Festival Budaya Salatiga',
                'description' => 'Dokumentasi perayaan festival budaya lokal dengan tarian tradisional',
                'type' => 'video',
                'url' => '/videos/festival-budaya.mp4',
                'thumbnail_url' => '/images/gallery/festival-thumb.jpg',
                'category' => 'culture',
                'location' => 'Alun-alun Salatiga',
                'photographer' => 'Salatiga Media',
                'taken_date' => now()->subDays(30),
                'is_featured' => true,
                'likes_count' => 890,
                'views_count' => 3420,
            ],
            [
                'title' => 'Kuliner Khas Tahu Aci',
                'description' => 'Close-up foto makanan khas Salatiga yang menggugah selera',
                'type' => 'photo',
                'url' => '/images/gallery/tahu-aci-closeup.jpg',
                'category' => 'food',
                'location' => 'Warung Bu Nur',
                'photographer' => 'Foodie Salatiga',
                'taken_date' => now()->subDays(5),
                'is_featured' => true,
                'likes_count' => 650,
                'views_count' => 2340,
            ],
            [
                'title' => 'Keindahan Rawa Pening',
                'description' => 'Panorama danau alami dengan perahu nelayan di sore hari',
                'type' => 'photo',
                'url' => '/images/gallery/rawa-pening-sunset.jpg',
                'category' => 'nature',
                'location' => 'Rawa Pening',
                'photographer' => 'Nature Lens',
                'taken_date' => now()->subDays(20),
                'is_featured' => true,
                'likes_count' => 1580,
                'views_count' => 7230,
            ],
            [
                'title' => 'Aktivitas Outbound',
                'description' => 'Video aktivitas seru di Umbul Sidomukti',
                'type' => 'video',
                'url' => '/videos/outbound-sidomukti.mp4',
                'thumbnail_url' => '/images/gallery/outbound-thumb.jpg',
                'category' => 'adventure',
                'location' => 'Umbul Sidomukti',
                'photographer' => 'Adventure Cam',
                'taken_date' => now()->subDays(10),
                'is_featured' => false,
                'likes_count' => 420,
                'views_count' => 1890,
            ],
            [
                'title' => 'Arsitektur Lawang Sewu',
                'description' => 'Detail arsitektur bersejarah bangunan Lawang Sewu',
                'type' => 'photo',
                'url' => '/images/gallery/lawang-sewu-detail.jpg',
                'category' => 'culture',
                'location' => 'Lawang Sewu',
                'photographer' => 'Heritage Photo',
                'taken_date' => now()->subDays(25),
                'is_featured' => true,
                'likes_count' => 980,
                'views_count' => 4560,
            ],
            [
                'title' => 'Petani Kopi Kopeng',
                'description' => 'Potret kehidupan petani kopi di dataran tinggi Kopeng',
                'type' => 'photo',
                'url' => '/images/gallery/petani-kopi.jpg',
                'category' => 'culture',
                'location' => 'Kopeng',
                'photographer' => 'Rural Life',
                'taken_date' => now()->subDays(12),
                'is_featured' => true,
                'likes_count' => 750,
                'views_count' => 3180,
            ],
            [
                'title' => 'Air Terjun Curug Lawe',
                'description' => 'Keindahan air terjun tersembunyi di hutan tropis',
                'type' => 'photo',
                'url' => '/images/gallery/curug-lawe.jpg',
                'category' => 'nature',
                'location' => 'Curug Lawe',
                'photographer' => 'Waterfall Hunter',
                'taken_date' => now()->subDays(8),
                'is_featured' => true,
                'likes_count' => 1120,
                'views_count' => 5940,
            ],
        ];

        foreach ($gallery as $item) {
            Gallery::create($item);
        }
    }
}