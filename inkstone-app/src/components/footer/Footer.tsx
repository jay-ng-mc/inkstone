import './Footer.scss'

// images
import fb_icon from '../../images/fb_icon.png'
import linkedin_icon from '../../images/linkedin_icon.png'
import wechatID_icon from '../../images/wechatID_icon.png'
import wechatQR_icon from '../../images/wechatQR_icon.png'
import Popup from 'reactjs-popup'

export default function Footer() {
    return (
        <div className="footer">
            <InkstoneOutlinks/>
            <span className="footerCopyrightText">©2021 by Inkstone, LLC</span>
        </div>
    )
}

function InkstoneOutlinks() {
    return (
        <div className="footerInkstoneOutlinks">
            <a href="https://www.facebook.com/inkstone.edu"><img className="footerSocialMediaOutlinkIcon" alt="fb_link" src={fb_icon}/></a>
            <a href="https://www.linkedin.com/company/inkstone-llc/"><img className="footerSocialMediaOutlinkIcon" alt="linkedin" src={linkedin_icon}/></a>
            <Popup
            trigger={<img className="footerWechatID" alt="wechat_id" src={wechatID_icon}/>}
            on="click"
            closeOnDocumentClick
            modal={true}
            arrow={false}>
                <div className="footerWechatPopupBox">
                    <img className="footerWechatPopupQR" src={wechatQR_icon} alt="Broken WeChat QR code"/>
                </div>
            </Popup>
            <img className="footerWechatQR" alt="wechat_qr" src={wechatQR_icon}/>
        </div>
    )
}