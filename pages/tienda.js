import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras'


const Tienda = ({guitarras}) => {

  const router = useRouter()

  return (
      <>
    <Layout pagina='Tienda Virtual'>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <ListadoGuitarras
        guitarras={guitarras}
        />
        </main>
    </Layout>
    </>
  )
}

export default Tienda

export async function getServerSideProps({query:{ id }}) {
  console.log(id)


  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()
  return {
      props:{
          guitarras
      }
  }

}