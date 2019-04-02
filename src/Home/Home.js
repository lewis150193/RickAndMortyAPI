import React, {Component} from 'react';
import {Post} from "./Post";

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            response: {}
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
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: id
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => this.setState({response: json}));
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
        const {response} = this.state;
        return(
            <>
                <form style={formsStyles}>
                    <label>
                        Post to API
                        <div style={{flexDirection: 'column'}}>
                       id: <input style={this.state.id.length === 0 ? {borderColor: '#d84949',...noInput} : {borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.id}  name='id' onChange={this.onChange} />
                       title: <input style={this.state.title.length === 0  ? {borderColor: '#d84949',...noInput} : {borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.title}  name='title' onChange={this.onChange} />
                       body: <input style={this.state.body.length  === 0  ? {borderColor: '#d84949',...noInput} : {borderColor:'#3aaf36' , ...noInput}} type="text" value={this.state.body}  name='body' onChange={this.onChange} />
                        </div>
                    </label>
                    <input  type="submit" value="Submit" onClick={e => this.sendData(e)}/>
                </form>
                <Post style={JSON.stringify(this.state.response) === JSON.stringify({})
                    ? {display: 'none'} : {color: 'green', whiteSpace: 'pre-line',   alignSelf: 'flex-end'}}
                    id={response.id}
                    user={response.userId}
                    title={response.title}
                    body={response.body}
                />
                <form onClick={ e => this.handleSubmit(e)}>
                <button className='Button'>Get All Images</button>
                </form>
            </>
        )
    }

}
export default HomePage;