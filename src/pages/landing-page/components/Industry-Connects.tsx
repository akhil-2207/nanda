import { CLFMALOGO,KPFBALOGO } from "@/assets/images";
function IndustryConnects () {
  return (
    <section id="industry-connects" className="py-8">
      <div className="container mx-auto sm:px-6 px-3">
        <h2 className="md:text-4xl text-2xl font-semibold text-center text-black mb-10 md:mb-16">
          Industry Connects
        </h2>
        <div className="flex md:flex-row flex-col gap-8 ">
          <div className="flex justify-center items-center container flex-col md:mr-5">
              <img
                src={CLFMALOGO}
                alt="CLFMA Logo"
                className=" h-36 md:h-32 mr-4"
              />
              <img
                src={KPFBALOGO}
                alt="KPFBA Logo"
                className="h-28"
              />
          </div>
          <div>
            <h2  className="md:text-3xl text-xl text-black md:mb-10 mb-6 font-medium ">Strengthening the Farming & Processing Industry</h2>
              <p className="text-xl text-black mb-4 font-normal ">
                At Nanda Group, we are proud to contribute to the advancement of the farming
                and processing sector through our active involvement with key industry bodies 
                like CLFMA of India and KPFBA.
              </p>
              <ul className="list-disc pl-5 text-black font-normal text-lg ">
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
