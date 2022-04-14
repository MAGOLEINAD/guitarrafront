import React from 'react'
import { formatearFecha } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entrada.module.css'


const Entrada = ({entrada}) => {
    const {titulo,resumen,imagen,published_at,id,url} = entrada 
    
  return (
    <article >
  
        <Image className='nextimage' src={imagen.url} layout='responsive' width={800} height={600} alt={titulo} />
       <h1>{titulo}</h1>
       <p className={styles.fecha}>{formatearFecha(published_at)}</p>
       <p className={styles.resumen}> {resumen}</p>
        <Link href={`/blog/${url}`}><a className={styles.link}>Leer Entrada</a></Link>
    </article>
  )
}

export default Entrada