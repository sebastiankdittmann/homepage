import Image from "next/image";

export default function CvHeader(){
    return (
     <div className="flex items-center justify-center mt-52">
            <Image
                src="https://media.licdn.com/dms/image/v2/C5603AQGHLipJrLsz6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517238367103?e=1731542400&v=beta&t=38CHhDqBMyBopjdYuUIvToptU22ugaKNYvks8RpRpo4"
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