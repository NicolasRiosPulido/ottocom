import { useMediaQuery } from 'react-responsive';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    return (
        <div className="row_r" style={{ width: 140, marginTop: isMobile ? 0 : 20 }}>
            <SocialIcon
                url="https://web.facebook.com/OttoBanking"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://twitter.com/ottobanking"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://www.instagram.com/ottobanking"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
            <SocialIcon
                url="https://www.linkedin.com/company/ottobanking"
                bgColor="#FFF"
                style={{ height: 25, width: 25 }}
            />
        </div >
    )
}

export default Social
