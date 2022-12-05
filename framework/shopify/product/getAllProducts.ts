import fetchApi from '../utils/fetchApi';
import getAllProductsQuery from '../utils/queries/getAllProducts';
import { ProductConnection } from '../schema';
import { normalizeProduct } from '../utils/normalize';

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products = data.products.edges.map(({ node: product }) => {
   return normalizeProduct(product);
  }) ?? [];

  return products;
};

export default getAllProducts;
