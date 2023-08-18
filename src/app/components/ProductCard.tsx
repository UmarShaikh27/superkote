import Image from "next/image"

const ProductCard = () => {
  return (
    <div className="w-full bg-red-500 md:w-1/4 px-1 py-1 h-fit">
        <div className="bg-red-200 w-full h-1/2">
        <Image
        src="/"
        width={250}
        height={250}
        objectFit="contain"
        alt=""
        />
        </div>

       
        
    </div>
  )
}

export default ProductCard