export default function ProjectsCard(){
    return(
        <div className="">
            <div className="flex flex-col border-black border w-80 h-auto font-Poppins ">
                <div className="">
                    <img className="w-80" src="images/sample-web.jpg" />
                </div>         
                <div className="text-center">
                    <p className="font-bold text-xl my-3">Project Name</p>
                    <p className="font-regular text-sm text-justify mx-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>    
                <div className="text-center flex gap-3 mx-8 my-3 flex-wrap justify-center">
                    <p className="font-regular text-sm h-7 text-[#971E78] bg-[#B14796]/20 rounded-xl py-1 px-3">C#</p>
                    <p className="font-regular text-sm h-7 text-[#971E78] bg-[#B14796]/20 rounded-xl py-1 px-3">React.js</p>
                    <p className="font-regular text-sm h-7 text-[#971E78] bg-[#B14796]/20 rounded-xl py-1 px-3">.NET MAUI</p>
                    <p className="font-regular text-sm h-7 text-[#971E78] bg-[#B14796]/20 rounded-xl py-1 px-3">Java</p>
                </div>
                <div className="flex my-3 mx-8 justify-between gap-3">
                    <div className="flex w-1/2 border-[#0267ED] border p-1 rounded-md">
                        <img className="w-7" src="/images/github.png" />
                        <p className="font-regular text-sm mt-1 ml-2">View Code</p>
                    </div>
                    <div className="flex w-1/2 border-[#0267ED] border py-1 rounded-md">
                        <img className="w-7 ml-2 mr-3"  src="/images/external-link.png" />  
                        <p className="font-regular text-sm mt-1">Visit site</p>
                    </div>
                </div>
            </div>   
        </div>
    );
}