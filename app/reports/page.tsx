'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { 
  FileText,
  Download,
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Clock,
  Filter,
  Mail,
  Printer,
  CheckCircle
} from 'lucide-react'
import { useState } from 'react'

interface Report {
  id: number
  name: string
  type: 'weekly' | 'monthly' | 'custom'
  date: string
  status: 'ready' | 'generating' | 'scheduled'
  size: string
}

const reports: Report[] = [
  {
    id: 1,
    name: 'تقرير الأداء الأسبوعي - 25 نوفمبر 2025',
    type: 'weekly',
    date: '2025-11-25',
    status: 'ready',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'تقرير الأداء الشهري - نوفمبر 2025',
    type: 'monthly',
    date: '2025-11-30',
    status: 'scheduled',
    size: '-'
  },
  {
    id: 3,
    name: 'تقرير الأداء الأسبوعي - 18 نوفمبر 2025',
    type: 'weekly',
    date: '2025-11-18',
    status: 'ready',
    size: '2.1 MB'
  }
]

export default function ReportsPage() {
  const [reportType, setReportType] = useState('weekly')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">التقارير</h1>
            <p className="text-gray-600">إنشاء وتصدير التقارير الدورية</p>
          </div>
          <button className="btn-primary">
            <FileText className="w-4 h-4 ml-2" />
            إنشاء تقرير جديد
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">التقارير المتاحة</p>
                <p className="text-3xl font-bold text-gray-900">{reports.length}</p>
              </div>
              <FileText className="w-12 h-12 text-primary-500" />
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">النمو الشهري</p>
                <p className="text-3xl font-bold text-green-600">+18%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">الإيرادات</p>
                <p className="text-3xl font-bold text-gray-900">245K</p>
              </div>
              <DollarSign className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">متوسط التقييم</p>
                <p className="text-3xl font-bold text-yellow-600">4.7</p>
              </div>
              <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        </div>

        {/* Report Templates */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-4">قوالب التقارير</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer transition-all">
              <Calendar className="w-10 h-10 text-primary-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">تقرير أسبوعي</h4>
              <p className="text-sm text-gray-600 mb-4">ملخص الأداء الأسبوعي لجميع الفروع</p>
              <button className="w-full btn-secondary text-sm">إنشاء الآن</button>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer transition-all">
              <FileText className="w-10 h-10 text-primary-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">تقرير شهري</h4>
              <p className="text-sm text-gray-600 mb-4">تحليل شامل للشهر بالكامل</p>
              <button className="w-full btn-secondary text-sm">إنشاء الآن</button>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary-500 cursor-pointer transition-all">
              <Filter className="w-10 h-10 text-primary-500 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">تقرير مخصص</h4>
              <p className="text-sm text-gray-600 mb-4">اختر الفترة والبيانات المطلوبة</p>
              <button className="w-full btn-secondary text-sm">إنشاء الآن</button>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-4">التقارير السابقة</h3>
          <div className="space-y-3">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{report.name}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(report.date).toLocaleDateString('ar-SA')}
                      </span>
                      {report.status === 'ready' && (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          جاهز
                        </span>
                      )}
                      {report.status === 'scheduled' && (
                        <span className="flex items-center gap-1 text-blue-600">
                          <Clock className="w-4 h-4" />
                          مجدول
                        </span>
                      )}
                      {report.size !== '-' && <span>{report.size}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {report.status === 'ready' && (
                    <>
                      <button className="btn-ghost text-sm">
                        <Download className="w-4 h-4 ml-1" />
                        تحميل
                      </button>
                      <button className="btn-ghost text-sm">
                        <Mail className="w-4 h-4 ml-1" />
                        إرسال
                      </button>
                      <button className="btn-ghost text-sm">
                        <Printer className="w-4 h-4 ml-1" />
                        طباعة
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="card bg-blue-50 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-900 mb-2">التقارير التلقائية</h3>
              <p className="text-sm text-blue-700 mb-4">
                يتم إنشاء التقارير الأسبوعية تلقائياً كل يوم أحد الساعة 8:00 صباحاً وإرسالها عبر البريد الإلكتروني
              </p>
              <button className="btn-primary text-sm">
                إدارة الجدول الزمني
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

