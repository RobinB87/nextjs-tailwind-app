interface Props {
  params: { slug: string[] };
}

// use folder with [...slug] to be able to do something like /products/dairy/milk
// wrap that in extra brackets [[...slug]] to make it optional and be able to do /products
const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
};

export default ProductPage;
