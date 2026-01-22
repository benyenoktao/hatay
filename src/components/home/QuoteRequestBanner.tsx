import { Send, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: Users, label: 'En iyi 3 esnaf bilgilendirilir' },
  { icon: Clock, label: 'Hızlı yanıt garantisi' },
  { icon: Shield, label: 'Sadece doğrulanmış işletmeler' },
];

export function QuoteRequestBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Send className="w-4 h-4" />
                  Teklif Al Sistemi
                </span>
                
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  İhtiyacınızı Paylaşın,{' '}
                  <span className="text-gradient">Esnaflar Size Ulaşsın</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  İhtiyacınızı bir kez yazın, Hatay'ın en güvenilir 3 esnafına otomatik olarak bildirilsin. 
                  Rakip teklifler alın, en uygununu seçin.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{benefit.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link to="/quote">
                  <Button variant="hero" size="xl">
                    <Send className="w-5 h-5" />
                    Ücretsiz Teklif Al
                  </Button>
                </Link>
              </div>

              {/* Visual */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-3xl" />
                <div className="relative bg-secondary/50 rounded-3xl p-8 border border-border">
                  {/* Mock Quote Form */}
                  <div className="space-y-4">
                    <div className="h-12 rounded-xl bg-muted animate-pulse" />
                    <div className="h-24 rounded-xl bg-muted animate-pulse" />
                    <div className="flex gap-4">
                      <div className="h-12 flex-1 rounded-xl bg-muted animate-pulse" />
                      <div className="h-12 w-32 rounded-xl bg-primary/50 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Mock Notification Cards */}
                  <div className="mt-8 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="glass-panel rounded-xl p-4 flex items-center gap-3 animate-slide-up"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="h-3 w-24 bg-foreground/20 rounded mb-2" />
                          <div className="h-2 w-32 bg-muted-foreground/20 rounded" />
                        </div>
                        <div className="trust-badge">Doğrulanmış</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
