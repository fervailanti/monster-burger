import React, { useEffect, useState  } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import classes from './Orders.module.css'
import Loader from '../../components/Loader/Loader'
import WithError from '../../hoc/WithError'
import EmptyState from '../../components/EmptyState/EmptyState'

const Orders = () => {

  const [ordersList, setOrdersList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        setOrdersList(fetchedOrders)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const orders = {
    success: (
      <div className={classes.OrdersContainer}>
        <h2>Tus últimos pedidos:</h2>
        <div className={classes.Orders}>
          {ordersList.length > 0 ? ordersList.map(order => <Order
            key={order.id}
            ingredients={order.ingredients}
            details={order.orderData}
            price={order.price}
          />) : <EmptyState text='¡Ups! Parece que aún no has hecho ningún pedido'/>}
        </div>
      </div>
    ),
    loading: (
      <Loader />
    )
  }

  return loading ? orders.loading : <WithError error={error}>
    {orders.success}
  </WithError>
}

export default Orders