import { FaCamera, FaCar, FaHome, FaMailBulk, FaStar, FaTools } from 'react-icons/fa'

export const NavBar = () => {
  return (
    <header className='flex items-center justify-between bg-sky-900 p-6 font-semibold text-sky-200'>
      <nav className='mx-auto flex w-full max-w-screen-xl gap-4'>
        <ul className='flex w-full items-center justify-around'>
          <li>
            <a href='/' className='navLink'>
              <FaHome className='icon' aria-label='Home' />
              Accueil
            </a>
          </li>
          <li>
            <a href='#details' className='navLink'>
              <FaCar className='icon' aria-label='Details' />
              Détails
            </a>
          </li>
          <li>
            <a href='#features' className='navLink'>
              <FaTools className='icon' aria-label='Features' />
              Caractéristiques
            </a>
          </li>
          <li>
            <a href='#gallery' className='navLink'>
              <FaCamera className='icon' aria-label='Gallery' />
              Galerie
            </a>
          </li>
          <li>
            <a href='#why-buy' className='navLink'>
              <FaStar className='icon' aria-label='Why Buy' />
              Pourquoi acheter ?
            </a>
          </li>
          <li>
            <a href='#contact' className='navLink'>
              <FaMailBulk className='icon' aria-label='Contact' />
              Contactez-moi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
