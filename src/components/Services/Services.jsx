import Service from "../Service/Service";


const Services = ({sliderData}) => {
    return (
        <div className="mt-24">
            <h1 className="text-center font-bold text-4xl mb-5 ">Services that we provide</h1>
            <p className="font-semibold text-2xl text-center mb-16">Transform Your Event with Our Expert Services – See What We Can Do!</p>
            <div className=" flex flex-col justify-center items-center w-5/6 mx-auto lg:grid lg:grid-cols-3 gap-10 lg:w-11/12">
                {
                    sliderData.map(services =><Service services={services}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;