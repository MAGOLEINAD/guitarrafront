// import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
import { Layout } from '../../components/Layout'



const EntradaBlog = ({entrada}) => {
    // const router = useRouter()

    const {contenido,imagen,published_at, titulo} = entrada
    console.log(entrada)
  return (
      <Layout pagina={titulo}>
   <main className='contenedor'>
   <article className={styles.entrada}>
       <h1 className='heading'>{titulo}</h1>
       <Image className='nextimage' Layout='responsive' width={800} height= {600} src={imagen.url} alt={titulo} />
        <p>{formatearFecha(published_at)}</p>
        <p>{contenido}</p>
        </article>
   </main>
   </Layout>
  )
}

export default EntradaBlog


export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs/`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    console.log(entradas)
    const paths = entradas.map (entrada =>({ params: {url: entrada.url}}))
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{ url }}) {
   


    const urlBlog = `${process.env.API_URL}/blogs/?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()
    return {
        props:{
            entrada:entrada[0]
        }
    }

}

// export async function getServerSideProps({query:{ id }}) {
//     console.log(id)


//     const url = ${process.env.API_URL}/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()
//     return {
//         props:{
//             entrada
//         }
//     }

// }