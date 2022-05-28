import styles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import verifystyles from '../styles/emailVerify.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { generateVerificationCode } from '../redux/actions/member/memberAction'
import React from 'react';
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import mobieLightLogo from '../public/mobile-hero-light-logo.png'
import Image from 'next/image'

function EmailVerification() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    dispatch(generateVerificationCode(values))
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
        <div className="mobile-hero-heading">{t('emailvarify.verifyEmail')}</div>
        <div className="mobile-hero-overlay"></div>
      </div>
      <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('emailvarify.verifyEmail')}</h1>
      <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
        <p className={`${verifystyles.subheading} mb-5`}>{t('emailvarify.verifyEmailMsg')}</p>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <label className="login-form-label mb-4" htmlFor="email">{t('emailvarify.emailAddress')}</label>
          <Form.Item
            name="email"
          >
            <Input type="email" className="form-input" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`${loginstyles.savebutton} primary-button mt-4 mb-4`}
          >
            {t('emailvarify.saveButton')}
          </Button>
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

export default EmailVerification