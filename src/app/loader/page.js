'use client'
import Image from 'next/image'
import Skeleton from '@/components/Skeleton'
import pokemonLogo from '@/app/favicon.ico';
import { useQuery } from '@tanstack/react-query'
import Pokemon from '@/components/Pokemon'

async function getPokemons(){
  const res = await fetch('https://pokeapi.co/api/v2/ability')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  let filtered = await data.results.map((pokemon, index) => {
    let paddedIndex = ('00' + (index + 1)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
    return {
      ...pokemon,
      imageUrl: image
    }
  }) 
  
  return filtered
}

export default function Loader() {

  const {status, data : pokemons, error} = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Image src={pokemonLogo} alt='Pokemon logo' width={150} height={150} className='objet-cover'/>
     <h2 className='mt-4'>Welcome to Brazil!</h2>
     <div className='w-full md:w-10/12 m-auto flex mt-5 mb-5 flex-col md:grid md:grid-cols-3 md:grid-row-1 md:items-center gap-4 items-center'>
      
     {status === 'loading' && <Skeleton number={15} />}   
      {status === 'success' && pokemons?.map((pokemon, index) => <Pokemon 
      image={pokemon.imageUrl} 
      name={pokemon.name} 
      key={index}/>)}
     </div>
    </main>
  )
}