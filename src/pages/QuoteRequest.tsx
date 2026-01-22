import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Send, 
  MapPin, 
  Building2, 
  Wrench, 
  Home, 
  Truck,
  Camera,
  CheckCircle2,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const categories = [
  { id: 'construction', icon: Building2, label: 'İnşaat & Yapı' },
  { id: 'electrical', icon: Wrench, label: 'Elektrik & Tesisat' },
  { id: 'home', icon: Home, label: 'Ev Hizmetleri' },
  { id: 'transport', icon: Truck, label: 'Nakliyat' },
];

const locations = [
  'Antakya',
  'İskenderun',
  'Dörtyol',
  'Samandağ',
  'Kırıkhan',
  'Reyhanlı',
  'Altınözü',
  'Arsuz',
  'Belen',
  'Defne',
  'Erzin',
  'Hassa',
  'Kumlu',
  'Payas',
  'Yayladağı',
];

export default function QuoteRequest() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="glass-card p-12">
                <div className="w-20 h-20 rounded-full gradient-emerald flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                  Talebiniz Alındı!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  En iyi 3 doğrulanmış esnafa talebiniz iletildi. Kısa süre içinde size teklif gönderecekler.
                </p>
                
                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      1
                    </div>
                    <span className="text-sm text-foreground">Talep Alındı</span>
                  </div>
                  <div className="w-12 h-0.5 bg-primary" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-bold">
                      2
                    </div>
                    <span className="text-sm text-muted-foreground">Esnaf Bilgilendiriliyor</span>
                  </div>
                  <div className="w-12 h-0.5 bg-secondary" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-bold">
                      3
                    </div>
                    <span className="text-sm text-muted-foreground">Teklifler Geliyor</span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button variant="hero" onClick={() => setIsSubmitted(false)}>
                    Yeni Talep Oluştur
                  </Button>
                  <Button variant="glass">
                    Taleplerim
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Send className="w-4 h-4" />
                Teklif Al Sistemi
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                İhtiyacınızı Paylaşın
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Talebiniz, kategorinizdeki en iyi 3 doğrulanmış esnafa otomatik olarak iletilecek. 
                Rakip teklifler alın, en uygununu seçin.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">3 Esnaf</div>
                  <div className="text-sm text-muted-foreground">Otomatik bilgilendirilir</div>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hızlı Yanıt</div>
                  <div className="text-sm text-muted-foreground">Ortalama 30 dakika</div>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">%100 Güvenli</div>
                  <div className="text-sm text-muted-foreground">Sadece doğrulanmış esnaf</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card p-8">
              {/* Category Selection */}
              <div className="mb-8">
                <label className="block text-foreground font-semibold mb-4">
                  Hangi kategoride hizmet arıyorsunuz?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border bg-secondary hover:border-primary/50'
                        }`}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                          {category.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Selection */}
              <div className="mb-8">
                <label className="block text-foreground font-semibold mb-4">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Hangi ilçede hizmet almak istiyorsunuz?
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-secondary text-foreground outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">İlçe seçin...</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="mb-8">
                <label className="block text-foreground font-semibold mb-4">
                  İhtiyacınızı detaylı açıklayın
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Örn: 3 katlı binanın elektrik tesisatını yenilemek istiyorum. Yaklaşık 300 m2 alan. Solar panel kurulumu da düşünüyorum."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div className="mb-8">
                <label className="block text-foreground font-semibold mb-4">
                  Fotoğraf ekleyin (opsiyonel)
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Fotoğraf yüklemek için tıklayın veya sürükleyin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PNG, JPG veya HEIC (max 10MB)
                  </p>
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={!selectedCategory || !selectedLocation || !description}
              >
                <Send className="w-5 h-5" />
                Teklif Talebini Gönder
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Talebiniz gönderildiğinde, en iyi 3 esnafa otomatik olarak bildirilecek.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
