import React, { useEffect } from 'react'
import Order from '../../components/Order/Order'
import classes from './Orders.module.css'
import Loader from '../../components/Loader/Loader'
import WithError from '../../components/WithError/WithError'
import EmptyState from '../../components/EmptyState/EmptyState'
import { connect } from 'react-redux'
import { fetchOrders } from '../../store/actions/'
import { fixPrice } from '../../helpers/utility'

const Orders = props => {

  const { fetchOrders } = props

  useEffect(() => fetchOrders(), [fetchOrders])

  const renderOrders = {
    success: () => (
      <div className={classes.OrdersContainer}>
        <h2>Tus últimos pedidos:</h2>
        <div className={classes.Orders}>
          {props.orders.length > 0 ? props.orders.map((order, index) => <Order
            number={index+1}
            key={order.id}
            ingredients={order.ingredients}
            details={order.orderData}
            price={fixPrice(order.price)}
          />) : <EmptyState text='¡Ups! Parece que aún no has hecho ningún pedido'/>}
        </div>
      </div>
    ),
    loading: () => <Loader />
  }

  return <WithError error={props.error}>
    {props.loading ? renderOrders.loading() : renderOrders.success()}
  </WithError>
}

const mapStateToProps = state => ({
  orders: state.orders.ordersList,
  loading: state.orders.loading,
  error: state.orders.error
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)