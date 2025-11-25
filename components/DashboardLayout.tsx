'use client'

import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="mr-64">
        <Header />
        <main className="pt-16 min-h-screen">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

