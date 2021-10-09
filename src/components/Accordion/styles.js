const styles = (theme) => ({
  wrapper:{
    '& .shadow-sm':{
      borderRadius: '5px !important',
      border: `1px solid ${theme.colors.grey}`
    }
  },
  comments:{
    marginLeft: 50,
    '& .user':{
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& .email':{
      color: 'darkgrey'
    }
  }
});

export default styles;
