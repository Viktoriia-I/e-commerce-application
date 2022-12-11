import { InferGetServerSidePropsType } from "next"
import getAllProducts from "@framework/product/getAllProducts";
import { getConfig } from "@framework/api/config";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({ products }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return <div>
    {JSON.stringify(products)}
  </div>
}
