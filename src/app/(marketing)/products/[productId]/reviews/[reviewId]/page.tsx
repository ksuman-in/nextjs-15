import { notFound } from "next/navigation";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 10) {
    notFound();
  }
  return (
    <div>
      <h1>
        Product {productId} with review {reviewId} Details
      </h1>
      <p>This is the details page for a specific review.</p>
    </div>
  );
}
