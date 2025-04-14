export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug.length === 2) {
    return (
      <div>
        <h1>
          Documentation for {slug[0]} - {slug[1]}
        </h1>
        <p>
          This is the documentation page for {slug[0]} - {slug[1]}.
        </p>
      </div>
    );
  }
  if (slug.length === 1) {
    return (
      <div>
        <h1>Documentation for {slug[0]}</h1>
        <p>This is the documentation page for {slug[0]}.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Documentation</h1>
      <p>This is the documentation page in slug</p>
    </div>
  );
}
