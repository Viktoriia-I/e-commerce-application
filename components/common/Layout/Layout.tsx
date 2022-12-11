import { PropsWithChildren } from "react";


const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout;