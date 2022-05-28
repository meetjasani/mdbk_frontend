import styles from "../../styles/components/pop.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { GetServerSideProps } from "next";

function FourmQuestionEditPop() {
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
            }}
          >
            {t("formQuestionEditPop.title")}
          </p>
        </div>
      }
      centered
      onOk={handleOk}
      onCancel={handleCancel}
      className="paymentPg"
      bodyStyle={{
        fontFamily: "SpoqaHanSans",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "36px",
        color: " #16181C",
      }}
      footer={[
        <Button
          key="back"
          className={`${styles.footerbtn} d-flex justify-content-center align-items-center`}
          onClick={handleCancel}
        >
          {t("resetPwd.confirm")}
        </Button>,
      ]}
    >
      <div>
        <div className={styles.paymentButtonLong}></div>
        <div
          className={styles.paymentButtonLong}
          style={{
            marginTop: 5,
          }}
        ></div>
        <div
          className="d-flex align-items-center`"
          style={{
            marginTop: 5,
          }}
        >
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,

              }}
            >
              PAYCO
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              KPay
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              samsungPay
            </Button>
          </span>
        </div>
        <div className=" d-flex  align-items-center" style={{ marginTop: 5 }}>
          <div
            className={`${styles.paymentButtonLong} col-6`}
            style={{ marginTop: 5 }}
          ></div>
          <div className={`col-1`} style={{ width: 10, marginTop: 5 }}></div>
          <div
            className={`${styles.paymentButtonLong} `}
            style={{ marginTop: 5, width: "100%" }}
          ></div>
        </div>
        <div
          className="d-flex "
          style={{
            marginTop: 5,
          }}
        >
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              PAYCO
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3  `}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              KPay
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType}  col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              samsungPay
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3 `}>
            <Button
              style={{
                width: "87%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              samsungPay
            </Button>
          </span>
        </div>
        <div
          className="d-flex "
          style={{
            marginTop: 5,
          }}
        >
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              PAYCO
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3  `}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              KPay
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType}  col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              samsungPay
            </Button>
          </span>
          <span className={`${styles.paymentButtonPaymentType} col-3 `}>
            <Button
              style={{
                width: "87%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              samsungPay
            </Button>
          </span>
        </div>
        <div
          className="d-flex "
          style={{
            marginTop: 5,
          }}
        >
          <span className={`${styles.paymentButtonPaymentType} col-3`}>
            <Button
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
              }}
            >
              PAYCO
            </Button>
          </span>
        </div>
      </div>
    </Modal>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});


export default FourmQuestionEditPop;
