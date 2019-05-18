import React, { Component } from 'react';
import '../index.css';
class Province extends Component{
    render(){
        let provinces = ["京","沪","浙","苏","粤","鲁","晋","冀","豫","川","渝","辽","吉","黑","皖","鄂","津","贵","云","桂","琼","青","新","藏","蒙","宁","甘","陕","闽","赣","湘"];
        let showFlag = this.props.selectProv ? 'block' : 'none';
        return (
            <div className="province" style={{display:showFlag}}>
                <div className="p-box">
                    {
                        provinces.map((item,i) => {
                            return (
                                <p onClick={this.props.selectVal.bind(this,{item})} key={i}><span>{item}</span></p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Province;