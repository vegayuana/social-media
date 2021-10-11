const styles = () => ({
  wrapper: {
    maxWidth: 300,
    margin: 'auto',
    ['@media (min-width:768px)']: {
      maxWidth: 500,
    },
    ['@media (min-width:1300px)']: {
      maxWidth: 700,
    }
  },
  modal:{
    borderRadius: 10,
    '& .modal-header':{
      alignItems: 'flex-start'
    },
    '& .modal-title':{
      margin: 'auto'
    },
    '& button.close':{
      border: 'none',
      borderRadius: '50%',
      minWidth: '30px',
      minHeight: '30px',
    },
    '& .modal-body':{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 20px 30px',
      '& img':{
        width: '100%'
      }
    }
  }
});

export default styles;
