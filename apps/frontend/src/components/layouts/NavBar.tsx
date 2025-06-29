import { useEffect, useState } from 'react'
import { FaCamera, FaCar, FaHome, FaMailBulk, FaStar, FaTools } from 'react-icons/fa'

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let hideTimer: NodeJS.Timeout

    const showNavbar = () => {
      const isPastThreshold = window.scrollY > 50

      setIsVisible(true)
      clearTimeout(hideTimer)

      hideTimer = setTimeout(() => {
        setIsVisible(!isPastThreshold)
      }, 4000)
    }

    window.addEventListener('scroll', showNavbar)
    window.addEventListener('touchstart', showNavbar)
    window.addEventListener('click', showNavbar)

    return () => {
      window.removeEventListener('scroll', showNavbar)
      window.removeEventListener('touchstart', showNavbar)
      window.removeEventListener('click', showNavbar)
      clearTimeout(hideTimer)
    }
  }, [])

  const navItems = [
    { href: '#hero', icon: FaHome, label: 'Accueil', shortLabel: 'Accueil', ariaLabel: 'Home' },
    {
      href: '#details',
      icon: FaCar,
      label: 'Détails',
      shortLabel: 'Détails',
      ariaLabel: 'Details'
    },
    {
      href: '#features',
      icon: FaTools,
      label: 'Caractéristiques',
      shortLabel: 'Caract.',
      ariaLabel: 'Features'
    },
    {
      href: '#gallery',
      icon: FaCamera,
      label: 'Galerie',
      shortLabel: 'Galerie',
      ariaLabel: 'Gallery'
    },
    {
      href: '#why-buy',
      icon: FaStar,
      label: 'Pourquoi acheter ?',
      shortLabel: 'Pourquoi ?',
      ariaLabel: 'Why Buy'
    },
    {
      href: '#contact',
      icon: FaMailBulk,
      label: 'Contactez-moi',
      shortLabel: 'Contact',
      ariaLabel: 'Contact'
    }
  ]

  const visibilityClasses = ['-translate-y-full', 'translate-y-0']

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 bg-sky-900 transition-transform duration-300 ease-in-out ${visibilityClasses[Number(isVisible)]}`}
    >
      <nav className='mx-auto flex w-full max-w-screen-xl px-4 py-3 md:py-4'>
        <ul className='flex w-full items-center justify-around'>
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={index}>
                <a href={item.href} className='navLink'>
                  <Icon className='size-4 sm:size-5' aria-label={item.ariaLabel} />
                  <span className='text-center leading-tight sm:text-left'>
                    <span className='sm:hidden'>{item.shortLabel}</span>
                    <span className='hidden sm:inline'>{item.label}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
