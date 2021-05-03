import { css } from '@emotion/css'
import Image from 'next/image'
export const Header = () => {
  return (
    <header
      className={css`
        width: 100%;
        padding: 16px 0;
        text-align: center;
        border-bottom: 1px solid rgba(0, 118, 255, 0.9);
      `}
    >
      <Image src="/nextjs.svg" alt="Next.js Logo" height={'32'} width={'64'} />
    </header>
  )
}
