import React,{ Component } from 'react';
import Keyboard from './components/keyboard';
import Province from './components/province';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            provFlag:false, //省份键盘
            keyboardFlag:false,//数字字母键盘
            strArr:''//字母数字
        }  
        this.delText = this.delText.bind(this);
        this.closeKeyboard = this.closeKeyboard.bind(this);
        this.showKeyboard = this.showKeyboard.bind(this);
        this.showProv = this.showProv.bind(this);
        this.carProv=React.createRef();
        this.cardNm=React.createRef();
    }
    // 选择省
    showProvs(e){
        this.setState({
            provFlag:true,
            keyboardFlag:false
        });
        e.nativeEvent.stopImmediatePropagation();
    }
    // 选择数字 字母键盘
    showKeyboards(e){
        this.setState({
            provFlag:false,
            keyboardFlag:true
        });
        e.nativeEvent.stopImmediatePropagation();
    }

    //选择省份并赋值，关闭弹窗
    showProv(val){
        this.setState({
            provFlag:false
        });
        this.carProv.current.value = val.item;
    }
    // 记录输入数字字母
    showKeyboard (e){
        if(e.target && e.target.matches('ul')){
            return;
        } 
        let str = this.state.strArr;
        let strRes = str += e.target.innerText;
        this.setState({
            strArr:strRes
        },()=>{
            this.cardNm.current.value = this.state.strArr;
        });
    }
    // 删除已输入值
    delText (e){
        e.stopPropagation();
        let newStr = this.state.strArr.substring(0,this.state.strArr.length-1);
        this.setState({
            strArr:newStr
        },() => {
            this.cardNm.current.value = this.state.strArr;
        });
    }
    // 完成按钮 关闭键盘
    closeKeyboard (e){
        e.stopPropagation();
        this.setState({
            keyboardFlag:false
        });
    }
    // 点击空白地方隐藏弹窗
    hideMenu = (e) => {
        this.setState({
            provFlag:false
        })
    }
    componentDidMount(){
        document.addEventListener('click', this.hideMenu);
    }
    // 卸载异步操作设置状态
    componentWillUnmount(){
        this.setState = (state,callback) => {
            return;
        }
    }
    render(){
        return (
            <div className="keyboards">
                <input type="text" ref={this.carProv} readOnly onClick={this.showProvs.bind(this)} placeholder="点击选择省简称" />
                <input type="text" ref={this.cardNm} readOnly onClick={this.showKeyboards.bind(this)} placeholder="点击选择数字及字母" />

                <Keyboard
                isShow={this.state.keyboardFlag}
                getText={this.showKeyboard}
                delText={this.delText}
                closeKeyboard={this.closeKeyboard}
                />
                <Province
                selectProv = {this.state.provFlag}
                selectVal = {this.showProv}
                />
            </div>
        )
    }
}
export default App;