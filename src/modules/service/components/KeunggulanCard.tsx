interface Props {
    title: string,
    description: string,
    image: string
}

const KeunggulanCard = ({ title, description, image }: Props) => {
    return (
        <div className="rounded-xl hover:shadow-lg sm:min-w-[400px] min-w-full max-w-[300px] m-5 bg-[#F5F8FF] transition duration-200 cursor-pointer">
            <div>
                <div className="relative flex justify-center mb-3 w-full h-[150px] bg-cover bg-center rounded-t-xl" style={{ backgroundImage: `url('${image}')` }}>
                </div>
                <div className="p-5">
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-sm w-full mx-auto min-h-[80px]">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default KeunggulanCard;
