import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Star, 
  Shield, 
  Clock, 
  Phone, 
  Mail,
  Globe,
  Calendar,
  Camera,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  Share2,
  Heart,
  ChevronRight
} from 'lucide-react';

// Mock business data
const mockBusiness = {
  id: '1',
  name: 'Akelsa Elektrik',
  category: 'Elektrik & Tesisat',
  location: 'İskenderun, Hatay',
  address: 'Çay Mahallesi, Cumhuriyet Cad. No: 45, İskenderun',
  rating: 4.9,
  reviews: 127,
  isVerified: true,
  isOpen: true,
  trustScore: 95,
  phone: '+90 326 123 45 67',
  email: 'info@akelsa.com',
  website: 'www.akelsa.com',
  responseTime: '< 30 dk',
  memberSince: '2024',
  completedJobs: 342,
  description: 'Akelsa Elektrik olarak 15 yılı aşkın tecrübemizle İskenderun ve çevresinde profesyonel elektrik tesisatı, aydınlatma sistemleri ve solar panel kurulum hizmetleri sunmaktayız. Deprem sonrası yeniden inşa sürecinde güvenilir çözüm ortağınız.',
  services: [
    'Elektrik Tesisatı',
    'Solar Panel Kurulumu',
    'Aydınlatma Sistemleri',
    'Jeneratör Kurulumu',
    'Elektrik Arıza Servisi',
    'Sayaç İşlemleri',
  ],
  images: [
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop',
  ],
  verificationPhotos: {
    googleMaps2025: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    verified2026: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
  },
  verificationDetails: {
    physicalVerification: true,
    responseSpeed: 95,
    customerSatisfaction: 98,
    lastVerified: '15 Ocak 2026',
  },
};

const reviews = [
  {
    id: 1,
    author: 'Mehmet Y.',
    rating: 5,
    date: '2 gün önce',
    content: 'Çok profesyonel ve hızlı hizmet. Solar panel kurulumunu sorunsuz tamamladılar. Kesinlikle tavsiye ederim.',
    verified: true,
  },
  {
    id: 2,
    author: 'Ayşe K.',
    rating: 5,
    date: '1 hafta önce',
    content: 'Deprem sonrası evimizin tüm elektrik tesisatını yenilediler. Güvenilir ve kaliteli iş.',
    verified: true,
  },
  {
    id: 3,
    author: 'Ali R.',
    rating: 4,
    date: '2 hafta önce',
    content: 'Hızlı yanıt verdiler, aynı gün geldiler. Fiyat biraz yüksek ama kaliteli iş yapıyorlar.',
    verified: true,
  },
];

export default function BusinessProfile() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const business = mockBusiness;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <span>Ana Sayfa</span>
            <ChevronRight className="w-4 h-4" />
            <span>{business.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{business.name}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="glass-card overflow-hidden">
                <div className="relative h-64 md:h-96">
                  <img
                    src={business.images[activeImage]}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  
                  {/* Status & Trust */}
                  <div className="absolute top-4 left-4 flex gap-2">
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
                    {business.isVerified && (
                      <span className="trust-badge">
                        <Shield className="w-3.5 h-3.5" />
                        Doğrulanmış
                      </span>
                    )}
                  </div>

                  {/* Trust Score */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 rounded-xl bg-card/80 backdrop-blur-sm text-sm font-semibold text-primary">
                      %{business.trustScore} Güven Skoru
                    </div>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-4">
                  {business.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Reality Check Module */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Gerçeklik Kontrolü
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      2025 vs 2026 Doğrulama
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Old Photo */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={business.verificationPhotos.googleMaps2025}
                      alt="2025 Google Maps"
                      className="w-full h-48 object-cover grayscale opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        <span>Google Maps 2025 (Güncel Değil)</span>
                      </div>
                    </div>
                  </div>

                  {/* New Verified Photo */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={business.verificationPhotos.verified2026}
                      alt="2026 Doğrulanmış"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-white text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Doğrulanmış Fotoğraf 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verification Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">
                      {business.verificationDetails.responseSpeed}%
                    </div>
                    <div className="text-sm text-muted-foreground">Yanıt Hızı</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-primary">
                      {business.verificationDetails.customerSatisfaction}%
                    </div>
                    <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-foreground">
                      {business.verificationDetails.lastVerified}
                    </div>
                    <div className="text-sm text-muted-foreground">Son Doğrulama</div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="glass-card p-6">
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Hakkında</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {business.description}
                </p>

                {/* Services */}
                <h3 className="font-semibold text-foreground mb-3">Hizmetler</h3>
                <div className="flex flex-wrap gap-2">
                  {business.services.map((service) => (
                    <span key={service} className="category-chip">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-bold text-foreground">
                    Değerlendirmeler
                  </h2>
                  <Button variant="ghost" size="sm">
                    Tümünü Gör
                  </Button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-foreground">
                            {review.author[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground">{review.author}</span>
                              {review.verified && (
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3.5 h-3.5 ${i < review.rating ? 'text-gold fill-gold' : 'text-muted'}`} 
                                  />
                                ))}
                              </div>
                              <span>•</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="glass-card p-6 sticky top-28">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-display text-xl font-bold text-foreground">{business.name}</h2>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="font-bold text-lg text-foreground">{business.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({business.reviews} yorum)</span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-bold text-foreground">{business.completedJobs}</div>
                    <div className="text-xs text-muted-foreground">Tamamlanan İş</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-bold text-foreground">{business.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Yanıt Süresi</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <Button variant="hero" size="lg" className="w-full">
                    <MessageSquare className="w-5 h-5" />
                    Teklif Al
                  </Button>
                  <Button variant="glass" size="lg" className="w-full">
                    <Phone className="w-5 h-5" />
                    Hemen Ara
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-6 border-t border-border">
                  <a href={`tel:${business.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>{business.phone}</span>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{business.email}</span>
                  </a>
                  <a href={`https://${business.website}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>{business.website}</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{business.address}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-6 border-t border-border mt-6">
                  <Button variant="ghost" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
                    <Calendar className="w-4 h-4" />
                    <span>Üye: {business.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
