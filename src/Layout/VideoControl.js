import './VideoControl.css';
import Media from '../UI/Media';
import VideoControlIcon from '../assets/icons/play_video_lg.svg';

const VideoControl = (props)=>{
    return(
        <>
            <div className='control'>
                <Media 
                    type='img' 
                    src={props.MediaSrc} 
                    alt='media name' 
                    width={props.width || '100%'} 
                    height={props.height} 
                />
                <img src={VideoControlIcon} loading='lazy' alt='icon-play' className='control_icon' width="64px" height='64px'/>
            </div>
                    
        </>
    );
}
export default VideoControl;