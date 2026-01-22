import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  },
];

export function FeaturedBusinesses() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="trust-badge mb-4 inline-block">
              <Shield className="w-3.5 h-3.5" />
              Doğrulanmış İşletmeler
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Öne Çıkan Esnaflar
            </h2>
            <p className="text-muted-foreground">
              2026 yılında güncel, doğrulanmış ve güvenilir işletmeler
            </p>
          </div>
          <Link to="/discover" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group">
              Tümünü Gör
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Business Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business) => (
            <Link
              key={business.id}
              to={`/business/${business.id}`}
              className="group glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-5">
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
    </section>
  );
}
