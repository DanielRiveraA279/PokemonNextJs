import { FC } from "react"
import Head from "next/head"
import { useRouter } from 'next/router';

import { Navbar } from "../ui"

interface Props {
    title?: String
}

//obtener el path si estamos en el frontend lo recuperamos y si estamos en el backend solo un string vacio
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name="author" content="Fernando Herrera" />
                <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            {/* Navbar */}
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
