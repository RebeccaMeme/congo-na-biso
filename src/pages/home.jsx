import Header from "../components/header";
import Scanner from "../assets/images/scanner.webp";
// import { useForm } from "react-hook-form";
import MyForm from "./login";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-blue-700  text-white justify-between h-full">
        
        <div className="flex justify-around ">
          <div>
            <img src={Scanner} alt="" className="" />
          </div>
          <div className="bg-yellow-400 rounded my-10 ">
            <MyForm />
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
