const styles = () => ({
  page:{
    marginLeft: 25,
    marginBottom: 25,
    ['@media (min-width:768px)']: {
      marginLeft: 0,
      marginBottom: 0,
    },
    '& h1':{
      fontSize: '1.5em',
      marginBottom: 20,
    }
  },
  userInfo:{
    textAlign: 'center'
  }
});

export default styles;
