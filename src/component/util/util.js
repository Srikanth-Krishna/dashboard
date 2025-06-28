// Convert hex code to RGBA
export const convertHexToRGBA = (hexCode, opacity = 1) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

// Function to fetch dummy products
export async function fetchProducts() {
  const respone = await fetch('https://dummyjson.com/products');
  const data = await respone.json();
  const productList = data.products.map((product) => {
    return {
      image: product.thumbnail,
      name: product.title,
      id: Math.random().toString().slice(2, 11),
      price: product.price,
      quantity: product.stock,
      sale: Math.round(Math.random() * 10),
      stock: Math.random() < 0.5 ? false : true,
    };
  });
  return productList;
}
