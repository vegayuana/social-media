const styles = (theme) => ({
  layout:{
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: theme.colors.grey,
    '& .sidebar':{
      width: 200,
    },
    '& .page':{
      borderRadius: 20,
      width: '100%',
      margin: 15,
      backgroundColor: 'white'
    }
  },
});

export default styles;
