import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./Footer.scss"


class Footer extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {

        return (
          <div className='home-footer'>
            <div className='wrapper-footer'>

                <div className='sub-footer-1'>
                    <div className='footer-logo'></div>
                    
                    <div className='footer1-content1'> <i class="fas fa-map-marker-alt"></i><span> </span> Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam

</div>
                    <div className='footer1-content1'><i class="fas fa-check"></i> ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</div>
                </div>
                <div className='sub-footer-2'>
                    <div className='footer2-content1'>
                            <div>Liên hệ hợp tác </div>
                            <div>Danh bạ y tế </div>
                            <div>Sức khỏe doanh nghiệp </div>
                            <div>Gói chuyển đổi số doanh nghiệp </div>
                            <div>Tuyển dụng  </div>
                           
                            <div>Câu hỏi thường gặp </div>
                            <div>Điều khoản sử dụng </div>
                            <div>Chính sách bảo mật </div>
                            <div>Quy trình giải quyết khiếu nại </div>
                            <div>Quy chế hoạt động </div>

                    </div>
                    <div className='footer2-content2'>
                            <b>Trụ sở tại Hà Nội</b>
                            <div>Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</div>
                  
                            <b>Văn phòng tại TP Hồ Chí Minh</b>
                            <div>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</div>
                  
                            <b>Hỗ trợ khách hàng</b>
                            <div>support@bookingcare.vn (7h - 18h)</div>
                            <b>Hotline</b>
                            <div>024-7301-2468 (7h - 18h)</div>
                    </div>
                </div>


            </div>

            <div className='wrapper-footer2'>@CopyRight:Than Chinh</div>

            </div>
        )
    }

}




const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
