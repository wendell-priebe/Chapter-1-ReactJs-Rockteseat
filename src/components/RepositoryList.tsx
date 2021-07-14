import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react'
import '../styles/repositories.scss'

interface Repository{
    name:string;
    description:string;
    html_url:string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([])
  const urlRepositories = 'https://api.github.com/users/wendell-priebe/repos'

  useEffect(() => {
    fetch(urlRepositories)
      .then(response => response.json())
      .then(data => setRepositories(data))
      //.then(data => console.log(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository= {repository} />
        })}


      </ul>
    </section>
  );
}