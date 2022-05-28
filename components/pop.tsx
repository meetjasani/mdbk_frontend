import React from 'react';
import styles from '../styles/components/pop.module.css'
import {  Button } from 'antd';

function CreatePop() {
    return (
      
            <div className={`row`} style={{marginTop:"16%", position:"absolute",background:"white",height:"50%"}}>
                {/* <div className={`col-4 offset-4 ${styles.box}`} > */}

                    <p className={styles.heading}>
                    프로필 수정 완료
                    </p>
                    
                    <p className={styles.p1}>
                    프로필 수정이 완료되었습니다.
                    </p>
                    <Button className={styles.btn} >
                    확인
                    </Button>
                {/* </div> */}      
            
        </div>

    )
}
export default CreatePop