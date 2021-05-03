import styled from '@emotion/styled'
import Nextjs from '../components/icons/nextjs.svg'
export const Header = () => {
  return (
    <StyledHeader>
      <Nextjs />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 16px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 118, 255, 0.9);
`
