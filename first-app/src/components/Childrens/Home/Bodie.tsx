import Svgs from '@/components/Svgs/index.js';
import styles from '@/styles/Home.module.scss'
import BoxMiddle from './BoxMiddle';
export default function Bodie(){
    return (
        <div className={styles.Home}>
            {/* {console.log()} */}
            <div className={styles.Home__imgs_1} ><Svgs img={'TF'} /></div>
            <div className={styles.Home__imgs_2}><Svgs img={'Figma'} /></div>
            <div className={styles.Home__imgs_3}><Svgs img={'ReactSvg'} /></div>
            <div className={styles.Home__imgs_4}><Svgs img={'Python'} /></div>
            <BoxMiddle/>
            <div className={styles.Home__imgs_5}><Svgs img={'SASS'} /></div>
            <div className={styles.Home__imgs_6}><Svgs img={'CO'} /></div>
            <div className={styles.Home__imgs_7}><Svgs img={'SL'} /></div>
            <div className={styles.Home__imgs_8}><Svgs img={'TS'} /></div>
        </div>
    )
}