export default function TodoList() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  const name = 'George Waluke';

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-us', { weekday: 'long' });
  };
  return (
    <>
      <h1>{name} To Do List</h1>
      <img src={avatar} alt={description} className="avatar" />
    </>
  );
}
