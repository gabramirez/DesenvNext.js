import Link from "next/dist/client/link"
import styles from '../styles/navegador.module.css'

import { loadGetInitialProps } from "next/dist/shared/lib/utils"
export default function Navegador(props) {
    return(
        <div>
        <Link href={props.destino} passHref>
            <div className={styles.navegador} style={{
                  backgroundColor: props.cor ?? 'dodgerblue'
            }}>

            {props.texto}

            </div>
     
        </Link>

     </div>
    )
}