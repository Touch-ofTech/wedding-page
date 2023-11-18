import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onValue,ref } from "firebase/database";


import "./Confirmation.scss";
import {db} from "../../firebase";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const Confirmation = () => {
  const [t, i18n] = useTranslation("global");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberGuests: "",
    guesstOne: "",
    guesstTwo: "",
    dedication: "",
  });

  const queryString = window.location.search;
  const urlParams: any = new URLSearchParams(queryString);
const [testeandp, settesteandp] = useState([])
  const guest = urlParams.get("guest");
  // console.log(guest)
  const [nameConf, setNameConf] = useState("");
  const [guestConf, setGuestConf] = useState<any>("");
  const [confirmed, setConfirmed] = useState(false);
  const getInfo = async () => {
    onValue(ref(db),snapshot=>{
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map(test=>{
          settesteandp(oldArr=>[...oldArr,test])
        })
      }
    })
    // const docRef = doc(db, "invites", `${guest}`);
    // const docSnap = await getDoc(docRef);
    // console.log(docSnap.exists())
    // if (docSnap.exists()) {
    //   console.log(docSnap.data())
    //   const { name, guests, confirm } = docSnap.data();
    //   setNameConf(name);
    //   setGuestConf(guests);
    //   setConfirmed(confirm);
    // } else {
    //   return;
    // }
  };
console.log(testeandp)
useEffect(() => {
  getInfo();
}, [])


  const updateConfirm = () => {
    db.collection("guests").doc(guest).update({ confirm: true });
    toast.success("Haz confirmado ir a los Xvs de Kimberly🍾", {
      duration: 5000,
      position: "top-center",
    });
  };

  return (
    <section className="form-container" id="form">
      <div className="card-form-container">
        <div className="header--form-container">
          <h1 className="form-header">{t("message.confirm")}</h1>
          <span className="error-text">{t("message.event")}*</span>
        </div>
        <div className="form-middle-container">
          <h2 className="form-header-title">{t("message.limit")}</h2>
          <h1 className="form-header-guest">{nameConf}</h1>
          <h2 className="form-header-invites">
            {guest === null
              ? t("message.no-guest")
              : t("message.reservation", { count: guestConf })}
          </h2>
        </div>

        <button
          type="submit"
          className="confirm-button"
          onClick={updateConfirm}
          disabled={confirmed || guest === null}
        >
          {confirmed ? t("message.confirmation") : t("message.submit")}
        </button>
      </div>
    </section>
  );
};