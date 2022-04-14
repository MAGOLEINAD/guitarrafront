import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'
import { Layout } from '../../components/Layout'
import { useState } from 'react'




const Producto = ({guitarra,agregarCarrito}) => {
    const [cantidad,setCantidad]= useState(1)
    const {nombre, imagen,descripcion,precio,id} = guitarra[0]
    console.log(guitarra[0])
 
    const handleSelectChange = (e) => {
        setCantidad (parseInt(e.target.value))
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('cantidad no valida')
            return
        }
        agregarCarrito(guitarraSeleccionada)
    }
   
   
    const guitarraSeleccionada = {
        id,
        imagen:imagen[0].url,
        nombre,
        precio,
        cantidad,
    }
  
  return (
      <Layout>
    <div className={styles.grid}>
  
    <Image layout='responsive' width={180} height={350} src={imagen[0].url} alt={nombre}  />
    <div>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.resumen}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <form 
        onSubmit={handleSubmit}
        className={styles.formulario}>
            <label>Cantidad</label>
            <select 
            value={cantidad}
            onChange={handleSelectChange}
            >
                <option value='0'>--Seleccione</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
            <input
            type='submit'
            value='Agregar al Carrito'
            
            />
        </form>
    </div>
    </div>
    </Layout>
  )
}

export default Producto

export async function getServerSideProps({query:{ url }}) {



    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    return {
        props:{
            guitarra
        }
    }

}