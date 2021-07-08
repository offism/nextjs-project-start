import {useRouter} from 'next/router'
import Container from '../container.js'
export default function Category(){
	const Router = useRouter()
	const {id , category} = Router.query

	return (
        <>
          <Container>
             <h1> {id + "|" + category}</h1>
          </Container>
        < />
		)
}