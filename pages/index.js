import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/Blog'
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'

// import styles from '@/styles/Home.module.css'
// import Blog from '@/components/blog'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Memory Lane</title>
        <meta name="description" content="Deploy a static website to function as a blog or journal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.center}>
          <h1 className="text-3xl tracking-wide uppercase font-bold text-violet-900 underline">
            The
          </h1>
          <Image
            className={styles.logo}
            src="/pamLogo-pro.png"
            alt="Pam Logo"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-3xl tracking-wide uppercase font-bold text-green-800 underline">
            Blog
          </h1>
        </div>

        <Blog />

        <div className={styles.description}>
          <p>
            1.9 Assignment: &nbsp;
            <code className={styles.code}>Memory Lane</code>
          </p>
          <p>
            2.6 Assignment: &nbsp;
            <code className={styles.code}>Updating Your Static Website</code>
          </p>
          <div>
            <a
              href="https://github.com/FennellPamela-FS"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/pamLogo-pro-sm.svg"
                alt="Vercel Logo"
                className={styles.pamLogo}
                width={24}
                height={24}
                priority
              /> PamIam
            </a>
          </div>
        </div>

      </main>
    </>
  )
}