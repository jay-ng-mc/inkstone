import './Footer.scss'

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
            <a href="https://www.facebook.com/inkstone.edu"><img className="footerSocialMediaOutlinkIcon" alt="fb_link" src="fb_icon.png"/></a>
            <a href="https://www.linkedin.com/company/inkstone-llc/"><img className="footerSocialMediaOutlinkIcon" alt="linkedin" src="linkedin_icon.png"/></a>
            <img className="footerWechatID" alt="wechat_id" src="wechatID_icon.png"/>
            <img className="footerWechatQR" alt="wechat_qr" src="wechatQR_icon.png"/>
        </div>
    )
}