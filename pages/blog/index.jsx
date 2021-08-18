import Layout from "../../components/Layout";
import Link from "next/link";

export default function index({data}) {
    return (
        <Layout>
            <h3>Listas de Posts</h3>
            {
                data.map(({id, title, body}) => (
                    <div key={id}>
                        <h3>
                            <Link href={`/blog/${id}`}>
                            <a>{id} - {title}</a>
                            </Link>
                        </h3>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    );
}

export async function getStaticProps (){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return{
            props:{
                data
            }
        }
    
    } catch (error) {
        console.log(error)
    }   
}
