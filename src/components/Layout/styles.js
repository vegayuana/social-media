const styles = (theme) => ({
  layout:{
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: theme.colors.dark,
    '& .sidebar':{
      width: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 200,
      '& p':{
        color: 'white'
      }
    },
    '& .page':{
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      padding: '20px 20px 40px 30px',
      width: '100%',
      backgroundColor: 'white'
    },
    '& .list-menu':{
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 5,
      color: theme.colors.dark,
      fontSize: 25,
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  },
});

export default styles;
