import Layout from "../../components/layout";
import Product from "../../components/product";
import { getPathsFromIds } from "../../libs/utils";
import { getItemData } from "../../libs/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
