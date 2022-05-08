import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 284,
    height: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#1F1300',
    marginBottom: 100,
  },
  textInput: {
    borderRadius: 20,
    borderColor: '#CC5803',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    marginBottom: 8,
    paddingLeft: 20,
  },
  loginBox: {
    flex: 1,
    marginTop: -250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    fontSize: 28,
    color: '#CC5803',
    fontWeight: 'bold',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeaderText: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#1F1300',
    fontWeight: 'bold',
  },
  booksContainer: {
    flex: 1,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookDetailContainer: {
    color: '#1F1300',
    flex: 1,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
