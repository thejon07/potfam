// components/TopProducts.js
export default function TopProducts() {
  const products = [
    { name: 'Wireless Headphones', price: '$199.99', sales: 245, stock: 45 },
    { name: 'Smart Watch', price: '$279.99', sales: 187, stock: 12 },
    { name: 'Bluetooth Speaker', price: '$89.99', sales: 156, stock: 23 },
    { name: 'Phone Case', price: '$24.99', sales: 142, stock: 89 },
    { name: 'USB-C Cable', price: '$19.99', sales: 132, stock: 156 }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 bebas-neue-regular">Top Selling Products</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {products.map((product, index) => (
          <li key={index} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="material-icons text-gray-500">image</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.price}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-medium text-gray-900">{product.sales} sold</div>
                <div className="text-sm text-gray-500">{product.stock} in stock</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}