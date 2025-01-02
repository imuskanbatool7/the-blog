import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export default function contact(){
    return(
        <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-cyan-100 to-pink-100 ">
            <Navbar/>
            <div className="bg-white shadow:cyan-600 rounded-lg mb-6 mt-6 p-8 md:p-10 max-w-4xl mx-auto">
                
                <h1 className="text-4xl font-bold mb-4 text-center text-cyan-800 font-serif">Let&apos;s Connect</h1>
                <p className="text-gray-800 text-xl  text-center font-Clash Display mb-8 border-b-2 ">Whether you have a question, suggestion, or just want to share you&apos;r jeep adventure stories-drop us a message!</p>
                <form className="space-y-4 bg-slate-200 shadow-md shadow-cyan-200 rounded-lg p-5">
                <div>
                    <label className="block text-gray-700 text-lg font-bold font-Clash Display"
                    >Your Name</label>
                    <input type="text" 
                    placeholder="Enter your name"
                    className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:border hover:border-sky-300"/>
                </div>
                <div>
                    <label
                    className=" block  text-gray-700 text-lg font-bold font-Clash Display">Your Email</label>
                    <input type="text" 
                    placeholder="Enter your email"
                    className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:border hover:border-sky-300"/>

                </div>
                <div>
                    <label className="block text-gray-700 text-lg font-bold font-Clash Display"
                    >Your Message</label>
                    <textarea  className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm p-2 hover:border hover:border-sky-300 "
                    placeholder="Write your message"
                    rows={5}></textarea>
                    <div  className="flex justify-center ">
                    <button className="bg-sky-200 w-full sm:w-auto text-black px-14 font-2xl font-semibold m-4 rounded-lg hover:bg-cyan-300 text-semibold py-4 transition duration-300  "
                    type="submit">Submit</button>
                    </div>
                </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
