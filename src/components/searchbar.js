import React, { Component } from 'react'


class SearchBar extends Component {
state={term:""}
      ///stops form from refreshing page
onFormSubmit =(e) => {  ///fixes state being undefined--bind--arrow function
    e.preventDefault()

  this.props.onSubmit(this.state.term)
    
}



//     oninputChange(event){
//  console.log(event.target.value)

// }

  render() {
    return (
<>
      <h2 className="ui header" style={{ display:'flex', justifyContent:"center"}}>
        
          <div className="content" >
            <i class="camera retro icon"></i>   Free stock images
  </div>
</h2>

      <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
              <label>Image search</label>
         
          {/* <input type="text" onChange={this.oninputChange}></input> */}
  
  {/* no need for function and fixes state undefined issue */}
                  <input type="text" 
                  value={this.state.term}
                   onChange={e=> this.setState({term: e.target.value})}>
                   </input>
         
          </div>
          
          </form> 
      </div>
      </>
    )
  }
}

export default SearchBar
