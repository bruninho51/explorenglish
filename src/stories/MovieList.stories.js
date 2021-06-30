import React from 'react';

import { MovieList } from '../widgets/MovieList'

const configuration = {
  title: 'Example/MovieList',
  component: MovieList
};

export default configuration

const Template = (args) => <MovieList {...args} />

export const Movies = Template.bind({});
Movies.args = {
  movies: [{
    title: "As Aventuras de Timtim Arroz com Feijão e Tapioca",
    imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71ydFW-qgQL.jpg",
    imageAlt: "A Cabana",
    onRemove: () => alert('Remover'),
    onStudy: () => alert('Estudar')
  }]
};