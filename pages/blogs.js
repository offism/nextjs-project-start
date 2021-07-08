import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
       <section className={styles.style1}>
         
         <Head>
           <title>First Next Project</title>
         </Head>

         <h1>Best Blogs</h1>
         <Image 
         src="/images/jocker.jpg"
         alt="photo" 
         width={480}
         height={400} 
         />
       </section>
  )
}
