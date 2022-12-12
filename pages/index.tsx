import { InferGetServerSidePropsType } from "next"
import getAllProducts from "@framework/product/getAllProducts";
import { getConfig } from "@framework/api/config";
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';


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
  return (
    <div>
      {products.slice(0, 3).map((product) =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  )
}

Home.Layout = Layout;