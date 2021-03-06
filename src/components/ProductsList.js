import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd';

const ProductsList = ({ children }) => (
  <div className="products-list">
    <Row gutter={16}>
      {children}
    </Row>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}

export default ProductsList
