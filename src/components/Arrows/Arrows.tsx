import React from 'react';

// Кастомная стрелка вперед
const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'orange', // Уберите фон
        overflow:'hidden',
        color: 'orange', // Задайте цвет текста
      }}
      onClick={onClick}
    >
      Вперед
    </div>
  );
};

// Кастомная стрелка назад
const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'orange',
        overflow:'hidden', // Уберите фон
        color: 'orange', // Задайте цвет текста
      }}
      onClick={onClick}
    >
      Назад
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
