import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";


export default function Cabecallho() {
  return (
    <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt='Logo do CineTag' />
        </Link>
        <nav>
            <CabecalhoLink url="./" >Home</CabecalhoLink>
            <CabecalhoLink url="./favoritos" >Favoritos</CabecalhoLink>
        </nav>
    </header>
  )
}
