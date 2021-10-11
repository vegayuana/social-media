const styles = (theme) => ({
  layout:{
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: theme.colors.dark,
    '& .sidebar':{
      minWidth: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 200,
      '& p':{
        color: 'white'
      },
      ['@media (min-width:768px)']: {
        minWidth: 100,
      },
      ['@media (min-width:1300px)']: {
        minWidth: 150,
      }
    },
    '& .page':{
      borderTopLeftRadius: 50,
      borderBottomLeftRadius: 50,
      width: '100%',
      backgroundColor: 'white',
      ['@media (min-width:768px)']: {
        padding: '20px 20px 40px 30px',
      },
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
    },
    '& h1':{
      fontSize: '2em'
    },
    '& h2':{
      fontSize: '1.5em'
    },
    '& h3':{
      fontSize: '1.25em'
    },
    '& h4':{
      fontSize: '1em'
    },
    '& h5':{
      fontSize: '8em'
    },
    '& p':{
      margin: 0
    },
    '& pre':{
      fontFamily: 'inherit',
      fontSize: '0.9em'
    },
    '& a':{
      textDecoration: 'none',
      color: 'inherit'
    }
  },
});

export default styles;
