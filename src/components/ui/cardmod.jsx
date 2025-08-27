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
                    className="p-5 w-1/2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="relative">
                        <img 
                            className="rounded-t-lg w-full" 
                            src={item.img} 
                            alt="product" 
                        />
                        <div className=" absolute inset-0 flex flex-col text-white justify-center items-center bebas-neue-regular">
                            <h1 className='text-2xl'>{item.title}</h1>
                            <p className='text-3xl'>{item.desc}</p>
                            <Button className="bg-white text-black hover:bg-sky-700 hover:text-white">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardMod;
