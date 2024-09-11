
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.button`
  ${tw`text-22 font-display font-semibold`}
`

function Home() {

    console.log("Home component rendered"); // 디버깅용 로그

  return (
    <div>
        <h1 tw="text-main">Hello, Twin.macro!</h1>
        <Button>Styled Button with Tailwind</Button>
        <span>Home</span>
    </div>
  )
}

export default Home