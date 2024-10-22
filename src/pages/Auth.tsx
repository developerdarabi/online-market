import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useLazyLoginQuery, useLazyUserInfoQuery } from '../api/auth'
import { ReactComponent as LoginSvg } from '../assets/login.svg'
import { MaxWidth } from '../components/ui'
import userStore from '../stores/user'
import DocumentTitle from '../utils/DocumentTitle'

export default function AuthPage() {
  const [loginApi, { isFetching }] = useLazyLoginQuery()
  const [userInfoApi] = useLazyUserInfoQuery()

  const cookies = new Cookies();

  const { login } = userStore()

  const navigate = useNavigate()

  const onSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()
    await loginApi().unwrap().then(async (token) => {
      await userInfoApi().unwrap().then((info) => {
        cookies.set('token', token)
        login({ user: info, token })
        navigate('/')
      })
    })
  }

  return (
    <MaxWidth className='flex items-center justify-center md:p-8'>
      <DocumentTitle title='login' isAbsolute={true}/>
      <form onSubmit={onSubmitHandler} className='md:bg-slate-100 flex gap-8 items-start justify-center flex-col md:border md:shadow-md w-full md:w-2/3 rounded-md p-4'>
        <LoginSvg className='aspect-[16/9] max-w-[800px] m-auto' />
        <h1 className='md:text-3xl text-xl font-medium'>Login</h1>
        <input placeholder='Username' className='w-full md:p-4 p-2 md:text-xl rounded-md' />
        <input placeholder='Password' className='w-full md:p-4 p-2 md:text-xl rounded-md' />
        <button type='submit' disabled={isFetching} className='w-full md:p-4 p-2 text-xl bg-[#05678E] rounded-md text-white'>Login</button>
      </form>
    </MaxWidth>
  )
}
