import {Component} from 'react'
import {Oval} from 'react-loader-spinner'
import UserDetails from '../UserDetails'
import {
  EmptyListContainer,
  RetryButton,
  UserDetailsBgContainer,
  SearchContainer,
  SearchInput,
  UserListContainerUl,
  LoadingContainer,
  FailureBgContainer,
  Container,
  UserDetailsPara,
  ActionContainer,
  UserDetailsListItem,
  Input,
  NameEmailRoleContainer,
  DeleteAllButton,
} from './styledComponent'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class UsersList extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    usersList: [],
    search: '',
  }

  componentDidMount() {
    this.getTheUserDetailsData()
  }

  getTheUserDetailsData = async () => {
    this.setState({apiStatus: apiStatusList.inProgress})
    const userDetialsUrl = `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json?`
    const options = {
      method: 'GET',
    }
    const response = await fetch(userDetialsUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      this.apiStatusSuccess(data)
    } else {
      this.apiStatusFailure()
    }
  }

  apiStatusSuccess = data => {
    const updatedData = data.map(each => ({
      id: each.id,
      name: each.name,
      role: each.role,
      email: each.email,
      isChecked: false,
    }))
    this.setState({
      apiStatus: apiStatusList.success,
      usersList: [...updatedData],
    })
  }

  apiStatusFailure = () => {
    this.setState({apiStatus: apiStatusList.failure})
  }

  renderTheSearchContainer = () => {
    const {search} = this.state

    return (
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search by name, email or role"
          value={search}
          onChange={this.onChangeSearch}
        />
      </SearchContainer>
    )
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  renderTheHeader = () => (
    <UserDetailsListItem>
      <Input type="checkbox" onChange={this.onChangeHeaderInput} />
      <NameEmailRoleContainer>
        <Container>
          <UserDetailsPara>Name</UserDetailsPara>
        </Container>
        <Container>
          <UserDetailsPara>Email</UserDetailsPara>
        </Container>
        <Container>
          <UserDetailsPara>Role</UserDetailsPara>
        </Container>
      </NameEmailRoleContainer>
      <ActionContainer>
        <UserDetailsPara>Actions</UserDetailsPara>
      </ActionContainer>
    </UserDetailsListItem>
  )

  onChangeHeaderInput = event => {
    const check = event.target.checked
    const {usersList} = this.state
    const deletedList = usersList.map(each => ({
      ...each,
      isChecked: check,
    }))
    console.log(deletedList)
    this.setState({usersList: [...deletedList]})
  }

  renderTheUsersList = () => {
    const {usersList, search} = this.state
    const filteredList = usersList.filter(
      each =>
        each.name.toUpperCase().includes(search.toUpperCase()) ||
        each.email.toLowerCase().includes(search.toLowerCase()) ||
        each.role.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <>
        {filteredList.length === 0 ? (
          this.renderTheEmptyView()
        ) : (
          <>
            <UserListContainerUl>
              {this.renderTheHeader()}
              {filteredList.map(eachUser => (
                <UserDetails
                  eachUser={eachUser}
                  key={eachUser.id}
                  onClickInput={this.onClickInput}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </UserListContainerUl>
            {this.renderTheDeleteAllButtonAndPagination()}
          </>
        )}
      </>
    )
  }

  renderTheDeleteAllButtonAndPagination = () => (
    <DeleteAllButton type="button" onClick={this.onClickDeleteAllButton}>
      DeleteAll
    </DeleteAllButton>
  )

  onClickDeleteAllButton = () => {
    this.setState(prevState => ({
      usersList: [
        ...prevState.usersList.filter(each => each.isChecked === false && each),
      ],
    }))
  }

  renderTheEmptyView = () => (
    <EmptyListContainer>
      <img
        src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1643298392/movie%20app%20mini%20project/Background-Complete_rlcxnf.png"
        alt="empty view"
      />
      <p>No Search results</p>
    </EmptyListContainer>
  )

  onClickInput = id => {
    this.setState(prevState => ({
      usersList: [
        ...prevState.usersList.map(each =>
          each.id === id ? {...each, isChecked: !each.isChecked} : each,
        ),
      ],
    }))
  }

  onClickDelete = id => {
    this.setState(prevState => ({
      usersList: [...prevState.usersList.filter(each => each.id !== id)],
    }))
  }

  renderTheSuccessView = () => (
    <>
      {this.renderTheSearchContainer()}
      {this.renderTheUsersList()}
    </>
  )

  renderTheLoadingView = () => (
    <LoadingContainer>
      <Oval color="#6068f7" height={80} width={80} />
    </LoadingContainer>
  )

  renderTheFailureView = () => (
    <FailureBgContainer>
      <img
        src="https://res.cloudinary.com/dxnhvq8pl/image/upload/v1643303783/movie%20app%20mini%20project/alert-triangle_eeuzgc.png"
        alt="failure view"
      />
      <p>Something went wrong. please try again</p>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureBgContainer>
  )

  onClickRetryButton = () => {
    this.setState({}, this.getTheUserDetailsData)
  }

  renderTheApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inProgress:
        return this.renderTheLoadingView()
      case apiStatusList.success:
        return this.renderTheSuccessView()
      case apiStatusList.failure:
        return this.renderTheFailureView()

      default:
        return null
    }
  }

  render() {
    const {usersList} = this.state
    console.log(usersList)
    return (
      <UserDetailsBgContainer>
        {this.renderTheApiStatus()}
      </UserDetailsBgContainer>
    )
  }
}

export default UsersList
