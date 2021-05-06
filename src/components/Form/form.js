import { Component } from "react"
import "./form.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Form extends Component  {
    constructor(props){
        super(props)
        this.state = {
            data:[
            ],
            showModal:false,
            nombre:null,
            email:null,
            celular:null,
            edad:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        const data = {
            "name": e.target.elements.nombre.value,
            "email":e.target.elements.email.value,
            "tel":e.target.elements.celular.value,
            "age":e.target.elements.edad.value
        }
        console.log(data)
        setTimeout( () => (
            this.setState({showModal: true})
        ),5000)  
    }
    
    handleChange(event){
        console.log(event)
        this.setState({ [event.target.name] : event.target.value })
    }
    render(){
        const {showModal} = this.state;
        return (
                <div className="contentForm">
                        <form className="form" onSubmit={this.handleClick}>
                            <h2 className="form--title">Hola, bienvenido, sabemos que quieres viajar en un <span>{}</span>, por favor diligencia el siguiente formulario:</h2>
                            <div className="form--element">
                                <label >Nombre</label>
                                <input onChange={this.handleChange} type="text" required name="nombre" placeholder="Nombre"/>
                            </div>
                            <div className="form--element">
                                <label>Email</label>
                                <input  onChange={this.handleChange} type="text" required name="email"  placeholder="Email"/>
                            </div>
                            <div className="form--element">
                                <label >Celular</label>
                                <input  onChange={this.handleChange} type="number" maxLength="10" required name="celular" placeholder="Celular"/>
                            </div>
                            <div className="form--element">
                                <label >Edad</label>
                                <input  onChange={this.handleChange} type="number" required name="edad" placeholder="Edad"/>
                            </div>
                            <div>
                                <input  type="submit"/>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </div>
                        </form>
                        {showModal === true ?
                           <div className="succesMessage">
                                <span>Te has registrado con éxito!</span>
                           </div> 
                        : ''}
                </div>
        )
    }
}

export default Form