import styles from "../../styles/components/pop.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { GetServerSideProps } from "next";

function PaymentPop() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      title={
        <div>
          <p
            style={{
              fontWeight: "bold",
              paddingTop: "20px",
              fontSize: "40px",
              fontFamily: "SpoqaHanSansbold",
              lineHeight: "36px",
              color: "#FFFFFF",
            }}
          >
            {t("paymentPop.title")}
          </p>
        </div>
      }
      centered
      onOk={handleOk}
      onCancel={handleCancel}
      className="paymentPopup"
      bodyStyle={{
        fontFamily: "SpoqaHanSans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "36px",
        color: "#ffffff",
      }}
      footer={[
        <Button
          key="back"
          className={`${styles.footerbtn} d-flex justify-content-center align-items-center mt-5`}
          onClick={handleCancel}
        >
          {t("paymentPop.pay")}
        </Button>,
      ]}
    >
      <div className="row">
        <div className="col-1">
          <img src="/singleCoin.svg" className="regiscomp2" />
        </div>
        <div style={{ marginLeft: 20 }} className="col-5">
          <span className={styles.amountFont}>25,000</span>
          <span>{t("paymentPop.won")}</span>
        </div>
        <div
          style={{
            marginLeft: 20,
          }}
          className="col-5"
        >
          <span className={styles.amountFont}>40,000</span>
          <span>{t("paymentPop.won")}</span>
        </div>
      </div>

      <span className={styles.amountfontsmall}>May 1, 2021</span>
      <span> {t("paymentPop.date")}</span>
    </Modal>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});


export default PaymentPop;
