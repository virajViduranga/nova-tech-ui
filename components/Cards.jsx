import Image from 'next/image';
import Link from 'next/link';



const ProductCard = () => {
  return (
    <div className="
      group
      max-w-[400px]
      w-full
      rounded-[2.5rem]
      bg-white
      p-10
      flex
      flex-col
      items-center
      text-center
      border
      border-gray-100
      shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]
      transition-all
      duration-300
      ease-in-out
      hover:shadow-2xl
      hover:scale-[1.02]
    ">
      
      {/* Category Badge */}
      <span className="
        mb-8
        px-5
        py-2
        rounded-full
        bg-gray-100
        text-[#1F2937]
        font-medium
        text-xs
        dark:bg-gray-800
        dark:text-gray-300
      ">
        ✦ Ear Phones
      </span>

      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-2xl">
        <Image
          src=""
          alt="image"
          fill
          className="
            object-contain
            p-4
            transition-transform
            duration-300
            group-hover:scale-105
          "
          sizes="(max-width: 400px) 100vw, 400px"
        />
      </div>

      {/* Product Title */}
      <h3 className="
        text-2xl
        font-bold
        text-[#1F2937]
        mb-2
        transition-colors
        dark:text-white
      ">
        Samsung ear buds pro
      </h3>

      {/* Product Price */}
      <p className="
        text-xl
        font-semibold
        text-[#1F2937]
        mb-4
        dark:text-gray-100
      ">
        $230
      </p>

      {/* Product Description */}
      <p className="
        text-sm
        text-[#6B7280]
        leading-relaxed
        mb-10
        flex-grow
        dark:text-gray-400
      ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint repellat veniam! Laudantium quam porro suscipit quas ut explicabo dignissimos fuga modi necessitatibus exercitationem.
      </p>

      {/* Buttons */}
      <div className="w-full grid grid-cols-2 gap-4">
         
          <a className="
            flex
            items-center
            justify-center
            gap-2
            px-8
            py-4
            rounded-full
            bg-[#1F2937]
            text-white
            font-semibold
            text-sm
            transition-all
            duration-200
            hover:bg-gray-800
            active:bg-gray-700
            dark:bg-gray-50
            dark:text-gray-950
            dark:hover:bg-white
          ">
            Buy Now <span aria-hidden="true">→</span>
          </a>
       
         
          <a className="
            flex
            items-center
            justify-center
            px-8
            py-4
            rounded-full
            bg-white
            text-[#1F2937]
            font-semibold
            text-sm
            border
            border-gray-200
            transition-all
            duration-200
            hover:bg-gray-50
            hover:border-gray-300
            active:bg-gray-100
            dark:bg-transparent
            dark:border-gray-800
            dark:text-gray-300
            dark:hover:bg-gray-900
            dark:hover:border-gray-700
          ">
            More Details
          </a>
        
      </div>
    </div>
  );
};

export default ProductCard;