import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function FormulaireInscription() {
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  // Option pour la validation du formulaire

  const onSubmit = (data) => {
  
    // const estInscrit = validateCredentials(formData);
    const initialFormData = {
      Numero_matricule: data.Numero_matricule, 
      nom : data.nom, 
      prenom: data.prenom , 
      sexe: data.sexe, 
      email: data.email, 
      password: data.password, 
      telephone: data.telephone, 
      etat_civile: data.etat_civile, 
      id_serv: data.id_service, 
      id_fonct: data.id_fonction, 
      id_grad: data.id_grade
    };
    console.log('data',initialFormData)
    // if (estInscrit) {
    //   navigate("/login"); // Rediriger vers la page de connexion s'il est déjà inscrit
    //   return; // Empêcher la soumission ultérieure du formulaire
    // }
  };

  return (
    <>
      <div className=" w-full h-ful flex flex-row gap-10">
        
        <div className="bg-blue-400 flex flex-col ml-5 mt-2 text-center  border mx-auto rounded w-[40rem] h-[65rem] gap-4 ">
          <h1 className="fond-bold text-2xl mb-3">Congo na biso</h1>
          <h2>DOWNLOAD THE APP</h2>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
          <span>Welcame to our app</span>
        </div>

        <div className="flex flex-col justify-items-center p-y-4 w-[80rem] h-[20rem] ml-4 gap-6  mr-5">
          <h1 className="fond-bold text-2xl">Créer un compte</h1>
          <span>
            {" "}
            Vous avez dejà un compte?
            <Link className="text-blue-500" to="/login">
              Connectez-vous
            </Link>{" "}
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-black bg-white w-full  h-full flex-1 focus:outline-none  gap-10 h-25 w-30"
          >
            <div className=" flex flex-col gap-10 h-25 w-15 text-align: center">
              <input
                type="text"
                name="Numero_matricule"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("Numero_matricule", { required: true, pattern: /^[0-9]+$/i })}
                placeholder="Numero_matricule"
              />
              <input
                type="text"
                name="nom"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("nom", { required: true, pattern: /^[A-Za-z]+$/i })}
                placeholder="nom"
              />
              <input
                type="text"
                name="prenom"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("prenom", { required: true, pattern: /^[A-Za-z]+$/i })}
                placeholder="prenom"
              />
              <input
                type="text"
                name="email"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("email", { required: true })}
                placeholder="email"
              />
              <input
                type="text"
                name="password"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("password", { required: true })}
                placeholder="password"
              />
              <input
                type="text"
                name="sexe"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("sexe", { required: true, pattern: /^[A-Za-z]+$/i })}
                placeholder="sexe"
              />
              <input
                type="text"
                name="etat_civile"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("etat_civile", { required: true, pattern: /^[A-Za-z]+$/i })}
                placeholder="etat_civile"
              />
              <input
                type="text"
                name="telephone"
                className="input rounded text-gray-400 border border-blue-700 "
                {...register("telephone", { required: true, pattern: /^[0-9]+$/i })}
                placeholder="telephone"
              />
               <input
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
              />
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-14 rounded">
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default FormulaireInscription;
