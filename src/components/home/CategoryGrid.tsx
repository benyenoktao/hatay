import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Home, 
  Truck, 
  Utensils, 
  ShoppingBag, 
  Stethoscope,
  GraduationCap,
  Car,
  Scissors,
  Building2
} from 'lucide-react';

const categories = [
  { id: 'construction', icon: Building2, label: 'İnşaat & Yapı', count: 245, color: 'from-orange-500 to-amber-500' },
  { id: 'electrical', icon: Wrench, label: 'Elektrik & Tesisat', count: 189, color: 'from-blue-500 to-cyan-500' },
  { id: 'home', icon: Home, label: 'Ev Hizmetleri', count: 312, color: 'from-emerald-500 to-green-500' },
  { id: 'transport', icon: Truck, label: 'Nakliyat', count: 87, color: 'from-purple-500 to-violet-500' },
  { id: 'food', icon: Utensils, label: 'Yeme & İçme', count: 423, color: 'from-red-500 to-rose-500' },
  { id: 'shopping', icon: ShoppingBag, label: 'Alışveriş', count: 567, color: 'from-pink-500 to-fuchsia-500' },
  { id: 'health', icon: Stethoscope, label: 'Sağlık', count: 156, color: 'from-teal-500 to-emerald-500' },
  { id: 'education', icon: GraduationCap, label: 'Eğitim', count: 98, color: 'from-indigo-500 to-blue-500' },
  { id: 'automotive', icon: Car, label: 'Otomotiv', count: 234, color: 'from-slate-500 to-zinc-500' },
  { id: 'beauty', icon: Scissors, label: 'Güzellik & Bakım', count: 178, color: 'from-rose-500 to-pink-500' },
];

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kategoriler
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hatay'ın en güvenilir esnaflarını kategorilere göre keşfedin
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group glass-card p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.label}</h3>
                <span className="text-sm text-muted-foreground">{category.count} işletme</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
