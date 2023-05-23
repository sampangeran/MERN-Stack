interface Props {
    title: string,
    description: string,
    image: string
}

const ServiceCard = ({ title, description, image }: Props) => {
    return (
        <div className="rounded-xl shadow-lg p-7 sm:min-w-[300px] min-w-full max-w-[300px] flex flex-col items-center text-center justify-center m-5 bg-white hover:shadow-xl transition duration-200 cursor-pointer">
            <div>
                <div className="relative flex justify-center mb-3">
                    <img alt={title} src={image} width={60} height={60}/>
                </div>
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm w-full mx-auto min-h-[80px]">{description}</p>
                <hr className="my-3 border-t-[1.4px] border-t-[#A7A7A7]"/>
                <button className="p-2 rounded-full bg-[#5885E9] text-white font-semibold w-full active:brightness-90 transition duration-200 focus:ring-[3px] ring-blue-300">Baca detail</button>
            </div>
        </div>
    );
}

export default ServiceCard;
