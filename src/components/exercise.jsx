import Image from "next/image";
import img1 from "@/assets/hero.jpg";
import img2 from "@/assets/s1.jpg";
import img3 from "@/assets/cardio.jpg";
import img4 from "@/assets/cfit.jpg";

export default function Exercise() {

    const ExerciseData = [
        { id: 1, image: img1, },
        { id: 2, image: img2, },
        { id: 3, image: img3, },
        { id : 4, image : img4,},
        { id : 5, image : img1,},
        { id : 6, image : img2,},
    ]

    return (
        <div className="p-8">
            <h1 className="text-xl md:text-2xl font-bold">Every exercise with detailed steps :</h1>
            <div className="flex justify-center gap-10 flex-wrap mt-6">
                {ExerciseData.map((item, index) => (
                    <div
                        key={index} className="border border-gray-300 p-4 rounded-lg shadow-lg shadow-gray-700 w-[300px] text-center hover:translate-y-2">
                        <Image src={item.image} alt=''
                            className="w-full h-[200px] object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}