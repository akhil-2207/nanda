
import { CLFMALOGO } from "@/assets/images";
function IndustryConnects () {
  return (
    <section id="industry-connects" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-black mb-6">
          Strengthening the Farming & Processing Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
            <img
              src={CLFMALOGO}
              alt="CLFMA Logo"
              className="h-32 mr-4"
            />
            <img
              src="/path-to-kpfba-logo"
              alt="KPFBA Logo"
              className="h-16"
            />
          </div>
          <div>
            <p className="text-xl text-black mb-4 font-normal ">
              At Nanda Group, we are proud to contribute to the advancement of the farming
              and processing sector through our active involvement with key industry bodies 
              like CLFMA of India and KPFBA.
            </p>
            <ul className="list-disc pl-5 text-black fo">
              <li>Advocating farmer welfare and sustainability</li>
              <li>Enhancing poultry production techniques</li>
              <li>Innovating processing technologies for superior quality</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IndustryConnects;
