import Header from '@/components/Header'
// import NavBar from '@/components/NavBar'
import NavBar from '@/components/Navbar/NavBar'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.scss'

import Bodie from '@/components/Childrens/Home/Bodie';


export default function Home() {
  return (    
    <main className={styles.main}>
        <body className={styles.Container}>
          <Bodie/>
        </body>     
        
      </main>   
  )
}
