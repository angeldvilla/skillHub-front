import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from '@material-tailwind/react'
import { CreditCardIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export function Suscription({ user, subscriptionMessage, expirationDate }) {
  const planDescription =
    subscriptionMessage === 'Plan BRONCE'
      ? 'Disfruta de la posibilidad de publicar hasta 2 servicios en tu cuenta.'
      : subscriptionMessage === 'Plan ORO'
        ? 'Acceso completo a todas las funciones de nuestra plataforma, con un limite de publicar hasta 15 servicios en tu cuenta.'
        : subscriptionMessage === 'Plan PLATINO'
          ? 'Acceso completo a todas las funciones de nuestra plataforma sin restricciones ni limites para publicar servicios en tu cuenta.'
          : 'No tienes un plan de suscripción activo. Si deseas continuar disfrutando de nuestros servicios premium, te invitamos a considerar la renovación de tu suscripción.'

  return (
    <Card className="mt-6 w-96 mb-32 bg-gray-300">
      <CardBody>
        <CreditCardIcon className="w-20 h-auto text-black mb-7" />
        <Typography className="mb-2" color="blue-gray" variant="h3">
          {subscriptionMessage}
        </Typography>
        <Typography>Vence: {expirationDate}</Typography>
        <Typography className="mt-12 mb-6" color="blue-gray" variant="h6">
          {planDescription}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a
          className="inline-block"
          href={`/user-panel/${user?.uid}/memberShip`}
        >
          <Button className="flex items-center gap-2" size="sm" variant="text">
            Ver Suscripción
            <ArrowRightIcon />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
