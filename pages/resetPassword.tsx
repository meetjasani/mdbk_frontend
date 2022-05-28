import styles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import verifystyles from '../styles/emailVerify.module.css'
import popUpstyles from '../styles/components/pop.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next'
import GiftBox from '../public/PopupImage.svg'
import Image from 'next/image'
import Link from 'next/link'
import mobieLightLogo from '../public/mobile-hero-light-logo.png'

function ResetPwd() {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
    const [msg, setMsg] = useState('');
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        forceUpdate({});
    }, []);

    return (
        <div className="container-fluid register-outer">
            <div className="mobile-hero">
                <div className="mobile-hero-logo">
                    <Link href='/'>
                        <a href="#" className="">
                            <Image src={mobieLightLogo} alt="Mobile Hero Logo" />
                        </a>
                    </Link>
                </div>
                <div className="mobile-hero-heading">{t('resetPwd.resetPassword')}</div>
                <div className="mobile-hero-overlay"></div>
            </div>
            <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('resetPwd.resetPassword')}</h1>
            <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
                {!visible && <Form form={form} name="login" layout="vertical" onFinish={() => setVisible(true)}>
                    <label className="login-form-label mb-4" htmlFor="email">{t('emailvarify.emailAddress')}</label>
                    <Form.Item
                        name="email"
                        className="email-verify"
                        rules={[
                            {
                                required: true,
                                //  message: t('login.emailErrorMessage'),
                            }
                        ]}
                    >
                        <Input type="email" className="form-input" placeholder={t('resetPwd.emailPlaceholder')} />
                    </Form.Item>
                    <p className={`${verifystyles.redMsg}`}>{msg}</p>
                    <p className={`${verifystyles.forgotPwdLink} mb-5 mt-3`}>{t('resetPwd.emailLinkMsg')}</p>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={!form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length}
                                className={!form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length ?
                                    `${loginstyles.savebutton} ${loginstyles.disabledbutton} primary-button email-verify` :
                                    `${loginstyles.savebutton} primary-button`}
                            >

                                {t('resetPwd.sendButton')}
                            </Button>
                        )}
                    </Form.Item>
                </Form>
                }
                {visible && <div>
                    <p className={`${verifystyles.confirmMsg}`}>{(t('resetPwd.passwordResetLink'))}</p>
                    <p className={`${verifystyles.confirmMsg} mb-5`}>{(t('resetPwd.resetPasswordMsg'))}</p>
                    <Form name="login" layout="vertical" onFinish={() => setModalVisible(true)}>

                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={`${loginstyles.savebutton} primary-button mb-4`}
                            >

                                {t('resetPwd.confirm')}
                            </Button>
                        )}

                    </Form>
                </div>}
            </Card>
            {
                <Modal
                    visible={modalVisible}
                    title={<div className="transparent"><p className={verifystyles.popUptitle}>{t('resetPwd.welcome')} <br />
                        {t('resetPwd.popUpTitle')}</p></div>}
                    centered
                    onOk={() => setModalVisible(false)}
                    onCancel={() => setModalVisible(false)}
                    className="modal-title1"
                    bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px", color: " #16181C" }}
                    footer={[
                        <Button key="back" className={`${popUpstyles.footerbtn} d-flex justify-content-center align-items-center`} onClick={() => setModalVisible(false)}>
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
            }
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default ResetPwd