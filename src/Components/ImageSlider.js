import { useCallback, useEffect, useRef, useState } from "react";
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';


const ImageSlider = ({images, pWidth}) => {
    const [current, setCurrent] = useState(0);
    const timer = useRef(null);

    const sliderStyles = {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        position: "relative",
        margin: "0 auto",
    };
    
    const slideStyles = {
        width: "80%",  
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
    };

    const slidesContanerStyles = {
        display: "flex",
        height: "100%",
        transition: "transform ease-out 0.4s",
    }

    const goPrev = () => {
        const isFirst = current === 0;
        const newIndex = isFirst ? images.length - 1 : current - 1;
        setCurrent(newIndex);
    }

    const goNext = useCallback(() => {
        const isLast = current === images.length - 1;
        const newIndex = isLast ? 0 : current + 1;
        setCurrent(newIndex);
    }, [current, images])

    useEffect(() => {
        if(timer.current){
            clearInterval(timer.current);
        }
        timer.current = setInterval(goNext, 4000);
        return () => {clearInterval(timer.current)};
    }, [goNext])

    const slidesOverflow = {
        overflow: "hidden",
        height: "100%",
    };

    const getSlidesContainerWidth = () => ({
        ...slidesContanerStyles,
        width: `${pWidth * images.length}vw`,
        transform: `translateX(${-(pWidth * current)}vw)`
    });

    const getStylesBackground = (current) => ({
        ...slideStyles,
        backgroundImage: `url(${images[current].url})`,
        width: `${pWidth}vw`
    });

    return(
        <div style={sliderStyles}>
            <DoubleLeftOutlined style={{fontSize: "2rem", color: "282c34", cursor: "pointer"}} onClick={goPrev} />
            
            <div style={slidesOverflow}>
                <div style={getSlidesContainerWidth()}>
                    {images.map((_, current) => (
                        <div key={current} style={getStylesBackground(current)} />
                        ))}
                </div>
            </div>
            
            <DoubleRightOutlined style={{fontSize: "2rem", color: "282c34", cursor: "pointer"}} onClick={goNext} />
        </div>
    )
};

export default ImageSlider;