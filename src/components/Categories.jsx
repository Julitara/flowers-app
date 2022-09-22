import React from 'react';

function Categories({value, onChangeCategory}) {
const categories = ['Все', 'Розы', 'Лилии', 'Тюльпаны', 'Пионы', 'Ромашки'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;