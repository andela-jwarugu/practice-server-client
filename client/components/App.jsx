import React from 'react';
import request from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      commits: [],
      isShowingUser: false,
      username: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.getCommit = this.getCommit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    request
      .get('http://localhost:3000/api/members')
      .then((res) => (
        this.setState({users: res.body})
      )).catch(err => (
        console.log(err)
      ))
  }

  handleBack() {
    this.setState({username: '', isShowingUser: false})
  }

  getCommit(username) {
    request
      .get('http://localhost:3000/api/commits?username=' + username)
      .then((res) => (
        this.setState({commits: res.body, isShowingUser: true, username: username})
      )).catch(err => (
        console.log(err)
      ))
  }

  handleClick(event) {
    this.getCommit(event.target.id);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className='text-xs-center' style={{marginTop: '1.2em', marginBottom: '1.2em'}}>
         <h4> Github Manenos </h4>
        </div> <hr />

        {!this.state.isShowingUser?
          <div className='col-md-4 offset-md-4'>
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> Andela Users List </h5>
              </div>
              <ul className='list-group list-group-flush'>
                {this.state.users.map((user) => (
                  <a className='list-group-item' onClick={this.handleClick} key={user} id={user}>{user}</a>
                ))}
              </ul>
            </div>
          </div> :
          <div className='col-md-4 offset-md-4'>
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> {this.state.username} </h5>
                <span className='card-text'> The following is the latest commit and repo info by user. </span>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><em>Repo:</em> {this.state.commits[0].repo}</li>
                <li className='list-group-item'><em>Commit:</em> {this.state.commits[0].commit}</li>
              </ul>
              <div className='card-block'>
                <button className='btn btn-primary' onClick={this.handleBack}> Go back </button>
              </div>


            </div>
          </div>
        }

      </div>
    )
  }
}
