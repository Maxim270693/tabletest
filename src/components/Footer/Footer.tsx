import React from 'react';
import './footer.css';
import Pagination from "../Pagination/Pagination";
import {useDispatch} from "react-redux";
import {setCurrentPageAC} from "../../bll/actions/actions";

type PropsType = {
    totalPosts: number,
    perPage: number,
    paginate: (pageNumber: number) => void
    currentPage: number,
}

const Footer:React.FC<PropsType> = ({totalPosts, perPage, paginate, currentPage}) => {
    const dispatch = useDispatch();

    return (
        <div className="footer">
            <div className="footerBtn"
                 onClick={() => dispatch(setCurrentPageAC(currentPage - 1))}
            >
                Назад
            </div>
            <Pagination totalPosts={totalPosts}
                        perPage={perPage}
                        paginate={paginate}
                        currentPage={currentPage}
            />
            <div className="footerBtn"
                 onClick={() => dispatch(setCurrentPageAC(currentPage + 1))}
            >
                Далее
            </div>
        </div>
    );
};

export default Footer;