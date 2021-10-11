const styles = (theme) => ({
  wrapper:{
    maxWidth: '100%',
    '& .shadow-sm':{
      borderRadius: '5px !important',
      border: `1px solid ${theme.colors.grey}`
    },
  }
});

export default styles;
