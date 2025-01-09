import Image from "next/image";

export default function CvHeader(){
    return (
     <div className="flex items-center justify-center mt-52">
            <Image
                src="/images/profile.jpeg"
                alt="Sebastian Dittmann"
                width="200"
                height="200"
                className="mr-10 rounded-full"
            />

            <div >
                <h1 className="text-3xl font-bold">Sebastian Dittmann</h1>
                <p className="text-lg">Senior Software Engineer</p>
            </div>
        </div>
    );    
}