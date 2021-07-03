import Image from 'next/image';

const Social = () => {
    return (
        <div className="row" style={{ width: 140 }}>
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
