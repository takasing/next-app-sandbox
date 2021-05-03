import { css } from '@emotion/css'
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
/**
 * Drawerコンポーネント
 * Drawer内のbackground color, font color(border-color)を指定したい場合はclassNameに指定すると継承される
 * @param param0
 * @returns
 */
const Drawer: React.FC<Props> = ({ open, onClose, className, children }) => {
  // styledでpropsを受け取る
  const DrawerRoot = styled.div<{ state: TransitionStatus }>(
    ({ state }) => `
    height: 100%;
    padding: 32px 0 32px 32px;
    transition: 300ms ease-in-out;
    transform: translateX(
        ${state === 'entering' || state === 'entered' ? '0%' : '100%'}
    );
    box-shadow: 
      ${
        state === 'entering' || state === 'entered' || state === 'exiting'
          ? SHADOW
          : 'none'
      };
    ${className};
  `
  )
  return (
    <Transition in={open} timeout={300}>
      {(state) => (
        <DrawerRoot state={state}>
          <div
            className={css`
              display: flex;
              flex-direction: row-reverse;
              margin-right: 24px;
            `}
            onClick={onClose}
          >
            <div
              className={css`
                cursor: pointer;
                border-bottom: 1px solid;
              `}
            >
              close
            </div>
          </div>
          {children}
        </DrawerRoot>
      )}
    </Transition>
  )
}

export default Drawer
