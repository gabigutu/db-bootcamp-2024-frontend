
function ChildHello (props) {

    console.log(props);
    
    const clickCopil = () => {
        console.log('ai dat click in componenta copil');
        props.actiuneDinParinte();
    }


    return (
        <>
            <p>Am primit: <span>{props.numar}</span></p>
            <button onClick={clickCopil}>Click (copil)</button>
        </>
    )
}

export default ChildHello;
