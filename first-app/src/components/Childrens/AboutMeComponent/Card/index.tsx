import Svgs from '@/components/Svgs';
import styles from '@/components/Childrens/AboutMeComponent/AboutMeComponent.module.scss'

export default function Card() {
    return (
        <div className={styles.aboutMeComp}>
            <div className={styles.aboutMeComp__cardPresetention}>
                <h3>Um pouco sobre mim...</h3>
                <p>Olá me chamo Diogo Godoi, sou desenvolvedor front-end. Para resumir minha história de como
                    escolhi essa profissão vou falar um pouco sobre minha vida acadêmica.
                    Foi no meu Bacharel em Física Médica pela UNESP onde tive o primeiro contato com a programação.
                    Lá eu começei trabalhando com a linguagem R, para resolver problemas estatisticos e relacionados a dados.
                    Então para ampliar meus conhecimentos resolvi fazer a Pós Graducão da USP em Ciências Matematicas e da Computação,
                    onde aprendi mais uma linguagem, o Python. Para minha dissertação desenvolvi uma Interface para que psicólogos utilizassem o robô NAO em sessões de terapia.
                    Com esse primeiro projeto fiquei ainda mais interessando no mundo da programação, buscando sempre aprender mais !
                </p>
            </div>
            <div className={styles.aboutMeComp__column}>

                <div className={styles.aboutMeComp__tecnogias}>
                    <h3>Algumas tecnologias que já utilizei..</h3>
                    <div className={styles.aboutMeComp__imgs}>
                        <Svgs img={'ReactC'} />
                        <Svgs img={'SASSC'} />
                        <Svgs img={'TSC'} />
                        <Svgs img={'FigmaC'} />
                        <Svgs img={'TFC'} />
                        <Svgs img={'PythonC'} />
                        <Svgs img={'SLC'} />
                        <Svgs img={'COC'} />
                    </div>
                </div>
            </div>
        </div>
    )
}