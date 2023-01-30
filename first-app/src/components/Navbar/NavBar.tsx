import styles from './Navbar.module.scss';
import Link from 'next/link';
import Svgs from '@/components/Svgs/index.js';

export default function NavBar(){
    const rotas=[{
        label:'Home',
        to:'/',
        icon:'House'
    },{
        label:'Sobre',
        to:'sobre-mim',
        icon:'Person'
    },
    // {
    //     label:'Projetos',
    //     to:'projects',
    //     icon:'Livro',
    // },
    {
        label:'Contato',
        to:'contato',
        icon:'Arroba'
    }]
    
    
    return(
                
        <div  >
            <ul className={styles.boxMenu}>
                {rotas.map((rota,idx)=>(
                    <li key={idx} className={styles.boxMenu__list}  >
                        <Link href={rota.to} className={styles.boxMenu__list__item} >
                            <Svgs img={rota.icon} className={styles.boxMenu__icon}/>
                            {rota.label}
                        </Link>

                    </li>
                ))}
            </ul>
            
        </div>
    )
}