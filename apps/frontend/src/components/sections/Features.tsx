export const Features = () => {
  const features = [
    { type: 'strong', text: 'Embrayage neuf (2024, 2 300 €)', color: 'text-emerald-400' },
    {
      type: 'strong',
      text: 'Ligne d’échappement inox groupe N (2021, homologuée)',
      color: 'text-emerald-400'
    },
    { type: 'strong', text: 'Train arrière refait (2021)', color: 'text-emerald-400' },
    {
      type: 'strong',
      text: 'Freins refaits (2022, disques, plaquettes)',
      color: 'text-emerald-400'
    },
    { type: 'strong', text: 'CT valide jusqu’à février 2025', color: 'text-emerald-400' },
    { type: 'strong', text: 'Pack sport, jantes 17", look cabriolet', color: 'text-emerald-400' },
    {
      type: 'default',
      text: 'Carrosserie : capot écaillé, rayures, bosse arrière droit',
      color: 'text-zinc-400'
    },
    { type: 'default', text: 'Pneus avant à changer', color: 'text-zinc-400' },
    { type: 'default', text: 'Coupelles d’amortisseurs usées', color: 'text-zinc-400' },
    { type: 'default', text: 'Corrosion légère sur châssis (notée au CT)', color: 'text-zinc-400' },
    {
      type: 'default',
      text: 'Vitres électriques passager/arrière faibles',
      color: 'text-zinc-400'
    },
    { type: 'default', text: 'Joints cabrio : fuites sous forte pluie', color: 'text-zinc-400' },
    { type: 'default', text: 'Vérin de coffre à changer', color: 'text-zinc-400' }
  ]

  return (
    <section id='features' className='my-6 rounded-lg bg-zinc-800 py-6'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Caractéristiques & État</h2>
        <ul className='space-y-2'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-start'>
              <span className={`mr-2 ${feature.color}`}>
                {feature.type === 'strong' ? '✔' : '⚠'}
              </span>
              <span className={feature.color}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
