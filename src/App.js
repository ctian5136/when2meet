import React from "react";
import TableDragSelect from "react-table-drag-select";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


class App extends React.Component {
  state = {
    availabilityCells: [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]
  };

  render = () =>
    <Container class="when2meet">
      <div class="header">
        <br></br>
        <br></br>
        <h1> <FontAwesomeIcon icon={regular('clock')} /> When2Meet Scheduler</h1>
        <br></br>
        <h5> Enter your availability by clicking or dragging on the time slots of the left time table. As your team enters more of their availabile slots, the time table on the right will display the best times of the whole team! Happy scheduling!</h5>

      </div>
      <br></br>
      <Row>
        <Col class="yourAvailability">
        <h4>Your Availability</h4>
        <div class="table">
            <TableDragSelect value={this.state.availabilityCells} onChange={this.handleChange}>
              <tr>
                <td disabled />
                <td disabled>Monday</td>
                <td disabled>Tuesday</td>
                <td disabled>Wednesday</td>
                <td disabled>Thursday</td>
                <td disabled>Friday</td>
              </tr>
              <tr>
                <td disabled>10:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>11:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>12:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>1:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>2:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>3:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>4:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </TableDragSelect>
            <br></br>
            <Button variant="outline-primary" onClick={this.handleClick} className="button">Reset Availability</Button>
          </div>
        </Col>
        <Col class="totalAvailability">
        <h4>Team Availability</h4>
          <div class="table other" >
          <TableDragSelect value={this.state.availabilityCells}>
          
            <tr>
                <td disabled />
                <td disabled>Monday</td>
                <td disabled>Tuesday</td>
                <td disabled>Wednesday</td>
                <td disabled>Thursday</td>
                <td disabled>Friday</td>
              </tr>
              <tr>
                <td disabled>10:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>11:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>12:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>1:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>2:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>3:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td disabled>4:00</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
          </TableDragSelect>
          </div>

        </Col>

      </Row>
    </Container>;

  handleChange = availabilityCells => this.setState({ availabilityCells });

  handleClick = () => {
    const availabilityCells = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    this.setState({ availabilityCells });
  };
}

export default App;

