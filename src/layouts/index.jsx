import { Layout, Menu } from 'antd'
import Link from 'umi/link'

const { Header, Content, Footer } = Layout

export default function({ children }) {
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{height:'50px'}}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="vm">
            <Link to="/vm">VM</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        ZStack CMP Test Demo @ 2020
      </Footer>
    </Layout>
  )
}
