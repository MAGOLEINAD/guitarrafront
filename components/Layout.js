import Head from "next/head"
import { Header } from "./Header"
import { Footer } from "./Footer"


export const Layout = ({children,pagina,guitarra}) => {

    console.log(guitarra)


  return (
      <>
      <Head>
      <title>Guitarra - {pagina}</title>
      <meta name="description" content="Sitio web de Venta de Guitarras"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />
    
      </Head>

    <Header 
    guitarra={guitarra}
    />
    {children}
    <Footer />
    </>
  )
}
Layout.defaultProps = {
  guitarra:null
}
