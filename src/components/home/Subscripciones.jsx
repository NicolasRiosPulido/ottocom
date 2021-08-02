import styles from '../../styles/Home.module.css';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    EffectCube, Pagination
} from 'swiper/core';

import { SubscriptionsCardsA, SubscriptionsCardsB } from '../cards/SubscriptionsCards';

SwiperCore.use([EffectCube, Pagination]);

const Subscripciones = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    const title = <p className={styles.main_Title}>Pruébalo sin costo</p>

    if (!isMobile) {
        return (
            <>
                {title}
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        "shadow": true,
                        "slideShadows": true,
                        "shadowOffset": 20,
                        "shadowScale": 0.94
                    }}
                    pagination={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SubscriptionsCardsA />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SubscriptionsCardsB />
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }
    return (
        <>
            {title}
            <p className={styles.desc_title}>
                Descarga el app crea tus presupuestos, cumple tus metas y más, por tres meses sin costo ni cargos a tu tarjeta
            </p>
            <div className={`row_center_r ${styles.Subscripciones}`}>
                <SubscriptionsCardsA />
                <SubscriptionsCardsB />
            </div>
        </>
    )
}

export default Subscripciones
