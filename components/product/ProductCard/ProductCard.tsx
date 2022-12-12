import { Product } from "@common/types/product";
import Link from "next/link";
import Image from 'next/image'


interface Props {
  product: Product;
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <h3>
          <span>{product.name}</span>
        </h3>
        <span>14 $</span>
      </div>
      {product.images && (
        <Image 
        src={placeholderImage} 
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