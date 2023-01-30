import styles from '@/styles/Footer.module.scss'
import Svgs from '@/components/Svgs/index'


export default function Footer(){
    return(
    <footer className={styles.Footer}>
        <a href="https://www.linkedin.com/in/diogo-godoi-aa1453251/"><div ><Svgs img={'Linkedin'} /></div></a>
        <a href="https://github.com/diogodoi"> <div ><Svgs img={'GitHub'} /></div></a>
    </footer>
    )
}