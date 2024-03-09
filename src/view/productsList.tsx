
import ProductCard from '@/components/productCard';
import P1 from '/public/p1.png'
import P2 from '/public/p2.png'
import P3 from '/public/p3.png'


const ProductsList = () => {
  return (
    <div className=' flex justify-evenly mt-16'>
       <ProductCard img = {P1}  title = 'Flex SweatShirt' price = "$345"/>
       <ProductCard img = {P2}  title = 'Brushed Ragalan SweatShirt' price = "$456"/>
       <ProductCard img = {P3}  title = 'Lite SweatShirt' price = "$242"/>
    </div>
  )
}

export default ProductsList