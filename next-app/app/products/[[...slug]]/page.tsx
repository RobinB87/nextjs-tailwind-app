interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

// use folder with [...slug] to be able to do something like /products/dairy/milk
// wrap that in extra brackets [[...slug]] to make it optional and be able to do /products
// user searchParams to be able to use query string params, like: /products?sortOrder=name
const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
