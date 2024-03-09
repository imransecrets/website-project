
import ProductCard from '@/components/productCard';
import p1 from '/public/p1.png'
import p2 from '/public/p2.png'
import p3 from '/public/p3.png'


const ProductsList = () => {
  return (
    <div className=' flex justify-evenly mt-16'>
       <ProductCard img = {p1}  title = 'Flex SweatShirt' price = "$345"/>
       <ProductCard img = {p2}  title = 'Brushed Ragalan SweatShirt' price = "$456"/>
       <ProductCard img = {p3}  title = 'Lite SweatShirt' price = "$242"/>
    </div>
  )
}

export default ProductsList