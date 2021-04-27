import React, { Component } from 'react';
import AssetTable from '../../components/Assets/AssetView'
import Assets from '../../utils/Assets'
import Category from '../../utils/Categories'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

class AssetPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assetData: [],
      categoryData: [],
      setCatList: [],
      setCategory: null,
      toggleInput: false,
      toggleid: null
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle = event => {
    this.setState({
      toggleInput: !this.state.toggleInput,
      toggleid: event.target.id
    });
  }

  componentDidMount() {
    Assets.getAssets()
      .then(({ data }) => {
        this.setState({ assetData: data })
        console.log(data)
      })
      .catch(e => console.error(e))

    Category.getCategories()
      .then(({ data }) => {
        this.setState({ categoryData: data })
        console.log(data)
      })
      .catch(e => console.error(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
    console.log(event.target.id)
  }

  handleCategory = event => {
    event.preventDefault()
    Category.getCategories()
      .then(({ data }) => {
        this.setState({ categoryData: data })
        console.log(data)
      })
      .catch(e => console.error(e))
  }

  render() {

    return (
      <>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col>
                <h1 className="display-3">Asset Page</h1>
                <hr className="my-2" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <div>
          <Row>
            <Col>
              {/* <Button id='login' color="primary" onClick={this.toggle}>Login</Button> */}
              <AssetTable
                assetData={this.state.assetData}
                handleCategory={this.handleCategory}
                categoryData={this.state.categoryData}
                toggleInput={this.state.toggleInput}
                toggleid={this.state.toggleid}
                handleSubmit={this.handleSubmit}
                toggle={this.toggle}
              />
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default AssetPage;