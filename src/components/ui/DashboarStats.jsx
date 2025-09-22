// components/DashboardStats.js
export default function DashboardStats({ stats }) {
  const statItems = [
    {
      title: 'Total Sales',
      value: `$${stats.totalSales.toLocaleString()}`,
      icon: 'paid',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders.toLocaleString(),
      icon: 'shopping_cart',
      color: 'bg-green-500'
    },
    {
      title: 'Total Products',
      value: stats.totalProducts.toLocaleString(),
      icon: 'inventory_2',
      color: 'bg-purple-500'
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toLocaleString(),
      icon: 'people',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <>
      {statItems.map((item, index) => (
        <div key={index} className=" bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-lg shadow p-6">
          <div className="flex items-center ">
            <div className={`p-3 rounded-full ${item.color} bg-opacity-20`}>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 bebas-neue-regular">{item.title}</p>
              <p className="text-2xl font-semibold text-gray-900 bebas-neue-regular">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}