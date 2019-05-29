import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  class inventory extends Component{
    constructor(props){
      super(props);
      this.state={
        sno:1, rows:[["001","mouse","desc","3","pcs","750", "900"]]
      };
    }

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render(){
      return(
      <div className="contain">
        <h4 style={{paddingLeft:"40%"}}>Inventory</h4>
        <div className='scrollable' style={{height:"480px"}}>
          <Table responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item code</th>
                <th>Item name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Retail Price</th>
                <th>Sales Price</th>
              </tr>
            </thead>
            <tbody>
            {
              // display table content
            }
            {
              this.state.rows.map((item, i) => (
              <tr key={i}>
                this.state.salePrice
                <td>{this.state.sno++}</td>
                <td>{this.state.rows[i][0]}</td>
                <td>{this.state.rows[i][1]}</td>
                <td>{this.state.rows[i][2]}</td>
                <td>{this.state.rows[i][3]}</td>
                <td>{this.state.rows[i][4]}</td>
                <td>{this.state.rows[i][5]}</td>
                <td><input type="text" value={this.state.salePrice} onChange={e => this.change(e)}
                  style={{width:"100px", textAlign: "center", border:"1px solid white"}}/></td>
              </tr>
            ))
            }
            {
              //&nbsp;<a style={{color:"grey"}}><FontAwesomeIcon icon="pencil-alt"/></a>
              //end display
            }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default inventory;
