/* eslint-disable @next/next/no-img-element */

import styles from '../styles/Register.module.css';
import loginstyles from '../styles/login.module.css';
import verifystyles from '../styles/emailVerify.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button, Tabs, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import { registerMember } from '../redux/actions/member/memberAction'
import { useDispatch, useSelector } from 'react-redux';
import mobieLightLogo from '../public/mobile-hero-light-logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { State } from '../redux/reducers/rootReducer';

function Register() {
  const { t } = useTranslation();
  const [key, setKey] = useState<any>("1");
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [, forceUpdate] = useState({});
  useEffect(() => {
    forceUpdate({});
  }, []);

  const [password, setPassword] = useState<any>(t('index.formItem1.labelPassword1'));
  const { TabPane } = Tabs;
  const dispatch = useDispatch()
  const store = useSelector((state: State) => state.validation.emailAlreadyExist)
  const onFinish = (values: any) => {
    dispatch(registerMember(values))
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
        <div className="mobile-hero-heading">{t('index.heading')}</div>
        <div className="mobile-hero-overlay"></div>
      </div>
      <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('index.heading')}</h1>
      <Card
        className={`${styles.registerCard} col4-cmn-cntr-640`}
        activeTabKey={key}
      >
        <Tabs defaultActiveKey="1" className="registerSteps" centered onChange={key => setKey(Number(key))}>
          <TabPane className="row-3" key={1} tab={
            <div>
              <div className={styles.tab}>
                {key == "1" ? <img src="/client1.svg" alt="Header" /> : <img src="/clientDark.svg" alt="Header" />}
                <p>{t('index.tab1.subTitle')}</p>
              </div>
            </div>
          } >
            <Form form={form} name="register" layout="vertical" className={styles.registerForm} onFinish={onFinish}>
              <Form.Item
                name="name"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelName')}</span>
                }
                rules={[
                  {
                    required: true,
                    message:
                      t('index.formItem1.nameRequired')
                  },
                  {
                    pattern: new RegExp(
                      /[A-Za-z]|[\u3131-\uD79D]/ugi
                    ),
                    message: t('index.formItem1.usePropercharacters')
                  },
                ]}
              >
                <Input type="text" autoComplete="nope"
                  placeholder={t('index.formItem1.placeholderName')} className="form-input" />
              </Form.Item>
              <Form.Item
                name="email"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelEmail')}</span>
                }
                rules={[
                  {
                    type: 'email',
                    message: t('index.formItem1.checkEmail'),
                  },
                ]}>
                <Input autoComplete="nope" type="email" placeholder={t('index.formItem1.placeholderEmail')} className="form-input" />
              </Form.Item>
              <p className={`${verifystyles.redMsg} mb-5`}>{store && t('index.formItem1.emailAlreadyExist')}</p>
              {/* <label className={`${verifystyles.redMsg}`}>{email}</label> */}
              <Form.Item
                name="password"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelPassword')}</span>
                }
                rules={[
                  {
                    // min: 6,
                    pattern: new RegExp(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/i
                    ),
                    message: t('index.formItem1.checkPassword')
                  },
                  {
                    required: true,
                    message: t('index.formItem1.nameRequired')
                  },
                ]}
                hasFeedback
              >
                <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderPassword')} className="form-input" />
              </Form.Item>

              <span className={password == t('index.formItem1.labelPassword1') ? `${styles.passwordLabel}` : `${verifystyles.redMsg}`} style={{ marginTop: "-10px" }}>{password}</span>


              <Form.Item
                name="confirmPassword"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelConfirmPassword')}</span>
                }
                style={{ paddingTop: "20px" }}
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: t('index.formItem1.nameRequired'),
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
                <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderConfirmPassword')} className="form-input" />
              </Form.Item>
              <p className={styles.termsLabel}>
                {t('index.formEndContent1')}
              </p>
              <p className="mb-3">
                <span className={styles.termsLabel}>
                  {t('index.formEndContent2.sp1')} </span><span className={styles.termsLabel2}>{t('index.formEndContent2.sp2')}</span>
                <span className={styles.termsLabel}>{t('index.formEndContent2.sp3')}</span>
              </p>
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
                    {t('index.heading')}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane className="row-3" key={2} tab={
            <div>
              <div className={styles.tab}>
                {key == 2 ? <img src="/sideCharc.svg" alt="Header" /> : <img src="/sideCharcDark.svg" alt="Header" />}
                <p>{t('index.tab2.subTitle')}</p>
              </div>
            </div>} >
            <Form form={form1} name="register1" layout="vertical" className={styles.registerForm} onFinish={onFinish}>
              <Form.Item
                name="name1"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelName')}</span>
                }
                rules={[
                  {
                    required: true,
                    message:
                      t('index.formItem1.nameRequired')
                  },
                  {
                    pattern: new RegExp(
                      /[A-Za-z]|[\u3131-\uD79D]/ugi
                    ),
                    message: t('index.formItem1.usePropercharacters')
                  },
                ]}
              >
                <Input type="text" autoComplete="nope"
                  placeholder={t('index.formItem1.placeholderName')} className="form-input" />
              </Form.Item>
              <Form.Item
                name="email1"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelEmail')}</span>
                }
                rules={[
                  {
                    type: 'email',
                    message: t('index.formItem1.checkEmail'),
                  },
                ]}>
                <Input autoComplete="nope" type="email" placeholder={t('index.formItem1.placeholderEmail')} className="form-input" />
              </Form.Item>
              <p className={`${verifystyles.redMsg} mb-5`}>{store && t('index.formItem1.emailAlreadyExist')}</p>
              {/* <label className={`${verifystyles.redMsg}`}>{email}</label> */}
              <Form.Item
                name="password1"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelPassword')}</span>
                }
                rules={[
                  {
                    // min: 6,
                    pattern: new RegExp(
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/i
                    ),
                    message: t('index.formItem1.checkPassword')
                  },
                  {
                    required: true,
                    message: t('index.formItem1.nameRequired')
                  },
                ]}
                hasFeedback
              >
                <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderPassword')} className="form-input" />
              </Form.Item>
              <span className={password == t('index.formItem1.labelPassword1') ? `${styles.passwordLabel}` : `${verifystyles.redMsg}`} style={{ marginTop: "-10px" }}>{password}</span>
              {/* <label className={styles.passwordLabel}>{t('index.formItem1.labelPassword1')}</label> */}
              <Form.Item
                name="confirmPassword1"
                label={
                  <span className={styles.formLabel}>{t('index.formItem1.labelConfirmPassword')}</span>
                }
                style={{ paddingTop: "20px" }}
                dependencies={['password1']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: t('index.formItem1.nameRequired'),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password1') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error(t('index.formItem1.passwordNotMatch')));
                    },
                  }),
                ]}
              >
                <Input type="password" autoComplete="nope" placeholder={t('index.formItem1.placeholderConfirmPassword')} className="form-input" />
              </Form.Item>
              <p className={styles.termsLabel}>
                {t('index.formEndContent1')}
              </p>
              <p className="mb-3">
                <span className={styles.termsLabel}>
                  {t('index.formEndContent2.sp1')} </span><span className={styles.termsLabel2}>{t('index.formEndContent2.sp2')}</span>
                <span className={styles.termsLabel}>{t('index.formEndContent2.sp3')}</span>
              </p>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!form1.isFieldsTouched(true) ||
                      !!form1.getFieldsError().filter(({ errors }) => errors.length).length}
                    className={!form1.isFieldsTouched(true) ||
                      !!form1.getFieldsError().filter(({ errors }) => errors.length).length ?
                      `${loginstyles.savebutton} ${loginstyles.disabledbutton} primary-button email-verify` :
                      `${loginstyles.savebutton} primary-button`}
                  >
                    {t('index.heading')}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Register