export const Hero = () => {
  return (
    <section id='hero' className='section'>
      <img
        src='https://cdn.lgdweb.fr/img03.jpeg?v=1'
        alt='Peugeot 206 CC 2006'
        className='h-screen w-full object-cover lg:h-full lg:object-contain'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/60 text-center lg:rounded-lg'>
        <h1 className='text-2xl font-bold text-zinc-100 sm:text-3xl md:text-4xl lg:text-5xl'>
          <span className='hidden sm:inline'>Peugeot </span>206 CC 1.6L de 2006 <br />
          <span className='text-sky-300 sm:mt-4 sm:block'>1 800 € à discuter</span>
        </h1>
        <p className='mt-2 text-lg font-semibold text-zinc-300 sm:text-xl xl:text-2xl'>
          Un cabriolet pour bricoleurs <br className='md:hidden' /> prêts à retrousser leurs manches
        </p>
        <a
          href='#contact'
          className='mt-4 rounded-lg bg-blue-400 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-blue-400/85'
        >
          Contactez-moi
        </a>
      </div>
    </section>
  )
}
