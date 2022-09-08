export async function getRepo(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const commits = await response.json();  
    return commits;
}
