import { Component } from "react";
import Data from './items'
import './nav.scss';
class Menu extends Component {
    constructor(props){
        super(props)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }

    handleOnMouseLeave(e){
        //const selectedItem = e.target.dataset.value;
    }

    render(){
        const items = Data.map((element, index) =><li data-value={element.name} key={index} onMouseLeave={this.handleOnMouseLeave}> {element.name}</li>)
        return(
            <ul>
                {items}
            </ul>
        )
    }
}

export default Menu;