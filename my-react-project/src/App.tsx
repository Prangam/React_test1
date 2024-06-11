import React, { useState } from 'react';
import { Layout, Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [buttons, setButtons] = useState([4, 5, 6, 7, 8, 9]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const swapClockwise = () => {
    const newButtons = [buttons[5], buttons[0], buttons[1], buttons[2], buttons[3], buttons[4]];
    setButtons(newButtons);
  };

  const swapCounterClockwise = () => {
    const newButtons = [buttons[1], buttons[2], buttons[3], buttons[4], buttons[5], buttons[0]];
    setButtons(newButtons);
  };

  const swapLayout = () => {
    const newButtons = [buttons[3], buttons[4], buttons[5], buttons[0], buttons[1], buttons[2]];
    setButtons(newButtons);
  };

  const shuffle = () => {
    const shuffledButtons = buttons.sort(() => Math.random() - 0.5);
    setButtons([...shuffledButtons]);
  };

  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage('en')}>
        EN
      </Menu.Item>
      <Menu.Item key="th" onClick={() => changeLanguage('th')}>
        TH
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh', background: 'linear-gradient(to right, #6eda78, #ffa200)' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to right, #6eda78, #ffa200)' }}>
        <h1 style={{ color: 'black' }}>{t('Layout & Style')}</h1>
        <Dropdown overlay={menu}>
          <Button>
            {i18n.language.toUpperCase()} <DownOutlined />
          </Button>
        </Dropdown>
      </Header>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className="button-container">
          <Button className="custom-button button-1" onClick={swapClockwise} data-text={t('Move Shape')}><span>{t('Move Shape')}</span></Button>
          <Button className="custom-button button-2" onClick={swapLayout} data-text={t('Move Position')}><span>{t('Move Position')}</span></Button>
          <Button className="custom-button button-3" onClick={swapCounterClockwise} data-text={t('Move Shape')}><span>{t('Move Shape')}</span></Button>
          
          {buttons.map((button, index) => (
            <Button key={index} className={`custom-button button-${button}`} onClick={shuffle} />
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default App;
