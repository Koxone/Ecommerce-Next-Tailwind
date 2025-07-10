import { getProductByHandle } from '@/lib/shopify';
import Image from 'next/image';

export default async function ProductPage({ params }) {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    return (
      <div className="p-10 text-center text-white">Producto no encontrado</div>
    );
  }

  const price = parseFloat(product.variants.edges[0].node.price.amount).toFixed(
    2
  );
  const images = product.images.edges;

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Images */}
        <div className="space-y-4">
          {images.map((img, idx) => (
            <Image
              key={idx}
              src={img.node.url}
              alt={img.node.altText || product.title}
              width={600}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{product.title}</h1>
          <p className="text-gray-300">{product.description}</p>
          <p className="text-2xl font-semibold">${price} USD</p>

          <button
            className="mt-4 rounded bg-white px-6 py-3 text-black transition hover:bg-gray-200"
            disabled
          >
            Add to Cart (soon)
          </button>
        </div>
      </div>
    </main>
  );
}
