import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  postImage: {
    width: '100%',
    borderRadius: 15,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: 27,
  },
  userPostStatText: {
    marginLeft: 3,
    color: '#79869F',
  },
});

export default style;
