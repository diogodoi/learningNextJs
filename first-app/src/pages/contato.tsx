import Svgs from '@/components/Svgs'
import styles from '@/styles/Contato.module.scss'
import Link from 'next/link';

export default function Contato() {
    const linke = ''
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>Redes sociais:</h1>
                <a href="https://www.linkedin.com/in/diogo-godoi-aa1453251/"><div className={styles.box__link}><span>Linked</span><Svgs img={'Linkedin'} /></div></a>
                <a href="https://github.com/diogodoi"><div className={styles.box__git}><Svgs img={'GitHub'} /><span>Github</span></div></a>
            </div>
        </div>
    )
}