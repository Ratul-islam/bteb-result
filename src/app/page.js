import Image from 'next/image'
import styles from './page.module.css'
import GetData from '@/components/converttext/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <GetData/>
    </main>
  )
}
