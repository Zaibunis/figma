// sale.tsx
import Image from 'next/image';

export default function Feature() {
  return (
    <div className="w-full md:h-[300px] sm:h-full flex justify-center items-center mt-32"> {/* Added margin-top to the main container */}
      <div className="w-[80%] h-full">
        {/* Top side */}
        <div>
          <span className="border-l-8 border-red-500 font-bold text-red-500 mb-8 block">Featured</span> {/* Added block to make it occupy the full width */}
          <div className="flex justify-between mt-10"> {/* Adjusted margin-top for spacing between text */}
            <h2 className="text-4xl font-bold">New Arrival</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
