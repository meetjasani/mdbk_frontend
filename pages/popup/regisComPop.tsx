
import styles from '../../styles/components/pop.module.css'
import React from 'react';
import { Button, Modal } from 'antd';

class RegistrationComPop extends React.Component {
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
                    title="프로필 등록 완료"
                    centered
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    className="pop-title"
                    bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px", color: " #16181C" }}
                    footer={[
                        <Button key="back" className={`${styles.footerbtn} d-flex justify-content-center align-items-center`} onClick={this.handleCancel}>
                            확인
                        </Button>
                    ]}
                >
                    <p>프로필 등록이 완료되었습니다.프로필 등록을 80% 이상</p>
                    <p>
                        완료하시고 보너스 B캐시를 받으세요!
                    </p>
                </Modal>
            </>
        );
    }
}


export default RegistrationComPop