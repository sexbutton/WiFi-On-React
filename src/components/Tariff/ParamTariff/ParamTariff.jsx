import React from "react";
import styles from "./ParamTariff.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Switcher from "../Switcher/Switcher";

function ParamTariff({ title, params, img, equipmen = false }) {
  if (equipmen) {
    const [rent, setRent] = useState(0);
    const [buy, setBuy] = useState(0);
    const [installment, setInstallment] = useState(0);

    return (
      <div className={styles.main}>
        <div className={styles.top}>
          <img src={`/src/components/Tariff/imgs/params/${img}`} alt="" />
          <h5>{title}</h5>
        </div>
        <div className={styles.botEquipment}>
          {params.map((param, i) => (
            <div key={i} className={styles.equipmentPayment}>
              <div className={styles.switcher}>
                <Switcher></Switcher>
                <span>{param.name}</span>
              </div>
              <span>
                {param.value} {param.value_type}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.top}>
          <img src={`/src/components/Tariff/imgs/params/${img}`} alt="" />
          <h5>{title}</h5>
        </div>
        <div className={styles.bot}>
          {params.map((param, i) => (
            <div key={i} className={styles.param}>
              <p>{param.name}</p>
              <span>
                {param.value} {param.value_type}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ParamTariff;
