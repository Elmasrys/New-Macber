import { useState, useContext } from 'react';
import ContentEditable from 'react-contenteditable';
import Button from '../../../UI/Button';
import { HeaderContentContext } from '../../../context/HeaderContentContext';

const WrapperContent = () => {
    const { headerContent, updateHeaderContent } = useContext(HeaderContentContext);
    const [content, setContent] = useState(headerContent.title);

    const handleChange = evt => {
       setContent(evt.target.value);
    };

    const saveContent = ()=>{
        updateHeaderContent({ title: content, ...headerContent });
        console.log(headerContent);
    }
    return (
        <>
        <HeaderContentContext.Provider>
            <ContentEditable
                html={content} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={handleChange} // handle innerHTML change
                tagName='p' // Use a custom HTML tag (uses a div by default)
            />
            <Button onclick={saveContent} tagType='button' type='button'>save</Button>
        </HeaderContentContext.Provider>
        </>
    )
};
export default WrapperContent;