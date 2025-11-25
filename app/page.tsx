'use client'

import DashboardLayout from '@/components/DashboardLayout'
import StatCard from '@/components/StatCard'
import { 
  Users, 
  Eye, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Star,
  DollarSign,
  ShoppingCart,
  AlertCircle
} from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// Sample Data
const visitData = [
  { name: 'السبت', visits: 4000, orders: 2400 },
  { name: 'الأحد', visits: 3000, orders: 1398 },
  { name: 'الاثنين', visits: 2000, orders: 9800 },
  { name: 'الثلاثاء', visits: 2780, orders: 3908 },
  { name: 'الأربعاء', visits: 1890, orders: 4800 },
  { name: 'الخميس', visits: 2390, orders: 3800 },
  { name: 'الجمعة', visits: 3490, orders: 4300 },
]

const branchPerformance = [
  { name: 'فرع الرياض', value: 400 },
  { name: 'فرع جدة', value: 300 },
  { name: 'فرع الدمام', value: 200 },
  { name: 'فرع مكة', value: 100 },
]

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe']

const topDishes = [
  { name: 'برجر كلاسيك', views: 1234, orders: 456, rating: 4.8 },
  { name: 'بيتزا مارغريتا', views: 1123, orders: 389, rating: 4.7 },
  { name: 'سلطة سيزر', views: 987, orders: 312, rating: 4.6 },
  { name: 'باستا الفريدو', views: 876, orders: 289, rating: 4.5 },
  { name: 'ستيك لحم', views: 765, orders: 267, rating: 4.9 },
]

const alerts = [
  { id: 1, type: 'warning', message: 'طبق "سلطة خضراء" لم يحصل على طلبات منذ 5 أيام', action: 'تعديل السعر' },
  { id: 2, type: 'info', message: 'فرع جدة يحتاج تحديث ساعات العمل', action: 'تحديث' },
  { id: 3, type: 'success', message: 'حملة "خصم 20%" حققت 150 طلب جديد', action: 'عرض التفاصيل' },
]

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم الرئيسية</h1>
          <p className="text-gray-600">نظرة شاملة على أداء مطاعمك</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="إجمالي الزيارات"
            value="24,532"
            change={12.5}
            icon={Users}
            trend="up"
          />
          <StatCard
            title="مشاهدات المنيو"
            value="18,743"
            change={8.2}
            icon={Eye}
            trend="up"
          />
          <StatCard
            title="نقرات الاتصال"
            value="1,234"
            change={-2.4}
            icon={Phone}
            trend="down"
          />
          <StatCard
            title="نقرات الموقع"
            value="3,456"
            change={15.8}
            icon={MapPin}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visits & Orders Chart */}
          <div className="lg:col-span-2 card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">الزيارات والطلبات الأسبوعية</h3>
              <p className="text-sm text-gray-500">آخر 7 أيام</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="الزيارات"
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#60a5fa" 
                  strokeWidth={2}
                  name="الطلبات"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Branch Performance */}
          <div className="card">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">أداء الفروع</h3>
              <p className="text-sm text-gray-500">توزيع الطلبات</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={branchPerformance}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {branchPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Dishes & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Dishes */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">الأطباق الأكثر مشاهدة</h3>
                <p className="text-sm text-gray-500">أفضل 5 أطباق هذا الأسبوع</p>
              </div>
              <button className="text-primary-500 hover:text-primary-600 text-sm font-medium">
                عرض الكل ←
              </button>
            </div>
            <div className="space-y-4">
              {topDishes.map((dish, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{dish.name}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {dish.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShoppingCart className="w-4 h-4" />
                        {dish.orders}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {dish.rating}
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost text-xs">
                    التفاصيل
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Alerts */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">التنبيهات الذكية</h3>
                <p className="text-sm text-gray-500">توصيات تحتاج اهتمامك</p>
              </div>
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                {alerts.length} جديد
              </span>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-4 rounded-lg border-r-4 ${
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                    alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
                    'bg-green-50 border-green-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className={`w-5 h-5 mt-0.5 ${
                      alert.type === 'warning' ? 'text-yellow-600' :
                      alert.type === 'info' ? 'text-blue-600' :
                      'text-green-600'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-2">{alert.message}</p>
                      <button className="text-xs font-medium text-primary-600 hover:text-primary-700">
                        {alert.action} ←
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-100 mb-2">متوسط سعر الطلب</p>
                <p className="text-3xl font-bold">85 ريال</p>
                <p className="text-primary-100 text-sm mt-2">↑ 5.2% من الشهر الماضي</p>
              </div>
              <DollarSign className="w-12 h-12 text-primary-200" />
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 mb-2">معدل الرضا</p>
                <p className="text-3xl font-bold">4.7/5</p>
                <p className="text-green-100 text-sm mt-2">↑ 0.3 من الشهر الماضي</p>
              </div>
              <Star className="w-12 h-12 text-green-200 fill-green-200" />
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 mb-2">نمو الطلبات</p>
                <p className="text-3xl font-bold">+23%</p>
                <p className="text-purple-100 text-sm mt-2">مقارنة بالشهر الماضي</p>
              </div>
              <TrendingUp className="w-12 h-12 text-purple-200" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

