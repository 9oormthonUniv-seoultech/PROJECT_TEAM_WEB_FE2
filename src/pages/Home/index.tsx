
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.button`
  ${tw`text-red-400`}
`

function Home() {

    console.log("Home component rendered"); // 디버깅용 로그

  return (
    <div>
        <h1 tw="text-red-400">Hello, Twin.macro!</h1>
        <Button>Styled Button with Tailwind</Button>
        <span>Home</span>
    </div>
  )
}

export default Home