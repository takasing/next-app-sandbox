import styled from '@emotion/styled'
import { Transition, TransitionStatus } from 'react-transition-group'

const SHADOW = `0px 8px 10px -5px rgb(0 0 0 / 20%),
            0px 16px 24px 2px rgb(0 0 0 / 14%),
            0px 6px 30px 5px rgb(0 0 0 / 12%)`

type Props = {
  open: boolean
  onClose: () => void
  className?: string
}
const Drawer: React.FC<Props> = ({ open, onClose, className, children }) => {
  return (
    <Transition in={open} timeout={300}>
      {(state) => (
        <DrawerRoot state={state} className={className}>
          <DrawerControl onClick={onClose}>
            <DrawerButton>close</DrawerButton>
          </DrawerControl>
          {children}
        </DrawerRoot>
      )}
    </Transition>
  )
}

const DrawerRoot = styled.div<{ state: TransitionStatus }>(
  ({ state }) => `
    height: 100%;
    padding: 32px 0 32px 32px;
    transition: 0.3s ease-in-out;
    transform: translateX(
        ${state === 'entering' || state === 'entered' ? '0%' : '100%'}
    );
    box-shadow: 
      ${
        state === 'entering' || state === 'entered' || state === 'exiting'
          ? SHADOW
          : 'none'
      };
  `
)

const DrawerControl = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 24px;
`
const DrawerButton = styled.div`
  cursor: pointer;
  border-bottom: 1px solid;
`

export default Drawer
