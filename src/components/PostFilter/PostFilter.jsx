import React from 'react';
import MySelect from "../../UI/MySelect/MySelect";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import s from './PostFilter.module.css'

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div className={s.sortBlock}>
                <MySelect
                    sortFunction={selectedSort=>setFilter({...filter, sort: selectedSort })}
                    defaultValue="Sort by"
                    selectedSort={filter.sort}
                    options={[
                        {value: "title", name: "By title"},
                        {value: "body", name: "By post's text"},
                    ]}
                />
                <MyButton onClick={()=>setFilter({...filter, sort: ""})}>Reset sort</MyButton>
            </div>
            <MyInput value={filter.query} onChange={e => setFilter({...filter, query : e.target.value})}
                     placeholder="Search by title"/>
        </div>
    );
};

export default PostFilter;