const colorMap = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#0000FF',
  red: '#FF0000',
  green: '#008000',
  navy: '#000080',
  purple: '#800080',
  dessert: '#C2B280',
};

export default function adaptShopifyProducts(data) {
  return data.map((product) => {
    const variant = product.variants.edges[0].node;
    const price = parseFloat(variant.price.amount);
    const compareAtPrice = variant.compareAtPrice?.amount ? parseFloat(variant.compareAtPrice.amount) : null;
    const discount = compareAtPrice && compareAtPrice > price
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : 0;

    const colorsOption = product.options.find(opt => opt.name.toLowerCase() === 'color');
    const colors = colorsOption
      ? colorsOption.values.map(value => ({
          name: value,
          value: colorMap[value.toLowerCase()] || '#CCCCCC'
        }))
      : [];

    const sizesOption = product.options.find(opt => opt.name.toLowerCase() === 'talla' || opt.name.toLowerCase() === 'size');
    const sizes = sizesOption ? sizesOption.values : [];

    const images = {};
    if (colorsOption) {
      colorsOption.values.forEach(colorName => {
        images[colorName] = product.images.edges.map(img => img.node.url);
      });
    } else {
      images['Default'] = product.images.edges.map(img => img.node.url);
    }

    const genderParsed = product.gender2?.value ? JSON.parse(product.gender2.value)[0].toLowerCase() : 'women';
    const categoryParsed = product.categories?.value ? JSON.parse(product.categories.value) : [];

    return {
      id: product.id,
      name: product.title,
      price: price,
      discount: discount,
      images: images,
      colors: colors,
      sizes: sizes,
      rating: 4.5,
      reviewCount: 128,
      isNew: product.is_new?.value === 'true',
      isSale: product.is_sale?.value === 'true' || discount > 0,
      category: categoryParsed,
      gender: genderParsed,
      description: product.description,
      cardText: product.description ? product.description.substring(0, 120) + '...' : '',
    };
  });
}
