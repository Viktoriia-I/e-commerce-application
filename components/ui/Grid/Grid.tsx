import styles from './Grid.module.css';
import { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children: ReactNode[];
  layout?: "A" | "B"
}

const Grid: React.FunctionComponent<Props> = ({ children, layout }) => {

  const rootClassName = classnames(
    styles.root,
    {
      [styles.layoutA]: layout === 'A',
      [styles.layoutB]: layout === 'B',
    }
  )

  return (
    <div className={rootClassName}>
      {children}
    </div>
  )
}

export default Grid;