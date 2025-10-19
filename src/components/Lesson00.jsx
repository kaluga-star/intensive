import React from 'react';
import Logo from '../assets/sputnik.webp';


const Lesson00 = () => {
  return (
    <div className='Lesson'>
      <div className='Logo'><h2>Подготовка к старту</h2><img src={Logo} alt="Спутник" /></div>
      
      <h3>Информация по интенсиву - мероприятие для начинающих 9-12 лет,
познакомимся с средой программирования Scratch, а в качестве практики
сделаем небольшую викторину в форме квеста на космическую тематику</h3>
<p>💻<a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Создать учетную запись на сайте</a></p>
<p>🛟<a href="https://disk.yandex.ru/i/EYAIOobAQHlZ3Q" target="_blank" rel="noopener noreferrer">Памятка по регистрации</a></p>
<p>Если самому не получается, напишите мне, я пришлю вам данные для входа.</p>
<p>Скачать по ссылке 🛟<a href="https://disk.yandex.ru/d/8vx7eMt2CU_kaQ" target="_blank" rel="noopener noreferrer">https://disk.yandex.ru/d/8vx7eMt2CU_kaQ</a>  архив с заготовками
для викторины. Перед использованием разархивируйте архив.</p>
<p>Можно скачать отдельные картинки по ссылке 🛟<a href="https://disk.yandex.ru/d/WNnYjkbyKIs7MA" target="_blank" rel="noopener noreferrer">https://disk.yandex.ru/d/WNnYjkbyKIs7MA</a> </p>
<p>Пожалуйста, заполните небольшую форму, чтобы подтвердить свое участие в
проекте, там же найдете ссылку для вступления в группу Телеграмм. <a href="https://forms.yandex.ru/cloud/62ff2dbade426b5b0f8a7cbe/" target="_blank" rel="noopener noreferrer">https://forms.yandex.ru/cloud/62ff2dbade426b5b0f8a7cbe/</a>
</p>
   
    </div>
  );
};

export default Lesson00;