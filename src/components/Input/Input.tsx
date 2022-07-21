import React, {ChangeEvent} from 'react';
import './input.css';
import searchIcon from '../../image/Vector.png';

type PropsType = {
    searchValue: string;
    setSearchValue: (searchValue: string) => void;
}

const Input:React.FC<PropsType> = ({searchValue, setSearchValue}) => {

    const searchInputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <div className="inputWrapper">
            <input type="text"
                   placeholder="поиск"
                   className="input"
                   value={searchValue}
                   onChange={searchInputValueHandler}
            />
            <img src={searchIcon}
                 alt="searchIcon"
                 className="inputWrapperIcon"
            />
        </div>
    );
};

export default Input;