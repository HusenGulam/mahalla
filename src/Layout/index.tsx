import { FC, ReactNode } from "react"
import Sidebar from "@/components/Sidebar"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout_container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}
export default Layout