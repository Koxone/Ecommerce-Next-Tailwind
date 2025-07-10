const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function fetchShopify(query, variables = {}) {
  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/2023-07/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    }
  );

  const json = await response.json();

  if (json.errors) {
    console.error('Shopify API Error:', JSON.stringify(json.errors, null, 2));
    throw new Error('Shopify API Error');
  }

  return json.data;
}

export async function testConnection() {
  const query = `{ shop { name } }`;
  const data = await fetchShopify(query);
  console.log('Shopify Store Data:', JSON.stringify(data, null, 2));
  if (typeof window !== 'undefined') {
    alert(`Shopify Store: ${data.shop.name}`);
  }
}

export async function getAllProducts() {
  const query = `
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) { edges { node { url altText } } }
            variants(first: 1) { edges { node { price { amount currencyCode } } } }
          }
        }
      }
    }
  `;

  const data = await fetchShopify(query);

  return data.products.edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description || 'No description provided.',
    image:
      node.images.edges[0]?.node.url ??
      'https://via.placeholder.com/500x500.png?text=No+Image',
    price: parseFloat(node.variants.edges[0]?.node.price.amount ?? 0),
    currency: node.variants.edges[0]?.node.price.currencyCode ?? 'USD',
  }));
}

export async function getProductByHandle(handle) {
  const query = `
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        images(first: 5) {
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
      image {
        url
        altText
      }
      price {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
    }
  }
}

      }
    }
  `;

  const data = await fetchShopify(query, { handle });
  return data.productByHandle;
}

export async function debugProductByHandle(handle) {
  const query = `
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        variants(first: 10) {
          edges {
            node {
              id
              title
              image {
                url
                altText
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchShopify(query, { handle });
  console.log(JSON.stringify(data.productByHandle, null, 2));
  return data.productByHandle;
}
