import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Blogs from './blogs.js'
import FetchData from '../services/fetchData.js'
import {useEffect , useState} from 'react'
export default function Home() {
  const [data , setData] = useState([])
  const [error , setError] = useState(false)

  useEffect(()=>{
     ;(async ()=>{
      let res = await FetchData.getData()
      if(!res){
        setError(true)
        return 0
      } else{

     setData(res)
            console.log(data)
      }
     })()
  }, [])


  return (
       <section className={styles.style1}>
         
         <Head>
           <title>First Next Project</title>
         </Head>

         <h1>Best Site</h1>
         <Link href="/blogs">
           <a>Blogs</a>
         </Link>
      
         <Blogs />
         
         <ul>
           {
            data.map((e)=>{
              return (
              <li key={e.id}>
                 <p className={styles.name}>{e.name}</p>
                 <span>{e.email}</span><br />
                 <strong>{e.address.city}</strong>
              </li>
              )
            })
           }
         </ul>
       </section>
  )
}
