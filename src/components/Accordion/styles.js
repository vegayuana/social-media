const styles = (theme) => ({
  wrapper:{
    '& .shadow-sm':{
      borderRadius: '5px !important',
      border: `1px solid ${theme.colors.grey}`
    }
  },
  info:{
    display: 'grid',
    gridTemplateColumns: 'auto 25px',
    ['@media (min-width:768px)']: {
      gridTemplateColumns: 'auto 180px',
    },
    '& .actions':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
    },
    '& .expand':{
      cursor: 'pointer',
      display: 'flex',
      '& span':{
        display: 'none',
        ['@media (min-width:768px)']: {
          display: 'block',
          marginRight: 8,
        },
      },
      '&  svg':{
        fontSize: 22,
        color: theme.colors.dark,
      }
    },
    '& .tools':{
      fontSize: 25,
      '& svg':{
        cursor: 'pointer'
      },
      '& svg.add':{
        color: theme.colors.blue,
        marginRight: 5
      },
      '& svg.edit':{
        color: theme.colors.green,
        marginRight: 5
      },
      '& svg.delete':{
        color: theme.colors.red,
      }
    }
  },
  childInfo:{
    display: 'grid',
    gridTemplateColumns: 'auto 60px',
    ['@media (min-width:1300px)']: {
      gridTemplateColumns: 'auto 100px',
    },
    '& .actions':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
    },
    '& .tools':{
      fontSize: 25,
      '& svg':{
        cursor: 'pointer'
      },
      '& svg.edit':{
        color: theme.colors.green,
        marginRight: 5
      },
      '& svg.delete':{
        color: theme.colors.red,
      }
    }
  },
  form:{
    marginLeft: 50,
  },
  commentWrapper:{
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 30,
    padding: 15,
    ['@media (min-width:768px)']: {
      marginLeft: 50,
      padding: '20px 30px 20px 50px',
    },
    ['@media (min-width:1300px)']: {
      padding: '20px 30px 20px 50px',
    },
  },
  comments:{
    paddingBottom: 20,
    '&:not(:last-child) ':{
      borderBottom: `1px solid ${theme.colors.grey}`,
      marginBottom: 20,
    },
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
