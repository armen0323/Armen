import { useState } from 'react';
import './assets/global.scss';
import Left from './Pages/Left';
import Rigth from './Pages/Rigth';


function App() {

  const [data, setData] = useState('');
  const [description_info,setDescripion_info] = useState('')
  const [rangeInfo,setrangeInfo] = useState();
  const [title_color,settitle_color] = useState('');
  const [desc,setdesc]= useState('');
  const [bacColor,setbacColor] = useState('');
  


 function pull_data(data_info,description,radius,colortitle,color_desc,colorbac){
  setData(data_info);
  setDescripion_info(description)
  setrangeInfo(radius)
  settitle_color(colortitle)
  setdesc(color_desc)
  setbacColor(colorbac)
  
 }

  return (
    <div className="g-flex">
      <Left  func={pull_data} />
      <Rigth data={data} description={description_info} rangeInfo={rangeInfo} colortitle={title_color} descriptionColor={desc} back_color={bacColor}/>
    </div>
  );
}

export default App;
