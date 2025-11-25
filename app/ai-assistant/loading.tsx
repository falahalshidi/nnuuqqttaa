export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-8"></div>
        
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
          <div className="h-32 bg-white bg-opacity-50 rounded"></div>
        </div>
        
        <div className="flex gap-2 border-b border-gray-200 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 w-32 bg-gray-200 rounded-t"></div>
          ))}
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

