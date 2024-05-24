'use client'
import { LibraryBig, MessageSquare, LineChart, Shield } from 'lucide-react';
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "My Form's",
      icon: LibraryBig,
      path: "/dashboard"
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses"
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics"
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade"
    },
  ]
  const path = usePathname()
  useEffect(() => {
    console.log(path)
  }, [path])
  return (
    <div className={`h-screen shadow-md border`}>
      <div className={`p-5`}>
        {menuList.map((menu) => (
          <h2 className={`flex items-center gap-3 text-custom-primary-darkGray p-4 hover:bg-primary mb-4 text-[17px] cursor-pointer hover:text-white rounded-lg ${path === menu.path && 'bg-primary text-white'}`} key={menu.id}>
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>

    </div>
  )
}

export default SideNav
