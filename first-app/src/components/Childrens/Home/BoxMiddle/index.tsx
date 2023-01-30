import styles from './BoxMiddle.module.scss';


export default function BoxMiddle() {
    return (
        <div className={styles.boxMiddle}>

            <div className={styles.boxMiddle__boxAmarelo__topo_esquerda}></div>
            <div className={styles.boxMiddle__boxAmarelo__baixo_esquerda}></div>
            <div className={styles.boxMiddle__boxAmarelo__topo_direito}></div>
            <div className={styles.boxMiddle__text}>
                <p>01 &lt; Olá ! Meu nome é <span>Diogo</span>. /&gt;</p>
                <p>02 &lt; Sou desenvolvedor <span>Front-end</span>. /&gt;</p>
                <p>03 &lt; Como posso te <span>ajudar</span>? /&gt;</p>
            </div>
        </div>
    )
}