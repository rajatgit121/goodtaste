import { Component } from 'react'

export class BindEventHandler extends Component {


    constructor(props){
        super(props);
       this.actionEvent=this.actionEvent.bind(this);
       this.state={
        place:"Delhi",
        houseNo:this.props.houseNo
       }
    }

    actionEvent=()=>{
        this.setState({
            place:"Lucknow"
        })
        console.log("Indian Government",this.props.houseNo,this.state.place);
    }
  render() {
    return (
      <div>
        <button onClick={this.actionEvent}>Hit Me</button>
        {this.state.place} {this.props.houseNo}
      </div>
    )
  }
}

export default BindEventHandler
