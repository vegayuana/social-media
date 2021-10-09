const styles = (theme) => ({
  header:{
    '& .navbar .container ':{
      justifyContent: 'flex-end'
    },
    '& .navbar .nav-item.dropdown > a':{
      color:theme.colors.fontDark,
    },
    '& .navbar-collapse':{
      flexGrow: 'inherit'
    },
    '& .navbar-nav .dropdown-menu':{
      left: '-100px'
    }
  }
});

export default styles;
