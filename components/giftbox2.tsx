import React from 'react';
import styles from '../styles/components/Gift.module.css'
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
function BannerBoxConatinerSec() {
    const { t } = useTranslation();
    return (
        <div className={`row ${styles.box}`}>
            <div className="col-6 offset-1 justify-content-center align-items-center">
                <span className={styles.fontbold}>
                    수락율을 </span><span className={styles.fontnormal}>  올리고 싶으세요? </span><br />
                <span className={styles.fontbold}>완성도<span className={styles.fontnormal}> 를 높여보세요 </span>
                </span>
            </div>
            <div className="col-4 offset-1 d-flex justify-content-end align-items-center">
                <Button className={styles.bluebtn}>프로필 업데이트</Button>
            </div>
        </div>

    )
}
// export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });
export default BannerBoxConatinerSec