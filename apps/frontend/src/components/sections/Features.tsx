import { HiOutlineCheckCircle, HiOutlineExclamation } from 'react-icons/hi'

const CheckIcon = () => (
  <HiOutlineCheckCircle className='list-icon text-emerald-400' aria-label='Atout' />
)
const WarningIcon = () => (
  <HiOutlineExclamation className='list-icon text-yellow-600' aria-label='Attention' />
)

export const Features = () => {
  return (
    <section id='features' className='section'>
      <div className='container mx-auto p-4 sm:p-6'>
        <h2 className='mb-6 text-2xl font-bold text-zinc-100'>Caractéristiques & État</h2>
        <div className='mb-8'>
          <h3 className='text-xl font-semibold text-zinc-200'>Atouts principaux</h3>
          <p className='mt-2 text-zinc-400'>
            Cette 206 CC est vendue en l'état, idéale pour un passionné de mécanique.
          </p>
          <ul className='mt-4 grid gap-4 sm:grid-cols-2'>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              L'embrayage (câble + kit complet) a été remplacé en 2024 (environ 2 300 €, facture
              disponible), incluant deux dépannages, une révision et le changement du roulement
              avant gauche.
            </li>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              Ligne d'échappement inox Friedrich complète, avec sortie ovale style DTM, offrant une
              sonorité distinctive, homologuée et conforme pour le contrôle technique.
            </li>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              Le train arrière a été remplacé il y a 5 ans (environ 650 €, facture disponible).
            </li>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              Les freins ont été remplacés il y a 4 ans (environ 1 000 €, facture disponible),
              incluant disques et plaquettes avant et arrière, ainsi que les conduites et les
              raccords.
            </li>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              Les jantes 17" (205/40R17) donnent un look sympa à ce cabriolet.
            </li>
            <li className='flex items-start text-zinc-300'>
              <CheckIcon />
              Le système de toit éscamotable fonctionne correctement.
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-semibold text-zinc-200'>État actuel</h3>
          <p className='mt-2 text-zinc-400'>Voici les points à vérifier :</p>
          <ul className='mt-4 grid gap-4 sm:grid-cols-2'>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              La carrosserie présente quelques rayures ainsi qu'une petite bosse à l'arrière droit
              (déjà présente lors de mon achat) et la peinture manque sur plusieurs zones du capot,
              visible sur les photos.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Les pneus avant (205/40R17) sont à surveiller pour le prochain contrôle technique.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Les jantes 17" ne sont plus toutes neuves.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Quelques gouttes d'eau coulent côté passager sous forte pluie, surtout en freinant,
              peut-être les joints de toit à vérifier.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Les plaquettes de frein avant sont peut-être à vérifier.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Un claquement se produit en tournant le volant, surtout pour se stationner, peut-être
              lié aux coupelles d'amortisseurs, à vérifier.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Une corrosion légère sous le châssis a été signalée lors du dernier contrôle
              technique.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              La vitre électrique côté passager est un peu lente et colle légèrement, les custodes à
              l'arrière remontent parfois difficilement.
            </li>
            <li className='flex items-start text-zinc-300'>
              <WarningIcon />
              Vérins de coffre : il faut le vouloir, pour ouvrir le coffre. À vérifier.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
