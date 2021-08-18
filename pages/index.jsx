import Layout from "../components/Layout";
import utilStyles from '../styles/utilis.module.css'


export default function Home() {
  return (
    <Layout 
    title="Home"
    description="esta es la descripcion del home"
    home
    >
     <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
    </Layout>
  )
}
