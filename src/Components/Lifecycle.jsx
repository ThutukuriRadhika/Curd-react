import { Component } from "react";

class Lifecycle extends Component{
    constructor() {
        console.log("Constructor got loaded");
        super()

        this.state = {
            count:1
        }
    }
    incre=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
     console.log("Component got birth")
    }
    componentDidUpdate(){
        console.log("Component is growing")
    }
render(){
    console.log("render got loaded")
    return(
        <div>
            {/* Hii */}
            {this.state.count}
            <button onClick={this.incre}>Increment</button>
        </div>
    )
}
componentWillUnmount(){
    console.log("Component is killed")
    alert("Component is murdered")
}
}
export default Lifecycle
