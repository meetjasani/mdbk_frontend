import styles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import verifystyles from '../styles/emailVerify.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { verifyEmail } from '../redux/actions/member/memberAction'
import { GetServerSideProps } from 'next'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/reducers/rootReducer';

function EmailConfirmation() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [msg, setMsg] = useState(t('emailConfirm.blueMsg'));
  useEffect(() => {
    forceUpdate({});
  }, []);
  const dispatch = useDispatch()
  const store = useSelector((state: State) => state.validation.emailError)
  const codeEmailValidation = useSelector((state: State) => state.validation.validationCode)
  const onFinish = (values: any) => {
    const prevEmail = codeEmailValidation && codeEmailValidation.config && JSON.parse(codeEmailValidation.config.data)
    const prevCode = codeEmailValidation && codeEmailValidation.data && codeEmailValidation.data.code
    const data = { prevCode, previousEmail: prevEmail.email, code: values.code, email: values.email }
    dispatch(verifyEmail(data))
  };

  // onFinish={() => setMsg(t('emailConfirm.codeIncorrect'))}
  return (
    <div className="container-fluid register-outer">
      <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('emailvarify.verifyEmail')}</h1>
      <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
        <p className={`${verifystyles.subheading} mb-5`}>{t('emailvarify.verifyEmailMsg')}</p>
        <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
          <label className="login-form-label mb-3" htmlFor="email">{t('emailConfirm.verificationCode')}</label>
          <Form.Item
            name="code"
            className="email-verify"
            rules={[
              {
                // required: true,
                // min: 4,
                //  message: t('login.emailErrorMessage'),
              }
            ]}
          >
            <Input type="text" className="form-input" placeholder={t('emailConfirm.verificationCodePlaceholder')} />

          </Form.Item>
          <p className={!store ? `${verifystyles.blueMsg} mb-5` : `${verifystyles.redMsg} mb-5`}>{store ? t('emailConfirm.codeIncorrect') : msg}</p>
          <label className="login-form-label mb-3" htmlFor="email">{t('emailvarify.emailAddress')}</label>
          <Form.Item
            name="email"
          >
            <Input type="email" className="form-input" />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={!form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length}
                className={!form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length ?
                  `${loginstyles.savebutton} ${loginstyles.disabledbutton} primary-button email-verify mt-4` :
                  `${loginstyles.savebutton} primary-button mt-4`}
              >

                {t('emailConfirm.saveButton')}
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
export default EmailConfirmation