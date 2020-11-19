import {graphql,useStaticQuery} from 'gatsby';

const usePropiedades = () =>{

    const datos = useStaticQuery(graphql`
        query{
            allStrapiPropiedades{

                nodes{
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categoria{
                        nombre
                    }
                    agentes{
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp{
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }`
    );

    return datos.allStrapiPropiedades.nodes.map(propiedades => ({
        nombre:propiedades.nombre,
        descripcion:propiedades.descripcion,
        imagen:propiedades.imagen,
        id:propiedades.id,
        estacionamiento:propiedades.estacionamiento,
        habitaciones:propiedades.habitaciones,
        precio:propiedades.precio,
        wc:propiedades.wc,
        agentes:propiedades.agentes,
        categoria:propiedades.categoria
    }
    ))

}

export default usePropiedades;