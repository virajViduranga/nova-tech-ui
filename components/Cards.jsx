import Image from 'next/image';
import Link from 'next/link';


export default function ProductCard({ title, price }) {
  return (
    <div className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src=""
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-5">
        {/* Title and Price */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-slate-800 line-clamp-1 dark:text-white">
            {title}
          </h3>
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${price}
          </span>
        </div>

        {/* Buttons Container */}
        <div className="mt-auto flex gap-3">
          <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800">
            Buy Now
          </button>
          
          <Link 
            href="#"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}