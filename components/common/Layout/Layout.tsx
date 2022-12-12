import { PropsWithChildren } from "react";
import style from './Layout.module.css';


const Layout: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.root}>
      <main className="fit">
        {children}
      </main>
    </div>
  )
}

export default Layout;