import React from 'react';
import Layout from "../sections/Layout/Layout";
import VideosTable from "../containers/VideosTable";
import VideoModal from "../containers/VideoModal/VideoModal";
import FramesModal from "../containers/FramesModal/FramesModal";


const VideosPage = () => {
    return (
        <Layout title={'Видео'}>
            <VideosTable/>
            <VideoModal/>
            <FramesModal/>
        </Layout>
    );
};

export default VideosPage;