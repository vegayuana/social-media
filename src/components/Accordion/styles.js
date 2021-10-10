const styles = (theme) => ({
  wrapper:{
    '& .shadow-sm':{
      borderRadius: '5px !important',
      border: `1px solid ${theme.colors.grey}`
    }
  },
  info:{
    display: 'grid',
    gridTemplateColumns: 'auto 180px',
    '& .actions':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
    },
    '& .expand':{
      cursor: 'pointer',
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
  form:{
    marginLeft: 50,
  },
  commentWrapper:{
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: 5,
    marginLeft: 50,
    marginBottom: 30,
    padding: '20px 50px',
  },
  comments:{
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
