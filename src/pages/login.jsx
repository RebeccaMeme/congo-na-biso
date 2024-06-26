import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const MyForm = () => {
  // const navigation = useNavigate();
  const [message, setMessage] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post("https://capstone2-c1-rebeccameme.onrender.com/login", data)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        window.replace("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div className=" w-full h-screen flex flex-row gap-10  ">
        <div className="mobil bg-[#5E5BFF] text-white text-center flex flex-col ml-5 pl-5 my-5 justify-center  gap-8 rounded w-[80rem]">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <div className="flex flex-col">
            <h2>DOWNLOAD THE APP</h2>
            <span>Welcame to our app</span>
            <span>Welcame to our app</span>
            <span>Welcame to our app</span>
          </div>
        </div>

        <div className="  w-[80rem] rounded mx-4 my-auto gap-8">
          <h2 className="text-center text-2xl">
            Connectez- vous à votre compte
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-8 items-center mt-4"
          >
            <span className="text-center ">
              Vous n'avez pas de compte?
              <Link className="text-blue-500" to="/register">
                S'inscrire
              </Link>{" "}
            </span>
            <input
              className=" input rounded text-gray-400 border border-blue-700 p-6"
              type="text"
              name="telephone"
              placeholder="Username"
              {...register("telephone", {
                required: true,
              })}
            />
            <input
              className="input rounded text-gray-400 border p-6 border-blue-700"
              type="text"
              name="password"
              placeholder="password"
              {...register("password", {
                required: true,
              })}
            />

            <div className="flex justify-center items-center gap-2">
              <button
                type="submit"
                className="bg-[#5E5BFF] hover:bg-blue-500  py-3 px-8 rounded text-white"
              >
                Se connecter
              </button>
              {/* <input type="submit" value="Connecter" ></input> */}
              <a href="" className="text-blue-500 ">
                Mot de passe oublié
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyForm;
