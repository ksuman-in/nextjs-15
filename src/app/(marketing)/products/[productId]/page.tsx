import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Product {productId} Detail</h1>
      <p>This is the product detail page.</p>
      {/* Reviews for that products list with Link */}
      <ul>
        <li>
          <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/3`}>Review 3</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/4`}>Review 4</Link>
        </li>
      </ul>
    </div>
  );
}
