import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useContext } from 'react'
import { FavoritosContext } from 'contextos/Favoritos'

export default function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <div>
      <Banner imagem="favoritos" />
      <Titulo><h1>Meus favoritos</h1></Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>
    </div>
  )
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);

  }
  return {
    favorito,
    adicionarFavorito
  }
}