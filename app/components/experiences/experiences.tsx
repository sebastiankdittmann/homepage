import Experience from "@/app/components/experience/experience";

export default function Experiences() {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="text-left w-full">
                <h1 className="text-2xl font-bold">Experiences</h1>
            </div>
            <div>
                <Experience title="Senior Software Engineer" company="the LEGO Group" from="2023" to="Present"/>
                <Experience title="Senior Software Engineer" company="Maersk" from="2022" to="2023"/>
                <Experience title="Software Engineer" company="Maersk" from="2019" to="2022"/>
                <Experience title="Software Engineer" company="cVation" from="2018" to="2019"/>
                <Experience title="Software Engineer" company="Maersk" from="2017" to="2018"/>
            </div>            
        </div>
    );
}