import Curso from "../components/Curso";
import { Layout } from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";
import ListadoGuitarras from "../components/ListadoGuitarras";


export default function Home({guitarras,curso,entradas}) {
  // console.log(curso)
  return (
  <>
  <Layout
   pagina='Inicio'
   guitarra={guitarras[3]}
   >
    <main className={`contenedor`}>
    <h1 className="heading">Nuestra Coleccion</h1>
    <ListadoGuitarras 
    guitarras={guitarras}
    />
    </main>
    <Curso 
    curso={curso}
    />
    <section className="contenedor">
  <ListadoBlog
  entradas={entradas}
  />
  </section>
  </Layout>

   
 
    </>
  )
}

export async function getServerSideProps({query:{ id }}) {


//CODIGO PARA MULTIPLES FETCHS
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras,resCursos,resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras,curso,entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()

  ])

  return {
      props:{
          guitarras,
          curso,
          entradas
      }
  }

}