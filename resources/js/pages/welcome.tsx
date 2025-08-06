import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

interface Attraction {
    id: number;
    name: string;
    description: string;
    address: string;
    category: string;
    image_url?: string;
    operating_hours?: string;
    price_range?: string;
    is_featured: boolean;
    views_count: number;
}

interface Event {
    id: number;
    title: string;
    description: string;
    location: string;
    start_date: string;
    end_date?: string;
    image_url?: string;
    category: string;
    price?: string;
    is_featured: boolean;
}

interface Culinary {
    id: number;
    name: string;
    description: string;
    address: string;
    category: string;
    image_url?: string;
    price_range: string;
    rating?: number;
    specialties?: string[];
    is_featured: boolean;
}

interface GalleryItem {
    id: number;
    title: string;
    description?: string;
    type: string;
    url: string;
    thumbnail_url?: string;
    category: string;
    location?: string;
    likes_count: number;
    is_featured: boolean;
}

interface Props extends SharedData {
    featuredAttractions: Attraction[];
    upcomingEvents: Event[];
    featuredCulinary: Culinary[];
    featuredGallery: GalleryItem[];
    [key: string]: unknown;
}

export default function Welcome() {
    const { auth, featuredAttractions, upcomingEvents, featuredCulinary, featuredGallery } = usePage<Props>().props;

    return (
        <>
            <Head title="Wisata Salatiga - Jelajahi Keindahan Kota Kecil Nan Istimewa">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=plus-jakarta-sans:400,500,600,700&display=swap" rel="stylesheet" />
                <meta name="description" content="Portal resmi pariwisata Salatiga. Temukan destinasi wisata, kuliner lokal, acara menarik, dan galeri foto terbaik di Kota Salatiga." />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Plus_Jakarta_Sans']">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-teal-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-400 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🏛️</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Salatiga</h1>
                                    <p className="text-xs text-teal-600">Tourism Portal</p>
                                </div>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href={route('attractions')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    🏞️ Wisata
                                </Link>
                                <Link href={route('events')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    📅 Acara
                                </Link>
                                <Link href={route('culinary')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    🍜 Kuliner
                                </Link>
                                <Link href={route('gallery')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    📸 Galeri
                                </Link>
                            </div>

                            <div className="flex items-center space-x-3">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-teal-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-gradient-to-r from-teal-500 to-blue-400 text-white px-4 py-2 rounded-xl font-medium hover:from-teal-600 hover:to-blue-500 transition-all shadow-lg shadow-teal-500/25"
                                        >
                                            Daftar
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-orange-50"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-orange-500 bg-clip-text text-transparent mb-6">
                                ✨ Jelajahi Salatiga
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                                Kota Kecil Nan Istimewa 🏔️
                            </p>
                            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Temukan pesona wisata alam, warisan budaya yang kaya, kuliner khas yang menggugah selera, 
                                dan pengalaman tak terlupakan di tengah keindahan pegunungan Jawa Tengah 🌿
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <Link 
                                    href={route('attractions')}
                                    className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-xl shadow-teal-500/25"
                                >
                                    🏞️ Mulai Jelajahi
                                </Link>
                                <Link 
                                    href={route('gallery')}
                                    className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-teal-500 shadow-lg"
                                >
                                    📸 Lihat Galeri
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal-600">{featuredAttractions.length}+</div>
                                    <div className="text-gray-600 text-sm">Destinasi Wisata</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">{upcomingEvents.length}+</div>
                                    <div className="text-gray-600 text-sm">Acara Mendatang</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-600">{featuredCulinary.length}+</div>
                                    <div className="text-gray-600 text-sm">Kuliner Khas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-600">{featuredGallery.length}+</div>
                                    <div className="text-gray-600 text-sm">Foto & Video</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Attractions */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🏞️ Destinasi Unggulan
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Jelajahi tempat-tempat menakjubkan yang wajib dikunjungi di Salatiga dan sekitarnya
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredAttractions.slice(0, 6).map((attraction) => (
                                <div key={attraction.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                        <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                                            <span className="text-6xl opacity-60">
                                                {attraction.category === 'nature' ? '🌲' : 
                                                 attraction.category === 'culture' ? '🏛️' : '🎯'}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {attraction.category === 'nature' ? '🌿 Alam' : 
                                                     attraction.category === 'culture' ? '🎭 Budaya' : '🎪 Hiburan'}
                                                </span>
                                                <span className="text-yellow-500 text-sm">
                                                    ⭐ {(attraction.views_count / 1000).toFixed(1)}k views
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{attraction.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-orange-600 font-semibold text-sm">
                                                    💰 {attraction.price_range || 'Gratis'}
                                                </span>
                                                <span className="text-teal-600 font-medium text-sm hover:underline">
                                                    Selengkapnya →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href={route('attractions')} 
                                className="bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/25"
                            >
                                🗺️ Lihat Semua Destinasi
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Culinary */}
                <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🍜 Kuliner Khas Salatiga
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Nikmati cita rasa autentik dan kelezatan kuliner lokal yang menggugah selera
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredCulinary.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                                        <div className="h-40 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                                            <span className="text-5xl opacity-70">
                                                {item.category === 'traditional' ? '🥘' :
                                                 item.category === 'cafe' ? '☕' :
                                                 item.category === 'restaurant' ? '🍽️' : '🍢'}
                                            </span>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                                                    {item.category === 'traditional' ? '🥘 Tradisional' :
                                                     item.category === 'cafe' ? '☕ Kafe' :
                                                     item.category === 'restaurant' ? '🍽️ Restoran' : '🍢 Jajanan'}
                                                </span>
                                                {item.rating && (
                                                    <div className="flex items-center text-sm text-yellow-600">
                                                        <span>⭐ {item.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                                            <div className="text-orange-600 font-semibold text-sm">
                                                💰 {item.price_range}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href={route('culinary')} 
                                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg shadow-orange-500/25"
                            >
                                🍽️ Jelajahi Kuliner
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                📅 Acara Mendatang
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Jangan lewatkan berbagai acara menarik dan festival budaya yang akan datang
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {event.category === 'festival' ? '🎭 Festival' :
                                                     event.category === 'concert' ? '🎵 Konser' : '🎪 Pameran'}
                                                </span>
                                                <div className="text-right text-sm text-gray-500">
                                                    <div className="font-medium">
                                                        {new Date(event.start_date).toLocaleDateString('id-ID', { 
                                                            day: 'numeric', 
                                                            month: 'short' 
                                                        })}
                                                    </div>
                                                    <div className="text-xs">
                                                        {new Date(event.start_date).toLocaleDateString('id-ID', { 
                                                            year: 'numeric' 
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <span className="mr-2">📍</span>
                                                    <span className="truncate">{event.location}</span>
                                                </div>
                                                <span className="text-blue-600 font-semibold text-sm">
                                                    {event.price || 'Gratis'} 🎟️
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href={route('events')} 
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
                            >
                                🗓️ Lihat Kalender Acara
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Gallery Preview */}
                <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                📸 Galeri Foto & Video
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Saksikan keindahan Salatiga melalui koleksi foto dan video dari berbagai sudut
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {featuredGallery.slice(0, 8).map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                                        <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                                            <span className="text-4xl opacity-60">
                                                {item.type === 'video' ? '🎬' : '📷'}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute bottom-2 left-2 right-2">
                                                <div className="text-white text-sm font-medium truncate">
                                                    {item.title}
                                                </div>
                                                <div className="text-white/80 text-xs">
                                                    ❤️ {item.likes_count}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href={route('gallery')} 
                                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg shadow-teal-500/25"
                            >
                                📱 Jelajahi Galeri
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🌟 Siap Menjelajahi Salatiga?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Dapatkan pengalaman tak terlupakan di kota kecil nan istimewa ini. 
                            Mulai petualangan Anda sekarang juga! 🗺️✨
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href={route('attractions')}
                                className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                🚀 Mulai Petualangan
                            </Link>
                            <Link 
                                href={route('culinary')}
                                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
                            >
                                🍴 Cicipi Kuliner
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="md:col-span-2">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-400 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">🏛️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Wisata Salatiga</h3>
                                        <p className="text-gray-400 text-sm">Portal Resmi Pariwisata</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4 max-w-md">
                                    Jelajahi keindahan alam, budaya, dan kuliner khas Salatiga. 
                                    Kota kecil nan istimewa di jantung Jawa Tengah.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">📧 Email</a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">📱 Instagram</a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">📘 Facebook</a>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">🗺️ Jelajahi</h4>
                                <ul className="space-y-2">
                                    <li><Link href={route('attractions')} className="text-gray-400 hover:text-white transition-colors">Tempat Wisata</Link></li>
                                    <li><Link href={route('events')} className="text-gray-400 hover:text-white transition-colors">Acara & Event</Link></li>
                                    <li><Link href={route('culinary')} className="text-gray-400 hover:text-white transition-colors">Kuliner Lokal</Link></li>
                                    <li><Link href={route('gallery')} className="text-gray-400 hover:text-white transition-colors">Galeri Media</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold mb-4">ℹ️ Informasi</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Salatiga</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Panduan Wisata</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                            <p className="text-gray-400">
                                © 2024 Portal Wisata Salatiga. Dikembangkan dengan ❤️ untuk pariwisata Indonesia 🇮🇩
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}