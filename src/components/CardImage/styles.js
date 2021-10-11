const styles = () => ({
  wrapper:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    ['@media (min-width:768px)']: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    ['@media (min-width:1300px)']: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    }
  },
  imageContainer:{
    position: 'relative',
    cursor: 'pointer',
    width: 100,
    height: 100,
    marginBottom: 10,
    ['@media (min-width:768px)']: {
      width: 150,
      height: 150,
    },
    '& .thumbnail':{
      width: '100%',
    },
    '& .info':{
      position: 'absolute',
      top: 0,
      width: 100,
      height: 100,
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      transition: '.5s ease',
      opacity: '0',
      ['@media (min-width:768px)']: {
        width: 150,
        height: 150,
      },
      '& .text':{
        maxWidth: 120,
        maxHeight: 120,
        overflowY: 'auto',
        margin: 'auto',
        textAlign: 'center',
        wordBreak: 'break-word',
      },
      '& p':{
        margin: 0,
      }
    },
    '&:hover':{
      '& .thumbnail':{
        opacity: '0.3'
      },
      '& .info':{
        opacity: '1'
      }
    }
  }
});

export default styles;
