import styles from "../../styles/components/pop.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { GetServerSideProps } from "next";

function FourmQuestionPop() {
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
            {t("formQuestionPop.title")}
          </p>
        </div>
      }
      centered
      onOk={handleOk}
      onCancel={handleCancel}
      className="pop-title-email-verify"
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
          {t("formQuestionPop.buttonTitle")}
        </Button>,
      ]}
    >
      <p> {t("formQuestionPop.subTitle")}</p>
    </Modal>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});


export default FourmQuestionPop;
