import useUser from '../../core/hooks/useUser'
import { Main } from '../Dashboard/Components/Main'

export const Users = () => {
  const { sidebar } = useUser()

  return (
    <Main title={'Usuarios'} sidebar={sidebar}>
      Usuarios
    </Main>
  )
}
