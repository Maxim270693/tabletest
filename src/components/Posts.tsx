import React from 'react';
import {PostType} from "../types/types";

const Posts: React.FC<{ posts: PostType[] }> = ({posts}) => {

    return (
        <tbody>
        {posts.length
            ? posts.map((post => <tr key={post.id}>
                <td style={{padding: '45px 51px'}}>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>))
            : <h4>нет данных</h4>
        }
        </tbody>
    );
};

export default Posts;