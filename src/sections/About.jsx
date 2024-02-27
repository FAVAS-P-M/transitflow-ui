import Deliveryicon from "../assets/Deliveryicon.png";

const About = () => {
  return (
    <section id='About'className="flex justify-wrap items-center max-xl:flex-col-reverse gpa-10 max-container">
      {/*=========backgroundimage section============*/}

      <div className="grid md:grid-cols-1">
        <div className="h-96 bg-gradient-to-t hidden md:block">
          <img className="h-[520px] w-full" src="src/assets/Photo.jpeg" />
        </div>

        <div className="grid  m-4 md:grid-cols-2">
          <div className="bg-white h-auto">
          <div className="mt-20">
            <span className="bg-gray-300">Why Us</span>
            <p className="text-black font-extrabold h-[82px] w-[472px] text-3xl">
              We Provide Full Range Of global logistic olutions
            </p>
            <p className="text-gray-400">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            <div className="grid justify-center md:grid-cols-2 mt-10">
              <div>
                <div>
                  <p className="text-3xl">Delivery On Time</p>
                </div>

                <div>
                  <p className="text-3xl">Optimized Travel Cost</p>
                </div>
              </div>

              <div className="">
                <img src="src/assets/Employee.jpg" alt="employee-image" />
              </div>
            </div>
          </div>
          </div>

          <div className="bg-white bg-gradient-to-tr hidden md:block ">
            <img
              className="w-auto mt-20"
              src="src/assets/Plane.jpg"
              alt="plane-image"
            />
          </div>
        </div>

        <div className="grid justify-center text-center md:grid-cols-2 mt-5">
          <div className='flex gap-4'><span className="text-5xl font-extrabold">1294</span><p className="mt-3 gap-4">Delivered Packages</p></div>

          <div className='flex gap-4'><span className="text-5xl font-extrabold">3594</span><p className="mt-3 gap-4">Satisfied Clients</p></div>
        </div>
      </div>

    </section>
  );
};

export default About;
