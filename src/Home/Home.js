import React, {Component} from 'react';
import {Post} from "./Post";
import {postData} from "../actions";
import {connect} from "react-redux";
import {Button, Input, Div} from "../Styles/Button";

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/photos');
    };

    onChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    };

    sendData = (e) => {
        e.preventDefault();
        const {id, title, body} = this.state;
        if(id  === '' || title === '' || body === '') {
            alert('Please fill in all fields')
        } else {
            this.props.post(id,title,body)
        }
    };
    render() {
        const formsStyles = {
            flexDirection: 'row',
            backgroundColor: '#F0ECEB',
            flexWrap: 'wrap',
            border: 'black solid',
            width: '30%',
            justifyContent: 'center',
            display: 'inline-block',
            left: '50%',
            top: '50%',
             marginLeft: '-25%',
             position: 'absolute',
             marginTop: '-25%',
            alignContent: 'center'
    };
        const noInput = {
            display: 'flex',
            text: 'white',
            marginLeft: '35px'


        };
        const { postState } = this.props;
        console.log(this.props);

        return(
            <Div>
                <form style={formsStyles}>
                    <label>
                        Post to API
                        <div style={{flexDirection: 'column'}}>
                       id: <input style={this.state.id.length === 0 ? {borderWidth: '4px',borderColor: '#d84949',...noInput} : {borderWidth: '4px', borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.id}  name='id' onChange={this.onChange} />
                       title: <input style={this.state.title.length === 0  ? {borderWidth: '4px',borderColor: '#d84949',...noInput} : {borderWidth: '4px', borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.title}  name='title' onChange={this.onChange} />
                       body: <input style={this.state.body.length  === 0  ? {borderWidth: '4px',borderColor: '#d84949',...noInput} : {borderWidth: '4px', borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.body}  name='body' onChange={this.onChange} />
                        </div>
                    </label>
                    <Input primary type="submit" value="Submit" onClick={e => this.sendData(e)}/>
                </form>
                <Post style={JSON.stringify(postState) === JSON.stringify([])
                    ? {display: 'none'} : {color: 'green', whiteSpace: 'pre-line',   alignSelf: 'flex-end'}}
                    id={postState.id}
                    user={postState.userId}
                    title={postState.title}
                    body={postState.body}
                />
                <Button  onClick={e => this.handleSubmit(e)} >Get All Images</Button>
                <br/>
                <Button primary  onClick={() => this.props.history.push('/filter')} >Filter Images</Button>
            </Div>
        )
    }

}
const mapStateToProps = (state) => ({
    postState : state.post
});

const mapDispatchToProps = {
    post: postData

};
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);