import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'pages/Favoritos';
import { Link } from 'react-router-dom';


export default function Card({id, capa, titulo}) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;


  return (
    <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
          <img 
              src={capa} 
              alt={titulo} 
              className={styles.capa}
          />
        </Link>
        <h2>{titulo}</h2>
        <img 
            src={icone} 
            alt="Favoritar filme" 
            className={styles.favoritar}
            onClick={() => {
              adicionarFavorito({id, titulo, capa})
            }}
        />
    </div>
  )
}
