// pages/index.js
import Image from 'next/image';
// import nikeLogo from '../public/nike-logo.png'; // save a Nike-like logo in public folder
import potfam from "../../../public/potfam.png"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-between pt-20">
            {/* Header */}
            <header className="flex flex-col items-center pt-10 space-y-4">
                <Image src={potfam} alt="Nike Logo" width={100} height={100} />
                <nav className="flex space-x-8 text-lg font-medium bebas-neue-regular ">
                    <a href="#">Find a Store</a>
                    <a href="#">Help</a>
                    <a href="#">Join Us</a>
                    <a href="#">Sign In</a>
                </nav>
            </header>

            {/* Main content placeholder */}
            <main className="flex-1 flex items-center justify-center">
                <h1 className="text-3xl font-bold bebas-neue-regular text-8xl">Welcome to PotFam</h1>
            </main>

            {/* Footer */}
            <footer className="bg-gray-50  w-full py-12 px-20">
                <div className="flex justify-center gap-28">

                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular ">Featured</h3>
                        <ul className="space-y-1 text-gray-500">
                            <li><a href="#">Air Force 1</a></li>
                            <li><a href="#">Jordan 1</a></li>
                            <li><a href="#">Air Max</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular ">Shoes</h3>
                        <ul className="space-y-1 text-gray-500">
                            <li><a href="#">All Shoes</a></li>
                            <li><a href="#">Jordan Shoes</a></li>
                            <li><a href="#">Running Shoes</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular ">Clothing</h3>
                        <ul className="space-y-1 text-gray-500">
                            <li><a href="#">All Clothing</a></li>
                            <li><a href="#">Tops & T-Shirts</a></li>
                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 bebas-neue-regular ">Kids</h3>
                        <ul className="space-y-1 text-gray-500">
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
