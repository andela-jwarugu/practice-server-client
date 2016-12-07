import React from 'react';

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
  }

  componentDidMount() {

  }

  handleClick(event) {
    console.log(event.target.id);
    console.log('handled', event.target.id);
  }

  render() {
    return (
      <div>
        <div className='text-xs-center' style={{marginTop: '1.2em', marginBottom: '1.2em'}}>
         <h4> Github Manenos </h4>
        </div> <hr />

        {!this.state.isShowingUser?
          <div className='col-md-4 offset-md-4'>
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> Andela Users </h5>
              </div>
              <ul className='list-group list-group-flush'>
                <a className='list-group-item' onClick={this.handleClick} id='example1'>Example1</a>
                <a className='list-group-item' onClick={this.handleClick} id='example2'>Example2</a>
              </ul>
            </div>
          </div> :
          <div className='col-md-4 offset-md-4'>
            <div className='card'>
              <div className='card-block'>
                <h5 className='card-title'> /username/ </h5>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Repo: /whatever repo/</li>
                <li className='list-group-item'>Commit: /whatever commit/</li>
              </ul>
            </div>
          </div>
        }

      </div>
    )
  }
}
