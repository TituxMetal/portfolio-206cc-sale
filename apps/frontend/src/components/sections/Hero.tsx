export const Hero = () => {
  return (
    <section className='relative my-6 overflow-hidden rounded-lg bg-zinc-800'>
      <img
        src='https://cdn.lgdweb.fr/img2.jpg?v=1'
        alt='Peugeot 206cc 2006'
        className='h-[50vh] w-full object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-zinc-950/60 text-center'>
        <h1 className='text-3xl font-bold text-zinc-100 md:text-4xl'>
          Peugeot 206cc 1.6L 2006 - 2 000 € à discuter
        </h1>
        <p className='mt-2 text-lg text-zinc-300 md:text-xl'>
          Cabriolet fun, vendu en l'état, pour bricoleur passionné !
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
