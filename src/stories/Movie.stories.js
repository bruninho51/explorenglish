import React from 'react';

import { Movie } from '../widgets/Movie'

const configuration = {
  title: 'Example/Movie',
  component: Movie
};

export default configuration

const Template = (args) => <Movie {...args} />

export const Movies = Template.bind({});
Movies.args = {
    title: "As Aventuras de Timtim Arroz com Feijão e Tapioca",
    imageSrc: "https://images-na.ssl-images-amazon.com/images/I/71ydFW-qgQL.jpg",
    imageAlt: "A Cabana",
    onRemove: () => alert('Remover'),
    onStudy: () => alert('Estudar')
};