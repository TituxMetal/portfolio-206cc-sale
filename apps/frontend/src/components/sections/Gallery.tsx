export const Gallery = () => {
  const images = [
    'https://cdn.lgdweb.fr/img1.jpg?v=1',
    'https://cdn.lgdweb.fr/img2.jpg?v=1',
    'https://cdn.lgdweb.fr/img3.jpg?v=1',
    'https://cdn.lgdweb.fr/img4.jpg?v=1'
  ]

  return (
    <section id='gallery' className='my-6 rounded-lg bg-zinc-800 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Galerie</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Peugeot 206cc ${index + 1}`}
              className='h-48 w-full rounded-lg border border-zinc-600 object-cover transition hover:border-blue-400'
            />
          ))}
        </div>
        <p className='mt-4 text-center text-zinc-400'>Plus de photos disponibles sur demande !</p>
      </div>
    </section>
  )
}
