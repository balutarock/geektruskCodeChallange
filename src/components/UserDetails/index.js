import {FaEdit} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'
import {
  UserDetailsListItem,
  Input,
  UserDetailsPara,
  ActionContainer,
  Container,
  NameEmailRoleContainer,
  DeleteButton,
} from './styledComponent'
import './index.css'

const UserDetails = props => {
  const {eachUser, onClickInput, onClickDelete} = props
  const {id, name, email, role, isChecked} = eachUser
  const onChangeValue = () => {
    onClickInput(id)
  }
  const onClickDeleteButton = () => {
    onClickDelete(id)
  }
  return (
    <UserDetailsListItem isChecked={isChecked}>
      <Input type="checkbox" checked={isChecked} onChange={onChangeValue} />
      <NameEmailRoleContainer>
        <Container>
          <UserDetailsPara>{name}</UserDetailsPara>
        </Container>
        <Container>
          <UserDetailsPara>{email}</UserDetailsPara>
        </Container>
        <Container>
          <UserDetailsPara>{role}</UserDetailsPara>
        </Container>
      </NameEmailRoleContainer>
      <ActionContainer>
        <FaEdit className="edit-icon" />
        <DeleteButton type="button" onClick={onClickDeleteButton}>
          <MdDeleteOutline className="delete-icon" />
        </DeleteButton>
      </ActionContainer>
    </UserDetailsListItem>
  )
}

export default UserDetails
