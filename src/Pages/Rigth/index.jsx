import '../Rigth/style.scss';

function Rigth(props){


return(
    <section className='g-justify-align-centr rigth-blok'>
        <div className=' blok-info'  style={{'borderRadius':`${props.rangeInfo}px`,'backgroundColor':`${props.back_color}`}} >
       
            <p className='text-center blok-text'style={{'color':`${props.colortitle}`}}>{props.data}</p>
            <p className='text-center blok-text'style={{'color':`${props.descriptionColor}`}}>{props.description}</p>
        </div>
    </section>
)

}

export default Rigth