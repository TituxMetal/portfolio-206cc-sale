export const Gallery = () => {
  const images = [
    'https://cdn.lgdweb.fr/img01.jpeg?v=1',
    'https://cdn.lgdweb.fr/img04.jpeg?v=1',
    'https://cdn.lgdweb.fr/img05.jpeg?v=1',
    'https://cdn.lgdweb.fr/img09.jpeg?v=1',
    'https://cdn.lgdweb.fr/img10.jpeg?v=1'
  ]

  return (
    <section id='gallery' className='section'>
      <div className='container mx-auto p-4 sm:p-6'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Galerie</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          {images.map((src, index) => (
            <a href={src} key={index} target='_blank' rel='noopener noreferrer'>
              <img
                key={index}
                src={src}
                alt={`Peugeot 206 CC ${index + 1}`}
                className='h-full max-h-fit w-full rounded-lg border border-zinc-600 object-contain transition hover:border-blue-400'
              />
            </a>
          ))}
        </div>
        <p className='my-4 text-center text-zinc-400'>
          Envie de voir plus ? Demandez-moi, j'ai d'autres photos sous le coude !
        </p>
      </div>
    </section>
  )
}
