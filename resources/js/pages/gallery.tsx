import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';

interface GalleryItem {
    id: number;
    title: string;
    description?: string;
    type: string;
    url: string;
    thumbnail_url?: string;
    category: string;
    location?: string;
    photographer?: string;
    taken_date?: string;
    is_featured: boolean;
    likes_count: number;
    views_count: number;
}

interface PaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

interface PaginatedGallery {
    data: GalleryItem[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props extends SharedData {
    gallery: PaginatedGallery;
    categories: string[];
    selectedType: string;
    selectedCategory?: string;
    [key: string]: unknown;
}

export default function Gallery() {
    const { gallery, categories, selectedType, selectedCategory } = usePage<Props>().props;

    const handleTypeFilter = (type: string) => {
        const params: { [key: string]: string } = { type };
        if (selectedCategory) {
            params.category = selectedCategory;
        }
        router.get(route('gallery'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleCategoryFilter = (category: string | null) => {
        const params: { [key: string]: string } = { type: selectedType };
        if (category) {
            params.category = category;
        }
        router.get(route('gallery'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            'nature': '🌿',
            'culture': '🎭',
            'food': '🍽️',
            'events': '🎉',
            'architecture': '🏛️',
            'people': '👥',
            'adventure': '🏔️',
        };
        return icons[category] || '📸';
    };

    const getCategoryName = (category: string) => {
        const names: { [key: string]: string } = {
            'nature': 'Alam',
            'culture': 'Budaya',
            'food': 'Kuliner',
            'events': 'Acara',
            'architecture': 'Arsitektur',
            'people': 'Kehidupan',
            'adventure': 'Petualangan',
        };
        return names[category] || category;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <>
            <Head title="Galeri Foto & Video - Wisata Salatiga">
                <meta name="description" content="Jelajahi keindahan Salatiga melalui koleksi foto dan video dari berbagai sudut dan momen terbaik." />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Plus_Jakarta_Sans']">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100">
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
                                <Link href={route('culinary')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                    🍜 Kuliner
                                </Link>
                                <Link href={route('gallery')} className="text-purple-600 font-medium border-b-2 border-purple-600">
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
                <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            📸 Galeri Foto & Video Salatiga
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Saksikan keindahan dan pesona Salatiga melalui koleksi visual yang menakjubkan 
                            dari berbagai sudut pandang dan momen istimewa 🎨
                        </p>
                    </div>
                </section>

                {/* Type Filter */}
                <section className="py-6 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => handleTypeFilter('photo')}
                                className={`flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${
                                    selectedType === 'photo'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <span className="text-2xl mr-3">📷</span>
                                Foto ({gallery.total})
                            </button>
                            <button
                                onClick={() => handleTypeFilter('video')}
                                className={`flex items-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all ${
                                    selectedType === 'video'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <span className="text-2xl mr-3">🎬</span>
                                Video ({gallery.total})
                            </button>
                        </div>
                    </div>
                </section>

                {/* Category Filters */}
                <section className="py-6 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-3 justify-center">
                            <button
                                onClick={() => handleCategoryFilter(null)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    !selectedCategory
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
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
                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
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
                        <p className="text-gray-600 text-center">
                            Menampilkan <span className="font-semibold">{gallery.data.length}</span> dari{' '}
                            <span className="font-semibold">{gallery.total}</span> {selectedType === 'photo' ? 'foto' : 'video'}
                            {selectedCategory && (
                                <span> dalam kategori <span className="font-semibold text-purple-600">
                                    {getCategoryIcon(selectedCategory)} {getCategoryName(selectedCategory)}
                                </span></span>
                            )}
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {selectedType === 'photo' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {gallery.data.map((item) => (
                                    <div key={item.id} className="group cursor-pointer">
                                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                                <span className="text-4xl opacity-60">📷</span>
                                            </div>
                                            
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                    {item.location && (
                                                        <p className="text-white/80 text-sm mb-2 flex items-center">
                                                            <span className="mr-1">📍</span>
                                                            {item.location}
                                                        </p>
                                                    )}
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-white/80 text-sm flex items-center">
                                                            <span className="mr-1">❤️</span>
                                                            {item.likes_count}
                                                        </span>
                                                        <span className="text-white/80 text-sm flex items-center">
                                                            <span className="mr-1">👁️</span>
                                                            {item.views_count}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                {item.is_featured && (
                                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        ⭐
                                                    </span>
                                                )}
                                                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                    {getCategoryIcon(item.category)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {gallery.data.map((item) => (
                                    <div key={item.id} className="group cursor-pointer">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                                            <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                                                <span className="text-6xl opacity-60">🎬</span>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                                        <span className="text-2xl">▶️</span>
                                                    </div>
                                                </div>
                                                
                                                {/* Badges */}
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    {item.is_featured && (
                                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                            ⭐ Featured
                                                        </span>
                                                    )}
                                                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        {getCategoryIcon(item.category)} {getCategoryName(item.category)}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                                    {item.title}
                                                </h3>
                                                {item.description && (
                                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                )}
                                                
                                                <div className="space-y-2 mb-4">
                                                    {item.location && (
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="mr-2">📍</span>
                                                            <span>{item.location}</span>
                                                        </div>
                                                    )}
                                                    {item.photographer && (
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="mr-2">📷</span>
                                                            <span>{item.photographer}</span>
                                                        </div>
                                                    )}
                                                    {item.taken_date && (
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <span className="mr-2">📅</span>
                                                            <span>{formatDate(item.taken_date)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                <div className="flex items-center justify-between">
                                                    <span className="text-red-500 text-sm flex items-center">
                                                        <span className="mr-1">❤️</span>
                                                        {item.likes_count.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-500 text-sm flex items-center">
                                                        <span className="mr-1">👁️</span>
                                                        {item.views_count.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {gallery.data.length === 0 && (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">
                                    {selectedType === 'photo' ? '📷' : '🎬'}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Tidak ada {selectedType === 'photo' ? 'foto' : 'video'} ditemukan
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Coba ubah filter pencarian atau lihat kategori lainnya
                                </p>
                                <button
                                    onClick={() => handleCategoryFilter(null)}
                                    className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                                >
                                    🎯 Lihat Semua {selectedType === 'photo' ? 'Foto' : 'Video'}
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pagination */}
                {gallery.last_page > 1 && (
                    <section className="py-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center space-x-2">
                                {gallery.links.map((link, index) => {
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
                                                    ? 'bg-purple-600 text-white'
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

                {/* Featured Photographers */}
                <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            📷 Kontributor Galeri
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Terima kasih kepada para fotografer dan videografer yang telah berbagi karya menakjubkan
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">📸</span>
                                <h3 className="font-bold text-gray-900 mb-1">Ahmad Photography</h3>
                                <p className="text-sm text-gray-600">Landscape Specialist</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🎬</span>
                                <h3 className="font-bold text-gray-900 mb-1">Salatiga Media</h3>
                                <p className="text-sm text-gray-600">Event Documentation</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🍽️</span>
                                <h3 className="font-bold text-gray-900 mb-1">Foodie Salatiga</h3>
                                <p className="text-sm text-gray-600">Culinary Photography</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <span className="text-4xl mb-3 block">🌿</span>
                                <h3 className="font-bold text-gray-900 mb-1">Nature Lens</h3>
                                <p className="text-sm text-gray-600">Nature & Wildlife</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            📱 Bagikan Momen Indah Anda
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Punya foto atau video menarik dari Salatiga? Bagikan dengan kami dan dunia!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href={route('attractions')}
                                className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
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
                                href={route('culinary')}
                                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                            >
                                🍜 Coba Kuliner
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}