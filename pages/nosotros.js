import Link from "next/link";
import { Layout } from "../components/Layout";
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <>
    <Layout pagina='Nosotros'>
    <h1 className="heading">Nosotros</h1>
    <main className={`contenedor ${styles.grid}`}>
   
    <div>
    <Image className="nextimage" layout="responsive" width={600} height={450} alt='logo' src='/img/nosotros.jpg' />
    </div>
    <div>
    <p>Composición de Música y Letra Original. Pre Producción, Grabación, 
      Mezcla y Mastering. Artistas, Cine, Tv y Radio. Administración, 
      protección y promoción de obras musicales.</p>
      <p>
       Asesoría personal, 
      trámites para autores y compositores. Administración, protección y 
      promoción de obras musicales. Asesoría personal, trámites para autores y 
      compositores.
      </p>
      </div>
    </main>
  
    </Layout>
    </>
  )
}

export default Nosotros