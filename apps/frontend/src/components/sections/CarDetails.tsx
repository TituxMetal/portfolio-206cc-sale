export const CarDetails = () => {
  const details = [
    { label: 'Marque', value: 'Peugeot' },
    { label: 'Modèle', value: '206 CC 1.6L 16V' },
    { label: 'Puissance', value: '110 ch' },
    { label: 'Année', value: 'Mars 2006' },
    { label: 'Kilométrage', value: '211 000 km (évolutif)' },
    { label: 'Carburant', value: 'Essence' },
    { label: 'Prix', value: '2 000 € (négociable)' }
  ]

  return (
    <section id='details' className='my-6 rounded-lg bg-zinc-800 py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Détails de la voiture</h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {details.map((detail, index) => (
            <div key={index} className='rounded-lg bg-zinc-700 p-4'>
              <span className='text-zinc-400'>{detail.label} :</span>
              <span className='ml-2 text-zinc-200'>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
