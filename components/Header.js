import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Header.module.css'



export const Header = ({guitarra}) => {
const router = useRouter()
// console.log(router.pathname)


  return (
    <>
    <header className={styles.header}>
        <div className='contenedor'>
          <div className={styles.barra}>
        <Link passHref href='/'>
          <a>
        <Image priority='true' width={200} height={100} alt='logo' src='/img/logo.svg' />
        </a>
        </Link>
        <nav className={styles.navegacion}>
          <Link href='/'><a>Inicio</a></Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/tienda'>Tienda</Link>
          <Link href='/carrito'>
            <a>
            <Image layout='fixed' width={30} height={25} src='/img/carrito.png' alt='carrito'/>
            </a>
          </Link>
        </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
          <h1>Modelo {guitarra.nombre}</h1>
          <p>{guitarra.descripcion}</p>
          <p className={styles.precio}>{guitarra.precio}</p>
          <Link href={`/guitarras/${guitarra.url}`}> 
          <a className={styles.enlace}>
            Ver Producto
          </a>
          </Link>
          </div> 
        )}
        </div>
            {router.pathname === '/' && (
              <div className={styles.guitarra}>
              <Image layout='fixed' width= {500} height={1200} alt='guitarra' src='/img/header_guitarra.png' />
              </div>
            )}
    </header>
    </>
  )
}
