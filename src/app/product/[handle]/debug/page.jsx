import { getProductByHandle } from '@/lib/shopify';
import ProductDetailClient from '@/components/ProductDetailClient';

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params; // 👈 corregido
  const { handle } = resolvedParams;

  const product = await getProductByHandle(handle);

  return <ProductDetailClient product={product} />;
}
