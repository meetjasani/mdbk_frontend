/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import popUpstyles from '../../styles/components/pop.module.css'
import verifystyles from '../../styles/emailVerify.module.css'
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import GiftBox from '../../public/PopupImage.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

function UpdateProfilePopUp() {
    const router = useRouter();
    const { t } = useTranslation()
    const [visible, setVisible] = useState(true)

    const handleCancel = () => {
        Router.push(`${router.locale && router.locale == 'en' ? '/en/registration/client?islogin=1&loginStateVal=true&type=client' : '/registration/client?islogin=1&loginStateVal=true&type=client'}`)
        setVisible(false)
    }

    return (
        <>
            <Modal
                visible={visible}
                title={<div className="transparent"><p className={verifystyles.popUptitle}>{t('resetPwd.welcome')} <br />
                    {t('resetPwd.popUpTitle')}</p></div>}
                centered
                //  onOk={handleOk}
                onCancel={() => { setVisible(false) }}
                className="modal-title1"
                bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px", color: " #16181C" }}
                footer={[
                    <Button key="back" className={`${popUpstyles.footerbtn} d-flex justify-content-center align-items-center`} onClick={handleCancel}>
                        {t('resetPwd.saveButton')}
                    </Button>
                ]}
            >
                <p> {t('resetPwd.bonusMsg')}</p>
                <p>
                    {t('resetPwd.completeProfileMsg')}
                </p>
                <div className=" d-flex justify-content-center">
                    <Image src={GiftBox} alt="Blue Navbar Logo" />
                </div>
            </Modal>
        </>
    )

}
export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default UpdateProfilePopUp