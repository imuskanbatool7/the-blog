import CommentSec from "@/app/Components/CommentSec";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";




interface BlogProps{
    params:{id:string}
}


const posts = [
    {
        id: "1",
        title: "Exploring Desert Dreams",
        content:"The desert has a unique charm a vast expanse of golden sands, rocky trails, and towering cliffs. The Jeep is a trusted companion, conquering challenging terrains across the desertThe vast emptiness of the desert offers a sense of serenity, with the whispering wind and warm glow of the setting sun providing an unmatched connection to nature. Desert trails may be tough, but the memories they create are worth every bump in the road.",
        image:'/jeep1.png',
    },

    {
        id: "2",
        title: "Off-Roading in the Wilderness",
        content:"Off-roading in the wilderness is an experience like no other. Towering trees, fresh mountain air, and the thrill of navigating uncharted paths make every ride an adventure. The Jeep is more than just a vehicle—its a bridge between the adventurer and the natural world.The journey through the wilderness teaches an appreciation for the little things: the crunch of leaves under the tires, the distant call of birds, and the freedom that only nature can provide. Grab a Jeep and explore to truly reconnect with the outdoors!",
        image:'/jeep2.png',
    },
    {
        id: "3",
        title: "A Journey Through Lava Fields",
        content:"Driving through lava fields is a surreal experience. The stark contrast of black, rugged terrain against the clear blue sky creates a dramatic landscape. The Jeep braves this unique environment, proving no road is too tough for a true adventurer.The lava fields, though harsh, are full of beauty and stories. This journey is a testament to resilience, adventure, and the spirit of pushing boundaries to embrace the unexpected.",
        image:'/jeep3.png',
    },
    {
        id: "4",
        title: "The Forest Calls: A Jeep Adventure",
        content:"The forest is a magical place, full of secrets and surprises. Driving through its winding trails with a Jeep is an adventure like no other. The golden sunlight filtering through the trees, the crunch of gravel under the tires, and the fresh scent of pine create an immersive experience.Each trail is a new story waiting to be discovered. The Jeep handles the twists and turns with ease, making the journey both exciting and safe. Whether an off-roading enthusiast or a nature lover, the forest has something special to offer.",
        image:'/jeep4.png',
    },
    {
        id: "5",
        title: "Sunrise on the Summit",
        content:"There is no better way to greet the day than from the top of a mountain, with the sun rising in the distance. From the Jeep's rooftop, the sky transforms into a breathtaking canvas of colors.The climb to the summit might be tough, but the view from the top makes it all worthwhile. Moments like these are the essence of off-road adventures, fueling the passion to continue chasing the horizon.",
        image:'/jeep5.png',
    }
]

export default function Blogpage({params}:BlogProps){
    
 const post = posts.find (post => post.id === params.id)

 if (!post) return <div> post not found</div>
    
 return(
    <div>
        <Navbar/>
        <div className="container max-w-4xl mx-auto md:p-6 p-5  py-8 mt-6  bg-purple-100">
        
        <h1 className=" text-3xl text-center font-bold mb-4">{post.title}</h1>
        <Image className="flex justify-center mb-6 items-center mx-auto rounded-lg"
         src={post.image} alt={post.title} width={500} height={500}/>
        <p className="text-gray-800 font-medium  leading-relaxed text-center font-Clash Display">{post.content}</p>
       </div>

        <div>
            <CommentSec/>
        
        </div>
        <Footer/>
    </div>
 )
};