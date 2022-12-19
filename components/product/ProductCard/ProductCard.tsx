import { Product } from "@common/types/product";
import Link from "next/link";
import Image from 'next/image';
import styles from './ProductCard.module.css';


interface Props {
  product: Product;
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className={styles.root}>
      <div className={styles.productBg}></div>
      <div className={styles.productTag}>
        <h3 className={styles.productTitle}>
          <span>{product.name}</span>
        </h3>
        <span className={styles.productPrice}>14 $</span>
      </div>
      {product.images && (
        <Image 
        src={product.images[0].url ?? placeholderImage} 
        alt={product.name ?? "Product image"} 
        height={540}
        width={540}
        quality="85"
        />
      )}
    </Link>
  )
}

export default ProductCard;