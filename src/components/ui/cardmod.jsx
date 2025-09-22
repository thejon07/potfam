import React from 'react';
import { Button } from './button';

function CardMod() {
    const data = [
        { img: "https://m.media-amazon.com/images/I/412KdgwpgRL._SY900_.jpg",title:"Back to sport",desc:"Study hard run hard" },
        { img: "https://m.media-amazon.com/images/I/61xmzkRPrgL._UY900_.jpg", title:"Back to sport",desc:"Study hard run hard"}
    ];

    return (
        <div className="flex">
            {data.map((item, index) => (
                <div 
                    key={index} 
                    className="p-2 w-1/2 bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="relative">
                        <img 
                            className="w-full" 
                            src={item.img} 
                            alt="product" 
                        />
                        <div className=" absolute inset-0 flex flex-col text-white justify-center items-center bebas-neue-regular">
                            <h1 className='text-xl sm:text-2xl'>{item.title}</h1>
                            <p className='text-xl sm:text-3xl'>{item.desc}</p>
                            <button className='text-oklch(70.4% 0.14 182.503)-400 underline underline-offset-[10px] decoration-2 '>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardMod;
