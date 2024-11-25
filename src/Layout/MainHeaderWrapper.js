import { useEffect } from 'react';
import classes from './MainHeaderWrapper.module.css';
import wow from 'wowjs';

const MainHeaderWrapper = (props)=>{
    useEffect(()=>{
        new wow.WOW({
            live: false
        }).init();
    },[])
    return (
        <div className='position-relative' 
            style={{
                height: `${props.height}`
            }}
        >
            <div 
                className={`${classes.header_bg} ${props.animate ? classes.animate : ''}`} 
                style={{
                    backgroundImage: `url(${props.bg})`
                }}>
            </div>
            <div className={`h-100`}>
                {props.children}
            </div>
        </div>
    );
}
export default MainHeaderWrapper;