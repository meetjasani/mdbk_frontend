import styles from '../../styles/components/pop.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import Router from 'next/router'
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'

function EmailConfirmationPop() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(true);
    const router = useRouter()
    const handleOk = () => {
        setTimeout(() => {
            setVisible(false)
        }, 3000);
    };

    const handleCancel = () => {
        Router.push(`${router.locale && router.locale == 'en' ? '/en/register?islogin=2' : '/register?islogin=2'}`)
    };

    return (
        <Modal
            visible={visible}
            title={<div>
                <p style={{ fontWeight: "bold", paddingTop: "20px", fontSize: "40px", fontFamily: "SpoqaHanSans", lineHeight: "45px" }}>{t('emailConfirm.popUpTitle')}</p>
            </div>}
            centered
            onOk={handleOk}
            onCancel={handleCancel}
            className="pop-title-email-verify"
            bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px", color: " #16181C" }}
            footer={[
                <Button key="back" className={`${styles.footerbtn} d-flex justify-content-center align-items-center`} onClick={handleCancel}>
                    {t('emailConfirm.popUpButton')}
                </Button>
            ]}
        >
            <p> {t('emailConfirm.popUpContent')}
            </p>
        </Modal>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default EmailConfirmationPop