'use client'

import DashboardLayout from '@/components/DashboardLayout'
import { 
  Image as ImageIcon,
  Upload,
  Folder,
  Grid3x3,
  List,
  Search,
  Filter,
  Download,
  Trash2,
  Edit,
  Eye,
  Share2,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  MoreVertical,
  Copy,
  FolderPlus
} from 'lucide-react'
import { useState } from 'react'

interface Asset {
  id: number
  name: string
  type: 'image' | 'banner' | 'logo' | 'menu'
  category: string
  size: string
  dimensions: string
  uploadDate: string
  uploadedBy: string
  usedIn: string[]
  quality: 'high' | 'medium' | 'low'
  status: 'active' | 'archived'
  thumbnail: string
}

const assets: Asset[] = [
  {
    id: 1,
    name: 'برجر-كلاسيك-رئيسي.jpg',
    type: 'image',
    category: 'أطباق',
    size: '2.4 MB',
    dimensions: '1920x1080',
    uploadDate: '2025-11-20',
    uploadedBy: 'فاطمة عبدالله',
    usedIn: ['منيو', 'حملة خصم 20%'],
    quality: 'high',
    status: 'active',
    thumbnail: '🍔'
  },
  {
    id: 2,
    name: 'بانر-رمضان-2025.png',
    type: 'banner',
    category: 'حملات',
    size: '3.8 MB',
    dimensions: '2400x1200',
    uploadDate: '2025-11-18',
    uploadedBy: 'خالد عبدالعزيز',
    usedIn: ['الصفحة الرئيسية', 'حملة رمضان'],
    quality: 'high',
    status: 'active',
    thumbnail: '🌙'
  },
  {
    id: 3,
    name: 'لوجو-المطعم-شفاف.svg',
    type: 'logo',
    category: 'هوية',
    size: '124 KB',
    dimensions: '512x512',
    uploadDate: '2025-01-15',
    uploadedBy: 'أحمد محمد',
    usedIn: ['جميع الفروع', 'منيو رقمي', 'موقع إلكتروني'],
    quality: 'high',
    status: 'active',
    thumbnail: '🏪'
  },
  {
    id: 4,
    name: 'بيتزا-مارغريتا.jpg',
    type: 'image',
    category: 'أطباق',
    size: '1.8 MB',
    dimensions: '1920x1080',
    uploadDate: '2025-11-15',
    uploadedBy: 'فاطمة عبدالله',
    usedIn: ['منيو'],
    quality: 'high',
    status: 'active',
    thumbnail: '🍕'
  },
  {
    id: 5,
    name: 'عرض-نهاية-الأسبوع.jpg',
    type: 'banner',
    category: 'حملات',
    size: '2.1 MB',
    dimensions: '1600x900',
    uploadDate: '2025-11-10',
    uploadedBy: 'خالد عبدالعزيز',
    usedIn: ['حملة نهاية الأسبوع'],
    quality: 'medium',
    status: 'archived',
    thumbnail: '🎉'
  },
  {
    id: 6,
    name: 'سلطة-سيزر.jpg',
    type: 'image',
    category: 'أطباق',
    size: '1.5 MB',
    dimensions: '1920x1080',
    uploadDate: '2025-11-12',
    uploadedBy: 'فاطمة عبدالله',
    usedIn: ['منيو'],
    quality: 'high',
    status: 'active',
    thumbnail: '🥗'
  },
  {
    id: 7,
    name: 'منيو-رقمي-الإفطار.pdf',
    type: 'menu',
    category: 'منيو',
    size: '4.2 MB',
    dimensions: 'A4',
    uploadDate: '2025-11-08',
    uploadedBy: 'نورة أحمد',
    usedIn: ['فرع مسقط', 'فرع صلالة'],
    quality: 'high',
    status: 'active',
    thumbnail: '📋'
  },
  {
    id: 8,
    name: 'خلفية-المطعم-داخلي.jpg',
    type: 'image',
    category: 'تصوير',
    size: '5.6 MB',
    dimensions: '3840x2160',
    uploadDate: '2025-11-05',
    uploadedBy: 'أحمد محمد',
    usedIn: ['موقع إلكتروني', 'سوشيال ميديا'],
    quality: 'high',
    status: 'active',
    thumbnail: '🏢'
  }
]

const categories = ['الكل', 'أطباق', 'حملات', 'هوية', 'منيو', 'تصوير']

