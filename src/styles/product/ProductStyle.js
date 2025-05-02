export const styles = {
    pageContainer: {
      width: '100%',
      padding: '20px'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    },
    productCardWrapper: {
      marginBottom: '30px',
      border: '1px solid #eee'
    },
    productCard: {
      relative: true,
      padding: '0',
      margin: '0'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#f5f0e5',
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    productImage: {
      maxWidth: '80%',
      maxHeight: '80%',
      objectFit: 'contain'
    },
    stockButton: {
      position: 'absolute',
      top: '8px',
      right: '8px'
    },
    productInfo: {
      marginTop: '8px'
    },
    productName: {
      marginBottom: '4px'
    },
    priceContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    discountText: {
      color: '#ec4899',
      fontWeight: '500',
      marginRight: '4px'
    },
    priceText: {
      fontWeight: 'bold'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '4px',
      fontSize: '12px',
      color: '#4b5563'
    },
    reviewsText: {
      marginLeft: '4px'
    }
  };