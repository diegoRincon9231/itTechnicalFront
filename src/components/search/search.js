import {Component} from 'react';
//import {connect} from 'react-redux';
import './search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
    }
    handleChange (event) {
        this.setState({
            value : event.target.value
        })
    }
    render(){
        return(
            <div className="header__top--search">
                <form id="searchElement">
                    <span>¿Que buscas?:</span>
                    <input type="text"  onChange={this.handleChange}/>
                    <FontAwesomeIcon icon={faSearch} />
                </form>
            </div>
        )
    }
}



export default Search;