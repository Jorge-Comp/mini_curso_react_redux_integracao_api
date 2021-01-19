import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import React from 'react'
const UserFormFunc = props => {
    return (
        <form>
            <label>
                Name
            </label>
            <input type="text" component="input" name="name"></input>
            <label>
                Email
            </label>
            <input type="text" component="input" name="email"></input>
        </form>
    );
}

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc)

const mapStateToProps = state =>({

})
export default connect(mapStateToProps)(UserForm)