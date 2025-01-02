"use client"
import { useState } from "react";


export default function CommentSec(){
    const [comments , setComments] = useState<string[]>([])
    const [newcomments , setNewComments] = useState<string>('')

    const handleAddComments = () =>{
        if (newcomments.trim() !== ''){
        setComments([...comments, newcomments]);
        setNewComments('');
        }
    };

    return(
        <div className=" bg-white shadow-md shadow-cyan-600 rounded-lg pt-5 py-3 px-4 mt-12 max-w-4xl mx-auto m-4 ">
            {/* title */}
        <h4 className="text-xl font-bold mb-4 text-center text-cyan-900"> Comments 💬</h4>
        <div className="flex flex-col sm:flex-row gap-4 mb-4"> 
            {/* input */}
            <textarea className="w-full hover:border hover:border-cyan-700 border border-gray-400 rounded-md p-5 mb-4 mx-auto resize-none "
             placeholder="Write a comment " 
             value={newcomments}
             onChange={(e) => setNewComments(e.target.value)}></textarea>
             <button 
             className="bg-cyan-200 w-full sm:w-auto text-black sm:px-4 sm:mx-4 py-2 m-4  rounded-lg hover:bg-sky-200"
             onClick={handleAddComments} 
             >Add</button>
        </div>
        {/* dislay comments */}
        <div className="space-y-4 mt-4">
        
            {comments.map((comment, index)=>(
             <div
             key={index} 
             className="p-3 border rounded-md bg-cyan-50 text-gray-600 font-serif mx-4 m-4">
                <p>{comment}</p>
                </div>
            ))}
        
        </div>
        </div>
        
    )
}