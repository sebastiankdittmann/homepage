export interface ExperienceProps {
    title: string;
    company: string;
    from: string;
    to: string;
    description?: string;
}

export default function Experience(props : ExperienceProps){
    return(
        <div className="mt-4">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p className="text-lg">{props.company}</p>
            <p className="text-lg">{props.from} - {props.to}</p>
        </div>
    );
}