
import styles from '../../styles/components/pop.module.css'
import React from 'react';
import { Button, Modal } from 'antd';

class PhoneNumVarifyPop extends React.Component {
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
          title="휴대폰 번호 인증 완료"
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="pop-title"
          bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "36px" }}
          footer={[
            <Button key="back" className={`${styles.footerbtn} d-flex justify-content-center align-items-center`} onClick={this.handleCancel}>
              확인
            </Button>
          ]}
        >
          <p>휴대폰 번호가 인증되었습니다.</p>
        </Modal>
      </>
    );
  }
}


export default PhoneNumVarifyPop