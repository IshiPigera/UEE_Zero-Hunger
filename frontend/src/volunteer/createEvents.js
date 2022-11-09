/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { appURLs } from '../enums/url'

import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Button,
} from 'react-native';

import axios from 'axios';

export default class createEvents extends React.Component{
    constructor(props){
        super(props);

        this.state={
            eventName:"",
            description:"",
            location:"",
            startTime:"",
            endTime:"",
            name:"",
            contactNo:"",
            selfDescription:"",
            event:[],

        errorEnName:{},
        errordes:{},
        errorlocation:{},
        errorstart:{},
        errorend:{},
        errorname:{},
        errorNo:{},
        errorself:{},
        
        };
        this.handleInputChange=this.handleInputChange.bind(this);
}

handleInputChange=(e)=>{
        console.log("messgae",e)
        const {name,value} = e.target;

    this.setState({
        ...this.state,
        [name]:value
    }) 
}

formValidation = () =>{

    const{eventName, description,location,startTime,endTime,name,contactNo,selfDescription}=this.state;
    let isValid = true;
    // const errorId={};
    const errorEnName ={};
    const errordes = {};
    const errorlocation = {};
    const errorstart={};
    const errorend={};
    const errorname={};
    const errorNo={};
    const errorself={}

    if(!eventName){
        errorEnName["EnameInput"]="Event name Field is EMPTY!"
    }
  
    if(!description){
        errordes["des"]="discription Field is EMPTY!";
        isValid=false;
    }
  
    if(!location){
        errorlocation["locationError"] = "Location Field is EMPTY!";
        isValid=false;
    }

    if(!startTime){
        errorstart["dateStartInput"] = "Start date Field is EMPTY!";
        isValid=false;
    }
  
    if(!endTime){
        errorend["dateEndInput"] = "End date is EMPTY!";
        isValid=false;
    }
    if(!name){
        errorname["errorName"] = "Name feild is EMPTY!";
        isValid=false;
    }
    if(!contactNo){
        errorNo["errorCon"] = "Contact Number feild is EMPTY!";
        isValid=false;
    }
    if(!selfDescription){
        errorself["errorSelfDes"] = "Self Description feild is EMPTY!";
        isValid=false;
    }
     
    this.setState({errorEnName:errorEnName,errordes:errordes,errorlocation:errorlocation,errorstart:errorstart,errorend:errorend, errorname:errorname, errorNo:errorNo, errorself:errorself});
    return isValid;
  }


    onSubmit=(e)=>{
        e.preventDefault();
        const isValid = this.formValidation();
    if(isValid){
    const{eventName,description,location,startTime,endTime,name,contactNo,selfDescription}= this.state;

    const data={
        eventName:eventName,
        description:description,
        location:location,
        startTime:startTime,
        endTime:endTime,
        name:name,
        contactNo:contactNo,
        selfDescription:selfDescription
    }
    console.log(data);

    

}
}
}