const styles = () => ({
  wrapper:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  },
  imageContainer:{
    position: 'relative',
    cursor: 'pointer',
    '& .thumbnail':{
      marginBottom: 10,
    },
    '& .info':{
      position: 'absolute',
      top: 0,
      width: 150,
      height: 150,
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      transition: '.5s ease',
      opacity: '0',
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
