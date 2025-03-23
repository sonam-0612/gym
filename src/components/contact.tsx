export default function Contact() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between bg-white text-gray-400 text-center md:text-start p-8 space-y-4">

            <div className="flex flex-col space-y-2 md:space-y-5 md:w-full p-4">
                <h1 className="text-green-500">GS Fitness Club</h1>
                <p className="w-[] md:w-[300px]">OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America</p>
                <p className="text-black">Copyright GS Fitness Club</p>
            </div>

            <div className="space-y-4 md:w-full p-4" >
                <h1 className="text-green-500">Get in Touch</h1>
                <div>8819 Ohio St. South Gate, CA 90280</div>
                <div>Ourstudio@hello.com</div>
                <div>+1 386-688-3295</div>
            </div>

            <div className="space-y-9 mt-5 md:mt-0 md:w-full p-6">
                <div className="space-x-9">
                    <span className="bg-green-500 text-white p-3 rounded-full">Dr</span>
                    <span className="bg-green-500 text-white p-3 rounded-full">Be</span>
                    <span className="bg-green-500 text-white p-3 rounded-full">lg</span>
                    <span className="bg-green-500 text-white p-3 rounded-full">Tw</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea?</p>
            </div>

            <div className="w-1/2 mx-auto p-4 md:w-full md:mt-0">
                <h1 className="text-green-500 md:mt-0">Join a Newsletter</h1>
                <form action="" className="flex flex-col space-y-2">
                    <label htmlFor="email" className="mt-2">Your Email</label>
                    <input className="border border-blue-500 p-2" name="email" type="text" placeholder="Enter Your Email" required/>
                    <button type="submit" className="bg-green-600 text-white w-34 p-2 font-thin rounded hover:cursor-pointer hover:bg-green-700 hover:font-semibold mt-4">Subscribe</button>
                </form>
            </div>

        </div>
    )
}