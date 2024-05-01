import Header from "../components/header";
import Img1 from "../assets/images/qr-codes-for-attendance-tracking.jpg (1).webp";
import Img2 from "../assets/images/QR-Code-Tracking-Attendance-and-Check-In-1024x534.jpg(2).webp";
import Img3 from "../assets/images/Use-Cases-of-QR-Codes-for-Attendance-Tracking-768x334.jpg(4).webp";
import Img4 from "../assets/images/How-QR-Codes-for-Attendance-Tracking-Work-768x334.jpg(3).webp";
// import Linkedln from "../assets/images/ Linkedln.svg";

function Home() {
  return (
    <>
      <Header />
      <main className="bg-white mx-auto text-black h-full w-full">
        <div
          className="flex flex-col justify-items-center "
          style={{ marginTop: "50px" }}
        >
          <div className="w-[1180px] my-auto mx-auto">
            <h1 className="font-bold m-4 flex justify-center text-3xl">
              Comment utiliser les codes QR pour le suivi des présences
            </h1>
            <div className="flex gap-4">
              <div className="w-full w-[50%] ">
              <img src={Img1} alt="" className="rounded-md" />

              </div>
              <div className="w-[50%]  pt-6">
              <p  className="text-justify">
                La participation ou l'enregistrement à un événement est
                peut-êtrle critère d'engagement le plus importantEn effet, il
                s'agit de la première interaction en face à face avec les
                participants. Elle donne la première impression de l'événement
                organis aux participants et définit les l'ambiance de
                l'événement. Ces participants peuvent être étudiants, employés,
                sponsors, délégués,conférenciers, exposants VIP. Un code QR est
                utilisé comme pour diriger les gens instantanément vers une URL
                web plutôt que de les rechercher manuellement et y entrer.
                Alors, comment peut-on exploiter les codes QR pour faciliter une
                saisie plus rapide l'enregistrement sur le lieu d'un événement ?
                Eh bien, lorsqu'un candidat les participants s'inscrivent pour
                faire partie de l'événement, un code QR distinct est partagé
                avec eux. Ce partage se fait soit par e-mail, soit sur le billet
                d'entrée elle-même. Le jour de l'événement, les membres du
                personnel chargés de faciliter l'enregistrement Il suffit
                d'utiliser un scanner de codes QR, qui peut être un smartphone.
              </p>

              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-items-center ">
          <h2 className="font-bold m-4 flex justify-center">
            Avantages de l'utilisation de QR Codes pour l'enregistrement et le
            suivi des présences
          </h2>
          <div className="flex justify-center ">
            <img src={Img2} alt="" />
          </div>
          <div className="text-left ml-20 mr-4 pb-8 pt-3">
            <span>
              Voici les principales les avantages de l'utilisation des codes QR
              pour suivre les présences ou faciliter les enregistrements :
            </span>
            <span>
              - Montage et démontage faciles: Les ressources telles que
              l'argent, la main d'œuvre, la papeterie et le temps sont largement
              dépensées dans la mise en place et le démontage des comptoirs de
              présence et d'enregistrement. Avec les codes QR, ces dépenses sont
              réduites d'au moins un dixième. Ils nécessitent moins de temps
              d'enregistrement et moins de personnel également. En outre, il est
              facile d'utiliser un smartphone comme scanner de codes QR. Il n'y
              a pas lieu de se soucier de la disposition des ordinateurs
              portables, des membres du personnel et de la papeterie.
            </span>
            <span>
              Préparatifs simples : Comme les lecteurs de codes QR de
              smartphones sont simples et faciles à utiliser, il n'est pas
              nécessaire de dispenser une formation spécial aux membres du
              personnel de l'événement. Les organisateurs de l'événement n'ont
              qu'à tester le scanner choisi avant l'événement. Il n'est pas non
              plus nécessaire d'utiliser des ordinateurs portables pour saisir
              les données de participation et les confirmer.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-items-center ">
          <h2 className="font-bold m-4 flex justify-center ">
            Comment les codes QR pour Suivi des présences au travail ?
          </h2>
          <div className="flex justify-center ">
            <img src={Img3} alt="" />
          </div>
          <div className="text-left ml-20 mr-4 pb-8 pt-3">
            <p>
              Lorsqu'un participant scanne le code QR imprimé, les détails de
              l'événement sont affichés, ce qui implique le lieu, l'action comme
              l'enregistrement, et la description de l'événement comme la
              réunion annuelle, une concert musical, ou un atelier pour les
              élèves.
            </p>
            <span>
              En fonction du code QR utilisé, il y a deux options à choisir.
              Premièrement, le participant est ensuite invité à saisir son nom
              ou son numéro d'identification et à le soumettre.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-items-center ">
          <h2 className="font-bold m-4 flex justify-center ">
            Cas d'utilisation des codes QR pour Suivi des présences
          </h2>
          <div className="flex justify-center ">
            <img src={Img4} alt="" />
          </div>
          <div className="text-left ml-20 mr-4 pb-8 pt-3">
            <span>
              Il existe de nombreuses entités pour qui l'utilisation de codes QR
              pour l'enregistrement ou la présence est utile et bénéfique pour
              déclencher l'engagement et suivre l'efficacité. En voici
              quelques-unes des affaires :
            </span>
            <p>
              Un propriétaire d'entreprise qui souhaite suivre la présence de
              ses employés à temps partiel, contractuels, saisonniers ou
              temporaires afin de pouvoir payer uniquement les heures
              travaillées en l'analysant de n'importe où et à partir de
              n'importe quel appareil
            </p>
            <p>
              Un propriétaire d'entreprise qui souhaite suivre la présence de
              ses employés à temps partiel contractuels, saisonniers ou
              temporaires afin de pouvoir payer uniquement les heures
              travaillées, en l'analysant de n'importe où et à partir de
              n'importe quel appareil
            </p>
            <p>
              Un restaurant qui souhaite suivre les horaires de travail de son
              personnel en enregistrant les heures d'entrée et de sortie
            </p>
            <p>
              Un établissement d'enseignement tel que les écoles et les
              universités, pour suivre l'assiduité des étudiants et superviser à
              distance
            </p>
            <p>
              Un travailleur indépendant pour le suivi des heures de travail
              mensuelles de son équipe
            </p>
          </div>
        </div>

        <div className="text-left ml-20 mr-4 pb-8 ">
          <h2 className="font-bold">Conclusion</h2>
          <span>
            Suivi des présences ou faciliter l'enregistrement par le biais de
            codes QR est véritablement engageant et pratique pour les
            participants qui peuvent être des étudiants, des délégués
            commerciaux, des sponsors de l'événement, employés, ou VIP.
            Envisagez de partager ces codes au moment de l'inscription ou tout
            en faisant la promotion de l'événement afin que les participants
            soient informés des check-ins rapides, un motivation majeure pour
            assister à l'événement correspondant.
          </span>
        </div>
      </main>
      <footer className="flex justify-items-center  gap-4">
        <div className="flex flex-col gap-1 text-left ml-20 mr-4 pb-8 ">
          <h2 className="font-bold ">Caracteristiques</h2>
          <span>Suivi des absences</span>
          <span>Suivi des presences</span>
        </div>
        <div className=" flex flex-col gap-1 text-left ml-20 mr-4 pb-8 ">
          <h2 className="font-bold">Contact</h2>
          <div>
            {/* <img src={Linkedln} alt="Linkedln" /> */}
            <span>rebecca meme</span>
          </div>
          <span>rebeccameme@gmail.com</span>
        </div>
      </footer>
    </>
  );
}
export default Home;
