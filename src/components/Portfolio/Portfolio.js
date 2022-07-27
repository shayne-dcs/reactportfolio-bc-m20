import React from 'react'
import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards'

const Portfolio = () => {
  let projects = [{
    title: 'Project 1',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"
  },
  {
    title: 'Project 2',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  },
  {
    title: 'Homework 1',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  },
  {
    title: 'Homework 2',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  },
  {
    title: 'Homework 3',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  },
  {
    title: 'Homework 4',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  },
  {
    title: 'Homework 5',
    github: 'https://github.com',
    heroku: 'https://dashboard.heroku.com',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi incidunt atque nesciunt temporibus ea et obcaecati, necessitatibus aut repudiandae sint adipisci sapiente autem perferendis facere laudantium eius enim nemo!"

  }
  ]


  return (
    <>
      <Grid container justifyContent="center">
        <h1>My Projects</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">

        {projects.map(project =>
          <Grid item>
            <Cards title={project.title} github={project.github} heroku={project.heroku} image={project.image} descript={project.descript}></Cards>
          </Grid>
        )}
      </Grid>

    </>
  );
}

export default Portfolio;