import { Instagram } from "lucide-react"

// WhatsApp Icon Component
function WhatsAppIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// Location Pin Icon Component
function LocationPinIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/60 border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-primary mb-4">Floripa Bar</h4>
            <p className="text-foreground/70 text-sm">
              Bar, Restaurante e Frutos do Mar<br />
              O melhor sabor de Tubarão, SC
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-wrap justify-center gap-4">
              <a href="#inicio" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Sobre
              </a>
              <a href="#cardapio" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Cardápio
              </a>
              <a href="#contato" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-foreground font-semibold mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://www.instagram.com/floripa.bar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center hover:bg-primary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="text-primary" size={20} />
              </a>
              <a
                href="https://wa.me/5548936224040"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center hover:bg-green-600/50 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="text-green-500" size={20} />
              </a>
              <a
                href="https://maps.google.com/?q=Av.+Pedro+Zapelini,+1120+-+Santo+Antônio+de+Pádua,+Tubarão+-+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center hover:bg-primary/50 transition-colors"
                aria-label="Google Maps"
              >
                <LocationPinIcon className="text-primary" size={20} />
              </a>
            </div>
            <p className="text-foreground/60 text-sm">
              (48) 3622-4040
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 mt-8 pt-8">
          <p className="text-center text-foreground/50 text-sm">
            &copy; {currentYear} Floripa Bar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
