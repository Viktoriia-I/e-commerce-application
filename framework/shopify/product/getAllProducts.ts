import getAllProductsQuery from '../../utils /queries/getAllProducts';

type FetchedParams = {
  query: string;
};

const fetchApi = async ({ query }: FetchedParams) => {
  const url = 'http://localhost:4000/graphql';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({ query: getAllProductsQuery });

  return products.data;
};

export default getAllProducts;