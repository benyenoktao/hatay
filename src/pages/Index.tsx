import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSearch } from '@/components/home/HeroSearch';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { FeaturedBusinesses } from '@/components/home/FeaturedBusinesses';
import { QuoteRequestBanner } from '@/components/home/QuoteRequestBanner';
import { StatsSection } from '@/components/home/StatsSection';
import heroImage from '@/assets/hero-hatay.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        {/* Floating Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              🏗️ Hatay Deprem Sonrası Yeniden İnşa Ekosistemi
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hatay'ın Dijital{' '}
              <span className="text-gradient">Esnaf Platformu</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              2026 standartlarında doğrulanmış, güvenilir yerel işletmeleri keşfedin. 
              Teklif alın, karşılaştırın, en iyisini seçin.
            </p>
          </div>

          <HeroSearch />
        </div>
      </section>

      <StatsSection />
      <CategoryGrid />
      <FeaturedBusinesses />
      <QuoteRequestBanner />
      
      <Footer />
    </div>
  );
};

export default Index;
