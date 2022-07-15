import React, {useEffect} from 'react';
import Table from "../ui/Table/Table";
import PlayButton from "../ui/PlayButton/PlayButton";
import {useSelector} from "react-redux";
import rootActions from "../../redux/rootActions";
import Loader from "../ui/Loader/Loader";

const videosColumns = [
    {
        title: 'Название файла',
        render: item => item
    },
    {
        align: 'right',
        render: item => <PlayButton
            onClick={() => {
                rootActions.videos.videoModalOpen()
                rootActions.videos.get(item)
            }}
        />
    }
]


const VideosTable = () => {
    const data = useSelector(state => state.videos.list)
    const dataIsLoading = useSelector(state => state.videos.listIsLoading)
    useEffect(rootActions.videos.list, [])

    return (
        <Loader isLoading={dataIsLoading}>
            <Table
                columns={videosColumns}
                data={data}
            />
        </Loader>
    );
};

export default VideosTable;