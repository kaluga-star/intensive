import React from 'react';
import Logo from '../assets/sputnik.webp';
import O3 from '../assets/O3.jpg';


const Lesson01 = () => {
  return (
    <div className='Lesson'>
      <div className='Logo'><h2>Обратный отсчет. Три.</h2><img src={Logo} alt="Спутник" /></div>
  <p>Просмотрите видеоролик по работе в Скретч.</p> <br />
  <a href="https://disk.yandex.ru/i/lVkAYo-WVbq_vw"  target="_blank" rel="noopener noreferrer"><img src={O3} alt="Заняти 1" /></a>  <br />  

<p>Создайте похожий коллаж. Установить фон, добавить космические объекты
(спрайты). Выберите объект(спрайт), которым вы будете управлять. Пропишите
код по аналогии в видеоролике на спрайт которым вы хотите управлять.</p>

   
    </div>
  );
};

export default Lesson01;