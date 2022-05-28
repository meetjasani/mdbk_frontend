import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import { ArrowRightOutlined } from '@ant-design/icons'
import SearchUserPlaceholder from '../public/SearchUserPlaceholder.svg'
import Heart from '../public/heart.svg'
import DR from '../public/coin.png'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function BCoinCard({ profile }: any) {
    const router = useRouter()
    const { t } = useTranslation();
    return (<div className={`${styles.div1}`}>
        <div className="row" style={{ padding: "40px 20px 40px 20px" }}>
            <div className="col-8" >
                <div className="row">
                    <div className="col-2 ">
                        <Image src={DR} alt="User Image" width={60} height={60} />
                    </div>
                    <div className="col-10 float-left">
                        <div className="row">
                            <div className={`${styles.bcoinAmt} col-12 d-block justify-content-start align-items-start`}>
                                {profile.coins}
                                <span className={styles.bcoinTxt}>{t('bCoin.coins')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className={`${styles.bcoinCoin} col-12`}>
                        {profile.amount}
                        <span className={`${styles.bcoinTxt}`}>{t('bCoin.won')}</span>
                    </div>
                </div> </div>
            <div className="col-4 pt-5 d-flex justify-content-end align-items-center" >
                <Button className={styles.roundedArrow}> <ArrowRightOutlined sizes="30" /></Button>
            </div>
        </div>
    </div >

    )
}

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations("en", ['common']))
//     }
// });
export default BCoinCard