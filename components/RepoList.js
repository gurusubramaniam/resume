const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo, index) => (
        <li key={`repo${index}`}>
          <a href={repo.html_url} target="_blank" key={`repo ${index}`}>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
