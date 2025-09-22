// pages/admin/index.js (Dashboard)
"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import AdminLayout from '../../../components/ui/AdminLayout';
import DashboardStats from '../../../components/ui/DashboarStats';
import RecentOrders from '../../../components/ui/RecentOrders';
import TopProducts from '../../../components/ui/TopProducts';

export default function AdminDashboard({ analytics }) {
  const [type, setType] = useState("");

  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalCustomers: 0
  });


  // Fetch dashboard data (in a real application)
  useEffect(() => {
    // This would be an API call in a real app
    const fetchData = async () => {
      // Mock data for demonstration
      setStats({
        totalSales: 25439,
        totalOrders: 1245,
        totalProducts: 89,
        totalCustomers: 645
      });
    };

    fetchData();
  }, []);

  return (
    <AdminLayout title="Dashboard" setType={setType}>
      <main>
        {type === "analytics" ?  analytics  : ""}
      </main>
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
        <DashboardStats stats={stats} />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <RecentOrders />
        <TopProducts />
      </div>
    </AdminLayout>
  );
}