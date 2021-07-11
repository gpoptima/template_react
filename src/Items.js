import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '#',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


function Items(props)
{

  return(
    <List
    style={{overflow:'auto',height:'75vh'}}
    itemLayout='vertical'
    size='large'
    dataSource={listData}
    footer={
      <div>
        Footer
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <Space><StarOutlined/>156</Space>,
          <Space><LikeOutlined/>32</Space>,
          <Space><MessageOutlined/>1</Space>
        ]}
        extra={
          <img
            width={272}
            alt='logo'
            src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />)
}

export default Items