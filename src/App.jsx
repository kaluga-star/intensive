import React, { useState, useEffect } from 'react';
import Lesson00 from './components/Lesson00';
import Lesson01 from './components/Lesson01';
import Lesson02 from './components/Lesson02';
import Lesson03 from './components/Lesson03';
import Lesson04 from './components/Lesson04';
import './App.css';

// Массив с компонентами уроков
const blocks = [
<Lesson00 />,
<Lesson01 />,
<Lesson02 />,
<Lesson03 />,
<Lesson04 />
];

// Массив с датами, соответствующими каждому блоку
const lessonDates = [
new Date('2025-10-16T00:00:00'), // Дата для Lesson00
new Date('2025-10-17T00:00:00'), // Дата для Lesson01
new Date('2025-10-18T00:00:00'), // Дата для Lesson02
new Date('2025-10-19T00:00:00'), // Дата для Lesson03
new Date('2025-10-19T00:00:00')  // Дата для Lesson04
];

function App() {
const [currentBlock, setCurrentBlock] = useState(0);

useEffect(() => {
const today = new Date();
today.setHours(0, 0, 0, 0);

const availableBlock = lessonDates.findIndex(date => today >= date);
setCurrentBlock(availableBlock === -1 ? 0 : availableBlock);
}, []);

const handleNextBlock = () => {
if (currentBlock < blocks.length - 1) {
const nextBlockDate = lessonDates[currentBlock + 1];
const today = new Date();
today.setHours(0, 0, 0, 0); // Убедимся, что мы сравниваем только даты

if (today >= nextBlockDate) {
setCurrentBlock(currentBlock + 1);
}
}
};

return (
<div>
<h1>Космическая одиссея</h1>
<h2>Интенсив по знакомству с средой разработки Скретч (возраст 9 -12 лет, уровень - начинаюшие изучение языков программирования)</h2>
<div className="div">
<h3>Используемые цифровые ресурсы:</h3>
<ol className="myLi">
<li><p>Связка яндекс диск, яндекс формы, яндекс дзен - для хранения и просмотра цифровых материалов. Проведение анкетирования. (Возможная альтернатива google drive, google формы, youtube.</p>

</li>
<li>
Zoom - проведение и запись видеоконференций. Создание видеоуроков. (альтернатива Сферум, Яндекс. Телемост)
</li>
<li>
Quizizz (Альтернатива Kahoot)- проведение тестирования в игровой форме. Можно использовать как готовые викторины, так и создавать самостоятельно тестовые программы.
</li>
<li>
Padwork - визуализация работ детей, совместная работ учащихся, представление своих проектов, оценка их.
</li>
<li>
Телеграмм (альтернатива Max) - для создания общей группы учащихся, обсуждения заданий, ответы на вопросы, решение организационных моментов
</li>
<li>
 Исходник данного сайта выполненый на React <br /><a href="https://github.com/kaluga-star/intensive.git"> Нажми чтобы перейти на исходник</a>   
</li>
</ol>
</div>
<div className="div">
{blocks.map((block, index) => (
<div key={index} style={{ margin: '10px 0', fontWeight: index <= currentBlock ? 'bold' : 'normal', color: index <= currentBlock ? 'white' : 'gray' }}>
{index <= currentBlock ? block : <span>Доступно с {lessonDates[index].toLocaleDateString()}</span>}
</div>
))}
</div>

{currentBlock < blocks.length - 1 && (
<button
onClick={handleNextBlock}
className="button"
disabled={new Date() < lessonDates[currentBlock + 1]} // Деактивация кнопки, если не настала дата следующего блока
>
Перейти к следующему блоку
</button>
)}
</div>
);
}

export default App;
