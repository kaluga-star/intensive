import React from 'react';
import Logo from '../assets/sputnik.webp';
import O2 from '../assets/O2.jpg';


const Lesson02 = () => {
  return (
    <div className='Lesson'>
      <div className='Logo'><h2>Обратный отсчет. Два.</h2><img src={Logo} alt="Спутник" /></div>
  <p>Просмотрите видеоролик.</p> <br />
  <a href="https://disk.yandex.ru/i/yXNwDpkovqUlFw"  target="_blank" rel="noopener noreferrer"><img src={O2} alt="Заняти 2" /></a>  <br />  

<p>Выполните следующие задания: 1 - повесить на объекты скрипты для их
движения, 2 - прописать код для взаимодействия объектов, 3- создать
переменную и запрограммировать действия с ней (счетчик).
Проверьте свои знания. ❓<a href="https://quizizz.com/join/quiz/63ec78e2888d09001e884a11/start?studentShare=true"  target="_blank" rel="noopener noreferrer">Пройдите небольшой тест</a>
</p>

   
    </div>
  );
};

export default Lesson02;