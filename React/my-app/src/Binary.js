import React,{Component} from 'react';
import {variables} from './Variables.js';
export class Binary extends Component{
    constructor(props){
        super(props);
       
        this.state={
            
        bytes:[],
        modalTitle:"",
        id:0,
        byte7:0,
        byte6:0,
        byte5:0,
        byte4:0,
        byte3:0,
        byte2:0,
        byte1:0,
        byte0:0,
        number:0,
        byteidlist:[]
        }
    }
    refreshList(){
        fetch(variables.API_URL+'Binary')
        .then(response=>response.json())
        .then(data=>{
            this.setState({bytes:data});
        });
    }

  

    componentDidMount(){
        this.refreshList();
    }
    changenumber =(e)=>{
        this.setState({number:e.target.value});
    }
    addClick(){
        this.setState({
            modalTitle:"Add Byte",
            id:0,
            number:""
        });
    }
    editClick(byt){
        this.setState({
            modalTitle:"Edit Department",
            id:byt.id,
            number:byt.number
        });
    }
    createClick(){
        fetch(variables.API_URL+'Binary',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                number:this.state.number
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'Binary',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:this.state.id,
                number:this.state.number
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Binary/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }
    checkClick(number){
        this.setState(prevState=>({byteidlist:[...prevState.byteidlist,number]}))  
    }
    //Сумма
    SumButtonClick(){
        const {byteidlist}  = this.state;
        fetch(variables.API_URL+'Binary/Sum'+byteidlist,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                byteidlist:this.byteidlist
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        }) 
    }
    render(){
        const {
            bytes,
            modalTitle,
            id,
            number
        }=this.state;

        return(
<div>
<button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Byte
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            byte7
        </th>
        <th>   
        byte6
        </th>
        <th>   
        byte5
        </th>
        <th>   
        byte4
        </th>
        <th>   
        byte3
        </th>
        <th>   
        byte2
        </th>
        <th>   
        byte1
        </th>
        <th>   
        byte0
        </th>
        <th>   
        number
        </th>
        <th>
        Options
        </th>
        <th>
            Choose
        </th>
    </tr>
    </thead>
    <tbody>
        {bytes.map(byt=>
            <tr key={byt.id}>
                <td>{byt.byte7}</td>
                <td>{byt.byte6}</td>
                <td>{byt.byte5}</td>
                <td>{byt.byte4}</td>
                <td>{byt.byte3}</td>
                <td>{byt.byte2}</td>
                <td>{byt.byte1}</td>
                <td>{byt.byte0}</td>
                <td>{byt.number}</td>
               
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(byt)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(byt.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
                <td>
                    <input type="radio" onClick={()=>this.checkClick(byt.number)} ></input>
                </td>
            </tr>
            )}
    </tbody>
    </table>
    <div>
    <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.SumButtonClick()}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
</svg> 
                </button>
                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.someButtonClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
    </div>



    </div>)
    }
}
