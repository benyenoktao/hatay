import { useState } from 'react';
import { Search, Mic, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const popularSearches = [
  'Prefabrik ev yapan ustalar',
  'Elektrikçi',
  'Tesisat ustası',
  'İnşaat malzemesi',
  'Mobilya tamiri',
];

export function HeroSearch() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Search Container */}
      <div className={`search-hero transition-all duration-300 ${isFocused ? 'ring-2 ring-primary/50' : ''}`}>
        <div className="flex items-center gap-3 p-3">
          {/* AI Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-xs font-medium text-primary hidden sm:inline">AI Arama</span>
          </div>
          
          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ne arıyorsunuz? Örn: 'Antakya'da prefabrik ev yapan ustalar'"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg outline-none"
          />
          
          {/* Voice Search */}
          <Button variant="ghost" size="icon" className="shrink-0">
            <Mic className="w-5 h-5 text-muted-foreground" />
          </Button>
          
          {/* Search Button */}
          <Button variant="hero" size="lg" className="shrink-0">
            <Search className="w-5 h-5" />
            <span className="hidden sm:inline">Ara</span>
          </Button>
        </div>
      </div>

      {/* Location Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-sm">Hatay, Türkiye</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary">Konum aktif</span>
      </div>

      {/* Popular Searches */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        <span className="text-sm text-muted-foreground">Popüler:</span>
        {popularSearches.map((search) => (
          <button
            key={search}
            onClick={() => setQuery(search)}
            className="category-chip hover:scale-105 transition-transform"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}
