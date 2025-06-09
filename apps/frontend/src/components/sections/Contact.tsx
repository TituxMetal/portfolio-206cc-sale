export const Contact = () => {
  return (
    <section id='contact' className='my-6 rounded-lg bg-zinc-800 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Contactez-moi</h2>
        <div className='p-6'>
          <p className='mb-4 text-zinc-300'>
            Intéressé par la Peugeot 206cc ? Contactez-moi pour organiser une visite ou un essai
            dans le secteur de <strong>Cernay</strong> et environs, je peux me déplacer !
          </p>
          <p className='text-zinc-200'>
            📞 Téléphone :{' '}
            <a href='tel:+33662100000' className='text-blue-400 hover:underline'>
              06 62 10 00 00
            </a>
          </p>
          <p className='text-zinc-200'>
            📧 Email :{' '}
            <a href='mailto:votre.email@example.com' className='text-blue-400 hover:underline'>
              [Votre email]
            </a>
          </p>
          <p className='mt-4 text-zinc-400'>Disponible pour essais en semaine ou le week-end.</p>
        </div>
      </div>
    </section>
  )
}
