import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import "./Confirmation.scss";
import db from "../../firebase";
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

  const guest = urlParams.get("guest");
  const [nameConf, setNameConf] = useState("");
  const [guestConf, setGuestConf] = useState<any>("");
  const [confirmed, setConfirmed] = useState(false);
  const getInfo = async () => {
    const docRef = doc(db, "guests", `${guest}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { name, guests, confirm } = docSnap.data();
      setNameConf(name);
      setGuestConf(guests);
      setConfirmed(confirm);
    } else {
      return;
    }
  };
  getInfo();

  const updateConfirm = () => {
    db.collection("guests").doc(guest).update({ confirm: true });
    toast.success("Haz confirmado ir a la boda de Mariana y Carlos! 🐈‍⬛ 🐈", {
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