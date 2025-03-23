import Image from "next/image";
import img1 from "@/assets/hero.jpg";
import img2 from "@/assets/s1.jpg";
import img3 from "@/assets/cardio.jpg";
import img4 from "@/assets/cfit.jpg";

export default function Services() {
  const services = [
    {
      title: "Basic Fitness",
      image: img1,
      features: [
        "Stretching and flexibility",
        "Aerobic exercise",
        "Strength training",
        "Sports nutrition",
      ],
    },
    {
      title: "Body Building",
      image: img2,
      features: [
        "Intensive weight training",
        "Muscle hypertrophy workouts",
        "Protein and supplement guidance",
        "Strength and endurance development",
      ],
    },
    {
        title: "Cardio Training",
        image: img3,
        features: [
          "Treadmill and cycling workouts",
          "HIIT cardio sessions",
          "Heart rate monitoring",
          "Fat-burning techniques",
        ],
      },
      {
        title: "CrossFit Training",
        image: img4,
        features: [
          "High-intensity functional workouts",
          "Full-body endurance training",
          "Strength & agility drills",
          "Group training environment",
        ],
      },
  ];

  return (
    <div className="bg-white text-black p-6">
      {/* Section Header */}
      <h1 className="text-2xl md:text-3xl font-bold">
        OUR <span className="text-green-500">SERVICES</span> :
      </h1>

      {/* Services Section */}
      <div className="flex justify-center gap-10 flex-wrap mt-6">
        {services.map((service, index) => (
          <div
            key={index}  className="border border-gray-300 p-4 rounded-lg shadow-lg shadow-gray-700 w-[300px] text-center hover:translate-y-2">
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <p className="mt-3 font-semibold text-sm">
              {service.title.split(" ")[0]}{" "}
              <span className="text-green-500">{service.title.split(" ")[1]}</span>
            </p>
            <ul className="mt-2 text-gray-700 text-start">
              {service.features.map((feature, i) => (
                <li key={i} className="text-sm mt-1">
                 * {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
