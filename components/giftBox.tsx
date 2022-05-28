import React from 'react';
import styles from '../styles/components/Gift.module.css'
import GiftBox from '../public/GiftBox.svg'
import Image from 'next/image'

function BannerBoxConatiner() {
    return (
        <div className={`row ${styles.box}`}>
            <div className="col-6 offset-1 justify-content-center align-items-center">
                <span className={styles.fontbold}>
                    프로필 등록 </span><span className={styles.fontnormal}> 80% 이상 완료하면 보너스캐시 </span><span className={styles.fontbold}>지급!
                </span>
            </div>
            <div className="col-4 offset-1 d-flex justify-content-end align-items-center">
                <Image src={GiftBox} alt="Blue Navbar Logo" />
            </div>
        </div>

    )
}
export default BannerBoxConatiner