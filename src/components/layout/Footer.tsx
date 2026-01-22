import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Nasıl Çalışır?', href: '/how-it-works' },
    { label: 'Güvenlik', href: '/security' },
    { label: 'İletişim', href: '/contact' },
  ],
  businesses: [
    { label: 'İşletme Kaydı', href: '/register-business' },
    { label: 'Fiyatlandırma', href: '/pricing' },
    { label: 'Esnaf Paneli', href: '/merchant' },
    { label: 'Başarı Hikayeleri', href: '/success-stories' },
  ],
  support: [
    { label: 'Yardım Merkezi', href: '/help' },
    { label: 'SSS', href: '/faq' },
    { label: 'Şikayet Bildirimi', href: '/report' },
    { label: 'Kullanım Koşulları', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-emerald flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">Hatay</span>
                <span className="font-display font-bold text-lg text-primary">Esnaf</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Hatay'ın yerel esnaf ekosistemi. Güvenilir, doğrulanmış ve 2026 standartlarında 
              dijital ticaret platformu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">İşletmeler</h3>
            <ul className="space-y-3">
              {footerLinks.businesses.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="flex flex-wrap gap-6 py-8 mt-8 border-t border-border">
          <a href="mailto:info@hatayesnaf.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            info@hatayesnaf.com
          </a>
          <a href="tel:+903261234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +90 326 123 45 67
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Antakya, Hatay, Türkiye
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 HatayEsnaf. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
