import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from '../../styles/Home.module.css';

import SwiperCore, {
    Pagination
} from 'swiper/core';

import { ComoFuncionaCardA, ComoFuncionaCardB, ComoFuncionaCardC, ComoFuncionaCardD } from '../cards/ComoFuncionaCard';

SwiperCore.use([Pagination]);

const ComoFunciona = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    if (!isMobile) {
        return (
            <Swiper pagination={true} className={styles.ComoFuncionaSwiper}>
                <SwiperSlide>
                    <ComoFuncionaCardA />
                </SwiperSlide>
                <SwiperSlide>
                    <ComoFuncionaCardB />
                </SwiperSlide>
                <SwiperSlide>
                    <ComoFuncionaCardC />
                </SwiperSlide>
                <SwiperSlide>
                    <ComoFuncionaCardD />
                </SwiperSlide>
            </Swiper>
        )
    }
    return (
        <div className={`secction_body ${styles.ComoFunciona}`}>
            <p className={styles.main_Title}>¿Como funciona?</p>
            <div className="row">
                <ComoFuncionaCardA />
                <ComoFuncionaCardB />
                <ComoFuncionaCardC />
                <ComoFuncionaCardD />
            </div>
        </div>
    )
}

export default ComoFunciona
