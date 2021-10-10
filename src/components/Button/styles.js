const button = {
  border: 'none',
  color: 'white',
  minWidth: 50,
  minHeight: 50,
};
const styles = (theme) => ({
  square:{
    '& button':{
      ...button,
      backgroundColor: theme.colors.dark,
      boxShadow: `1px 0.125em 0.25em ${theme.colors.grey}`,
      borderRadius: 20,
      minWidth: 100
    }
  },
  round:{
    '& button':{
      ...button,
      backgroundColor: theme.colors.dark,
      boxShadow: `1px 0.125em 0.25em ${theme.colors.grey}`,
      borderRadius: '50%',
    }
  },
});

export default styles;
