function ProductCard({product}) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px'
      }}>
        {product.emoji}
      </div>
      <h3 style={{margin: '8px 0', fontSize: '16px'}}>{product.name}</h3>
      <p style={{margin: '8px 0', fontWeight: 'bold', color: '#ff6b9d'}}>
        {product.price.toLocaleString()}원
      </p>
    </div>
  )
}

export default ProductCard;