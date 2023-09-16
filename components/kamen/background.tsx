import Image from "../common/image";


export default function Background({className} : {className : string}) {
    
    return (
        <div
            className={className}
        >
           <Image
                src={"/kamen/initiate.gif"} 
                height={720} width={1280} 
                alt="initiate" 
                className={``} 
            /> 
        </div>
    )
}