import { useState } from 'react'
import '../Left/style.scss'

function Left(props){
    const [title,setTitle] = useState('title');
    const [description,setDescription] = useState('description');
    const [range_info,setrange_info] = useState('');
    const [titleColor,settitleColor] = useState('');
    const [desc_color,setdesc_color] = useState('');
    const [background,setbackground] = useState('');


    props.func(title,description,range_info,titleColor,desc_color,background);

    function foo(e){
        setTitle(e.target.value)
    }

    function change(e){
        setDescription(e.target.value)
    }

    function range(e){
        setrange_info(e.target.value)
    }
    function title_color(e){
        settitleColor(e.target.value)
    }
    function color_desc(e){
        setdesc_color(e.target.value)
    }
    function back(e){
        setbackground(e.target.value)
    }
    

    return(
        <div className="g-flex-direction g-justify-evenly left-blok">
            <input type='text' placeholder='title' className='left-input' onChange={foo}/>
            <input type='text' placeholder='description' className='left-input'onChange={change}/>
            {range_info} px
            <input type='range' className='left-input'onChange={range}/>
            <input type='color' className='left-input'onChange={title_color}/>
            <input type='color' className='left-input'onChange={color_desc}/>
            <input type='color' className='left-input'onChange={back}/>
            
            
        </div>
    )
}

export default Left