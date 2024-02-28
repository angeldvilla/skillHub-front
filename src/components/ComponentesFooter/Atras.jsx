import { FiCornerUpLeft } from 'react-icons/fi'

import funcionAtras from './utils/functionAtras'
function Atras() {
  return (
    <div>
      <button className="functionAtras" onClick={funcionAtras}>
        <FiCornerUpLeft />{' '}
      </button>
    </div>
  )
}

export default Atras
