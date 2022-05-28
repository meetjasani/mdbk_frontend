import registerstyles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button } from 'antd';
import React from 'react';
import user from '../public/usergray.png'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Search.module.css'
import { GetServerSideProps } from 'next'


function InfoSetting() {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    return (
        <div className="jumbotron">
            <Head>
                <title>{t('home.search')}</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.mainContainerBeforeLogin} pt-5 h-100`}>
                <div className="col4-cmn-cntr-640">
                    <div className="row pt-4 d-flex justify-content-start ml-5">
                        <div className="col-12">
                            <p className={styles.heading}>
                                {t('myPages.infosetting')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 pb-5">
                <Card className={`${registerstyles.registerCard} col4-cmn-cntr-640`}>
                    <div className="row">
                        <div className="col-3">
                            <Image src={user} alt="User Image" />

                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <label className={`${registerstyles.mypgLabel}`}>{t('myPages.labelName')}</label>
                            <p className={`${registerstyles.mypgval}`} >
                                {t('myPages.name')}
                            </p>
                            <label className={`${registerstyles.mypgLabel}`}>{t('index.formItem1.labelEmail')}</label>
                            <p className={`${registerstyles.mypgval}`} >
                                {t('myPages.email')}
                            </p>
                            <Form form={form} name="register" layout="vertical" className={styles.registerForm}>
                                <Form.Item
                                    name="password"
                                    label={
                                        <span className={registerstyles.mypgLabel}>{t('index.formItem1.labelPassword')}</span>
                                    }
                                    rules={[
                                        {
                                            min: 6
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderPassword')} style={{ borderRadius: "20px", height: "64px" }} />
                                </Form.Item>
                                <Form.Item
                                    name="confirmPassword"
                                    label={
                                        <span className={registerstyles.mypgLabel}>{t('index.formItem1.labelConfirmPassword')}</span>
                                    }
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            // required: true,
                                            message: t('index.formItem1.passwordNotMatch'),
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error(t('index.formItem1.passwordNotMatch')));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderConfirmPassword')} style={{ borderRadius: "20px", height: "64px" }} />
                                </Form.Item>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className={`${registerstyles.savebutton} primary-button`}
                                    >
                                        {t('myPages.save')}
                                    </Button>

                                </div>
                                <p className={`${registerstyles.deletebtn} d-flex justify-content-center align-items-center`} >
                                    {t('myPages.deleteAcc')}
                                </p>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default InfoSetting