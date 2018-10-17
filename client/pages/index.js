import Head from 'next/head'
import fetch from "isomorphic-unfetch";

const Page = ({ msg }) =>
  <section>
    <Head>
    <title>eCommerce App</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      {msg}
    </div>
  </section>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/products')
  const json = await res.json()
  return { msg: json }
}

export default Page