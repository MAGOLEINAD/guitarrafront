import React from 'react'
import Guitarra from './Guitarra'
import styles from '../styles/Guitarras.module.css'



const ListadoGuitarras = ({guitarras}) => {
    // console.log(guitarras)
  return (
      <div className={styles.grid}>
    {guitarras.map (guitarra => 
    <Guitarra 
    key={guitarra.id}
    guitarra={guitarra}
    />)}
    </div>
  )
}

export default ListadoGuitarras