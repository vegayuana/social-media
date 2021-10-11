const styles = (theme) => ({
  header:{
    '& .navbar .container ':{
      justifyContent: 'flex-end',
      ['@media (min-width:768px)']: {
        justifyContent: 'space-between',
      }
    },
    '& .navbar-brand':{
      display: 'none',
      ['@media (min-width:768px)']: {
        display: 'block',
      }
    },
    '& .navbar .nav-item.dropdown > a':{
      color:theme.colors.fontDark,
    },
    '& .navbar-collapse':{
      flexGrow: 'inherit'
    },
    '& .navbar-nav .dropdown-menu':{
      left: '-25px'
    }
  }
});

export default styles;
