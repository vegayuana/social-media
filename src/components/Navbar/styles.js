const styles = (theme) => ({
  header:{
    '& .navbar .navbar-brand, ':{
      color: 'white'
    },
    '& .navbar .nav-item.dropdown > a':{
      color: 'white',
    },
    '& .navbar-collapse':{
      flexGrow: 'inherit'
    }
  }
});

export default styles;
