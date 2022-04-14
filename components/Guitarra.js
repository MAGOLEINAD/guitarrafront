import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'


const Guitarra = ({guitarra}) => {
    const {nombre, imagen,descripcion,precio,url} = guitarra
    // console.log(guitarra)
  return (
      <div className={styles.grid}>
  
    <Image layout='responsive' width={180} height={350} src={imagen[0].url} alt={nombre}  />
    <div>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.resumen}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} >
            <a className={styles.link}>Ver Producto</a>
            
        </Link>
    </div>
    </div>
  )
}

export default Guitarra