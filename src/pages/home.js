import React from "react";
import Navbar from "../components/navbar";
import Profilepicture from "../assets/Lerato ProPic.png";
import PageWrapper from "../components/pagewrapper";

const Home = () => {
    return(
        <PageWrapper>

        <section className="min-h-screen flex items-center pt-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx auto px-4 grid md:grid-cols-2 gap-12 items-center">

              <div className="animate-fadeUp">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Hi, my name is <span className="text-blue-600">Lerato Mofokeng</span> 👋

                </h1>

                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">IT Graduate | Aspiring Cybersecurity Analyst | Virtual Assistant</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Welcome to my personal website! I am passionate about technology and eager to kickstart my career in the IT industry. As an IT graduate, I have acquired a solid foundation in various IT domains and am particularly interested in cybersecurity analysis and virtual assistance.
                </p>
                <div className="flex gap-4">
                    <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"> View Projects</a>
                    <a href="/Lerato_MofokengCV.pdf"
                download="Lerato_MofokengCV.pdf"
               className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"> Download CV</a>

                </div>
                </div> 
                <div className="flex justify-center animate-fadeIn">
                    <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl"> 
                        
                        <img src={Profilepicture} alt="Lerato Profile Picture" className="w-64 h-64 rounded-full object-cover shadow-lg"/>

                    </div>
                    </div> 
            </div>
        
        </section>
        </PageWrapper>
       
        
    
    )

}




export default Home;