import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import skillHub from "../../assets/skillHub.jpg";

export default function Home() {
  return (
    <div className="relative justify-center h-screen font-mono">
      <Header />
      <div className="flex justify-center items-center mt-8 mb-80 h-10 bg-blue-900 gap-80">
        <div className="gap-5 justify-center items-center space-x-2 p-20">
          <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="" className="text-white italic">
              MATH TEACHER
            </option>
            <option value="Programmer" className="text-white italic">
              PROGRAMMER
            </option>
            <option value="Gardener" className="text-white italic">
              GARDENER
            </option>
            <option value="Electrician" className="text-white italic">
              ELECTRICIAN
            </option>
            <option value="Domiciliary" className="text-white italic">
              DOMICILIARY
            </option>
          </select>

          <select className="w-35 h-auto rounded-full items-center justify-center text-white space-x-7">
            <option value="" className="text-white italic">
              CHOOSE COUNTRY
            </option>
            <option value="Argentina" className="text-white italic">
              ARGENTINA
            </option>
            <option value="Colombia" className="text-white italic">
              COLOMBIA
            </option>
            <option value="Perú" className="text-white italic">
              PERÚ
            </option>
          </select>

          <select className="w-32 h-auto rounded-full items-center justify-center text-white">
            <option value="" className="text-white italic">
              CHOOSE CITY
            </option>
          </select>
        </div>

        <div className=" justify-center items-center space-x-7">
          <input
            type="text"
            placeholder="Example: Programmer"
            className="text-center italic"
          />

          <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            ENTER
          </button>
        </div>
      </div>

  
      <div className="absolute left-0 top-52 w-64 p-px-10 border-3 text-white text-center text-1xl">
        <p className="bg-blue-900 mb-6 w-full">
          Services In (country selected)
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Rubro 1</p>
          <p>Rubro 2</p>
          <p>Rubro 3</p>
          <p>Rubro 4</p>
        </div>

        <p className="bg-blue-900 mt-6 mb-6 w-full text-center">
          Users Searches
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Programmer</p>
          <p>Gardener</p>
          <p>Electrician</p>
          <p>Domiciliary</p>
        </div>

        <p className="bg-blue-900 mt-6 mb-6 w-full text-center">
          Users Searches
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <p>Argentina</p>
          <p>Colombia</p>
          <p>Perú</p>
          <p>Chile</p>
        </div>
      </div>


      <div className="flex flex-wrap justify-around ml-64 ">
      <div className="justify-around m-64 rounded-md grid grid-cols-4 gap-32 -mt-64">
        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>


        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>


        <div className="bg-white p-4 rounded-lg shadow-lg w-52">
          <img src={skillHub} className="rounded-full w-32" />
          <h3 className="text-xl font-bold mb-2 text-black italic">Title</h3>
          <p className="mb-2 text-black">Skills</p>
          <p className="text-black">Ubication</p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-1 rounded-md mt-5 inline-block shadow-md hover:shadow-lg transform transition-transform duration-200 hover:-translate-y-0.5">
            MORE INFO
          </button>
        </div>

      </div>
      </div>
      

      <Footer />
    </div>
  );
}
