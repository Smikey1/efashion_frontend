import React, { Component } from 'react'
import logo from "../media/logo.png"
import { Container, CircularProgress, Box, Typography, TextField, Button } from '@material-ui/core'

class login extends Component {


    constructor(props){
    super(props) 
    this.state={
        email:"",
        password:"",
        show_progress_bar:false
    }
    this.handleChange=this.handleChange.bind()
    this.login=this.login.bind()
}

handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

login = ()=>{
let valid_data=true
this.state.email_error=null
this.state.password_error=null
if(this.state.email===""){
    this.state.email_error="Required email"
    valid_data=false
}
if(this.state.password===""){
    this.state.password_error="Required password"
    valid_data=false
}
this.setState({
    update:true
})

if(valid_data){

}

}


    render() {
        return (
          <Container maxWidth="xs">
              <Box 
              bgcolor="white" 
              boxShadow="4" 
              borderRadius="18px" 
              textAlign="center" 
              mt="50px" 
              p="24px">
              <img src={logo} height="50px"/>
            <Typography varient="h5" color="textSecondary">eFashion Store Admin</Typography>
         <TextField
          label="Email"
          id="outlined-size-small"
          type="Email"
          variant="outlined"
          fullWidth
          name="email"
          error={this.state.email_error!=null}
          helperText={this.state.email_error}
          onChange={this.handleChange}
          margin="normal" 
          color="seconda ry"
          size="small"
        />
         <TextField
          label="Password"
          id="outlined-size-small"
          type="Password"
          color="secondary"
          variant="outlined"
          name="password"
          error={this.state.password_error!=null}
          helperText={this.state.password_error}
          onChange={this.handleChange}
          fullWidth
          margin="normal"
          size="small"
        />
        <br/>
        <br/>
        {this.state.show_progress_bar?
        <CircularProgress color="primary" size={29}/>:null}
        <br/>
        <br/>
        <Button disableElevation variant="contained" color="primary" fullWidth onClick={this.login}>
            Login
        </Button>
       </Box>
          </Container>
     )
  }
}

export default login
