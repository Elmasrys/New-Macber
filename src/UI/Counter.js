import CountUp from 'react-countup';
import Paragraph from '../UI/Paragraph';
import './Counter.css';

const Counter = (props)=>{
    return (
        <>
            <div className='row justify-content-center'>
                <div className={`${props.flex_cols} ${props.border_type}`}>
                    <div className={`${props.flex_box} ${props.padding}`}>
                        <Paragraph className={props.classNameForCounter}>
                            <CountUp 
                                start={100} 
                                end={1250} 
                                duration={3} 
                                enableScrollSpy={true} 
                                scrollSpyDelay={2}>
                            </CountUp>+
                        </Paragraph>
                        <Paragraph className={props.classNameForText}>Projects</Paragraph>
                    </div>
                </div>
                <div className={`${props.flex_cols} ${props.border_type}`}>
                    <div className={`${props.flex_box} ${props.padding}`}>
                        <Paragraph className={props.classNameForCounter}>
                            <CountUp 
                                start={10} 
                                end={401} 
                                duration={3} 
                                enableScrollSpy={true} 
                                scrollSpyDelay={2}>
                            </CountUp>+
                        </Paragraph>
                        <Paragraph className={props.classNameForText}>Clients</Paragraph>
                    </div>
                </div>
                <div className={`${props.flex_cols} ${props.border_type}`}>
                    <div className={`${props.flex_box} ${props.padding}`}>
                        <Paragraph className={props.classNameForCounter}>
                            <CountUp 
                                start={10} 
                                end={41} 
                                duration={3} 
                                enableScrollSpy={true} 
                                scrollSpyDelay={2}>
                            </CountUp>
                        </Paragraph>
                        <Paragraph className={props.classNameForText}>Team</Paragraph>
                    </div>
                </div>
                <div className={`${props.flex_cols} ${props.border_type}`}>
                    <div className={`${props.flex_box} ${props.padding}`}>
                        <Paragraph className={props.classNameForCounter}>
                            <CountUp 
                                start={0} 
                                end={9} 
                                duration={3} 
                                enableScrollSpy={true} 
                                scrollSpyDelay={2}>
                            </CountUp>
                        </Paragraph>
                        <Paragraph className={props.classNameForText}>years</Paragraph>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Counter;
