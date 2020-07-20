import React, { Component } from 'react';

class Contact extends Component{
    constructor(props){
        super();
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            nameError: false,
            emailError: false,
            validEmailError: false,
            subjectError: false,
            messageError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    //this.setState
    
    handleSubmit(){
        const name = this.state.name;
        const email = this.state.email;
        const subject = this.state.subject;
        const message = this.state.message;

        //conditional 
        if(!name){
            this.setState({nameError : true})
        }
        else
        this.setState({nameError : false})

        if(!email){
            this.setState({emailError : true})
        }
        else
        this.setState({emailError : false})

        if(!subject){
            this.setState({subjectError : true})
        }
        else
        this.setState({subjectError : false})

        if(!message){
            this.setState({messageError : true})
        }
        else
        this.setState({messageError : false})


    }


    handleChange(e) {
        const formName = e.target.name;
        const formValue = e.target.value;
        console.log("=============formName================", formName);
        console.log("=============formValue================", formValue);
if(formName == "name")
{
    this.setState({name: formValue, nameError:false})
}
if(formName == "email"){
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validEmail = emailPattern.test(formValue);
    console.log("===========validEmail==========", validEmail)
}
    }



    render(){
        return(

        )
    }
}