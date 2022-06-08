import React from 'react';

const AddBlog = () => {
    return(
        <>
        
        <form action="">
            <div>
                <label htmlFor="tag">Tag: <sapn>Comma seperated list</sapn></label>
                <input type="text" name="tag" />
            </div>

            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />
            </div>

            <div>
                <label htmlFor="tag">Content:</label>
                <textarea type="text" name="content" >
                
                </textarea>
            </div>
        </form>
        </>
    )
}

export default AddBlog;