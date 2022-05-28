/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/components/pop.module.css'
import React from 'react';
import { Button, Modal } from 'antd';

class RegistrationComPopSec extends React.Component {
    state = {
        loading: false,
        visible: true,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;
        return (
            <>
                <Modal
                    visible={visible}
                    title={<div>
                        <img src="/BonusCoins2.svg" className="regiscomp2" />
                        <p style={{ fontWeight: "bold", fontSize: "36px", fontFamily: "SpoqaHanSansbold", lineHeight: "36px" }}>축하합니다! 프로필 등록을</p>
                        <p style={{ fontWeight: "bold", fontSize: "36px", fontFamily: "SpoqaHanSansbold", lineHeight: "36px" }}>
                            80% 이상 등록하셨어요!
                        </p>
                    </div>}
                    centered
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className="pop-title-coin regiscomp2-model"
                    bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px", color: " #16181C" }}
                    footer={[
                        <Button key="back" className={`${styles.footerbtn} d-flex justify-content-center align-items-center`} onClick={this.handleCancel}>
                            확인
                        </Button>
                    ]}
                >
                    <p>프로필 등록 80%를 완료하여 보너스 캐시가 지급되었어요!

                        어서 모두의부캐와 매력적인 프로젝트를 진행해보세요! :)
                    </p>
                </Modal>
            </>
        );
    }
}


export default RegistrationComPopSec