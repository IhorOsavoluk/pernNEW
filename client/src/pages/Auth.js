import React from 'react'
import { Button, Card, Container,Form, FormControl, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

export default function Auth() {
  const location =  useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
    
    <Card style={{width:600, height:300}} className='p-5'>
      <h2 className='m-auto'> {isLogin ? 'Авторизациия' : 'Регистрация'}</h2>
      
      <Form className='d-flex flex-column'> 
      
      <FormControl className='mt-3' placeholder='Введите ваш email'></FormControl>
      <FormControl className='mt-3' placeholder='Введите ваш password'></FormControl>
      <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
        {isLogin ? <div> Нет Аккаунта?  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
        </div>
        :
        <div>
          Есть аккаунт?  <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
        </div>
        }
        <Button className=''>
        {isLogin ?  'Войти' : 'Регистрация'}
        </Button>
       </Row>
      
      
      </Form>
      
      </Card>
    
    
    
    
    </Container>
  )
}
