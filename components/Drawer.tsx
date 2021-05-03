import { css } from '@emotion/css'
import { Transition } from 'react-transition-group'

const defaultStyle = {
  transition: `transform 300ms ease-in-out`,
  transform: `translateX(100%)`,
}

const transitionStyles = {
  entering: { transform: `translateX(0%)` },
  entered: { transform: `translateX(0%)` },
  exiting: { transform: `translateX(100%)` },
  exited: { transform: `translateX(100%)` },
}

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
const Drawer: React.FC<Props> = ({ open, onClose, className, children }) => (
  <Transition in={open} timeout={300}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        className={css`
          ${className};
          height: 100%;
          padding: 32px 0 32px 32px;
        `}
      >
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
      </div>
    )}
  </Transition>
)

export default Drawer
