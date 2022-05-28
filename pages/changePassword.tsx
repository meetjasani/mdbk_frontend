import styles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import verifystyles from '../styles/emailVerify.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions/member/memberAction';
import Router, { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { State } from '../redux/reducers/rootReducer';

function ChangePwd() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const router = useRouter();
  const [, forceUpdate] = useState({});
  const [msg, setMsg] = useState('');
  useEffect(() => {
    forceUpdate({});
  }, []);
  const dispatch = useDispatch()
  const email = useSelector((state: State) => state.auth.validateMember.email)
  const passwordError = useSelector((state: State) => state.auth.passwordErr.message)
  const onFinish = (values: any) => {
    dispatch(loginUser(email, values.password))
  }

  return (
    <div className="container-fluid register-outer">
      <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('changePwd.login')}</h1>
      <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
        <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
          <label className="login-form-label mb-3" htmlFor="email">{t('changePwd.password')}</label>
          <Form.Item
            name="password"
            className="email-verify mb-2"
            rules={[
              {
                required: true,
                //  message: t('login.emailErrorMessage'),
              }
            ]}
          >
            <Input type="password" className="form-input" placeholder={t('changePwd.passwordPlaceholder')} />
          </Form.Item>
          <p className={`${verifystyles.redMsg} mb-5`}>{passwordError ? t('changePwd.passwordConfirmation') : msg}</p>
          <Button className={`${verifystyles.resetPwd} d-flex justify-content-center mb-5`} onClick={() => {
            router.locale == 'en' ?
              Router.push('/en/resetPassword?islogin=2') : Router.push('/resetPassword?islogin=2')
          }}>{t('changePwd.resetPassword')}</Button>
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

                {t('changePwd.login')}
              </Button>
            )}
          </Form.Item>
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

export default ChangePwd