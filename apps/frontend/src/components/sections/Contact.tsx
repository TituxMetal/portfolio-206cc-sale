import { FaEnvelope, FaPhone } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className='container mx-auto p-4 sm:p-6'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Contactez-moi</h2>
        <div className='flex flex-col gap-4'>
          <p className='text-zinc-300'>
            Elle vous laisse sous le charme ? Vous trouvez qu'elle a du potentiel ?
          </p>
          <p className='mb-2 text-zinc-300'>
            C'est le moment de me contacter, laissez-moi un message sur mon répondeur ou directement
            par email pour organiser une visite ou un essai, elle se trouve dans le secteur de{' '}
            <strong>Cernay</strong>.
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
            Je suis disponible en semaine ou le week-end pour répondre à vos questions.
          </p>
        </div>
      </div>
    </section>
  )
}
