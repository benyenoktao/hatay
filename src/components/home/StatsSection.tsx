import { Building2, Users, Star, MapPin } from 'lucide-react';

const stats = [
  { icon: Building2, value: '2,500+', label: 'Kayıtlı İşletme' },
  { icon: Users, value: '15,000+', label: 'Aktif Kullanıcı' },
  { icon: Star, value: '4.8', label: 'Ortalama Puan' },
  { icon: MapPin, value: '12', label: 'İlçe Kapsamı' },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
