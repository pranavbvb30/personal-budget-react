import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/Loginpage';
import { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import HomePage from './Homepage/Homepage';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Chart1 from './Chart1/Chart1';
import Chart2 from './Chart2/Chart2';


import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js/auto';


Chart.register(ArcElement, Tooltip, Legend);

const baseUrl = "http://localhost:3000/budget"

function App() {
  const [dataSource, setDataSource] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF00F4',
          '#FF9E00',
          '#C3A068',
          '#A7C368',
          '#68C393',
          '#00D8FF',
          '#AE00FF',
        ],
      }
    ],

    labels: []
  })

  const [dataSourceNew, setDataSourceNew] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}`)
      .then((res) => {
        setDataSourceNew(res.data.myBudget);
        setDataSource(
          {
            datasets: [
              {
                data: res.data.myBudget.map((v) => v.budget),
                backgroundColor: [
                    '#FF00F4',
                    '#FF9E00',
                    '#C3A068',
                    '#A7C368',
                    '#68C393',
                    '#00D8FF',
                    '#AE00FF',
                ],
              }
            ],

            labels: res.data.myBudget.map((v) => v.title)
          }
        )
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
      <center>
        <Chart2 chartData={dataSource} />
        <Chart1 dataSource={dataSourceNew} />
      </center>
      <Footer />
    </Router>

  );
}

export default App;