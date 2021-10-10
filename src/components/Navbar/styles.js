const styles = (theme) => ({
  header:{
    '& .navbar .container ':{
      justifyContent: 'space-between'
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
