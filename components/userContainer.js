import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {fetchUsers} from '../redux/actions';

const UserContainer = ({userData, fetchUsers}) => {
  //   const userData = useSelector((state) => state.users);
  //   const dispatch = useDispatch();

  useEffect(() => {
    console.log('hhhhhhhhhhhhhhhhhhhhhhh');
    dispatch(fetchUsers());
  }, []);

  return userData.loading ? (
    <Text> LOADING </Text>
  ) : userData.error ? (
    <Text> {userData.error} </Text>
  ) : (
    <View>
      <Text> USER LISTS </Text>
      <View>
        {userData &&
          userData.users &&
          userData.users.map((user) => <Text>{user.name}</Text>)}
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
