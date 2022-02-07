import styled from 'styled-components'

export const UserDetailsListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  background-color: ${props =>
    props.isChecked === true ? '#e3e3e3' : '#fffffff'};
  border-bottom: 1px #969696 solid;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  padding-bottom: 10px;
`

export const Input = styled.input`
  margin-right: 20px;
`

export const NameEmailRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Container = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
  @media screen and (min-width: 1000px) {
    width: 280px;
  }
`

export const UserDetailsPara = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: '#000000';
  font-weight: 400;
  text-align: flex-start;
  @media screen and (max-width: 768px) {
    margin-bottom: -10px;
  }
`

export const ActionContainer = styled.div`
  display: felx;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
  width: 150px;
  @media screen and (min-width: 1000px) {
    width: 300px;
  }
`

export const DeleteButton = styled.button`
  border-width: 0px;
  background-color: transparent;
`
