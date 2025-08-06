import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';

interface Culinary {
    id: number;
    name: string;
    description: string;
    address: string;
    category: string;
    image_url?: string;
    operating_hours?: string;
    price_range: string;
    phone?: string;
    specialties?: string[];
    is_halal: boolean;
    is_featured: boolean;
    rating?: number;
    views_count: number;
}

interface PaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

interface PaginatedCulinary {
    data: Culinary[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props extends SharedData {
    culinary: PaginatedCulinary;
    categories: string[];
    selectedCategory?: string;
    [key: string]: unknown;
}

export default function Culinary() {
    const { culinary, categories, selectedCategory } = usePage<Props>().props;

    const handleCategoryFilter = (category: string | null) => {
        const params = category ? { category } : {};
        router.get(route('culinary'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            'traditional': '🥘',
            'cafe': '☕',
            'restaurant': '🍽️',
            'street_food': '🍢',
            'bakery': '🍰',
            'dessert': '🍨',
        };
        return icons[category] || '🍴';
    };

    const getCategoryName = (category: string) => {
        const names: { [key: string]: string } = {
            'traditional': 'Makanan Tradisional',
            'cafe': 'Kafe',
            'restaurant': 'Restoran',
            'street_food': 'Jajanan Kaki Lima',
            'bakery': 'Roti & Kue',
            'dessert': 'Dessert',
        };
        return names[category] || category;
    };

    const getPriceColor = (priceRange: string) => {
        if (priceRange.includes('5.000') || priceRange.includes('10.000')) {
            return 'text-green-600 bg-green-100';
        } else if (priceRange.includes('25.000') || priceRange.includes('50.000')) {
            return 'text-yellow-600 bg-yellow-100';
        } else {
            return 'text-orange-600 bg-orange-100';
        }
    };



    return (
        <>
            <Head title="Kuliner Lokal - Wisata Salatiga">
                <meta name="description" content="Jelajahi cita rasa kuliner khas Salatiga. Temukan restoran, warung, dan makanan tradisional terbaik." />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Plus_Jakarta_Sans']">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between h-16">
                            <Link href={route('home')} className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-400 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🏛️</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Salatiga</h1>
                                    <p className="text-xs text-teal-600">Tourism Portal</p>
                                </div>
                            </Link>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href={route('attractions')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    🏞️ Wisata
                                </Link>
                                <Link href={route('events')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    📅 Acara
                                </Link>
                                <Link href={route('culinary')} className="text-orange-600 font-medium border-b-2 border-orange-600">
                                    🍜 Kuliner
                                </Link>
                                <Link href={route('gallery')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    📸 Galeri
                                </Link>
                            </div>

                            <Link href={route('home')} className="text-gray-700 hover:text-teal-600 font-medium">
                                ← Beranda
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                            🍜 Kuliner Khas Salatiga
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nikmati kelezatan cita rasa autentik dan kuliner lokal yang menggugah selera 
                            di tengah keindahan Kota Salatiga 🌶️
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="py-8 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => handleCategoryFilter(null)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    !selectedCategory
                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                🍴 Semua Kuliner
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryFilter(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {getCategoryIcon(category)} {getCategoryName(category)}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results Count */}
                <section className="py-4 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-gray-600">
                            Menampilkan <span className="font-semibold">{culinary.data.length}</span> dari{' '}
                            <span className="font-semibold">{culinary.total}</span> tempat kuliner
                            {selectedCategory && (
                                <span> dalam kategori <span className="font-semibold text-orange-600">
                                    {getCategoryIcon(selectedCategory)} {getCategoryName(selectedCategory)}
                                </span></span>
                            )}
                        </p>
                    </div>
                </section>

                {/* Culinary Grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {culinary.data.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                        <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center relative">
                                            <span className="text-6xl opacity-60">
                                                {getCategoryIcon(item.category)}
                                            </span>
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                {item.is_featured && (
                                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        ⭐ Featured
                                                    </span>
                                                )}
                                                {item.is_halal && (
                                                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        ✅ Halal
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {getCategoryIcon(item.category)} {getCategoryName(item.category)}
                                                </span>
                                                {item.rating && (
                                                    <div className="flex items-center text-sm">
                                                        <span className="text-yellow-600 mr-1">⭐</span>
                                                        <span className="font-semibold text-gray-800">{item.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                                            
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-start text-sm text-gray-600">
                                                    <span className="mr-2">📍</span>
                                                    <span className="line-clamp-2">{item.address}</span>
                                                </div>
                                                {item.operating_hours && (
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">🕒</span>
                                                        <span>{item.operating_hours}</span>
                                                    </div>
                                                )}
                                                {item.phone && (
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">📞</span>
                                                        <span>{item.phone}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center justify-between mb-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriceColor(item.price_range)}`}>
                                                    💰 {item.price_range}
                                                </span>
                                                <span className="text-gray-500 text-sm flex items-center">
                                                    👁️ {item.views_count.toLocaleString()}
                                                </span>
                                            </div>

                                            {item.specialties && item.specialties.length > 0 && (
                                                <div className="pt-4 border-t border-gray-100">
                                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">🍽️ Menu Andalan:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {item.specialties.slice(0, 3).map((specialty, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                                            >
                                                                {specialty}
                                                            </span>
                                                        ))}
                                                        {item.specialties.length > 3 && (
                                                            <span className="text-xs text-gray-500">
                                                                +{item.specialties.length - 3} lainnya
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {culinary.data.length === 0 && (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">🔍</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak ada tempat kuliner ditemukan</h3>
                                <p className="text-gray-600 mb-6">
                                    Coba ubah filter pencarian atau lihat semua kategori
                                </p>
                                <button
                                    onClick={() => handleCategoryFilter(null)}
                                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                                >
                                    🍴 Lihat Semua Kuliner
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pagination */}
                {culinary.last_page > 1 && (
                    <section className="py-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center space-x-2">
                                {culinary.links.map((link, index) => {
                                    if (!link.url) {
                                        return (
                                            <span
                                                key={index}
                                                className="px-4 py-2 text-gray-400 cursor-not-allowed"
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        );
                                    }

                                    return (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                                link.active
                                                    ? 'bg-orange-600 text-white'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Popular Specialties */}
                <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            🌟 Makanan Khas Yang Wajib Dicoba
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🥘</span>
                                <h3 className="font-bold text-gray-900 mb-2">Tahu Aci</h3>
                                <p className="text-sm text-gray-600">Makanan khas Salatiga dengan kuah gurih</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">☕</span>
                                <h3 className="font-bold text-gray-900 mb-2">Kopi Kopeng</h3>
                                <p className="text-sm text-gray-600">Kopi arabica dari dataran tinggi</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🐟</span>
                                <h3 className="font-bold text-gray-900 mb-2">Ikan Rawa Pening</h3>
                                <p className="text-sm text-gray-600">Ikan segar dari danau alami</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🍢</span>
                                <h3 className="font-bold text-gray-900 mb-2">Sate Kambing</h3>
                                <p className="text-sm text-gray-600">Sate dengan bumbu kacang khas</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            😋 Siap Mencicipi Kelezatan Salatiga?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Jelajahi cita rasa autentik dan temukan pengalaman kuliner yang tak terlupakan
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href={route('attractions')}
                                className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                            >
                                🏞️ Jelajahi Wisata
                            </Link>
                            <Link 
                                href={route('events')}
                                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                            >
                                📅 Lihat Acara
                            </Link>
                            <Link 
                                href={route('gallery')}
                                className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors"
                            >
                                📸 Lihat Galeri
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}