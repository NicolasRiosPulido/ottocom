import { useMediaQuery } from 'react-responsive';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    return (
        <div className="row_r" style={{ width: 140, marginTop: isMobile ? 0 : 20 }}>
            <SocialIcon
                url="https://www.facebook.com/OttoFintech"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://twitter.com/otto_app"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://www.instagram.com/otto.app.co/"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://www.linkedin.com/company/otto-app"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
        </div >
    )
}

export default Social
