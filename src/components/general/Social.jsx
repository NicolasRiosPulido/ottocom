import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Social = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    return (
        <div className="row_r" style={{ width: 140, marginTop: isMobile ? 0 : 20 }}>
            <Image
                src={'/images/social/facebook-logo-button.png'}
                alt="iphon descripcion"
                width={20}
                height={20}
            />
            <Image
                src={'/images/social/youtube.png'}
                alt="iphon descripcion"
                width={20}
                height={20}
            />
            <Image
                src={'/images/social/google-plus.png'}
                alt="iphon descripcion"
                width={20}
                height={20}
            />
            <Image
                src={'/images/social/twitter.png'}
                alt="iphon descripcion"
                width={20}
                height={20}
            />
        </div>
    )
}

export default Social
