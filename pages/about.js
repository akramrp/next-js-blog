import Title from '../components/Title'

export async function getServerSideProps(){
    console.log('email=>', process.env.PRIVATE_EMAIL_ID)
    return{
        props:{}
    }
}

export default function About() {
    // console.log('email=>', process.env.PRIVATE_EMAIL_ID) // browser return undefine for security properse
    return (
        <>
            <style jsx>
                {
                    `h1 {
                        color:red;
                    }
                    p {
                        font-size:15px;
                    }
                    `
                }
            </style>
            <Title title="About" />
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem inventore aperiam veniam impedit quas necessitatibus quis tempore delectus recusandae dolores animi nostrum sequi suscipit dolor ut adipisci, officiis minima?</p>
        </>
    )
}