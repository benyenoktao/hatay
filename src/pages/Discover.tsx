import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Star, 
  Shield, 
  Clock, 
  Phone,
  Grid3X3,
  List,
  Map
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['Tümü', 'İnşaat', 'Elektrik', 'Tesisat', 'Nakliyat', 'Mobilya', 'Yeme-İçme'];

const businesses = [
  {
    id: '1',
    name: 'Akelsa Elektrik',
    category: 'Elektrik & Tesisat',
    location: 'İskenderun',
    rating: 4.9,
    reviews: 127,
    isVerified: true,
    isOpen: true,
    trustScore: 95,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
    responseTime: '< 30 dk',
    description: 'Profesyonel elektrik tesisatı, aydınlatma ve solar panel kurulumu.',
  },
  {
    id: '2',
    name: 'Hatay Prefabrik',
    category: 'İnşaat & Yapı',
    location: 'Antakya',
    rating: 4.8,
    reviews: 89,
    isVerified: true,
    isOpen: true,
    trustScore: 92,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    responseTime: '< 1 saat',
    description: 'Prefabrik ev, konteyner ve çelik yapı çözümleri.',
  },
  {
    id: '3',
    name: 'Güven Nakliyat',
    category: 'Nakliyat',
    location: 'Dörtyol',
    rating: 4.7,
    reviews: 203,
    isVerified: true,
    isOpen: false,
    trustScore: 88,
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=400&h=300&fit=crop',
    responseTime: '< 2 saat',
    description: 'Şehirlerarası ve şehiriçi nakliyat, ambalajlama hizmeti.',
  },
  {
    id: '4',
    name: 'Usta Mobilya',
    category: 'Ev Hizmetleri',
    location: 'Samandağ',
    rating: 4.6,
    reviews: 156,
    isVerified: true,
    isOpen: true,
    trustScore: 85,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    responseTime: '< 1 saat',
    description: 'Özel tasarım mobilya, restorasyon ve montaj.',
  },
  {
    id: '5',
    name: 'Akdeniz Tesisat',
    category: 'Tesisat',
    location: 'Antakya',
    rating: 4.5,
    reviews: 78,
    isVerified: true,
    isOpen: true,
    trustScore: 82,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop',
    responseTime: '< 45 dk',
    description: 'Su tesisatı, petek temizliği ve doğalgaz hizmeti.',
  },
  {
    id: '6',
    name: 'İskenderun Çelik',
    category: 'İnşaat & Yapı',
    location: 'İskenderun',
    rating: 4.8,
    reviews: 112,
    isVerified: true,
    isOpen: true,
    trustScore: 91,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    responseTime: '< 2 saat',
    description: 'Çelik konstrüksiyon, endüstriyel yapı ve depo sistemleri.',
  },
];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              İşletmeleri Keşfet
            </h1>
            <p className="text-muted-foreground">
              Hatay'ın doğrulanmış ve güvenilir esnaflarını keşfedin
            </p>
          </div>

          {/* Search & Filters Bar */}
          <div className="glass-card p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="İşletme veya hizmet ara..."
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Location Filter */}
              <Button variant="glass" className="gap-2">
                <MapPin className="w-4 h-4" />
                Tüm İlçeler
              </Button>

              {/* More Filters */}
              <Button variant="glass" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filtreler
              </Button>

              {/* View Mode */}
              <div className="flex gap-1 p-1 rounded-xl bg-secondary">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'ghost'} 
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Map className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{businesses.length}</span> işletme bulundu
            </p>
            <select className="bg-secondary text-foreground rounded-lg px-3 py-2 text-sm outline-none">
              <option>En Yüksek Puan</option>
              <option>En Yakın</option>
              <option>En Hızlı Yanıt</option>
              <option>En Çok Yorum</option>
            </select>
          </div>

          {/* Business Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}>
            {businesses.map((business) => (
              <Link
                key={business.id}
                to={`/business/${business.id}`}
                className={`group glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 shrink-0' : 'h-48'}`}>
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {business.isOpen ? (
                      <span className="status-open">
                        <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                        Açık
                      </span>
                    ) : (
                      <span className="status-closed">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        Kapalı
                      </span>
                    )}
                  </div>

                  {/* Trust Score */}
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 rounded-lg bg-card/80 backdrop-blur-sm text-xs font-semibold text-primary">
                      %{business.trustScore} Güven
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {business.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{business.category}</p>
                    </div>
                    {business.isVerified && (
                      <Shield className="w-5 h-5 text-primary shrink-0" />
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {business.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="font-semibold text-foreground">{business.rating}</span>
                    <span className="text-sm text-muted-foreground">({business.reviews} yorum)</span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {business.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {business.responseTime}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2 mt-4">
                    <Button variant="hero" size="sm" className="flex-1">
                      Teklif Al
                    </Button>
                    <Button variant="glass" size="icon">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
