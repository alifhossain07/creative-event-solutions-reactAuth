import Service from "../Service/Service";


const Services = ({sliderData}) => {
    return (
        <div className="mt-24 bg-gradient-to-bl from-blue-500 via-cyan-200 to-sky-500 rounded-3xl p-10 w-11/12 mx-auto">
            <h1 className="text-center font-bold text-4xl mb-5 ">Services that we provide</h1>
            <p className="font-semibold text-2xl text-center mb-16">Transform Your Event with Our Expert Services – See What We Can Do!</p>
            <div className=" flex flex-col justify-center items-center w-5/6 mx-auto lg:grid lg:grid-cols-3 gap-10 lg:w-full">
                {
                    sliderData.map(services =><Service key={services.id} services={services}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;