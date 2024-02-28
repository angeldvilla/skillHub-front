import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Typography } from '@material-tailwind/react'

import { TABLE_PAYMENT_HEAD } from '../../../utils/dashboard'
import Loader from '../../Loader/Loader'

function Payments() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const getPayments = async () => {
      try {
        const { data } = await axios(
          'https://skillhub-back-production.up.railway.app/payment/'
        )

        setPayments(data)
      } catch (error) {
        console.error('Error al obtener los pagos:', error)
      }
    }

    getPayments()
  }, [])

  return payments.length === 0 ? (
    <Loader />
  ) : (
    <>
      <h2 className="text-4xl mb-5 font-semibold font-mono italic">
        Lista de Pagos
      </h2>
      <Card className="flex-1 overflow-scroll">
        <table className="w-20 ml-2 min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_PAYMENT_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-white bg-gray-900 p-5"
                >
                  <Typography
                    className="font-semibold text-white"
                    color="blue-gray"
                    variant="small"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="even:bg-blue-gray-100">
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment._id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.plan}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.price}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.user}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.state}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.compra_Id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {payment.subscription ? 'Sí' : 'No'}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    className="font-normal"
                    color="blue-gray"
                    variant="small"
                  >
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}

export default Payments
