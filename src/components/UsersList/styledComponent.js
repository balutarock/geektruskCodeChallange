import styled from 'styled-components'

export const UserDetailsBgContainer = styled.div`
  min-height: 100vh;
  background-color: '#ffffff';
  padding: 30px;
`

export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  color: '#9a9c9b';
  outline: none;
  font-family: 'Roboto';
  border: 1px #9a9c9b solid;
  border-radius: 2px;
`

export const UserListContainerUl = styled.ul`
  width: 100%;
  list-style: none;
  margin-left: -20px;
`

export const HeadingListItems = styled.li`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const HeadingInput = styled.input`
  margin-right: 20px;
  margin-top: 18px;
`

export const MobileHeaderNameEmailRole = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: flex-start;
`

export const Headings = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  color: '#000000';
  font-size: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ActionsHeadings = styled.h1`
  font-family: 'roboto';
  font-weight: bold;
  color: '#000000';
  font-size: 15px;
  text-align: flex-start;
`

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
  font-weight: 500;
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
  text-alignt: flex-start;
  width: 150px;
  @media screen and (min-width: 1000px) {
    width: 300px;
  }
`
export const MobileNameEmailRoleContainer = styled.div`
  width: 200px;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const RetryButton = styled.button`
  border-width: 0px;
  border-radius: 5px;
  background-color: #4760ff;
  color: #ffffff;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
`

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const DeleteAllButton = styled.button`
  background-color: #ff6836;
  color: #ffffff;
  border-width: 0px;
  border-radius: 15px;
  font-family: Roboto;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
