import { useState, useRef } from 'react';
import ReactImageMagnify from 'react-magnify-image';
import "./style.css"

const images = [
    '/assets/caison1.jpg',
    '/assets/caison2.jpg',
    '/assets/caison3.jpg',
    '/assets/caison4.jpg',
];

const HomeOver = () => {
    const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <div className="homeover">
            <div className="left-over">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i == 0 ? 'img_wrap-over active-over' : 'img_wrap-over'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <img src={image} alt="" style={{width: '100%'}}/>
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1200,
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeOver