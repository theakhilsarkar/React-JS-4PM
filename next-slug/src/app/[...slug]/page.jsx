export default async function Home({ params }) {
  const { slug } = await params;
  return (
    <div>
      <h1>Slug Name - {slug}</h1>
    </div>
  );
}

// server side
// client side / react com
