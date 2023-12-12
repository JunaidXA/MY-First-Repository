import React from 'react';
import CategoryItem from '../Category-Item/CategoryItem';
import './DirctoryComponent.scss';

const DirectoryComponent = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}
export default DirectoryComponent
