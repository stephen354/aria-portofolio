import DataImage, { listCertificate, listProyek, listTools } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-4s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Karier yang hebat lahir dari ketekunan dan empati.</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Aria Putri</h1>
          <p className="text-base/loose mb-6 opacity-50">
            I am always enthusiastic about learning and developing my knowledge,
            skills, and projects in the fields of Human Resources and Product
            Management.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              My Activity <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] rounded-b-4xl md:ml-auto animate__animated animate__fadeInUp animate__delay-5s"
          loading="lazy"
        />
      </div>

      {/* About */}
      <div className="about mt-32 py-10">
        {/* describe */}
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden block"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            I am a fresh graduate of the Industrial Engineering Department at
            Universitas Merdeka Malang with a keen interest in Human Resources
            and Product Management. I am always enthusiastic about learning and
            developing my knowledge, skills, and projects in the fields of Human
            Resources and Product Management. I hope to continue to grow and
            contribute to the industry, as well as build and strengthen
            relationships with professionals in my network.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">3.8</h1>
                <p>IPK</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Experience
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose !opacity-50"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            Continuously learning and contributing to build better teams, better
            processes, and better results.
          </p>
          <div className="tools-box mt-14 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-10 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={tool.dad}
              >
                <div className="flex flex-col gap-10">
                  <div>
                    <h6 className="text-base/loose text-violet-400">
                      {tool.thn}
                    </h6>
                    <h4 className="font-bold">{tool.nama}</h4>
                  </div>
                  <div>
                    <div className="flex gap-1.5 items-center">
                      <div className="w-2 h-2 rounded-[50%] bg-violet-400"></div>
                      <p className="opacity-80">{tool.ket}</p>
                    </div>
                    <p className="text-[14px] opacity-50">{tool.thn_desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          My Activity
        </h1>
        <p
          className="text-base/loose text-center !opacity-50"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Berikut ini beberapa activitas yang telah saya lakukan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 bg-zinc-600 border border-zinc-500 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="https://www.linkedin.com/in/aria-putri-zulfa-laili"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sertifikat */}
      <div className="proyek mt-32 py-10">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Certificate
        </h1>
        <p
          className="text-base/loose text-center !opacity-50"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          Berikut ini beberapa sertifikat yang saya dapatkan
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listCertificate.map((certificate) => (
            <div
              key={certificate.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={certificate.dad}
            >
              <img
                src={certificate.gambar}
                alt="certificate Image"
                loading="lazy"
                className="w-full max-h-[200px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="flex flex-col mt-2">
                <div>
                  <h6 className="text-base/loose text-violet-400">
                    {certificate.thn}
                  </h6>
                  <h4 className="font-bold">{certificate.nama}</h4>
                </div>
                <div>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-[50%] bg-violet-400"></div>
                    <p className="opacity-80">{certificate.ket}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
