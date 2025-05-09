import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Bell, 
  BarChart, 
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, text: 'Panel Principal', active: true },
    { icon: Package, text: 'Gestión de Productos' },
    { icon: ShoppingCart, text: 'Gestión de Órdenes' },
    { icon: Bell, text: 'Alertas' },
    { icon: BarChart, text: 'Reportes' },
    { icon: Settings, text: 'Configuración' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white shadow-lg transform transition-transform duration-200
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">DTF Inventory</h1>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg
                  ${item.active 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                <item.icon size={20} />
                <span>{item.text}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t">
            <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 w-full">
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <button className="relative text-gray-500 hover:text-gray-700">
                <Bell size={24} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Panel Principal</h1>
            <p className="text-gray-600">Bienvenido al sistema de gestión de inventario</p>
          </div>

          {/* Dashboard content will be implemented in the next step */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Sección {i + 1}
                </h3>
                <p className="text-gray-600">
                  Contenido pendiente de implementar
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;