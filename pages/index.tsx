import { InferGetServerSidePropsType } from "next"

export async function getStaticProps() {
  const products = [1, 2, 3]

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({ products }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>
    {products}
  </div>
}
