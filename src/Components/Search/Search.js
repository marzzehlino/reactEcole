import React from "react";
import { themeContext } from '../../context/theme-context';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


class Search extends React.Component{

    constructor(props){
        super(props);
        this.searchRef = React.createRef();
    }

    componentDidMount(){
        this.searchRef.focus();
    }

    static contextType = themeContext;

    render(){
        return(
            <input type="text" style={{ 
                width:'90%',
                display: 'block',
                margin: 'auto',
                padding: '3px',
                background: this.context.background,
                color: this.context.foreground
            }}
            ref ={ (e)=> this.searchRef = e }/>
        )
    }
}
export default Search;