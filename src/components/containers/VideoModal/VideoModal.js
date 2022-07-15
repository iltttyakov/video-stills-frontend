import React, {useState} from 'react';
import cls from './VideoModal.module.scss'
import Modal from "../../ui/Modal/Modal";
import Button from "../../ui/Button/Button";
import SliderButton from "../../ui/SliderButton/SliderButton";
import ReactPlayer from "react-player";
import Loader from "../../ui/Loader/Loader";
import {useSelector} from "react-redux";
import rootActions from "../../../redux/rootActions";
import {BASE_URL} from "../../../api/urls";
import BinaryImage from "../../ui/BinaryImage/BinaryImage";


const VideoModal = () => {
    const [progress, setProgress] = useState(null)
    const isOpen = useSelector(state => state.videos.videoModalIsOpen)
    const active = useSelector(state => state.videos.active)
    const activeIsLoading = useSelector(state => state.videos.activeIsLoading)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleProgress = (progress) => {
        setProgress(progress)
    }

    const framesButtonHandler = () => {
        rootActions.videos.framesModalOpen()
        rootActions.videos.getFrames(active.name, progress['playedSeconds'])
    }


    return (
        <Modal
            isOpen={isOpen}
            onClose={rootActions.videos.videoModalClose}
        >

            <Loader isLoading={activeIsLoading}>

                <div className={cls.header}>
                    {
                        active
                            ? <h3 className={cls.name}>{active.name}</h3>
                            : null
                    }
                </div>

                <div
                    className={[
                        cls.container,
                        isPlaying ? cls.playing : null
                    ].join(' ')}
                >

                    <Button
                        className={cls.toFrames}
                        icon={'arrow'}
                        onClick={framesButtonHandler}
                    >
                        К кадрам
                    </Button>

                    <div className={cls.nav}>
                        <SliderButton
                            onClick={() => {
                                console.log('prev')
                            }}
                            direction={'prev'}
                        />
                        <SliderButton
                            onClick={() => {
                                console.log('next')
                            }}
                        />
                    </div>

                    {
                        active && isOpen
                            ? <ReactPlayer
                                url={`${BASE_URL}/${active.url}`}
                                controls={true}
                                width={'100%'}
                                height={'auto'}
                                style={{display: 'flex'}}
                                onPlay={() => {
                                    setIsPlaying(true)
                                }}
                                onPause={() => {
                                    setIsPlaying(false)
                                }}
                                progressInterval={100}
                                onProgress={handleProgress}
                            />
                            : null
                    }
                </div>
            </Loader>

        </Modal>
    );
};

export default VideoModal;
