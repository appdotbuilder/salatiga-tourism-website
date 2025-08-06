import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';

interface Attraction {
    id: number;
    name: string;
    description: string;
    address: string;
    category: string;
    image_url?: string;
    operating_hours?: string;
    price_range?: string;
    facilities?: string;
    is_featured: boolean;
    views_count: number;
}

interface PaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

interface PaginatedAttractions {
    data: Attraction[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props extends SharedData {
    attractions: PaginatedAttractions;
    categories: string[];
    selectedCategory?: string;
    [key: string]: unknown;
}

export default function Attractions() {
    const { attractions, categories, selectedCategory } = usePage<Props>().props;

    const handleCategoryFilter = (category: string | null) => {
        const params = category ? { category } : {};
        router.get(route('attractions'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            'nature': '🌲',
            'culture': '🏛️',
            'adventure': '🏔️',
            'religious': '🕌',
            'entertainment': '🎪',
        };
        return icons[category] || '🎯';
    };

    const getCategoryName = (category: string) => {
        const names: { [key: string]: string } = {
            'nature': 'Alam',
            'culture': 'Budaya',
            'adventure': 'Petualangan',
            'religious': 'Religi',
            'entertainment': 'Hiburan',
        };
        return names[category] || category;
    };

    return (
        <>
            <Head title="Tempat Wisata - Wisata Salatiga">
                <meta name="description" content="Jelajahi berbagai tempat wisata menarik di Salatiga dan sekitarnya. Dari wisata alam hingga budaya." />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Plus_Jakarta_Sans']">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-teal-100">
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
                                <Link href={route('attractions')} className="text-teal-600 font-medium border-b-2 border-teal-600">
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

                            <Link href={route('home')} className="text-gray-700 hover:text-teal-600 font-medium">
                                ← Beranda
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
                            🏞️ Tempat Wisata Salatiga
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Jelajahi keindahan alam, warisan budaya, dan berbagai destinasi menarik 
                            di kota kecil nan istimewa ini 🌿
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
                                        ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                🎯 Semua Kategori
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryFilter(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/25'
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
                            Menampilkan <span className="font-semibold">{attractions.data.length}</span> dari{' '}
                            <span className="font-semibold">{attractions.total}</span> tempat wisata
                            {selectedCategory && (
                                <span> dalam kategori <span className="font-semibold text-teal-600">
                                    {getCategoryIcon(selectedCategory)} {getCategoryName(selectedCategory)}
                                </span></span>
                            )}
                        </p>
                    </div>
                </section>

                {/* Attractions Grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {attractions.data.map((attraction) => (
                                <div key={attraction.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                        <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center relative">
                                            <span className="text-6xl opacity-60">
                                                {getCategoryIcon(attraction.category)}
                                            </span>
                                            {attraction.is_featured && (
                                                <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                    ⭐ Featured
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {getCategoryIcon(attraction.category)} {getCategoryName(attraction.category)}
                                                </span>
                                                <span className="text-gray-500 text-sm flex items-center">
                                                    👁️ {attraction.views_count.toLocaleString()}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{attraction.description}</p>
                                            
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-start text-sm text-gray-600">
                                                    <span className="mr-2">📍</span>
                                                    <span className="line-clamp-2">{attraction.address}</span>
                                                </div>
                                                {attraction.operating_hours && (
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">🕒</span>
                                                        <span>{attraction.operating_hours}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center justify-between">
                                                <span className="text-orange-600 font-semibold text-sm">
                                                    💰 {attraction.price_range || 'Gratis'}
                                                </span>
                                                <span className="text-teal-600 font-medium text-sm hover:underline">
                                                    Detail Lengkap →
                                                </span>
                                            </div>

                                            {attraction.facilities && (
                                                <div className="mt-4 pt-4 border-t border-gray-100">
                                                    <p className="text-xs text-gray-500 line-clamp-2">
                                                        🏢 Fasilitas: {attraction.facilities}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {attractions.data.length === 0 && (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">🔍</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak ada tempat wisata ditemukan</h3>
                                <p className="text-gray-600 mb-6">
                                    Coba ubah filter pencarian atau lihat semua kategori
                                </p>
                                <button
                                    onClick={() => handleCategoryFilter(null)}
                                    className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                                >
                                    🎯 Lihat Semua Wisata
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pagination */}
                {attractions.last_page > 1 && (
                    <section className="py-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center space-x-2">
                                {attractions.links.map((link, index) => {
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
                                                    ? 'bg-teal-600 text-white'
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

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🗺️ Rencanakan Perjalanan Anda
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Temukan lebih banyak pengalaman menarik di Salatiga
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href={route('events')}
                                className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                            >
                                📅 Lihat Acara
                            </Link>
                            <Link 
                                href={route('culinary')}
                                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                            >
                                🍜 Jelajahi Kuliner
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