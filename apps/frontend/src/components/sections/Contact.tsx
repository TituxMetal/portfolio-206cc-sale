import { FaEnvelope, FaPhone } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <section id='contact' className='my-6 rounded-lg bg-zinc-800 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Contactez-moi</h2>
        <div className='p-6'>
          <p className='mb-4 text-zinc-300'>
            Intéressé par cette Peugeot 206 CC ? Prenez contact pour organiser une visite ou un
            essai dans le secteur de <strong>Cernay</strong>. Je peux me déplacer un peu si besoin.
          </p>
          <p className='text-zinc-200'>
            <FaPhone className='icon' aria-label='Téléphone' /> Téléphone :{' '}
            <a href='tel:+33783557039' className='text-blue-400 hover:underline'>
              +33783557039
            </a>
          </p>
          <p className='text-zinc-200'>
            <FaEnvelope className='icon' aria-label='Email' /> Email :{' '}
            <a href='mailto:206cc@lgdweb.fr' className='text-blue-400 hover:underline'>
              206cc@lgdweb.fr
            </a>
          </p>
          <p className='mt-4 text-zinc-400'>
            Disponible en semaine ou le week-end pour répondre à vos questions.
          </p>
        </div>
      </div>
    </section>
  )
}
