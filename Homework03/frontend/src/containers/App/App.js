import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,Card, CardHeader, CardFooter, CardBody
} from 'reactstrap'

import {
  POSTS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import classes from './App.module.css'

let unsubscribe = null

class App extends Component {
  state = {
    formTitle: '',
    formBody: '',
    authorid: '',
    Andrew_show:false,
    Sarah_show:false,
    Mike_show:false,
    Andrew_count:0,
    Sarah_count:0,
    Mike_count:0
  }
  
  handleFormSubmit = e => {
    e.preventDefault()

    const formTitle = this.state.formTitle; 
    const formBody = this.state.formBody;
    const authorid = this.state.authorid;

    if (!formTitle || !formBody || !authorid) return

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: authorid
      }
    })

    this.setState({
      formTitle: '',
      formBody: '',
      authorid: ''
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form  onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                    <Label  for="author" sm={2}>Author</Label>
                    <Col sm={10}>
                      <Input type="select"  value={this.state.authorid} onChange={e => this.setState({ authorid: e.target.value })}>
                        <option value="0"> -- select an Author -- </option>
                        <option value="1">Andrew</option>
                        <option value="2">Sarah</option>
                        <option value="3">Mike</option>
                      </Input>
                    </Col>
                     
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>    
                      <Button type="submit" color="primary">
                        Post!
                      </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>           
                  const posts = data.posts.map((post, id) => (
                    <Post data={post} key={id} /> 
                  ));
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })
                  let tmp1 = posts.filter(ele => ele.props.data.author.name === "Andrew")
                  let tmp2 = posts.filter(ele => ele.props.data.author.name === "Sarah")
                  let tmp3 = posts.filter(ele => ele.props.data.author.name === "Mike")
                          
                return( 
                <div>
                  <Container>
                  <Col>
                    <Col>
                      <Button onClick={() => this.setState({Andrew_show: !this.state.Andrew_show})} >Andrew {tmp1.length}</Button>
                        <div style={ {display: this.state.Andrew_show ?"block":"none"} }>
                          {tmp1}
                        </div>
                    </Col>
                    <br></br>
                    <Col>
                      <Button onClick={() => this.setState({Sarah_show: !this.state.Sarah_show})} >Sarah {tmp2.length}</Button>
                        <div style={ {display: this.state.Sarah_show ?"block":"none"} }>
                          {tmp2}
                        </div>
                    </Col>
                    <br></br>
                    <Col>
                      <Button onClick={() => this.setState({Mike_show: !this.state.Mike_show})} >Mike {tmp3.length}</Button>
                        <div style={ {display: this.state.Mike_show ?"block":"none"} }>
                          {tmp3}
                        </div>
                    </Col>
                
                  </Col>
                  </Container>
                  
                  
                </div>
                )
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
