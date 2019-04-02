import React, {Component} from 'react';

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            id: '',
            title: '',
            body: ''
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
        console.log(this.state)
    };
    render() {

        console.log(this.props);

        const styles = {
            text: 'red',
            backgroundColor: 'grey'
        };
        return(
            <>
                <form onSubmit={(e) => this.sendData(e)}>
                    <label>
                        Enter Name:
                        <input style={this.state.userId.length %  2 === 0  ? styles : {}} type="text" value={this.state.userId}  name='userId' onChange={this.onChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form onClick={ e => this.handleSubmit(e)}>
                <button className='Button'>Get All Images</button>
                </form>
            </>
        )
    }

}
export default HomePage;