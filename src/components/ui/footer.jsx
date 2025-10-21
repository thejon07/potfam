// pages/index.js
import Image from 'next/image';
import potfam from "../../../public/potfam.png";

export default function Home() {
    return (
        <div className="min-h-screen mt-10 flex flex-col justify-between pt-10 px-4 sm:px-6 md:px-10">
            {/* Header */}
            <header className="flex flex-col items-center sm:flex-row sm:justify-between py-6 space-y-4 sm:space-y-0">
                <Image src={potfam} alt="PotFam Logo" width={80} height={80} />

                <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-base sm:text-lg font-medium bebas-neue-regular">
                    <a href="#">Find a Store</a>
                    <a href="#">Help</a>
                    <a href="#">Join Us</a>
                    <a href="#">Sign In</a>
                </nav>
            </header>

            {/* Main content */}
            <main className="flex-1 flex items-center justify-center text-center px-2">
                <h1 className="font-bold bebas-neue-regular text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Welcome to PotFam
                </h1>
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 w-full py-12 px-4 sm:px-8 md:px-20">
                <div className="flex flex-col gap-10 md:gap-28 md:flex-row md:justify-center text-center md:text-left">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular">Featured</h3>
                        <ul className="space-y-1 text-gray-500 bebas-neue-regular">
                            <li><a href="#">Air Force 1</a></li>
                            <li><a href="#">Jordan 1</a></li>
                            <li><a href="#">Air Max</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular">Shoes</h3>
                        <ul className="space-y-1 text-gray-500 bebas-neue-regular">
                            <li><a href="#">All Shoes</a></li>
                            <li><a href="#">Jordan Shoes</a></li>
                            <li><a href="#">Running Shoes</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular">Clothing</h3>
                        <ul className="space-y-1 text-gray-500 bebas-neue-regular">
                            <li><a href="#">All Clothing</a></li>
                            <li><a href="#">Tops & T-Shirts</a></li>
                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular">Kids</h3>
                        <ul className="space-y-1 text-gray-500 bebas-neue-regular">
                            <li><a href="#">Infant & Toddler Shoes</a></li>
                            <li><a href="#">Kids Shoes</a></li>
                            <li><a href="#">Kids Clothing</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
