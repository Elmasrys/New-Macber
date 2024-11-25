const BackGroundLight = (props)=>{
    return (
        <>
            <div className={`${props.className}`} style={{
                backgroundColor: props.backgroundColor
            }}>
                {props.children}
            </div>
        </>
    )
}
export default BackGroundLight;