import { useState, useEffect } from 'preact/hooks';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '/musica', label: 'Música' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/eventos', label: 'Eventos' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      class={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? 'border-b border-gray-800 bg-black'
          : isScrolled
            ? 'border-b border-gray-800 bg-black/80 backdrop-blur-md'
            : 'border-transparent'
      }`}
    >
      <div class="container mx-auto flex h-20 items-center justify-between px-4">
        <div class="flex items-center">
          <a
            href="/"
            class="font-display text-2xl font-bold tracking-wider text-white"
          >
            DJ LABØ
          </a>
        </div>

        <nav class="hidden md:block">
          <ul class="flex items-center gap-8">
            {navLinks.map(link => (
              <li>
                <a
                  href={link.href}
                  class="text-base text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div class="hidden md:block">
          <a
            href="/contacto"
            class="rounded-full bg-primary px-6 py-2 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Contacto
          </a>
        </div>

        <button
          class="z-40 p-2 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        class={`fixed inset-0 top-0 z-30 bg-black backdrop-blur-md transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-${isMobileMenuOpen ? 'auto' : 'none'}`}
        tabIndex={-1}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav class="flex flex-col items-center justify-center gap-8 pt-16">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              class="text-2xl text-gray-300 transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contacto"
            class="mt-4 rounded-full bg-primary px-8 py-3 text-xl font-medium text-white transition-opacity hover:opacity-90"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
