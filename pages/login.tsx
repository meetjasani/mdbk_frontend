import styles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import verifystyles from '../styles/emailVerify.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { Apple, Facebook, Google, Kakaotalk, Naver } from '../public/icon'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { isEmailRegistered } from '../redux/actions/member/memberAction'
import Link from 'next/link'
import mobieLightLogo from '../public/mobile-hero-light-logo.png'

import { GetServerSideProps } from 'next'

function Login() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [email, setEmail] = useState('');
  useEffect(() => {
    forceUpdate({});
  }, []);
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    dispatch(isEmailRegistered(values))
  };


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
        <div className="mobile-hero-heading">{t('login.heading')}</div>
        <div className="mobile-hero-overlay"></div>
      </div>
      <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('login.heading')}</h1>
      <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
        <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
          <label className="login-form-label" htmlFor="email">{t('login.emailLabel')}</label>
          <Form.Item
            name="email"
            className="login-email"
            rules={[
              {
                type: 'email',
                message: t('index.formItem1.checkEmail'),
              }
            ]}
          >
            <Input className="form-input" placeholder={t('login.emailPlaceholder')} />
          </Form.Item>
          <label className={`${verifystyles.redMsg}`}>{email}</label>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={!form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length}
                className={!form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length ?
                  `${loginstyles.savebutton} ${loginstyles.disabledbutton} primary-button` :
                  `${loginstyles.savebutton} primary-button`}
              >
                {t('login.saveButton')}
              </Button>
            )}
          </Form.Item>
          <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            <Button className={`${loginstyles.button}`}>
              <div className="soc-login-inner">
                <span className={loginstyles.buttonIcon}>
                  <Image src={Google} alt="Google Icon" /></span>
                {t('login.googleText')}
              </div>

            </Button>
            <Button className={`${loginstyles.button}`}>
              <div className="soc-login-inner">
                <span className={loginstyles.buttonIcon}><Image src={Facebook} alt="Facebook Icon" /></span>
                {t('login.facebookText')}
              </div>

            </Button>
            <Button className={`${loginstyles.button}`}>
              <div className="soc-login-inner">
                <span className={loginstyles.buttonIcon}><Image src={Naver} alt="Naver Icon" /></span>
                {t('login.navertext')}
              </div>
            </Button>
            <Button className={`${loginstyles.button}`}>
              <div className="soc-login-inner">
                <span className={loginstyles.buttonIcon}><Image src={Kakaotalk} alt="Kakaotalk Icon" /></span>
                {t('login.talkText')}
              </div>
            </Button>
            <Button className={`${loginstyles.button}`}>
              <div className="soc-login-inner">
                <span className={loginstyles.buttonIcon}><Image src={Apple} alt="Apple Icon" /></span>
                {t('login.appleText')}
              </div>
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Login