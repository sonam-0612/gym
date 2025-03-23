'use client';
import Image from "next/image";
import img from '@/assets/yoga.jpg'
import Link from "next/link";
export default function HeroSection() {

    const Yoga = [
        {
            image: img,
            data: 'Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits',
            data1: 'Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits',
        }
    ]

    return (
        <>
            {/* section 1 */}
            <div className="relative w-[750px] h-[660px] md:w-[1520px] md:h-screen p-4 mt-1 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/s2.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="p-4 flex flex-col justify-center items-center font-bold text-2xl space-y-7 shadow-lg shadow-amber-300 md:p-8 mt-[180px] md:mt-[200px]">
                    <div className="md:text-4xl">LET'S <span className="text-green-500">GRIND</span> YOUR BODY</div>
                    <div className="flex flex-col justify-center items-center space-y-4 md:text-2xl ">
                        <p>GET FIT WITH <span className="text-green-500">FITZONE</span></p>
                       <button className="text-black bg-green-700  hover:cursor-pointer hover:bg-green-600 hover:font-semibold p-2 rounded-lg shadow-lg shadow-green-200"><Link href='/plans'>Become a member</Link></button>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="p-8 bg-white text-black">
                <h1 className="text-2xl md:text-3xl font-bold">WHY <span className="text-green-500">FITNESS</span> IS IMPORTANT ?</h1>
                <div className="md:flex">
                    {Yoga.map((item, index) => (
                        <div key={index} className='p-4 md:flex gap-5'>
                            <Image
                                src={item.image}
                                alt=''
                                className="w-full md:w-[400px] h-[395px] object-cover rounded-md shadow-lg shadow-amber-900 " />
                            <div className=" space-y-5">
                                <div className=" p-4 mt-5 text-xl md:mt-0 md:font-thin shadow-lg shadow-gray-500 rounded">
                                    {item.data}
                                </div>
                                <div className="hidden md:block p-4 mt-5 text-xl md:mt-0 md:font-thin shadow-lg shadow-gray-500 rounded">
                                    {item.data1}
                                </div>
                                <div className="hidden md:block p-4 mt-5 text-xl md:mt-0 md:font-thin shadow-lg shadow-gray-500 rounded">
                                    {item.data1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* section 3 */}
            <div className="relative w-[750px] h-64 md:w-[1520px] md:h-[350px] p-4 mt-1 bg-cover bg-center bg-no-repeat shadow-lg shadow-gray-800"
                style={{ backgroundImage: "url('/assets/s2.png')" }}>
                <div className="p-4 flex flex-col justify-center items-center font-bold text-2xl space-y-7 shadow-lg shadow-amber-300 md:mt-10 md:p-8">
                    <div className="md:text-2xl">Your <span className="text-green-500">body</span> can do it</div>
                    <div className="flex flex-col justify-center items-center space-y-4 md:text-2xl ">
                        <p>It's time to convince your <span className="text-green-500">mind</span></p>
                        <button className="text-black bg-green-700  hover:cursor-pointer hover:bg-green-600 hover:font-semibold p-2 rounded-lg shadow-lg shadow-green-200"><Link href='/plans'>Become a member</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}
