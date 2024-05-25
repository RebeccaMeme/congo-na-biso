import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function FormulaireInscription() {
  const {
    register,
    formState: { errors },
    // handleSubmit,
  } = useForm();
  const [Numero_matricule, setNumero_matricule] = useState(null);
  const [nom, setNon] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [etat_civile, setEtat_civile] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(null);

  const onSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/agents",
        {
          Numero_matricule: Numero_matricule,
          nom: nom,
          prenom: prenom,
          sexe: sexe,
          email: email,
          telephone: telephone,
          etat_civile: etat_civile,
          password: password,
        }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true, // Include credentials for cross-site requests
        // }
      );

      if (response.status === 200) {
        console.log(response.data);
        setUserInfo(response.data); // Access data directly from response
        setRedirect(true);
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className=" w-full h-screen flex flex-row gap-10">
        <div className="mobil bg-[#5E5BFF] text-white text-center flex flex-col ml-5 pl-5 my-5 justify-center  gap-8 rounded w-[80rem]">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <div className="flex flex-col">
            <h2>DOWNLOAD THE APP</h2>
            <span>Welcame to our app</span>
            <span>Welcame to our app</span>
            <span>Welcame to our app</span>
          </div>
        </div>

        <div className="w-[80rem] rounded mx-4 my-auto gap-8">
          <h1 className="text-center text-2xl">Créer un compte</h1>
          <span className="text-center ">
            Vous avez dejà un compte?
            <Link className="text-blue-500" to="/login">
              {" "}
              Connectez-vous
            </Link>
          </span>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-8 items-center mt-4"
          >
            <div className="flex flex-col">
              <span> Numero matricule</span>
              <input
                type="text"
                name="Numero_matricule"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("Numero_matricule", {
                  required: true,
                  pattern: /^[0-9]+$/i,
                })}
                placeholder="Numero_matricule"
                onChange={(e) => {
                  setNumero_matricule(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <span> Nom</span>
              <input
                type="text"
                name="nom"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("nom", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                onChange={(e) => {
                  setNon(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <span> Prenom</span>
              <input
                type="text"
                name="prenom"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("prenom", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                onChange={(e) => {
                  setPrenom(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <span> email</span>
              <input
                type="text"
                name="email"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("email", { required: true })}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <span> Password</span>
              <input
                type="password"
                name="<span> email</span>"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("password", { required: true })}
                placeholder="password"
              />
            </div>
            <div className="flex flex-col">
              <span>Sexe</span>
              <select
                name="sexe"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("sexe", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="sexe"
              >
                <option>Select genre</option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span>Etat civile</span>
              <select
                name="etat_civile"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("etat_civile", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                onChange={(e) => {
                  setEtat_civile(e.target.value);
                }}
              >
                <option value="M">Marié</option>
                <option value="F">Celibataire</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span>Telephone</span>
              <input
                type="text"
                name="telephone"
                className="input rounded text-gray-400 border border-blue-700 p-5 "
                {...register("telephone", {
                  required: true,
                  pattern: /^[0-9]+$/i,
                })}
                placeholder="telephone"
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
              />
            </div>
            {/* <input
                type="text"
                name="id_service"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("id_service", { required: true, pattern: /^[0-9]+$/i })}
                placeholder="id_service"
              />
               <input
                type="text"
                name="id_fonction"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("id_fonction", { required: true, pattern: /^[0-9]+$/i })}
                placeholder="id_fonction"
              />
              <input
                type="text"
                name="id_grade"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("id_grade", { required: true, pattern: /^[0-9]+$/i })}
                placeholder="id_grade"
              /> */}
            <div>
              <button className="bg-[#5E5BFF] hover:bg-blue-500  py-3 px-8 rounded text-white">
                S'inscrire
              </button>
            </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
export default FormulaireInscription;
