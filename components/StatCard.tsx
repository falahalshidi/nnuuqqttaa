import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  icon: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
}

export default function StatCard({ title, value, change, icon: Icon, trend = 'neutral' }: StatCardProps) {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-600'
    if (trend === 'down') return 'text-red-600'
    return 'text-gray-600'
  }

  const getTrendBg = () => {
    if (trend === 'up') return 'bg-green-50'
    if (trend === 'down') return 'bg-red-50'
    return 'bg-gray-50'
  }

  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="dashboard-gauge mb-2">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${getTrendColor()}`}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              <span className="text-xs text-gray-500">مقارنة بالأسبوع الماضي</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg ${getTrendBg()} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${getTrendColor()}`} />
        </div>
      </div>
    </div>
  )
}

