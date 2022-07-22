import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {postThunk} from "./bll/thunkCreators/postThunk";
import Posts from "./components/Posts/Posts";
import Input from "./components/Input/Input";
import {PostType, RootStateType} from "./types/types";
import Spinner from "./components/Spinner/Spinner";
import {getPostAC, setCurrentPageAC} from "./bll/actions/actions";
import Footer from "./components/Footer/Footer";
import ButtonDown from "./image/Button-down.png";

function App() {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const posts = useSelector<RootStateType, PostType[]>(state => state.post.post);
    const isLoading = useSelector<RootStateType, boolean>(state => state.post.isLoading);
    const currentPage = useSelector<RootStateType, number>(state => state.post.currentPage);
    const perPage = useSelector<RootStateType, number>(state => state.post.perPage);

    const lastPostIndex = currentPage * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    const currentPost = posts.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber));

    const sortedPosts = currentPost.filter(post => post.title.toLowerCase().includes(searchValue));

    const sortData = (field: string) => {
        if (field === 'ID') {
            const sorted = [...posts]
                .sort((a, b) =>
                    a["id"] > b["id"] ? 1 : -1)
            dispatch(getPostAC(sorted))
        }
        if (field === 'Заголовок') {
            const sorted = [...posts]
                .sort((a, b) =>
                    a["title"] > b["title"] ? 1 : -1)
            dispatch(getPostAC(sorted))
        }
        if (field === 'Описание') {
            const sorted = [...posts]
                .sort((a, b) =>
                    a["body"] > b["body"] ? 1 : -1)
            dispatch(getPostAC(sorted))
        }
    };

    useEffect(() => {
        // @ts-ignore
        dispatch(postThunk())
    }, []);

    return (
        <div className="App">
            <div className="container">
                <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Table bordered>
                    <thead>
                    <tr className="AppHeader">
                        <th className="AppHeaderId">
                            ID
                            <img src={ButtonDown}
                                 alt="ButtonDown"

                                 className="buttonDownId"
                                 onClick={() => sortData('ID')}
                            />
                        </th>
                        <th className="AppHeaderTitle">
                            Заголовок
                            <img src={ButtonDown}
                                 alt="ButtonDown"
                                 className="buttonDownTitle"
                                 onClick={() => sortData('Заголовок')}
                            />
                        </th>
                        <th className="AppHeaderDescription">
                            Описание
                            <img src={ButtonDown}
                                 alt="ButtonDown"
                                 className="buttonDownDescription"
                                 onClick={() => sortData('Описание')}
                            />
                        </th>
                    </tr>
                    </thead>
                    {
                        isLoading
                            ? <Spinner/>
                            : <Posts posts={sortedPosts}/>
                    }
                </Table>
                {sortedPosts.length > 0 && <Footer currentPage={currentPage}
                                                   paginate={paginate}
                                                   perPage={perPage}
                                                   totalPosts={posts.length}
                />}
            </div>
        </div>
    );
}

export default App;
