import P1 from '/public/p1.png'
import Image, {StaticImageData} from "next/image";


const ProductCard = (props:{title:string, price:string, img:StaticImageData}) => {
  return (
    <div>
    <Image src={props.img} alt = 'Product'></Image>
    <h3 className=' fornt-bold text-lg mt-3'>{props.title}</h3>
    <p className=' fornt-bold text-lg mt-3'>{props.price}</p>
    </div>
  )
}

export default ProductCard