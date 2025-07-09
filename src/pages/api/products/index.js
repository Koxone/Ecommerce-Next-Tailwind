import { fetchShopify } from '@/lib/shopify';

export default async function handler(req, res) {
  const query = `
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          description
          images(first: 10) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                }
              }
            }
          }
          options {
            name
            values
          }
          about: metafield(namespace: "custom", key: "about") { value }
          gender2: metafield(namespace: "custom", key: "gender2") { value }
          categories: metafield(namespace: "custom", key: "categories") { value }
          is_new: metafield(namespace: "custom", key: "is_new") { value }
          is_sale: metafield(namespace: "custom", key: "is_sale") { value }
        }
      }
    }
  }
  `;

  try {
    const data = await fetchShopify(query);
    res.status(200).json(data.products.edges.map((edge) => edge.node));
  } catch (error) {
    console.error('Shopify API Error:', error);
    res.status(500).json({ error: 'Shopify API error' });
  }
}
