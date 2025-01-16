import { services } from "../../../../constant/data";

const DynamicServices = async ({params}) => {
  const {slug} = await params;
  const filterDataHardware = services.find((service) => service.link == slug)


    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">{filterDataHardware?.title}</h1>
        <p className="mt-4 text-lg">
          {filterDataHardware?.description}
        </p>
        {/* Anda dapat menambahkan detail lebih lanjut di sini */}
      </div>
    );
  };
  
  export default DynamicServices;
  