export default function AssetsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAssets, setSelectedAssets] = useState<number[]>([])

  const filteredAssets = assets.filter(asset => {
    const matchesCategory = selectedCategory === 'الكل' || asset.category === selectedCategory
    const matchesSearch = asset.name.includes(searchQuery)
    return matchesCategory && matchesSearch
  })

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'high': return 'bg-green-100 text-green-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'low': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getQualityText = (quality: string) => {
    switch (quality) {
      case 'high': return 'جودة عالية'
      case 'medium': return 'جودة متوسطة'
      case 'low': return 'جودة منخفضة'
      default: return 'غير محدد'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return <ImageIcon className="w-5 h-5" />
      case 'banner': return <Grid3x3 className="w-5 h-5" />
      case 'logo': return <Star className="w-5 h-5" />
      case 'menu': return <List className="w-5 h-5" />
      default: return <ImageIcon className="w-5 h-5" />
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">مكتبة الأصول</h1>
            <p className="text-gray-600">إدارة الصور والبانرات والملفات</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary">
              <FolderPlus className="w-4 h-4 ml-2" />
              مجلد جديد
            </button>
            <button className="btn-primary">
              <Upload className="w-4 h-4 ml-2" />
              رفع ملفات
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">إجمالي الملفات</p>
                <p className="text-3xl font-bold text-gray-900">{assets.length}</p>
              </div>
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">مساحة مستخدمة</p>
                <p className="text-3xl font-bold text-gray-900">23.6 GB</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Folder className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">صور عالية الجودة</p>
                <p className="text-3xl font-bold text-green-600">
                  {assets.filter(a => a.quality === 'high').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">تنبيهات جودة</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {assets.filter(a => a.quality === 'medium' || a.quality === 'low').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-dashed border-primary-300 hover:border-primary-500 cursor-pointer transition-all">
          <div className="text-center py-8">
            <Upload className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">اسحب وأفلت الملفات هنا</h3>
            <p className="text-gray-600 mb-4">أو انقر للاختيار من جهازك</p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>✓ PNG, JPG, SVG, PDF</span>
              <span>✓ حتى 10 MB</span>
              <span>✓ دقة عالية موصى بها</span>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="card">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن ملف..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 pl-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-50'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {selectedAssets.length > 0 && (
            <div className="mt-4 flex items-center justify-between p-4 bg-primary-50 rounded-lg">
              <span className="text-sm font-semibold text-primary-700">
                تم تحديد {selectedAssets.length} ملف
              </span>
              <div className="flex gap-2">
                <button className="btn-ghost text-sm">
                  <Download className="w-4 h-4 ml-1" />
                  تحميل
                </button>
                <button className="btn-ghost text-sm">
                  <Share2 className="w-4 h-4 ml-1" />
                  مشاركة
                </button>
                <button className="btn-ghost text-sm text-red-600">
                  <Trash2 className="w-4 h-4 ml-1" />
                  حذف
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Assets Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAssets.map((asset) => (
              <div key={asset.id} className="card hover:shadow-lg transition-all group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative mb-4">
                  <div className={`w-full h-48 rounded-lg flex items-center justify-center text-6xl ${
                    asset.status === 'archived' ? 'bg-gray-100 opacity-50' : 'bg-gradient-to-br from-primary-50 to-blue-50'
                  }`}>
                    {asset.thumbnail}
                  </div>
                  
                  {/* Quality Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getQualityColor(asset.quality)}`}>
                      {getQualityText(asset.quality)}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50">
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50">
                      <Download className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-50">
                      <Share2 className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 truncate">{asset.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {getTypeIcon(asset.type)}
                    <span>{asset.category}</span>
                    <span>•</span>
                    <span>{asset.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(asset.uploadDate).toLocaleDateString('ar-SA')}</span>
                  </div>
                  
                  {asset.usedIn.length > 0 && (
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">مستخدم في:</p>
                      <div className="flex flex-wrap gap-1">
                        {asset.usedIn.slice(0, 2).map((usage) => (
                          <span key={usage} className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                            {usage}
                          </span>
                        ))}
                        {asset.usedIn.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{asset.usedIn.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الملف</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">النوع</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الحجم</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الأبعاد</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الجودة</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">رفع بواسطة</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الاستخدام</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-700">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map((asset) => (
                    <tr key={asset.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg flex items-center justify-center text-2xl">
                            {asset.thumbnail}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{asset.name}</p>
                            <p className="text-xs text-gray-500">{asset.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{asset.type}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{asset.size}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{asset.dimensions}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getQualityColor(asset.quality)}`}>
                          {getQualityText(asset.quality)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{asset.uploadedBy}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                          {asset.usedIn.length} موقع
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Download className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Copy className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quality Alerts */}
        <div className="card bg-yellow-50 border-2 border-yellow-200">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">تنبيهات جودة الصور</h3>
              <p className="text-sm text-yellow-700 mb-4">
                تم العثور على {assets.filter(a => a.quality !== 'high').length} ملف بجودة دون المستوى الموصى به
              </p>
              <button className="btn-primary text-sm">
                عرض الملفات وتحسينها
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

