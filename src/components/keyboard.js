import React from 'react';
import '../index.css';
import del from '../assets/img/del.png';
const Keyboard = ({isShow,getText,delText,closeKeyboard}) => {
    if(isShow){
        return (
            <div className="keyboard">
                <ul onClick={getText.bind(this)}>
                    <li><span>1</span></li>
                    <li><span>2</span></li>
                    <li><span>3</span></li>
                    <li><span>4</span></li>
                    <li><span>5</span></li>
                    <li><span>6</span></li>
                    <li><span>7</span></li>
                    <li><span>8</span></li>
                    <li><span>9</span></li>
                    <li><span>0</span></li>
                    <li><span>Q</span></li>
                    <li><span>W</span></li>
                    <li><span>E</span></li>
                    <li><span>R</span></li>
                    <li><span>T</span></li>
                    <li><span>Y</span></li>
                    <li><span>U</span></li>
                    <li><span>I</span></li>
                    <li><span>O</span></li>
                    <li><span>P</span></li>
                    <li><span>A</span></li>
                    <li><span>S</span></li>
                    <li><span>D</span></li>
                    <li><span>F</span></li>
                    <li><span>G</span></li>
                    <li><span>H</span></li>
                    <li><span>J</span></li>
                    <li><span>K</span></li>
                    <li><span>L</span></li>
                    <li><span style={{backgroundColor:'#b4bcc7'}}><img onClick={delText.bind(this)} style={{width:'0.20rem',height:'0.10rem',marginTop:'0'}} src={del} alt="" /></span></li>
                    <li style={{marginLeft:'-0.3rem'}}><span>Z</span></li>
                    <li><span>X</span></li>
                    <li><span>C</span></li>
                    <li><span>V</span></li>
                    <li><span>B</span></li>
                    <li><span>N</span></li>
                    <li><span>M</span></li>
                    <li><span onClick={closeKeyboard.bind(this)} style={{width:'0.6rem',backgroundColor:'#0064fc',color:'#fff',marginLeft: '0.05rem'}}>完成</span></li>
                </ul>
            </div>
        )
    }else{
        return '';
    }
    
}
export default Keyboard;