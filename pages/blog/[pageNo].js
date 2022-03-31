import React from 'react'
// import { useRouter } from 'next/router'

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    const paths = data.map((currElement)=>{
        return {
            params:{
                pageNo : currElement.id.toString()
            },
        };
    });

    return {
        paths,
        fallback: true // false or 'blocking'
    };
}

// This gets called on every request
export async function getStaticProps(context) {
    const id = context.params.pageNo
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

const blog = ({ data }) => {
    //const router = useRouter();
    //const pageNumber = router.query.pageNo
    return (
        <div>
            {/* <h1>This is "{pageNumber}" content for dynamic routing</h1> */}
            <div>
                <h2>{data.id} - {data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div>
    )
}

export default blog