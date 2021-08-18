import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utilis.module.css'
import Link from "next/link"

const name = 'bluuweb'

export default function Layout({children, title, description,home}) {
    console.log(home)
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={description}></meta>
            </Head>

            <header className={styles.header}>
              {home ? (
                <>
                  <Image
                    priority
                    src="/images/ocean.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                  />
                  <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
              ) : (
                <>
                  <Link href="/">
                    <a>
                      <Image
                        priority
                        src="/images/ocean.jpg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name}
                      />
                    </a>
                  </Link>
                  <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                      <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                  </h2>
                </>
              )}
            </header>
            <nav>
                <Link href="/">
                  <a>Inicio | </a>
                </Link>
                <Link href="/blog">
                  <a>Blog | </a>
                </Link>
                <Link href="/Contact">
                  <a>Contact | </a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
            </nav>

            <main>
                {children}
            </main>
            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}
          </div>
    )
}

Layout.defaultProps = {
    title: "Next.js | mi sitio web",
    description: "Descripcion de mi sitio web"
}
