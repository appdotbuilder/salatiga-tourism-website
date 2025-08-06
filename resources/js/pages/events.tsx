import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';

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
    contact_info?: string;
    is_featured: boolean;
    views_count: number;
}

interface PaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

interface PaginatedEvents {
    data: Event[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props extends SharedData {
    events: PaginatedEvents;
    categories: string[];
    selectedCategory?: string;
    [key: string]: unknown;
}

export default function Events() {
    const { events, categories, selectedCategory } = usePage<Props>().props;

    const handleCategoryFilter = (category: string | null) => {
        const params = category ? { category } : {};
        router.get(route('events'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            'festival': '🎭',
            'concert': '🎵',
            'exhibition': '🎪',
            'cultural': '🎨',
            'sports': '⚽',
            'workshop': '🛠️',
        };
        return icons[category] || '📅';
    };

    const getCategoryName = (category: string) => {
        const names: { [key: string]: string } = {
            'festival': 'Festival',
            'concert': 'Konser',
            'exhibition': 'Pameran',
            'cultural': 'Budaya',
            'sports': 'Olahraga',
            'workshop': 'Workshop',
        };
        return names[category] || category;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const isUpcoming = (dateString: string) => {
        return new Date(dateString) > new Date();
    };

    return (
        <>
            <Head title="Acara & Event - Wisata Salatiga">
                <meta name="description" content="Temukan berbagai acara menarik, festival budaya, dan event terbaru di Salatiga." />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-['Plus_Jakarta_Sans']">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100">
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
                                <Link href={route('events')} className="text-blue-600 font-medium border-b-2 border-blue-600">
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
                <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            📅 Kalender Acara Salatiga
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Jangan lewatkan berbagai acara menarik, festival budaya, dan event seru 
                            yang akan memperkaya pengalaman wisata Anda 🎉
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
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                📅 Semua Event
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryFilter(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
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
                            Menampilkan <span className="font-semibold">{events.data.length}</span> dari{' '}
                            <span className="font-semibold">{events.total}</span> acara
                            {selectedCategory && (
                                <span> dalam kategori <span className="font-semibold text-blue-600">
                                    {getCategoryIcon(selectedCategory)} {getCategoryName(selectedCategory)}
                                </span></span>
                            )}
                        </p>
                    </div>
                </section>

                {/* Events List */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.data.map((event) => (
                                <div key={event.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200 transform group-hover:scale-102">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                            {getCategoryIcon(event.category)} {getCategoryName(event.category)}
                                                        </span>
                                                        {event.is_featured && (
                                                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                                ⭐ Featured
                                                            </span>
                                                        )}
                                                        {isUpcoming(event.start_date) && (
                                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                                                🟢 Upcoming
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                        {event.title}
                                                    </h3>
                                                </div>
                                                <div className="text-right ml-4 min-w-0">
                                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 py-2 rounded-xl text-center">
                                                        <div className="font-bold text-lg">
                                                            {new Date(event.start_date).getDate()}
                                                        </div>
                                                        <div className="text-xs uppercase">
                                                            {new Date(event.start_date).toLocaleDateString('id-ID', { month: 'short' })}
                                                        </div>
                                                        <div className="text-xs">
                                                            {new Date(event.start_date).getFullYear()}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                                            
                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-3 w-5">📍</span>
                                                    <span className="font-medium">{event.location}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-3 w-5">📅</span>
                                                    <span>
                                                        {formatDate(event.start_date)}
                                                        {event.end_date && event.end_date !== event.start_date && (
                                                            <span> - {formatDate(event.end_date)}</span>
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <span className="mr-3 w-5">🕒</span>
                                                    <span>{formatTime(event.start_date)} WIB</span>
                                                </div>
                                                {event.contact_info && (
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-3 w-5">📞</span>
                                                        <span>{event.contact_info}</span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <span className="text-purple-600 font-semibold">
                                                    {event.price ? `🎟️ ${event.price}` : '🆓 Gratis'}
                                                </span>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="mr-1">👁️</span>
                                                    <span>{event.views_count.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {events.data.length === 0 && (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">📅</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak ada acara ditemukan</h3>
                                <p className="text-gray-600 mb-6">
                                    Coba ubah filter pencarian atau lihat semua kategori
                                </p>
                                <button
                                    onClick={() => handleCategoryFilter(null)}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    📅 Lihat Semua Event
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Pagination */}
                {events.last_page > 1 && (
                    <section className="py-8 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-center space-x-2">
                                {events.links.map((link, index) => {
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
                                                    ? 'bg-blue-600 text-white'
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
                <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            🎉 Jangan Lewatkan Event Menarik
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Ikuti terus update acara terbaru dan jadilah bagian dari komunitas pariwisata Salatiga
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href={route('attractions')}
                                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                            >
                                🏞️ Jelajahi Wisata
                            </Link>
                            <Link 
                                href={route('culinary')}
                                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                            >
                                🍜 Coba Kuliner
                            </Link>
                            <Link 
                                href={route('gallery')}
                                className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-colors"
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