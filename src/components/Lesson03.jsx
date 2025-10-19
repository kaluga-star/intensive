import React from 'react';
import Logo from '../assets/sputnik.webp';
import O1 from '../assets/O1.jpg';


const Lesson03 = () => {
  return (
    <div className='Lesson'>
      <div className='Logo'><h2>Обратный отсчет. Один.</h2><img src={Logo} alt="Спутник" /></div>
  <p>Продолжаем работу над нашим проектом. Задание - просмотреть видео ,</p> <br />
  <a href="https://disk.yandex.ru/i/E7bODCmP8jdyBw"  target="_blank" rel="noopener noreferrer"><img src={O1} alt="Заняти 3" /></a>  <br />  

<p>написать код, чтобы при пересечении с некоторыми объектами задавались
вопросы, пользователь отвечал на них и программа подсчитывала очки.
Продумать концовку вашей викторины (например по счетчику посещенных
объектов). Сделать конечную заставку где выводилась бы сумма набранных очков.
</p>

   
    </div>
  );
};

export default Lesson03;